import DBconnect from "@/lib/db";
import User from "@/lib/models/user";
import { passwordHash } from "@/components/utils";


export async function POST(request){
    const { email, password } = await request.json();
    await DBconnect();

    // ALREADY IN DB ?
    const existingUser = await User.findOne({email})
    if(existingUser){
        return Response.json({error:'Email already in use'},{status:500})
    }

    /// HASH THE PASS
    const hashedPass = await passwordHash(password);
    const newUser = new User({
        email,
        password:hashedPass 
    });

    try {
        await newUser.save();
        return Response.json({user: newUser},{status:200})
    } catch(err){
        return Response.json({error:'Something went wrong'},{status:500})
    }
}
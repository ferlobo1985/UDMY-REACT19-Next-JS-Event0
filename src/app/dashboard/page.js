import { options } from '@/api/auth/[...nextauth]/options'
import { getServerSession } from "next-auth"

export default async function DashboardPage(){
    const session = await getServerSession(options);
    //console.log(session)
    
    return <>DASHBOARD</>
}
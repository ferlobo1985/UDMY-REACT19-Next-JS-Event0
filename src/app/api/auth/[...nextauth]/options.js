import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{
                    label:"Email",
                    type:"email",
                    placeholder:"Enter your email"
                },
                password:{
                    label:"Password",
                    type:"password"
                }
            },
            async authorize(credentials){
                // go to DB to sign or register
                const user = {
                    id:98635,
                    email:'francis@gmail.com',
                    password:'testing123'
                }

                if( credentials?.email === user.email && credentials?.password === user.password){
                    /// EVERYTHING OK, MOVE FORWARD
                    return user
                } else {
                    /// RETURN NULL TO CANCEL
                    return null
                }

            }
        })
    ],
    theme:{
        colorScheme:'light',
        brandColor:"", /// HEX COLOR CODE
        logo:"", // ABLSOLUTE URL TO IMAGE
        buttonText:""// HEX COLOR CODE
    }
}
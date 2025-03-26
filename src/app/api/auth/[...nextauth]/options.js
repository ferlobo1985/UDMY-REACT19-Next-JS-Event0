import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import DBconnect from '@/lib/db';
import User from '@/lib/models/user';
import { passwordCheck } from '@/components/utils';


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
                // 1-  CONNECT
                await DBconnect();
                // 2- user exists, email correct ?
                const user = await User.findOne({email:credentials.email});
                if(!user){
                    return null
                }

                // 3- validate pass/
                const validPass = await passwordCheck(credentials.password,user.password);
                if(!validPass){
                    return null
                }
               
                return user;
            }
        })
    ],
    pages:{
        signIn:'/register'
    },
    theme:{
        colorScheme:'light',
        brandColor:"", /// HEX COLOR CODE
        logo:"", // ABLSOLUTE URL TO IMAGE
        buttonText:""// HEX COLOR CODE
    }
}
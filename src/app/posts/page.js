'use client'
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

export default function PostsPage(){
    const { data: session, status } = useSession({
        required:true,
        onUnauthenticated(){
            redirect('/api/auth/signin?callbackUrl=/posts')
        }
    });

    console.log(session)

    return (
        <>
            { status !== 'authenticated' ?
                <p>Not auth</p>
            :
                <p>POSTS !!!!</p>
            }
        </>
    )
}
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
    const { data: session } = useSession();
    if(session){
        return (
            <div>
                <p>Welcome, { session.user.name }</p>
                <button onClick={()=>signOut()}>Sign out</button>
            </div>
        )
    }else{
        return (
            <div>
                <p>You're not signed in. Sign in below.</p>
                <button onClick={()=>signIn()}>Sign in</button>
            </div>
        )
    }
}

export default login;

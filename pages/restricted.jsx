import React from 'react';
import {useSession, signOut} from "next-auth/react";

const restricted = () => {
    const { data: session, status } = useSession({required: true});

    if(status === 'authenticated'){
        return(
            <div>
                <p>Welcome to your account page { session.user.name }</p>
                <button onClick={()=>signOut()}>Sign out</button>
            </div>
        )

    }else{
        return (
            <div>
                <p>This page is restricted to logged in users</p>
            </div>
        )
    }
  
  
}

export default restricted
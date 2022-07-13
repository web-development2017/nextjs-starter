import { useSession } from "next-auth/react";

export default function Restricted() {
    const { data: session, status } = useSession({required: true});

    if(status === 'authenticated'){
        return(
            <main className="p-10 mx-auto max-w-4xl">
                <div>
                    <p className="mb-20 text-xl text-center">Welcome to your account page { session.user.name }</p>
                </div>
            </main>
            
        )
    }else{
        return ""
    } 
}
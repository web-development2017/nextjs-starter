import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar(){
    const { data: session, status } = useSession();
    
    if(status === "loading"){
        return(
            <div className="p-10 mx-auto max-w-4xl justify-center">
                <nav>
                    <h1>Example</h1>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        
                    </ul>
                </nav>
            </div>
        )    
    }else if (status === "unauthenticated") { 
        return (
            <div className="p-10 mx-auto max-w-4xl justify-center">
                <nav>
                    <h1>Example</h1>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li onClick={ signIn }><a href="">Login</a></li>                    
                    </ul>
                </nav>
            </div>
        )      
        
    } else if(status === "authenticated"){
        return (
            <div className="p-10 mx-auto max-w-4xl justify-center">
                <nav>
                    <h1>Example</h1>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/restricted"><a>Account</a></Link></li>
                        <li onClick={() => signOut({ callbackUrl: 'http://localhost:3000' }) }><a href="/">Logout</a></li>                    
                    </ul>
                </nav>
            </div>
        )
    }else{
        return <p></p>
    }
}

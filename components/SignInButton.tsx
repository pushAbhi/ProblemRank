import handleSignIn from "@/lib/handleSignIn"
import { SigninProvider } from "@/types"

export default function SignInButton( {provider}: {provider: SigninProvider} ) {
    return (
        <form
            action={() => handleSignIn(provider)}
        >   
            <button className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl border border-foreground text-sm font-medium text-gray-700 transition-colors hover:bg-hover-dark" 
            type="submit">Continue with {provider}</button>
        </form> 
    )
}
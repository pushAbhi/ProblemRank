import { signIn } from "@/app/auth"

type Provider = "github" | "google" | "linkedin"

export default function SignInButton( {provider}: {provider: Provider} ) {
    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider)
            }}
        >
            <button className="" type="submit">Signin with {provider}</button>
        </form>
    )
}
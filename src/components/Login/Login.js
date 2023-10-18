import { useSession, signIn, signOut } from "next-auth/react"
import { Avatar } from "@mui/material"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        Signed in as {session?.user?.name} <br />
        <Avatar alt={session?.user?.name} src={session?.user?.image} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
};
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@mui/material"
import React from "react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
        <Button variant={'contained'} color={'error'} onClick={() => signOut()}>Sign out</Button>
    )
  }
  return (
    <>
      <h2>Please log in</h2>
      <Button variant={'contained'} color={'primary'} onClick={() => signIn()}>Sign in</Button>
    </>
  )
};
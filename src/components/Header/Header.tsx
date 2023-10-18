import { useSession } from 'next-auth/react';
import React from 'react';
import { Avatar } from '@mui/material';

export default function Header(): JSX.Element {
  const { data: session } = useSession()
  return (
    <>
    <h1>Header</h1>
      <Avatar alt={session?.user?.name as string} src={session?.user?.image as string} />
    </>
  )
}

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'center'}}>
        <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
          Sign out
        </Button>
      </Container>
    );
  }
  return (
    <Container maxWidth="xl" sx={{display: 'flex', justifyContent: 'center'}}>
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </Container>
  );
};

export default Login;
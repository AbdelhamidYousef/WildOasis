import { styled } from "styled-components";
import Logo from "../general/Logo";
import Heading from "../styled/Heading";
import LoginForm from "../../features/authentication/LoginForm";

const Main = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const Login = () => {
  return (
    <Main>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </Main>
  );
};

export default Login;

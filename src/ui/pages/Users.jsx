import SignupForm from "../../features/authentication/signup/SignupForm";
import Heading from "../styled/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;

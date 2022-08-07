import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopUp,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password!");
          break;
        case "auth/user-not-found":
          alert("user email not found!");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type={"email"}
          label={"Email"}
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          onChange={handleChange}
          name="password"
          value={password}
          type={"password"}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

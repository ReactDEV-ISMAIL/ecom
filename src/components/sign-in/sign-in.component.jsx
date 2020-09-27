import React from "react";
import { signInWithGoogle, auth } from "../../firebase/firebase.utlis";
import CustomButton from "../custom-button/custom-buton.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handlSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  handlChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handlSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handlChange={this.handlChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handlChange={this.handlChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleBtn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;

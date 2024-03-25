"use client";

import { authenticate } from "@/app/lib/action";
import { useFormState, useFormStatus } from "react-dom";

export default function Login() {
  const [valueReturn, dispatch] = useFormState(authenticate, undefined);
  return (
    <form className="bg-white  " action={dispatch}>
      <div className="border-black-800">Enter your username</div>
      <input className="border-black-800 " type="email" name="emailTxt" />
      <div className="border-black-800">Enter your password</div>
      <input className="border-black-800" type="password" name="passwordTxt" />
      <div>
        <SignInButton />
      </div>
      {valueReturn && <p>{valueReturn}</p>}
    </form>
  );
}

function SignInButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-yellow border-4 border-black-600"
      aria-disabled={pending}
      type="submit"
    >
      Sign in
    </button>
  );
}

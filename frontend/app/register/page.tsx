"use client";

import { register } from "@/app/lib/action";

import { useFormState, useFormStatus } from "react-dom";

export default function Login() {
  const [valueReturn, dispatch] = useFormState(register, undefined);
  return (
    <form className="bg-white" action={dispatch}>
      <div>Enter your username</div>
      <input type="email" name="emailTxt" />
      <div>Enter your password</div>
      <input type="password" name="passwordTxt" />
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
      Register
    </button>
  );
}

"use server";

import { signIn, registerUser } from "@/app/lib/auth";

export async function authenticate(_currentState: any, formData: any) {
    const emailTxt = formData.get("emailTxt") as string;
    const passwordTxt = formData.get("passwordTxt") as string;
    console.log(emailTxt);

    try {
        await signIn(emailTxt, passwordTxt);
        // work correctly
        return "Welcome!";
    } catch (error) {
        return "Invalid credentials, Ooops! Try again.";
    }
}

export async function register(_currentState: any, formData: any) {
    const emailTxt = formData.get("emailTxt") as string;
    const passwordTxt = formData.get("passwordTxt") as string;
    console.log(emailTxt);
    console.log(passwordTxt);
    try {
        await registerUser(emailTxt, passwordTxt);
        // work correctly
        return "New account created!";
    } catch (error) {
        return "Invalid credentials, Ooops! Try again.";
    }
}
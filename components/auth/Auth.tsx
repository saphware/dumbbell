import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState } from "react";

export default function Auth() {

    const [signIn, setSignIn] = useState(true)

    return (
        <SafeAreaView>
            {
                signIn ? <SignIn setSignIn={setSignIn} /> : <SignUp setSignIn={setSignIn} />
            }
        </SafeAreaView>
    )
}

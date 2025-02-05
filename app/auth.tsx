import { SafeAreaView } from "react-native";
import { useState } from "react";
import { commonStyles } from "@/style/commonStyles";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";

export default function Auth() {

    const [signIn, setSignIn] = useState(true)

    return (
        <SafeAreaView style={commonStyles.container}>
            {
                signIn ? <SignIn setSignIn={setSignIn}/> : <SignUp setSignIn={setSignIn}/>
            }
        </SafeAreaView>
    )
}
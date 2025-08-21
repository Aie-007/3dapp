import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import GoogleLogo from "../assets/images/google.png";
import { auth } from "../firebaseConfig"; // <-- adjust path if needed

export default function signup() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const router = useRouter();
  const handleGoogleLogin = () => {
    alert("Google Login Pressed!");
  };

      // Replace with actual user input values
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleEmailSignUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    alert("Sign Up successful!");
    router.push("./login"); // redirect to login after signup
  } catch (error) {
    console.log(error);
    alert("Sign Up failed: " + error.message);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to AVWorld</Text>

      <TextInput
        style={[
          styles.textInput,
          { borderColor: emailFocused ? "#A020F0" : "#ccc" },
        ]}
        value = {email}
        onChangeText={setEmail}
        placeholder="Enter your Email"
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />
      <TextInput
        style={[
          styles.textInput,
          { borderColor: passwordFocused ? "#A020F0" : "#ccc" },
        ]}
        value = {password}
        onChangeText= {setPassword}
        placeholder="Enter your Password"
        secureTextEntry
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />

           <View style={styles.button}>
  <Pressable onPress={handleEmailSignUp}>
    <Text style={styles.text}>Sign Up with Email</Text>
  </Pressable>
</View>


      <View style={[styles.buttonGoogle, { backgroundColor: "#2b0046ff" }]}>
        <Pressable onPress={handleGoogleLogin} style={styles.googlePressable}>
          <Text style={[styles.text, { color: "#A020F0" }]}>SignUp with</Text>
          <Image source={GoogleLogo} style={styles.googleIcon} />
        </Pressable>
      </View>
      
      <Text style={[styles.textAccount, { fontSize: 15 }]}>
        Already <Text style={{ fontStyle: "italic" }}>Signed Up</Text> Before?
      </Text>
      <Pressable onPress={() => router.push("./login")}>
        <Text style={[styles.textLogIn, { fontSize: 15 }]}>Log IN</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  
  button: {
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    width: 150,
    padding: 5,
    backgroundColor: "#A020F0",
  },

  buttonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    height: 50,
    width: 200,
    padding: 5,
    backgroundColor: "#620188ff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  googlePressable: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    paddingTop: 35,
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  textAccount: {
    color: "#620188ff",
  },
  textLogIn: {
    fontSize: 15,
    color: "#A020F0",
  },
    text: {
    color: "white",
    textShadowRadius: 1,
    textShadowColor: "black",
  },
  textInput:{
      outlineStyle:'none',
    width:300,
    padding:5,
    alignItems:'flex-start',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    borderColor: '#ccc',
    color:'#A020F0'
  },
    welcomeText: {
    fontSize: 25,
    fontWeight: "semi-bold",
    textShadowRadius: 1,
    textShadowColor: "black",
    color: "#9500ffff",
  },
});

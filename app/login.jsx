import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import GoogleLogo from "../assets/images/google.png";
import { auth } from "../firebaseConfig";

export default function LoginScreen() {
  const router = useRouter();
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [email, setEmail] = useState("");       // dynamic email
  const [password, setPassword] = useState(""); // dynamic password

  const handleEmailLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user.uid);
      Alert.alert("Success", "Login successful!");
      router.replace("/");  // navigate to your tabs page
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        Alert.alert("Error", "No account found. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        Alert.alert("Error", "Incorrect password. Please try again.");
      } else {
        Alert.alert("Login failed", error.message);
      }
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert("Info", "Google Login Pressed!");
  };

  return (
    
    <View style={styles.container}>
      
      <Text style={styles.welcomeText}>Welcome to AVWorld</Text>

      <TextInput
        style={[styles.textInput, { borderColor: emailFocused ? "#A020F0" : "#ccc" }]}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.textInput, { borderColor: passwordFocused ? "#A020F0" : "#ccc" }]}
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />

      <View style={styles.button}>
        <Pressable onPress={handleEmailLogin}>
          <Text style={styles.text}>Login with Email</Text>
        </Pressable>
      </View>

      <View style={styles.buttonGoogle}>
        <Pressable onPress={handleGoogleLogin} style={styles.googlePressable}>
          <Text style={[styles.text, { color: "white" }]}>Login with</Text>
          <Image source={GoogleLogo} style={styles.googleIcon} />
        </Pressable>
      </View>

      <Text style={[styles.textAccount, { fontSize: 15 }]}>
        Haven't an <Text style={{ fontStyle: "italic" }}>Account</Text> Yet?
      </Text>
      <Pressable onPress={() => router.push("./signup")}>
        <Text style={[styles.textSignUp, { fontSize: 15 }]}>Sign UP</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "semi-bold",
    textShadowRadius: 1,
    textShadowColor: "black",
    color: "#9500ffff",
  },
  textSignUp: {
    fontSize: 15,
    color: "#A020F0",
  },

  button: {
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    width: 150,
    padding: 5,
    backgroundColor: "#A020F0",
  },

  buttonGoogle: {
    flexDirection:'row',
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    height: 50,
    width: 200,
    padding: 5,
    backgroundColor: "#620188ff",
  },    
  text: {
    color: "white",
    textShadowRadius: 1,
    textShadowColor: "black",
  },
  textAccount: {
    color:"#620188ff",
  },
  googleIcon: {
    paddingTop:35,
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  googlePressable: {
    gap:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  textInput: {
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
  
});

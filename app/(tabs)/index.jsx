import { SafeAreaView, StyleSheet, View, Text, StatusBar, Platform } from "react-native";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // path to your firebaseConfig
import { useRouter } from "expo-router";
import { AntDesign, Fontisto } from "@expo/vector-icons";

export default function TabsHome() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Firebase currentUser:", currentUser);
      if (currentUser) {
        setUser(currentUser); // user is logged in
      } else {
        router.replace("/login"); // redirect to login if not logged in
      }
    });

    return unsubscribe;
  }, []);

  if (user === null) {
    // Show a loading screen while checking auth
    return (
      <SafeAreaView
        style={[
          styles.container,
          { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
        ]}
      >
        <Text style={{ color: "white" }}>Checking Firebase auth...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.leftIcons}>
          <Fontisto name="bell" size={24} color="white" />
          <AntDesign name="message1" size={24} color="white" />
        </View>

        <View style={styles.rightSearch}>
          <Fontisto name="search" size={20} color="purple" />
          <Text style={{ marginLeft: 5 }}>Search</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <Text style={{ color: "white", marginBottom: 10 }}>
          Welcome, {user.email}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "purple",
    width: "100%",
  },
  leftIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rightSearch: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 8,
    flex: 1,
    marginLeft: 10,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

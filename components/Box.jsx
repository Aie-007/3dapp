import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text } from "react-native";

export default function Box({ style, initialColorIndex = 0 }) {
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const [isCircle, setIsCircle] = useState(false);
  const [colorIndex, setColorIndex] = useState(initialColorIndex);

  const borderRadius = useRef(new Animated.Value(0)).current;

  const toggleShapeAndColor = () => {
    // Animate shape
    Animated.timing(borderRadius, {
      toValue: isCircle ? 0 : 50,
      duration: 300,
      useNativeDriver: false,
    }).start();

    // Cycle rainbow colors
    setColorIndex((prev) => (prev + 1) % rainbowColors.length);

    // Toggle shape state
    setIsCircle(!isCircle);
  };

  return (
    <Pressable onPress={toggleShapeAndColor}>
      <Animated.View
        style={[
          styles.box,
          style,
          { borderRadius: borderRadius, backgroundColor: rainbowColors[colorIndex] },
        ]}
      >
        <Text style = {styles.color}>{rainbowColors[colorIndex]}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    margin: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  color: {
   
  }
});

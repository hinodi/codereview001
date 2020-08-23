import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const [bgColor, setBgColor] = useState("#f44336");
  const changeColor = () => {
    let newColor = "";
    if (bgColor === "#f44336") newColor = "#6a1b9a";
    else if (bgColor === "#6a1b9a") newColor = "#283593";
    else newColor = "#f44336";
    setBgColor(newColor);
  };
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity onPress={changeColor} style={styles.button}>
        <Text style={{ color: "#101010" }}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
});
export default App;

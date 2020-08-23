import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = React.useState("#f44336");
  const [numberColor, setNumber] = React.useState(0);

  const changeColor = () => {
    if (numberColor == 0) {
      setBackgroundColor("#6a1b9a");
      setNumber(numberColor + 1);
    } else if (numberColor == 1) {
      setBackgroundColor("#283593");
      setNumber(numberColor + 1);
    } else if (numberColor == 2) {
      setBackgroundColor("#f44336");
      setNumber(0);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity
        onPress={() => {
          changeColor();
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Click me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    height: 50,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "#101010",
    fontSize: 20,
    fontWeight: "bold",
  },
});

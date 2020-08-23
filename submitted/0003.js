import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function App() {
  //list backgroundColor
  const colors = ["#f44336", "#6a1b9a", "#283593"];

  const [click, updateClick] = React.useState(0);
  const handleClick = (click) => {
    if (click < colors.length - 1) {
      updateClick(click + 1);
    } else {
      updateClick(0);
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors[click],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.btnClick}
        onPress={() => handleClick(click)}
      >
        <Text style={styles.btnText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnClick: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "#101010",
    fontWeight: "bold",
  },
});

export default App;

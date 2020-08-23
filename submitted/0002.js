import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

function App() {
  const [click, updateClick] = React.useState(1);
  const handleClick = (click) => {
    switch (click) {
      case 2:
        updateClick(3);
        break;
      case 3:
        updateClick(1);
        break;
      default:
        updateClick(2);
        break;
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            click === 1 ? "#f44336" : click === 2 ? "#6a1b9a" : "#283593",
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

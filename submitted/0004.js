import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayBackgroundColor: ["#f44336", "#6a1b9a", "#283593"],
    };
  }

  onPressButton = () => {
    let arrayTemp = this.state.arrayBackgroundColor;
    arrayTemp.push(arrayTemp.shift());
    this.setState({ arrayBackgroundColor: arrayTemp });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.arrayBackgroundColor[0] },
        ]}
      >
        <TouchableOpacity onPress={this.onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    marginBottom: 30,
    width: 160,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  buttonText: {
    padding: 20,
    color: "#101010",
    fontSize: 18,
  },
});

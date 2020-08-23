import React from "react";
import { View, StyleSheet, Button } from "react-native";

const listColor = ["#f44336", "#6a1b9a", "#283593"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  onChangeColor = () => {
    this.setState((currentState) => {
      if (currentState.index === listColor.length - 1) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: currentState.index + 1 });
      }
    });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: listColor[this.state.index] },
        ]}
      >
        <Button title="Click me!" onPress={this.onChangeColor} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;

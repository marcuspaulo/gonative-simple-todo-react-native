import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";
//Stateful
export default class App extends Component {
  state = {
    usuario: "Marcus",
    todos: [{ id: 1, text: "Fazer Café" }, { id: 2, text: "Estudar GoNative" }]
  };

  addTodo = () => {
    this.setState({
      usuario: this.state.usuario + 3,
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: "Estudar GoNative" }
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.usuario}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from '~/components/Todo';

// Stateful
export default class App extends Component {
  state = {
    usuario: 'Marcus',
    todos: [{ id: 1, text: 'Fazer Café' }, { id: 2, text: 'Estudar GoNative' }],
  };

  addTodo = () => {
    this.setState({
      usuario: this.state.usuario + 3,
      todos: [...this.state.todos, { id: Math.random(), text: 'Estudar GoNative' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TodoList title="Jogar Futebol" />
        <TodoList title="Estudar" />
        <TodoList title="Academia" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [{ rotate: '20deg' }],
  },
});

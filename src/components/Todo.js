import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, StyleSheet, Platform,
} from 'react-native';
// Stateless
const Todo = ({ title }) => (
  <View>{Platform.OS === 'ios' ? <Text style={styles.text}>iOS</Text> : <Text>{title}</Text>}</View>
);

Todo.defaultProps = {
  title: 'Todo Padrão',
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      fontSize: 10,
    },
    android: {
      fontSize: 14,
    },
  }),
});

export default Todo;

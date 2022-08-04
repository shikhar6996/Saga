import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {numberIncrement, numberDecrement} from '../../redux/actions';
import {exceedCounter, exceededCounter} from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  // const {counter} = useSelector(state => state);
  const {UpdateCounter} = useSelector(state => state);

  // const handleIncrement = () => {
  //   dispatch(numberIncrement());
  // };
  // const handleDecrement = () => {
  //   dispatch(numberDecrement());
  // };

  const handleIncrementByOne = () => {
    dispatch(exceedCounter());
  };
  const handleIncrementByTen = () => {
    dispatch(exceededCounter());
  };

  return (
    <>
      <View style={styles.parent}>
        <TouchableOpacity onPress={handleIncrementByOne} style={styles.button}>
          <Text style={styles.text}>Increment</Text>
        </TouchableOpacity>
        <Text>{UpdateCounter}</Text>
        <TouchableOpacity onPress={handleIncrementByTen} style={styles.button}>
          <Text style={styles.text}>Decrement</Text>
        </TouchableOpacity>
      </View>

      <View />
      <View style={styles.parent}>
        <TouchableOpacity onPress={handleIncrementByOne} style={styles.button}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
        <Text>{UpdateCounter}</Text>
        <TouchableOpacity onPress={handleIncrementByTen} style={styles.button}>
          <Text style={styles.text}>Subtract</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    margin: 20,
    padding: 10,
    borderRadius: 2,
    borderColor: 'grey',
    borderWidth: 2,
  },
  text: {fontSize: 35},
});

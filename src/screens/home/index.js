import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Numberbadhao } from '../../redux/actions';
import { NumberGhatao } from '../../redux/actions';
// import { numberIncrement, numberDecrement } from '../../redux/actions';
// import { exceedCounter, exceededCounter } from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const { NumberkaCounter } = useSelector(state => state)

  // const {counter} = useSelector(state => state);
  // const { UpdateCounter } = useSelector(state => state);

  // const handleIncrement = () => {
  //   dispatch(numberIncrement());
  // };
  // const handleDecrement = () => {
  //   dispatch(numberDecrement());
  // };

  const adddd = () => { dispatch(Numberbadhao()) }
  const subtracttt = () => { dispatch(NumberGhatao()) }



  // const handleIncrementByOne = () => {
  //   dispatch(exceedCounter());
  // };
  // const handleIncrementByTen = () => {
  //   dispatch(exceededCounter());
  // };

  return (
    <>
      {/* <View style={styles.parent}>
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
      </View> */}

      <View style={styles.parent}>
        <TouchableOpacity onPress={adddd} style={styles.button}>
          <Text style={styles.text}>Add+++</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: 'center', backgroundColor: 'orange', fontSize: 34 }}>{NumberkaCounter}</Text>
        </View>
        <TouchableOpacity onPress={subtracttt} style={styles.button}>
          <Text style={styles.text}>Subtract---</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  parent: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    margin: 20,
    padding: 10,
    borderRadius: 12,
    borderColor: 'lightgrey',
    borderWidth: 2,
    backgroundColor: 'red'
  },
  text: { fontSize: 35 },
});

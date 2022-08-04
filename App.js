import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;

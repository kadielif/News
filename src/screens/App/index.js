
import React from 'react';
import {StyleSheet,View} from 'react-native';

import Home from './Home';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
};

const styles=StyleSheet.create({
 container: {
   flex: 1,
 }
});




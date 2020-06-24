
import React from 'react';
import {StyleSheet,View} from 'react-native';

import Technology from './Technology';

export default class TechnologyNews extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Technology />
      </View>
    );
  }
};

const styles=StyleSheet.create({
 container: {
   flex: 1,
 }
});




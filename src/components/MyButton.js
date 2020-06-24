
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground
}
  from 'react-native';


export default class MyButton extends Component {
  render() {

    const { text,onPress } = this.props;
 

    return (
      <View style={styles.buttonProp}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        >
          <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='stretch'
        source={require('../img/red.jpg')}>
        <View style={styles.textcontent}>
        <Text style={styles.text} onPress={onPress} >
          {text}
        </Text>
        </View>
        </ImageBackground>
        
      </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  buttonProp:{
    width: '40%',
    height: '80%',
  
  },

  text: {
    color: 'white',
    fontSize:15
  },
  textcontent:{
    alignItems:'center',
    paddingTop:'16%',
    
    

  }
});




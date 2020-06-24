
import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';


export default class agendaNews extends React.Component {
  render() {
    //this.props.AuthStore.passPage();
    return (

      <View style={styles.container}>

        <Text style={{ marginTop: '30%' }}>New Screen</Text>
        <Image style={styles.newimage} />

        <Text style={{ marginTop: '30%' }}>New Screen</Text>
        <Image style={styles.newimage} />

        <Text style={{ marginTop: '30%' }}>New Screen</Text>
        <Image style={styles.newimage} />
      </View>



    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  newimage: {
    width: '30%',
    height: '20%',
    backgroundColor: 'gray',
    marginLeft: '-16%'
  }

});





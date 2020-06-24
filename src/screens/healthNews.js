import React from 'react';
import { Image, Text, StyleSheet, View, FlatList,ImageBackground} from 'react-native';

import { inject, observer } from 'mobx-react';
import { SafeAreaView } from 'react-native-safe-area-context';


observer
@inject('HomeStore')
export default class healthNews extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
        style={{flex: 1}}
        source={require('../img/tech.jpg')}>
          <View style={styles.flatListContainer}>
           
            {
              this.props.HomeStore.data !== undefined &&
              <FlatList
                data={this.props.HomeStore.data.items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (

                    <View style={styles.cardContainer}>
                      <View style={styles.title}>
                        <Text style={styles.header}>{item.title}</Text>
                      </View>

                      <View style={[styles.image, styles.card]}>
                        <Image source={{ uri: this.getImageURL(item.description) }}
                          resizeMode="cover"
                          style={{ height: '100%', alignItems: 'center' }} />
                      </View>

                      <View style={styles.description}>
                        <Text  style={styles.descriptionText}>{this.getDescription(item.description)}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />

            }
           
          </View>
          </ImageBackground>
        </View>

     
    );
  }

  getDescription = (url) => {
    return url.substr(url.search('</a>') + 4, url.length);
  };

  getImageURL = (url) => {
    var getlink = url.split(" ");
    imglink = getlink[2];
    return imglink.substr(5, (imglink.length - 6));
  };
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
  blurredImage: {
    width: '100%',
    height: '100%',
  },
  nonBlurredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    top: 0,
    color: 'white',
  },
  flatListContainer: {
    flex: 1,
  },
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    height: 500,
    backgroundColor: (10,10,10),
  },
  title: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    backgroundColor: "gray",
  },
  description: {
    height: '50%',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  descriptionText:{
    fontSize:16
  }
});

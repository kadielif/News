
import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageBackground
} from 'react-native';
import { inject, observer } from 'mobx-react';



@inject('TechnologyStore')
@observer
export default class Technology extends React.Component {

  componentDidMount() {
    this.props.TechnologyStore.getParser("http://www.haberturk.com/rss");
    //console.log(this.props.TechnologyStore.imageText);
    //console.log(this.props.TechnologyStore.descriptiontext);
  };

  render(){
    return (
      <View style={styles.container}>
        <ImageBackground
        style={{flex: 1}}
        source={require('../../img/back.jpg')}>
        <View style={styles.technoNews}>
        {
            this.props.TechnologyStore.data !== undefined &&
            <FlatList
              data={this.props.TechnologyStore.data.items}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                return (
              <View style={styles.flatList}>
                <Image source={{ uri: this.getImageURL(item.description) }}
                          resizeMode="cover"
                          style={{ height:50, width:50 , alignItems: 'center' }} />
                <Text style={styles.title}>{item.title}</Text>
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

  getImageURL = (url) => {
    var getlink = url.split(" ");
    imglink = getlink[2];
    return imglink.substr(5, (imglink.length - 6));
  };
};

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  technoNews:{
    flex: 0.95,
    alignItems:'center',
    paddingTop:'5%',
    borderRadius:3,
 
  },
  title: {
    fontSize:15,
    color:'#000',
    padding:'3%'
    
  },
 
  flatList:{
    flexDirection:'row',
    marginHorizontal:'3%',
    marginBottom:'1%',
    borderRadius:4


    
  },
});



import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import MyButton from '../../components/MyButton';
import HomeStore from '../../stores/HomeStore';



@inject('HomeStore')
@observer
export default class Home extends React.Component {
  passpageAgenda = () => {
    this.props.HomeStore.passPage("agendaNews");
  };
  passpageHealth = () => {
    this.props.HomeStore.passPage("healthNews");
  };
  passpageTechnology = () => {
    this.props.HomeStore.passPage("TechnologyNews");
  };
  passpageSport = () => {
    this.props.HomeStore.passPage("sportNews");
  };

  componentDidMount() {
    this.props.HomeStore.getParser("http://www.haberturk.com/rss/kategori/teknoloji.xml");
  }

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require('../../img/back.jpg')}>
          <View style={styles.hotNews} >
            {
              this.props.HomeStore.data !== undefined &&
              <FlatList
                data={this.props.HomeStore.data.items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.flatList}>
                      <View style={styles.imageView}>
                        <Image source={{ uri: this.getImageURL(item.description) }}
                          resizeMode="cover"
                          style={{ height: 50, width: 50, alignItems: 'center' }} />
                      </View>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  );
                }}
              />

            }
          </View>

          <View style={styles.categoriesContainer} >
            <View style={styles.row}>

              <MyButton text="Gündem" onPress={this.passpageAgenda} />
              <MyButton text="Sağlık" onPress={this.passpageHealth} />
            </View>
            <View style={styles.row}>
              <MyButton text="Teknoloji" onPress={this.passpageTechnology} />
              <MyButton text="Spor" onPress={this.passpageSport} />
            </View>
          </View>
          <View style={styles.currenciesContainer}>


          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  getImageURL = (url) => {
    var getlink = url.split(" ");
    imglink = getlink[2];
    return imglink.substr(5, (imglink.length - 6));
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hotNews: {
    flex: 0.6,
    paddingLeft: '5%',
  },
  categoriesContainer: {
    flex: 0.3,
  },
  row: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  currenciesContainer: {
    flex: 0.1,
  },
  title: {
    fontSize: 15,
    color: '#000',
    paddingLeft: '3%',
    paddingTop: '2%'
  },
  imageView: {
    borderWidth: 3,
    borderColor: 'white',
  },

  flatList: {
    flexDirection: 'row',
    height: 40,
    paddingTop: '4%',
    backgroundColor: (10, 10, 10),
    borderRadius: 5,
  },


});


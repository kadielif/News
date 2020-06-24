
import* as React from 'react';
import { action, observable } from 'mobx';
import * as RootNavigation from '../RootNavigation';
import * as rssParser from 'react-native-rss-parser';

class TechnologyStore extends React.Component{
    @observable data = {};
    //@observable descriptiontext={};
    //imageText={};

    @action passPage(page){
        RootNavigation.navigate(page);
    }

    
     @action async getParser(url) {    
       this.data = await  fetch(url)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData));
    }


}

export default new TechnologyStore()


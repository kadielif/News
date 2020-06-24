import * as React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation';


import App from './screens/App';
import New from './screens/agendaNews';
import Health from './screens/healthNews';
import Sport from './screens/sportNews';
import TechnologyNews from './screens/TechnologyNews';




const AutoStack = createStackNavigator();
export default function Router() {

  return (

    <NavigationContainer ref={navigationRef} >
      <AutoStack.Navigator initialRouteName={'App'}>
        <AutoStack.Screen
          name="App"
          component={App}
          options={{
            title: 'HABERTURK',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#e3200e',
            },

          }}
        />
        <AutoStack.Screen name="agendaNews" component={New} />
        <AutoStack.Screen
          name="healthNews"
          component={Health}
          options={{
            title: 'SAĞLIK',
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#e3200e',
            },
          }}
        />
        <AutoStack.Screen name="sportNews" component={Sport} />
        <AutoStack.Screen
          name="TechnologyNews"
          component={TechnologyNews}
          options={{
            title: 'TEKNOLOJİ',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#e3200e',
            },

          }}
        />


      </AutoStack.Navigator>
    </NavigationContainer>


  );

}
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import AttractionDetails from './src/screen/AttractionDetails';
import Gallery from './src/screen/Gallery';

const Stack=createStackNavigator();

const App = () => {
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background:'#ffffff',
    },
  };
  return(
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} ></Stack.Screen>
        <Stack.Screen name='AttractionDetails' component={AttractionDetails}></Stack.Screen>
        <Stack.Screen name='Gallery' component={Gallery}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};

export default App;

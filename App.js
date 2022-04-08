import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, TextInput} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import Home from './Screens/Home';
import Details from './Screens/Details';
import { Store } from './Redux/Store';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { Provider } from 'react';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
        
          options={{
            title: 'View Quotation',
            headerTitleAlign: 'center',
          
            headerStyle: {
              backgroundColor: '#38A856',
            
            },
            
            headerTitleStyle: {color: 'white'},
          
            
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'INQ0007',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#38A856',
            },
            
            headerTitleStyle: {color: 'white'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};



export default App;

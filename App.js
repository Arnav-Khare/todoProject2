import 'react-native-gesture-handler';
import { View,Text} from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
 import Header from './src/Components/Header'
 import store from './src/Reducers/Reducers';
 import AddText from './src/Components/AddText.js';
 import ItemsList from './src/Components/ItemsList';
 import AddButton from './src/Components/AddButton';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

function HomeScreen({navigation}) {
    const movetoAddTask = () => {
        navigation.navigate('Add_Task')
    }

    return (
      <View >
        <Header value = {1} />
          <ItemsList  />
          <AddButton  movetoAddTask = {movetoAddTask}/>
      </View>
    );
}

function AddTask ({navigation}) {
    const moveToHome = () => {
      navigation.navigate('Home')
    }
    return (
      <View>
          <AddText moveToHome={moveToHome}/>  
      </View>
    )
}

const HomeNavigator = () => (
    <Navigator headerMode="none">
      <Screen name="Home" component={HomeScreen} />
      <Screen name= "Add_Task" component={AddTask} /> 
    </Navigator>
);

  const AppNavigator = () => (
    <NavigationContainer>
      <Provider store ={store} >
        <HomeNavigator />
      </Provider>
    </NavigationContainer>
  );

export default class App extends Component {
 render(){
    return (
          <View >
             <AppNavigator />
        </View>
  )};
}

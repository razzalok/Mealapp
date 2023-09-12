import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatogoryScreen from './screens/CatogoryScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack =createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#3f2f25'}
    }}>
      <Drawer.Screen name='category' component={CatogoryScreen}/>
      <Drawer.Screen name='favorites' component={FavoritesScreen}/>
    </Drawer.Navigator>
  )
}
export default function App() {
  return (
    <>
    <StatusBar style='auto'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
        headerTintColor:'white',
        contentStyle:{backgroundColor:'#3f2f25'}
      }}>
        <Stack.Screen name='Drawer' component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='MealsOverView' component={MealsOverviewScreen}/>
        <Stack.Screen name='MealDetails' component={MealDetailScreen} options={{
          backgroundColor:'#3f2f25',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

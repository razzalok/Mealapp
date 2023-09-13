import React,{ useContext } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const FavoritesScreen = () => {

  // const favoriteMealsCtx= useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state)=>state.favoritesMeals.ids)
  // const favoriteMeals = MEALS.filter((meal)=>favoriteMealsCtx.ids.includes(meal.id))
  const favoriteMeals = MEALS.filter((meal)=>favoriteMealsIds.includes(meal.id))

  if(favoriteMeals.length ===0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }
  return (
    <MealsList item={favoriteMeals}/>
  )
}

export default FavoritesScreen


const styles= StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
})
import React, { useContext, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites,removeFavorites } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favoriteContext";


const MealDetailScreen = ({ route,navigation }) => {
  // const favoriteMealsCtx= useContext(FavoritesContext)

 const favoriteMealsIds = useSelector((state)=>state.favoritesMeals.ids)
 const dispatch=useDispatch()

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite=favoriteMealsCtx.ids.includes(mealId)
  const mealIsFavorite = favoriteMealsIds.includes(mealId)
  function changeFavoriteStatusHandler(){
    if(mealIsFavorite){
      favoriteMealsCtx.removeFavorite(mealId)
    }else{
      favoriteMealsCtx.addFavorite(mealId)
    }
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton onPress={changeFavoriteStatusHandler} icon={mealIsFavorite?'star':'star-outline'} color='white'/>
        }
    })
  },[navigation,changeFavoriteStatusHandler])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
  image: {
    width: "100%",
    height: 320,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitlecontainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listOuterContainer:{
    alignItems:'center'
  },
  listContainer: {
    width: "80%",
  },
});

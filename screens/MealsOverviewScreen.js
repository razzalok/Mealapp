import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route,navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title
    navigation.setOptions({
      title:categoryTitle
    })
  },[catId,navigation])


  console.log(displayedMeals);
  return <MealsList items={displayedMeals}/>
};

export default MealsOverviewScreen;


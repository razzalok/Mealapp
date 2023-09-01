import { View,FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CatogoryGridTile from "../components/CatogoryGridTile"


const CatogoryScreen = ({navigation}) => {
    function renderCatogoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverView')
        }
    return <CatogoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCatogoryItem} numColumns={2}/>
  )
}

export default CatogoryScreen
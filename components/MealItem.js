import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import MealDetails from "./MealDetails";

const MealItem = ({id, title, imageUrl, duration, complexity, affordability }) => {
  const navigation = useNavigation();

  function presshandler(){
    navigation.navigate('MealDetails',{
      mealId:id
    })
  }
  return (
    <View style={styles.mealItem} >
      <Pressable onPress={presshandler} style={({pressed})=>([pressed?styles.buttonPressed:null])} android_ripple={{color:'#ccc'}} >
        <View style={{}}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  innerContainer:{
    borderRadius:8,
    overflow:'hidden'
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed:{
    opacity:0.5
  }
});

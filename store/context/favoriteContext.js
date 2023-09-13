import {createContext, useState} from 'react'

export const FavoritesContext = createContext({
    id:[],
    addFavorite: (id)=>{},
    removeFavorite:(id)=>{}
})

function FavoritesContextProvider({children}){
    const [favoriteMealIds,setFavoriteMealIds] = useState([])

    function addFavorite(id){
        setFavoriteMealIds((currentFavsIds)=>[...currentFavsIds,id])
    }
    function removeFavorite(id){
        setFavoriteMealIds((currentFavsIds)=> currentFavsIds.filter((mealId)=> mealId!==id))
    }
    const value={
        id:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }
return(
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
)
}

export default FavoritesContextProvider;


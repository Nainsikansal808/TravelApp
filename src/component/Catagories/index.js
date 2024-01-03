import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./style";
const Catagories=({catagories,selectedCategory})=>{
    return (
        <FlatList 
        horizontal
        data={catagories}
        renderItem={({item})=>{
            const selected=selectedCategory===item
            return(
                <View style={[styles.itemContainer,selected?styles.selectedItemContainer:{}]}>
                <Text style={[styles.item,selected?styles.selectedItem:{}]}>{item}</Text>
                </View>
            );
            
        }}
        />
    );
    };
    export default React.memo(Catagories);

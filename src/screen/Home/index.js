import React from "react";
import { View } from "react-native";
import Title from "../../component/Title";
import styles from "./styles";
import Catagories from "../../component/Catagories";
const Home=()=>{
    return(
    <View style={styles.container}>
        <Title text="Where do " style={{fontWeight:'normal'}}/>
        <Title text="you want to go "/>
        <Title text="Explore Attractions" style={styles.subtitle}/>
        <Catagories selectedCategory='All' catagories={['All','Popular','Historical','Trending','Stylish','Exclusive','Others']}/>
    </View>
    );
};
export default Home;
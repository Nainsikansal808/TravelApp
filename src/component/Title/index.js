import React, { useEffect, useState } from "react";
import {Text} from "react-native";
import styles from "./styles";
const Title=({text})=>{
    const[stateText,setText]=useState('');
    useEffect(()=>{ 
        setText(text);
    },[text]);
    const onPressChange=()=>{
        setText('Updated');
    }
    return(
        <Text onPress={onPressChange}style={styles.title}>{stateText}</Text>
    );
};

export default Title;
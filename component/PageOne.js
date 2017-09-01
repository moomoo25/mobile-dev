import React,{Component} from 'react';
import { StyleSheet, Text, View,ListView,Image } from 'react-native';

import { Actions } from 'react-native-router-flux';
const PageOne =(props)=>(
    
    <View style={styles.container}>
        
        <Text>ชื่อเรื่อง : {props.text}</Text>
        <Image  source={{uri:props.text3}} style={styles.Image} resizeMode="contain"/>
        <Text>คำอธิบาย : {props.text2}</Text>
        <Text>ผู้แต่ง : {props.text4}</Text>
        </View>
)
const styles=StyleSheet.create({
    container:{
        height:30,
        flexDirection:'column',
        flex:1,
        borderBottomWidth:1.2,
        alignItems:'center'
    },
    Image:{
        
        height:180,
        width:100
    }
    
})
export default PageOne;
import React,{Component} from 'react';
import { StyleSheet, Text, View,ListView,Image } from 'react-native';
import PageOne from './PageOne';
import { Actions } from 'react-native-router-flux';


const BookDetail =(props)=>{
    const goToPageTwo = () => Actions.PageOne({text: props.title,text2:props.description,
        text3:props.book_image,text4:props.author});
    return(
    
    <View style={styles.container}>
        <Image  source={{uri:props.book_image}} style={styles.Image} resizeMode="contain"/>
        <Text >ชื่อเรื่อง : {props.title}</Text>
        <Text>ชื่อผู้แต่ง : {props.author}</Text>
        <Text onPress ={goToPageTwo}>Read More !!</Text>
        </View>
)}
const styles=StyleSheet.create({
    container:{
        height:230,
        flexDirection:'column',
        flex:1,
        borderBottomWidth:1.2,
        alignItems:'center'
    },
    Image:{
        
        height:160,
        width:80
    }
})
export default BookDetail;
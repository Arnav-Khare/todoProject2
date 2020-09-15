import React from 'react';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';

var width = Dimensions.get('window').width; //full width


const EachItem = (props) => {
    if(!props.item.complete)
    {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress = {() => props.dispatch({type:'CHANGE',id:props.item.id})}>
            <View style ={styles.container}>
                <View style = {styles.item}>
                    <Text >{props.item.text.length > 10 ? `${props.item.text.substring(0,13)}..`:props.item.text }</Text>
                </View>
            </View>    
        </TouchableOpacity>
    )
    }
    else
    {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress = {() => props.dispatch({type:'CHANGE',id:props.item.id})}>
                <View style ={styles.container}>
                    <View style = {styles.item}>
                        <Text style ={{
                            textDecorationLine :'line-through',
                            color:"#99a3a0"
                        }} >{props.item.text.length > 10 ? `${props.item.text.substring(0,13)}..`:props.item.text }</Text>
                        <View style = {styles.button}>
                            <AntDesign name="checkcircle" size={24} color="#0bbd87" elevation={500} />
                        </View>
                    </View>
                </View>    
            </TouchableOpacity>

        )
    }

}

const styles = StyleSheet.create({
    item: {
   flexShrink:1,
    padding:16,
    marginTop:26,
    marginHorizontal:12,
    marginBottom: 20,
    borderColor:'#bbb',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius:60,
    width:width /2.4,
    flexDirection:"row",
    justifyContent:"space-between",
    elevation:10 ,
    backgroundColor:"white",
},
    button: {
         backgroundColor: "white",
         marginRight:0
    }
})
 
export default connect()(EachItem);
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {View,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';

var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

const AddTask = ({movetoAddTask}) => {
    console.log(deviceHeight)
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress ={movetoAddTask}>
                    <AntDesign name="pluscircle" size={72} color="#68b3de" />     
            </TouchableOpacity>       
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        marginLeft:deviceWidth - 380,
        marginRight:5,
        width:350,
        height:80,
        alignItems:"center",
        position: 'absolute',
        marginTop:deviceHeight-120,
        justifyContent:"space-between",
    },
})

export default AddTask
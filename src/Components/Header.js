import React from 'react';
import {connect } from 'react-redux'
import {View,Text,Dimensions,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

const Header = (props) => {
    let view = false 
    if(props.value === 1)
    {
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress = {() => { 
                    view = !view
                    props.dispatch({type:'CHANGE_VIEW' , view})
                }}>
                        <View style = {styles.appStore}>
                            <Entypo name = "grid" size={48} color="#68b3de" />
                        </View> 
                </TouchableOpacity>
                <View style = {styles.header}>
                    <Text style = {styles.header}> All Tasks</Text>  
                </View>
            </View>
        )
    }
    else
    {
            return(
                <View style = {styles.container}>
                    <View style = {styles.appStore}>
                        <TouchableOpacity onPress = {props.navigation}>
                        <FontAwesome5 name="arrow-left" size={42} color="#68b3de"  />
                        </TouchableOpacity>
                    </View> 
                    <View style = {styles.header}>
                        <Text style = {styles.header}> All Tasks</Text>
                    </View>
                </View>
            )
    }
}
const styles = StyleSheet.create({
    container : {
        marginTop: 3,
        height:50,
        backgroundColor: "#f5f3f0",
        flexDirection:"row",
        margin:7,
        justifyContent:"space-between"
    },
    header: {
        fontSize:29,
        justifyContent:"space-around",
        width:237,
        fontWeight:"normal",
        marginTop:3,
        marginRight:25,
        color:"#7e9194"
    },
    appStore : {
        marginTop:5,
        marginLeft:1
    }

  });
  

export default connect()(Header) 
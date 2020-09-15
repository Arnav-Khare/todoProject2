import Header from './Header'
import {connect} from 'react-redux'
import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Dimensions} from 'react-native'

import {View,StyleSheet,TouchableOpacity, TextInput} from 'react-native';

var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;

class AddText extends Component{
    state ={
        text : ''
    }
    addtodo = (text) => {
        if(text)
        {
            this.props.dispatch({type:'ADD', text : text})
            this.setState({text : ' '})
        }
    };

    render(){
        return(
        <View>
                <Header value={2} navigation = {this.props.moveToHome}/> 
                <View style ={styles.container}>
                <TextInput
                        onChangeText={(text) => this.setState({text})}
                        value = {this.state.text}
                        placeholder = "   Create New Todo(max character 35)"
                        style = {styles.textBox}
                        />
            </View>
             <TouchableOpacity onPress={() => {
                    this.addtodo(this.state.text)
                }}>
                     <View style={styles.addButton}>
                         <AntDesign name="pluscircle" size={63} color="#68b3de" />    
                     </View>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        justifyContent:"center",
        borderWidth:2,
        marginTop:60,
        borderRadius:60,
        elevation:100,
        backgroundColor:"white",
    },
    textBox: {
        width:300,
        height:50,
    },
    addButton : {
            marginTop:deviceHeight-800,
            width:70,
            height: 50, 
            marginLeft: deviceWidth - 100, 
            alignItems: 'center',
            justifyContent: 'center',

    }
})

export default connect()(AddText)




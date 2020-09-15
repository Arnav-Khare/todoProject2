import React  from 'react';
import { connect} from 'react-redux';
import { View,Dimensions,StyleSheet, FlatList } from 'react-native';
import EachItem from './ViewBy/EachItemListView';
import EachItemGridView from './ViewBy/EachItemGridView';

var deviceHeight = Dimensions.get("window").height;

const ItemsList =  (props) => {
    let key =props.view.view;
    if(key)
    {
        return(
            <View style = {styles.container}>
                <FlatList
                key={2}
                contentContainerStyle={{margin:4}}
                horizontal={false}
                numColumns={2}
                data = {props.todos}
                renderItem = {({item})=> (
                    <EachItemGridView item = {item}
                     />
                )}
                keyExtractor={category => category.id}
            />
            </View>
        )
    }
    else 
    {
        return(
            <View style = {styles.container}>
                <FlatList
                    key={1}
                    data = {props.todos}
                    renderItem = {({item})=> (
                        <EachItem item = {item}
                        />
                    )}
                />
            </View>
        )
       
    }
 };

const styles = StyleSheet.create({
    container :{
        height:deviceHeight - 100
    }
});

const mappedStore = (state) => {
    return{
        todos:state.todo,
        view:state.view
    }
}

export default connect(mappedStore)(ItemsList) 




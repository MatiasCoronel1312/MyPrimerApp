import React from "react";
import {  TextInput, View, Button } from 'react-native';
import { styles } from "./styles";

const AddItem = ({task, onPressTask, onHandleChange}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                value={task}
                placeholder= "Ingrese Tarea"
                onChangeText={ onHandleChange }
            />
            <Button 
                disabled={!task}
                title='Add' 
                color='#2EC4B6'
                onPress={onPressTask}
            />
        </View>
    )
}


export default AddItem;
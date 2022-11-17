import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";



const TaskItem = ({item, onHandleSelect }) => {
    

    return(

        <TouchableOpacity  style={styles.listItemContainer } onPress={() => onHandleSelect(item)}>
            <Text style={styles.listItem}>{item.value}</Text>
        </TouchableOpacity> 

    )
}

export default TaskItem;
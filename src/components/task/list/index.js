import React from "react";
import { FlatList } from 'react-native';
import { styles } from "./styles";

const List = ({taskList, renderItem, item }) => {
    
    return (

        <FlatList
            data={taskList}
            renderItem={renderItem}
            keyExtractor={item}
            
        />

    )
};

export default List;
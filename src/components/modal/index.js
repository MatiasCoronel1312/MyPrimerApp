import React from "react";
import {  Modal, View, Button, Text } from 'react-native';
import { styles } from "./styles";

const ModalItem = ({modalVisible, selectTask, onHandleCancel, onHandleDeleteItem}) => {
    return ( 

            <Modal visible={modalVisible} animationType='slide' transparent>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Detalle tarea</Text>          
                    <View style={styles.modalDetailContainer}>
                        <Text style={styles.modalDetailText}>Seguro que deseas eliminar:</Text>
                        <Text style={styles.selectTask}>{selectTask?.value} </Text>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        
                        <Button
                            title='Borrar'
                            color='#2EC4B6'
                            onPress={onHandleDeleteItem}
                        />
                        <Button
                            title='Cancelar'
                            color='#2EC4B6'
                            onPress={onHandleCancel}
                        />
                        
                    </View>
                </View>
            </Modal>


    )};

    export default ModalItem;
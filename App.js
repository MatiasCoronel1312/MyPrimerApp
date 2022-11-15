import { useState } from 'react';
import { Text, TextInput, View,FlatList, Button, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTask, setSelectTask] = useState(null);

  const onPressTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask(''); 
  }

  const onHandleSelect = (item) => {
    setSelectTask(item);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
      <TouchableOpacity  style={styles.listItemContainer} onPress={() => onHandleSelect(item)}>
        <Text style={styles.listItem}>{item.value}</Text>
      </TouchableOpacity> 
  )
  
  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectTask.id))
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={task}
          placeholder= "Ingrese Tarea"
          onChangeText={ text => setTask (text)}
        />
        <Button 
          disabled={!task}
          title='Add' 
          color='#2EC4B6'
          onPress={onPressTask}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista:</Text>
        <FlatList
          data={taskList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Modal visible={modalVisible} animationType='slide' transparent>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Detalle tarea</Text>          
            <View style={styles.modalDetailContainer}>
              <Text style={styles.modalDetailText}>Seguro que desea eliminar</Text>
              <Text style={styles.selectTask}>{selectTask?.value} </Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button
                    title='Cancelar'
                    color='#2EC4B6'
                    onPress={onHandleCancel}
                  />
                <Button
                    title='Borrar'
                    color='#2EC4B6'
                    onPress={onHandleDeleteItem}
                  />
            </View>
          </View>
        </Modal>
      </View>      
    </View>
  );

};

import { useState } from 'react';
import { Text,  View } from 'react-native';
import { styles } from './styles';
import { AddItem, ModalItem, TaskItem, List } from './components/index';

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
      <TaskItem item={item} onHandleSelect={onHandleSelect} />
  )
  
  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectTask.id))
    setModalVisible(!modalVisible);
  }
  
  const onHandleChange = (text) => setTask (text);

  return (

    <View style={styles.container}>
      <AddItem task={task} onPressTask={onPressTask} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista:</Text>
        <List taskList={taskList} renderItem={renderItem} item={item => item.id} />
        <ModalItem 
            selectTask={selectTask} 
            onHandleCancel={onHandleCancel} 
            onHandleDeleteItem={onHandleDeleteItem} 
            modalVisible={modalVisible}
            //onHandleComplete={onHandleComplete}
            />
      </View>      
    </View>
  );

};

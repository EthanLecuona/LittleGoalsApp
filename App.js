import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [showModal, setShowModal] = useState(false)

  function startModalHandler() {
    setShowModal(true);
  }
  function endModalHandler() {
    setShowModal(false);
  }

  function deleteGoal(id) {
    setGoals( currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  function addGoal(enteredText) {
    setGoals(currentGoals => [...currentGoals, {
      text: enteredText,
      id: Math.random().toString()
    }]);
    endModalHandler();
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#5e0acc' onPress={startModalHandler}/>
        <GoalInput addGoal={addGoal} isVisible={showModal} onCancel={endModalHandler}/>
        <View style={styles.goalsContainer}>
          <FlatList data={goals} renderItem={itemData => { 
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteGoal={deleteGoal}/>
          }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
    // alignItems: 'center'
  },

  goalsContainer: {
    flex: 5,
  },
  statusBar: {
    backgroundColor: 'white',
    color: 'white'
  }
});

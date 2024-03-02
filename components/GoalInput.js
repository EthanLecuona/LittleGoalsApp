import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [text, setText] = useState('')

  function goalInput(textEntered) {
    setText(textEntered);
  }
  function addGoalHandler() {
    props.addGoal(text)
    setText('')
  }

  return (

    
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/Images/goal.png')}/>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Goal!' 
          onChangeText={goalInput}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title='Add goal!' color='#5e0acc'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color={'#f31282'} onPress={props.onCancel}/>  
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 4,
    paddingTop: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    margin: 4,
    color: '#120438',
    backgroundColor: '#e4d0ff', 
  }, 
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
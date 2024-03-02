import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
      <View style={styles.goalItem} key={props.id}>
        <Pressable 
          style={({pressed}) => [
            styles.pressable, 
            pressed ? styles.pressed : {}
          ]}
          android_ripple={{color: '#cccccc'}} 
          onPress={props.onDeleteGoal.bind(this, props.id)}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>  
    )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#5e0acc',
    overflow: 'hidden', 
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1, 
    
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressed: {
    opacity: 0.5
  },
})
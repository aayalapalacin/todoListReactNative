import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    paddingTop: 40,
    backgroundColor: "#333",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"flex-end"
},
boxOne:{
  backgroundColor:"violet",
  padding: 10,
    flex: 1,
},
boxTwo:{
  backgroundColor:"blue",
  padding: 20,
  flex: 1,
},
boxThree:{
  backgroundColor:"gold",
  padding: 30,
  flex: 1,
},
boxFour:{
  backgroundColor:"red",
  padding: 40,
  flex: 1,
},
})
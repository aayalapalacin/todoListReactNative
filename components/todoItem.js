import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(item, "id");
        pressHandler(item.key);
      }}
    >
      <View style={styles.item}>
        <AntDesign style={styles.trash} name="delete" size={28} color="#333" />
        <Text style={styles.itemTxt}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTxt: {
    marginLeft: 10,
  },
  trash: {},
});

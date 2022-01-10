import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const TaskBar = () => {
  return (
    <View style={styles.backgria}>
      <TouchableOpacity>
        <Image source={require("../../assets/Home.png")} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../../assets/Search.png")} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require("../../assets/Wallet.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../assets/Category.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgria: {
    backgroundColor: "#20232B",
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 44,
  },
});

export default TaskBar;

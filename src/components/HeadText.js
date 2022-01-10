import React from "react";
import { StyleSheet, Text, View, Image, _Image } from "react-native";

const name = "Nika";

const HeadText = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.TextStyle}> Welcome Back</Text>
        <Text style={styles.nameTextStyle}> {name}</Text>
      </View>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/Notification.png.png")}
      />
    </View>
  );
};

export default HeadText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 24,
  },

  TextStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  imageStyle: {
    width: 26,
    height: 26,
  },
  nameTextStyle: { color: "#DEF86F", fontSize: 20, fontWeight: "bold" },
});

import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const AddedCards = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollContainer}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../assets/cardOne.png")}
        />
        <Image
          style={styles.cardInfo}
          source={require("../../assets/visa.png")}
        />

        <Text style={styles.cardInfo1}>****8898</Text>

        <Text style={styles.cardInfo2}>$50 288</Text>

        <Image
          style={styles.imageStyle}
          source={require("../../assets/cardTwo.png")}
        />
        <Image
          style={styles.cardInfo3}
          source={require("../../assets/visa.png")}
        />
        <Text style={styles.cardInfo4}>****8877</Text>
        <Text style={styles.cardInfo5}>$10 200</Text>
      </ScrollView>
    </View>
  );
};

export default AddedCards;

const styles = StyleSheet.create({
  container: { backgroundColor: "#191C24", height: 184, width: "100%" },

  scrollContainer: {
    flexDirection: "row",
  },

  imageStyle: {
    height: 128,
    width: 212,
    marginHorizontal: 18,
    alignSelf: "center",
  },

  cardInfo: {
    position: "absolute",
    bottom: 0,
    top: 40,
    left: 40,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  cardInfo1: {
    position: "absolute",
    color: "white",
    bottom: 0,
    top: 120,
    left: 40,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  cardInfo2: {
    position: "absolute",
    color: "white",
    bottom: 0,
    top: 120,
    left: 160,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  cardInfo3: {
    position: "absolute",
    // color: "white",
    bottom: 0,
    top: 40,
    left: 290,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  cardInfo4: {
    position: "absolute",
    color: "white",
    bottom: 0,
    top: 120,
    left: 290,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  cardInfo5: {
    position: "absolute",
    color: "white",
    bottom: 0,
    top: 120,
    left: 410,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

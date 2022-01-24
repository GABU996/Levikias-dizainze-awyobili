import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const DATA = [
  {
    cardNumber: "****8898",
    amount: "50 288",
    cardImage: require("../../assets/cardOne.png"),
    visaImage: require("../../assets/visa.png"),
    wireLessConnectImage: require("../../assets/Group.png"),
  },
  {
    cardNumber: "****8877",
    amount: "20 288",
    cardImage: require("../../assets/cardTwo.png"),
    visaImage: require("../../assets/visa.png"),
    wireLessConnectImage: require("../../assets/Group.png"),
  },
  {
    cardNumber: "****8898",
    amount: "50 288",
    cardImage: require("../../assets/cardOne.png"),
    visaImage: require("../../assets/visa.png"),
  },
  {
    cardNumber: "****8898",
    amount: "50 288",
    cardImage: require("../../assets/cardOne.png"),
    visaImage: require("../../assets/visa.png"),
  },
  {
    cardNumber: "****8898",
    amount: "50 288",
    cardImage: require("../../assets/cardOne.png"),
    visaImage: require("../../assets/visa.png"),
  },
];
const { width, height } = Dimensions.get("window");
const AddedCards = () => {
  const [xOffset, setXOffset] = useState(0);
  const scrollRef = useRef(null);
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        onScrollEndDrag={(e) => {
          console.log(">>>>>>>>>>>>>>", e.nativeEvent.targetContentOffset);

          setXOffset(
            e.nativeEvent.targetContentOffset.x < 0
              ? 0
              : e.nativeEvent.targetContentOffset.x
          );
        }}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scrollContainer}
        decelerationRate={0}
        scrollEventThrottle={16}
        disableIntervalMomentum
        snapToInterval={220}
        // snapToAlignment={"center"}
      >
        {DATA.map((item, index) => {
          return (
            <View key={index} style={{}}>
              <Image style={styles.imageStyle} source={item.cardImage} />
              <Image style={styles.cardInfo} source={item.visaImage} />
              <Text style={styles.cardInfo1}>{item.cardNumber}</Text>
              <Text style={styles.cardInfo2}>${item.amount}</Text>
              <Image
                source={item.wireLessConnectImage}
                style={styles.wireLessStyle}
              />
            </View>
          );
        })}
        {/* <Image
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

        <Image
          style={styles.imageStyle}
          source={require("../../assets/cardTwo.png")}
        />
        <Image
          style={styles.cardInfo3}
          source={require("../../assets/visa.png")}
        />
        <Text style={styles.cardInfo4}>****8877</Text>
        <Text style={styles.cardInfo5}>$10 200</Text> */}
      </ScrollView>
      <View
        style={{ marginTop: 24, alignSelf: "center", flexDirection: "row" }}
      >
        {DATA.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                height: 6,
                width: 6,
                borderRadius: 6,
                backgroundColor: index * 220 === xOffset ? "#DEF86F" : "grey",
                marginHorizontal: 6,
              }}
            ></View>
          );
        })}
      </View>
    </View>
  );
};

export default AddedCards;

const styles = StyleSheet.create({
  container: { backgroundColor: "#191C24", paddingVertical: 30, width: "100%" },

  scrollContainer: {
    flexDirection: "row",
  },

  imageStyle: {
    height: 128,
    width: 212,
    marginHorizontal: 18,
    alignSelf: "center",
    position: "relative",
    // marginTop: 20,
  },

  cardInfo: {
    position: "absolute",
    bottom: 0,
    top: 15,
    left: 40,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  cardInfo1: {
    position: "absolute",
    color: "white",
    bottom: 0,
    top: 100,
    left: 40,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  cardInfo2: {
    position: "absolute",
    color: "white",
    bottom: 0,
    top: 100,
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
  wireLessStyle: {
    position: "absolute",
    top: 15,
    bottom: 0,
    left: 200,
    right: 0,
  },
});

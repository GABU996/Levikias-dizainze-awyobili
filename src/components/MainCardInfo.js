import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

let ballance = 60.488;

const width = Dimensions.get("screen").width;

const MainCardInfo = () => {
  return (
    <View
      style={{
        alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <View
        style={{
          width: "100%",

          justifyContent: "center",
          alignItems: "center",
          height: ((width - 36) / 14) * 5,
          paddingHorizontal: 18,
        }}
      >
        <Image
          resizeMode="cover"
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/mainCard.png")}
        />
        <View style={styles.container}>
          <View style={styles.leftSide}>
            <View>
              <Text> Total Balance</Text>
            </View>
            <View style={styles.amountStyle}>
              <Text style={styles.amountSing}>$</Text>
              <Text style={styles.amountSing}>{ballance}</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.picker}
              resizeMode="cover"
              source={require("../../assets/Grupia.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainCardInfo;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  leftSide: {
    justifyContent: "space-around",

    height: "100%",
  },

  textStyle: {},

  amountStyle: {
    flexDirection: "row",
  },
  amountSing: {
    fontSize: 24,
    fontWeight: "bold",
  },
  picker: {
    marginTop: 55,
  },
});

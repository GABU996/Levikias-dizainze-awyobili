import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const transferer1 = "Blatata";

const Transactions = () => {
  const swipeRight = () => {
    return (
      <View style={styles.shareBackground}>
        <Image
          style={styles.Sheria}
          source={require("../../assets/Upload.png")}
        />
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.mainText}>Transactions</Text>

      <View>
        <Swipeable renderRightActions={swipeRight}>
          <View style={styles.transactionStories}>
            <View style={styles.avatarisSHidaFoni}>
              <Image source={require("../../assets/emoji.png")} />
            </View>
            <View style={styles.transferinfoTexts}>
              <View>
                <Text style={styles.transferer}>{transferer1}</Text>
                <Text style={styles.date}>27 Dec, 5:43</Text>
              </View>
              <View>
                <Text style={styles.amountPlus}>+ $20 900</Text>
              </View>
            </View>
          </View>
        </Swipeable>
        <Swipeable renderRightActions={swipeRight}>
          <View style={styles.transactionStories}>
            <View style={styles.avatarisSHidaFoni}>
              <Image
                style={styles.epli}
                source={require("../../assets/eplexi.png")}
              />
            </View>
            <View style={styles.transferinfoTexts}>
              <View>
                <Text style={styles.transferer}>Apple</Text>
                <Text style={styles.date}>27 Dec, 5:20</Text>
              </View>
              <View>
                <Text style={styles.amountMinus}>- $2 000</Text>
              </View>
            </View>
          </View>
        </Swipeable>
        <Swipeable renderRightActions={swipeRight}>
          <View style={styles.transactionStories}>
            <View style={styles.avatarisSHidaFoni}>
              <Image source={require("../../assets/netflix.png")} />
            </View>
            <View style={styles.transferinfoTexts}>
              <View>
                <Text style={styles.transferer}>Netflix</Text>
                <Text style={styles.date}>27 Dec, 5:07</Text>
              </View>
              <View>
                <Text style={styles.amountMinus}>- $150</Text>
              </View>
            </View>
          </View>
        </Swipeable>
        <Swipeable renderRightActions={swipeRight}>
          <View style={styles.transactionStories}>
            <View style={styles.avatarisSHidaFoni}>
              <Image
                style={styles.khimsho}
                source={require("../../assets/khimsho.png")}
              />
            </View>
            <View style={styles.transferinfoTexts}>
              <View>
                <Text style={styles.transferer}>Ximsho</Text>
                <Text style={styles.date}>27 Dec, 4:20</Text>
              </View>
              <View>
                <Text style={styles.amountPlus}>+ $20 900</Text>
              </View>
            </View>
          </View>
        </Swipeable>
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20232B",
  },
  mainText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 18,
  },

  transactionStories: {
    backgroundColor: "#191C24",
    height: 70,

    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  avatarisSHidaFoni: {
    backgroundColor: "#20232B",
    height: 57,
    width: 57,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    marginVertical: 8,
  },

  transferer: {
    color: "white",
    fontSize: 17,
    fontWeight: "700",
  },

  date: {
    color: "gray",
    fontWeight: "400",
  },

  amountPlus: {
    color: "#DEF86F",
    fontSize: 18,
    fontWeight: "700",
  },

  amountMinus: {
    color: "#F36C65",
    fontSize: 18,
    fontWeight: "700",
  },

  transferinfoTexts: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    width: "70%",
  },

  epli: {
    height: 30,
    width: 30,
  },

  khimsho: {
    height: 30,
    width: 30,
  },
  shareBackground: {
    backgroundColor: "#191C24",
    height: 70,
    width: 70,
    marginRight: 30,
    marginTop: 8,
    borderRadius: 16,
  },
  Sheria: {
    alignSelf: "center",

    marginTop: 22,
  },
});

import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TaskBar from "../components/taskBar";
import HeadText from "../components/HeadText";
import Constants from "expo-constants";
import MainCardInfo from "../components/MainCardInfo";
import AddedCards from "../components/AddedCards";
import Transactions from "../components/Transactions";
import { StatusBar } from "expo-status-bar";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}></View>

      <ScrollView>
        <HeadText />
        <View style={styles.mainCardContainer}>
          <MainCardInfo />
        </View>
        <View style={styles.addCardContainer}>
          <AddedCards />
        </View>
        <Transactions />
      </ScrollView>
      <TaskBar style={styles.taskia} />
      {/* <StatusBar translucent /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#20232B",
  },
  taskia: {
    position: "absolute",
  },
  head: {
    width: "100%",
    height: 30,
    marginTop: STATUSBAR_HEIGHT,

    backgroundColor: "#20232B",
  },

  mainCardContainer: {
    // paddingHorizontal: 8,
    paddingTop: 40,
  },
  addCardContainer: {
    marginVertical: 35,
  },
});

export default HomeScreen;

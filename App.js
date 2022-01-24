import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/navigation";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [state, setState] = useState(false);
  let [fontsLoaded] = useFonts({
    pirveli: require("./assets/fonts/Sk-Modernist-Bold.ttf"),
    Meore: require("./assets/fonts/Sk-Modernist-Mono.ttf"),
    Mesame: require("./assets/fonts/Sk-Modernist-Regular.ttf"),
  });

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     // Load a font `Montserrat` from a static resource
  //     pirveli: require("./assets/fonts/Sk-Modernist-Bold.ttf"),
  //     Meore: require("./assets/fonts/Sk-Modernist-Mono.ttf"),
  //     Mesame: require("./assets/fonts/Sk-Modernist-Regular.ttf"),

  //     // Any string can be used as the fontFamily name. Here we use an object to provide more control
  //     // "Montserrat-SemiBold": {
  //     //   uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  //     //   display: Font.FontDisplay.FALLBACK,
  //     // },
  //   });
  //   setState(true);
  // };
  // useEffect(() => {
  //   loadFonts();
  // }, []);
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Navigation />
      </View>
    );
  } else {
    return <Text>dadadada</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

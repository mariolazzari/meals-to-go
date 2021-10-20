import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";

const App = () => {
  return (
    <>
      <StatusBar />

      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar />
        </View>

        <View style={styles.listContainer}>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    padding: 16,
    backgroundColor: "blue",
    flex: 1,
  },
});

export default App;

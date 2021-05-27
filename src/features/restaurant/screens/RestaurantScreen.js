import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../component/RestaurantInfoCard";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar placeholder="search now" />
      </View>
      <View style={styles.contentContainer}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};
export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
  },
  contentContainer: {
    backgroundColor: "tomato",
    width: "100%",
    flex: 1,
  },
});

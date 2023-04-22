import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const marketList = [
  {
    title: "ABC Market",
    address: "ABC Market, New York, NY 10001",
  },
  {
    title: "DEF Market",
    address: "DEF Market, New York, NY 10001",
  }
];

const Market = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Market</Text>
      {marketList.map((market) => {
        return (
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
              paddingVertical: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around",
              marginBottom: 20,
            }}
            key={market.title}
          >
            <Image
              source={require("../assets/store.png")}
              style={{ width: 50, height: "100%", marginBottom: 30 }}
            />
            <View>
              <Text>{market.title}</Text>
              <Text>{market.address}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c9e9f6",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Market;

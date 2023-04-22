import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const FertilizerInfo = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: route.params.image }}
        style={{ width: 200, height: 200, marginBottom: 30 }}
      />
      <Text style={styles.headerText}>{route.params.title}</Text>
      {
        Object.keys(route.params.info).map((key) => {
          return (
            <Text key={key} style={{paddingVertical:2}}>
              {key}: {route.params.info[key]}
            </Text>
          );
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c9e9f6",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    }
});

export default FertilizerInfo;

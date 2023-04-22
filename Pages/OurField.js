import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const OurField = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/fields.png")}
        style={{ width: 200, height: 200, marginBottom: 30 }}
      />

      <Text style={styles.headerText}>Phone: +911234567890</Text>
      <Text style={styles.headerText}>Address: 123, ABC Street</Text>
      <Text style={styles.headerText}>Emai: abc@gmail.com</Text>
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
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default OurField;

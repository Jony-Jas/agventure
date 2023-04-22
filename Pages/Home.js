import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BackGroundImage from "../assets/bg.jpg";
import SeedImage from "../assets/seeds.png";
import FertilizerImage from "../assets/fertilizer.png";
import MarketImage from "../assets/market.png";
import FieldImage from "../assets/fields.png";

const content = [
  {
    title: "Seeds",
    onPress: (navigation) => navigation.navigate("Seeds"),
    image: SeedImage,
  },
  {
    title: "Fertilizer",
    onPress: (navigation) => navigation.navigate("Fertilizer"),
    image: FertilizerImage,
  },
  {
    title: "Market",
    onPress: (navigation) => navigation.navigate("Market"),
    image: MarketImage,
  },
  {
    title: "Help",
    onPress: (navigation) => navigation.navigate("Help"),
    image: FieldImage,
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={BackGroundImage} style={styles.backgroundImage}></Image>
      <Text style={styles.headerText}>AGVENTURE</Text>
      <View style={styles.contentContainer}>
        {content.map((item) => {
          return (
            <View style={styles.content} key={item.title}>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Text>
              <Button title="open" onPress={() => item.onPress(navigation)} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:"Roboto",
    bottom: 60,
  },
  content: {
    width: 140,
    height: 140,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 50,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal:10
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
});

export default Home;

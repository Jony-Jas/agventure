import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import BackGroundImage from "../assets/bg.jpg";

const content = [
  {
    title: "Wheat",
    onPress: (navigation) =>
      navigation.navigate("SeedInfo", {
        title: content[0].title,
        image: content[0].image,
        info: content[0].info,
      }),
    image:
      "https://tiimg.tistatic.com/fp/1/005/094/organic-fresh-wheat-seeds-924.jpg",
    info: {
      "Soil Type": "Alluvial",
      "Soil PH": "6.5-7.5",
      "Soil Humidity": "Medium",
      "Soil Temperature": "Medium",
      Climate: "All",
      "Crop Duration": "120-150 days",
      "Crop Yield": "2-3 quintals per acre",
    },
  },
  {
    title: "Paddy",
    onPress: (navigation) =>
      navigation.navigate("SeedInfo", {
        title: content[1].title,
        image: content[1].image,
        info: content[1].info,
      }),
    image:
      "https://www.world-grain.com/ext/resources/2022/10/25/Rice_AdobeStock_64819529_E.jpg?height=667&t=1666706505&width=1080",
    info: {
      "Soil Type": "Alluvial",
      "Soil PH": "6.5-7.5",
      "Soil Humidity": "Medium",
      "Soil Temperature": "Medium",
      Climate: "All",
      "Crop Duration": "120-150 days",
      "Crop Yield": "2-3 quintals per acre",
    },
  },
  {
    title: "Maize",
    onPress: (navigation) =>
      navigation.navigate("SeedInfo", {
        title: content[2].title,
        image: content[2].image,
        info: content[2].info,
      }),
    image: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
    info: {
      "Soil Type": "Alluvial",
      "Soil PH": "6.5-7.5",
      "Soil Humidity": "Medium",
      "Soil Temperature": "Medium",
      Climate: "All",
      "Crop Duration": "120-150 days",
      "Crop Yield": "2-3 quintals per acre",
    },
  },
  {
    title: "Bajra",
    onPress: (navigation) =>
      navigation.navigate("SeedInfo", {
        title: content[3].title,
        image: content[3].image,
        info: content[3].info,
      }),
    image:
      "https://cdn.shopify.com/s/files/1/0405/8215/2352/articles/BAJRA.jpg?v=1658379006",
    info: {
      "Soil Type": "Alluvial",
      "Soil PH": "6.5-7.5",
      "Soil Humidity": "Medium",
      "Soil Temperature": "Medium",
      Climate: "All",
      "Crop Duration": "120-150 days",
      "Crop Yield": "2-3 quintals per acre",
    },
  },
  {
    title: "Ragi",
    onPress: (navigation) =>
      navigation.navigate("SeedInfo", {
        title: content[4].title,
        image: content[4].image,
        info: content[4].info,
      }),
    image:
      "https://cdn.shopify.com/s/files/1/0405/8215/2352/articles/ragi1.jpg?v=1659348826",
    info: {
      "Soil Type": "Alluvial",
      "Soil PH": "6.5-7.5",
      "Soil Humidity": "Medium",
      "Soil Temperature": "Medium",
      Climate: "All",
      "Crop Duration": "120-150 days",
      "Crop Yield": "2-3 quintals per acre",
    },
  },
  {
    title: "Barley",
    onPress: (navigation) =>
      navigation.navigate("SeedInfo", {
        title: content[5].title,
        image: content[5].image,
        info: content[5].info,
      }),
    image:
      "https://bakerpedia.com/wp-content/uploads/2018/11/Barley_baking-ingredients-e1543524143272-400x400.jpg",
    info: {
      "Soil Type": "Alluvial",
      "Soil PH": "6.5-7.5",
      "Soil Humidity": "Medium",
      "Soil Temperature": "Medium",
      Climate: "All",
      "Crop Duration": "120-150 days",
      "Crop Yield": "2-3 quintals per acre",
    },
  },
];

const renderItem = ({ item }, navigation) => {
  return (
    <View style={styles.content} key={item.title}>
      <Image
        source={{ uri: `${item.image}` }}
        style={{ width: "100%", height: "80%" }}
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
};

const Seeds = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={BackGroundImage} style={styles.backgroundImage}></Image>
      <ScrollView style={styles.contentContainer}>
        <FlatList
          data={content}
          renderItem={(item) => renderItem(item, navigation)}
          keyExtractor={(item) => item.title}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: 140,
    height: 140,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  contentContainer: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
});

export default Seeds;

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
    title: "Azotobacter",
    onPress: (navigation) =>
      navigation.navigate("Fertilizer Info", {
        title: content[0].title,
        image: content[0].image,
        info: content[0].info,
      }),
    image:
      "https://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2022-07/Liquid-Consortia-Category-Page.jpg?VersionId=0kzycwWqNIoFWV0bLONQM0V9DZC0.XpX",
    info: {
      "Name ": "Azotobacter",
      "Type ": "Nitrogen Fixing Bacteria",
      "Plants ": "Wheat, Maize, Bajra, Ragi, Barley",
      "Dose ": "1-2 ml/Litre",
      "Benefits ": "Increases yield by 10-15%",
    },
  },
  {
    title: "Seagrow",
    onPress: (navigation) => navigation.navigate("Fertilizer Info"),
    image:
      "https://www.hydra-int.com/user/products/SeaGrow/Large/SeaGrow-both%20sizes%20new.jpg",
  },
  {
    title: "Urea",
    onPress: (navigation) => navigation.navigate("SeedInfo"),
    image: "https://m.media-amazon.com/images/I/61BVMXL2MML._SX466_.jpg",
  },
  {
    title: "PSB",
    onPress: (navigation) => navigation.navigate("Fertilizer Info"),
    image:
      "https://agribegri.com/productimage/2d3484ba02145a67aa7a07cfc85655c9-11-15-21-08-49-13.JPG",
  },
  {
    title: "Rhizobium",
    onPress: (navigation) => navigation.navigate("Fertilizer Info"),
    image: "https://5.imimg.com/data5/LV/GV/MY-50787234/rhizobium-500x500.jpg",
  },
  {
    title: "DAP",
    onPress: (navigation) => navigation.navigate("Fertilizer Info"),
    image:
      "https://gogarden.co.in/wp-content/uploads/2018/04/Go-Garden-All-Purpose-DAP-Fertilizers-Water-Soluble-for-Plants-and-Gardening-1.jpg",
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

const Fertilizer = ({ navigation }) => {
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

export default Fertilizer;

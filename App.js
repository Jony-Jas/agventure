import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Pages/Home";
import SeedsPage from "./Pages/Seeds";
import Fertilizer from "./Pages/Fertilizer";
import OurField from "./Pages/OurField";
import Market from "./Pages/Market";
import SeedInfo from "./Pages/SeedInfo";
import FertilizerInfo from "./Pages/FertilizerInfo";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Seeds" component={SeedsPage} />
        <Stack.Screen name="Fertilizer" component={Fertilizer} />
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Help" component={OurField} />
        <Stack.Screen name="SeedInfo" component={SeedInfo} />
        <Stack.Screen name="Fertilizer Info" component={FertilizerInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

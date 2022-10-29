import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen() {
  const [colorArray, setColorArray] = useState([]);

  function renderItem({ item }) {
    // function renderItem({ red: 255, green: 0, blue: 0, id: "0" }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
    // return <BlockRGB red={255} green={0} blue={0} />;
  }

  function addColor() {
    setColorArray([
      // gives us a random color
      {
        red: Math.floor(Math.random() * 255), // "200"
        green: Math.floor(Math.random() * 255), // "55"
        blue: Math.floor(Math.random() * 255), // "145"
        id: colorArray.length.toString(), // "1"
      },
      // will add the previous array/list of colour
      ...colorArray,
    ]);
  }

  function resetColors() {
    setColorArray([]);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={addColor}
        style={{ height: 40, justifyContent: "center" }}
      >
        <Text>Add Color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={resetColors}
        style={{ height: 40, justifyContent: "center" }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
      <FlatList
        data={colorArray} // [ {red: 100}, {green: 100} ]
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

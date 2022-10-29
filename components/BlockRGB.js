import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BlockRGB(props) {
  console.log(props);
  const red = props.red;
  const green = props.green;
  const blue = props.blue;
  return (
    <View
      style={{
        backgroundColor: `rgb( ${red}, ${green}, ${blue} )`,
        padding: 30,
        width: "100%",
      }}
    ></View>
  );
}

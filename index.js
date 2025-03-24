//import libraries
import React from "react";
import { Text , Appregisrty }from "react-native";

//create component
const App = () => {
    return <Text> Merhaba Hoşgeldiniz</Text>;
};

//render component to screen
Appregisrty.registerComponent("HESAPKİTAP",  ()  => App );
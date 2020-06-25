import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
      <View>
        <Text style={styles.text}>HomeScreen1</Text>
        <Button
          title="Go to Components Demo"
          onPress={() => props.navigation.navigate('Components') }
        />
        <Button
          title="Go to List Demo"
          onPress={() => props.navigation.navigate('List') }
        />
        <Button
          title="Go to Image"
          onPress={() => props.navigation.navigate('Image') }
        />
      </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

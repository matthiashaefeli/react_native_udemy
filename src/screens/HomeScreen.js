import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Text style={styles.text}>HomeScreen1</Text>
        <Button
          title="Go to Components Demo"
          onPress={() => navigate('Components') }
        />
        <Button
          title="Go to List Demo"
          onPress={() => navigate('List') }
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

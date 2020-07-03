import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Text style={styles.text}>HomeScreen1</Text>
        <Button
          title="Go to Components Demo"
          onPress={() => navigation.navigate('Components') }
        />
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate('List') }
        />
        <Button
          title="Go to Image"
          onPress={() => navigation.navigate('Image') }
        />
        <Button
          title="Go to Counter"
          onPress={() => navigation.navigate('Counter') }
        />
        <Button
          title="Go to Color"
          onPress={() => navigation.navigate('Color') }
        />
        <Button
          title="Go to Square"
          onPress={() => navigation.navigate('Square') }
        />
        <Button
          title="Go to Name"
          onPress={() => navigation.navigate('Name') }
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

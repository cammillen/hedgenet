import React, { Component, useState } from "react";
import { StyleSheet, View, Switch } from "react-native";

function CupertinoSwitch(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, props.style]}>
      <Switch
      onValueChange={toggleSwitch}
      value={isEnabled}
        thumbColor="#FFF"
        trackColor={{ true: "rgba(18,209,142,1)", false: "rgba(53,56,63,1)" }}
        disabled={false}
        style={styles.switch1}
      ></Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch1: {
    width: 45,
    height: 22
  }
});

export default CupertinoSwitch;

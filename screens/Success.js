import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { green } from 'ansi-colors';

import {YellowBox} from 'react-native';

class Success extends React.Component {
  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#2eb2d6",
          alignItems: "center",
          justifyContent: "center",
      }}>
        <Text style={{
            flexDirection: "row",
            // alignItems: "center",
            justifyContent: "center",
            flex: 1,
            fontSize: 25,
            fontWeight: "bold",
            // backgroundColor: "pink",
            color: "white",
            paddingLeft: 65,
            paddingBottom: 200,
        }}>
            Successfully Voted
        </Text>
        
      </View>
    );
  }
}

export default Success;
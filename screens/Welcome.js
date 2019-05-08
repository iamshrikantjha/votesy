import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class Welcome extends React.Component {
  render() {
    return (
      
      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Choose')}>
      <Image source={
        require('../assets/logo.png')
      }>

      </Image>
        
      </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;


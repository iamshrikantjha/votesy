import React, { Component } from 'react'
import { StyleSheet, Modal, Text, View, Image, TouchableOpacity, Alert,ActivityIndicator } from 'react-native';

import Loader from '../screens/Loader';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { white } from 'ansi-colors';


class Choose extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     loading: false,
        //     nextscreen: '',
        // }

        // this.letsani=()=>{
        //     console.log('Animation started')
        // }
        
    }

    
  
    render() {
        
    return (
      <View style={{
        flex: 1,
        flexDirection: "column",
      }}>
      <Loader
          loading={this.state.loading} />
      <View style={{
          flex: 1,
          flexDirection: "column",
        //   backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "center",

      }}>
        <Image source={
            require('../assets/logo.png')
        }>
        </Image>
        <Text style={{
            fontSize: 15,
            marginTop: 10,
        }}>
            Vote Now
        </Text>
      </View>
        <View style={{
            flex: 1,
            flexDirection: "column",
            // backgroundColor: "pink",
            alignItems: "center",
            padding: 20,
            }}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Register')}}>

                <View style={{
                flexDirection: "row",    
                width: 200,
                height: 50,
                backgroundColor: "#2eb2d6",
                borderRadius: 30,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
                elevation: 5,
            }}>
                <Text style={{
                    width: 100,
                    // alignItems: "center",
                    // backgroundColor: "orange",
                    flexDirection: "row",
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "white",
                    paddingLeft: 15,              
                }}>
                    Sign Up
                </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <View style={{
                flexDirection: "row",    
                width: 200,
                height: 50,
                borderColor: "#2eb2d6",
                borderWidth: 5,
                borderRadius: 30,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
                elevation: 5,
                marginTop: 20,
            }}>
                <Text style={{
                    width: 100,
                    // alignItems: "center",
                    // backgroundColor: "orange",
                    flexDirection: "row",
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#2eb2d6",
                    paddingLeft: 15,              
                }}>
                    Sign In
                </Text>
            </View>
            </TouchableOpacity>
      </View>
    </View>
    );
  }
}

export default Choose;


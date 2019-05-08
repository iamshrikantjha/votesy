import React, { Component } from 'react';
import { View, Text, Image, Button, ScrollView, Alert,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';


import VCard  from './VCard';
import * as firebase from 'firebase';

import {YellowBox} from 'react-native';
import Dashboard from './Dashboard';
// import console = require('console');

class Vote extends React.Component {
  constructor(props){
      super(props) 
      this.state = ({
            name:'',
      }) 
}
    bjp=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/BJP/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    cong=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/CONG/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    aap=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/AAP/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    bsp=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/BSP/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    cpi=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/CPI/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    jmm=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/JMM/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    mgp=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/MGP/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    npp=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/NPP/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    sp=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/SP/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    sad=()=>{
        console.log('Started voting')
        console.log(this.state.name)
        var name = this.state.name;
        var ref = firebase.database().ref('candid/SAD/votes');   
        ref.transaction(function(currentClicks, name) {
        // If node/clicks has never been set, currentRank will be `null`.
        console.log('Redirection Starts')
        // this.props.navigation.navigate('Dashboard');
        console.log('Redirection Ends')
        
        return (currentClicks || 0) + 1;
        });
        
    }

    writeVal = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
              console.log(user.uid);
              console.log('Write Start');
              var uid = user.uid;
              firebase.database().ref('user/' + uid ).update({
                voted : 1,
              });
              console.log('Write End');
            }
          
            // Do other things
          });
    }

    reDash = () => {
        this.props.navigation.navigate('Dashboard');
    }

    
  render() {
    YellowBox.ignoreWarnings(['Warning: ...']);
    return (
      <View style={{
          flex: 1,
      }}>
            <View style={{
                flex: 1,
                backgroundColor: "#94e3f7",
                flexDirection: "row",
                alignItems: "flex-end",
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "500",
                    color: "#2eb2d6",
                    marginBottom: 50,
                    marginLeft: 25,
                }}>
                    Which political party would you like to vote?
                </Text>

            </View>
            <View style={{
                flexDirection: "column",
                flex: 2,
                // backgroundColor: "pink",
                alignItems: "center",
                // elevation: 7,
            }}>
            
            <ScrollView showsVerticalScrollIndicator={false}>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='BJP' image={require('../assets/bjp.png')} onTouch={() => {this.bjp();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='CONG' image={require('../assets/cong.png')} onTouch={() => {this.cong();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='AAP' image={require('../assets/aap.jpg')} onTouch={() => {this.aap();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='BSP' image={require('../assets/bsp.jpeg')} onTouch={() => {this.bsp();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='CPI' image={require('../assets/cpi.png')} onTouch={() => {this.cpi();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='JMM' image={require('../assets/jmm.png')} onTouch={() => {this.jmm();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='MGP' image={require('../assets/mgp.png')} onTouch={() => {this.mgp();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='NPP' image={require('../assets/npp.jpg')} onTouch={() => {this.npp();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='SP' image={require('../assets/sp.png')} onTouch={() => {this.sp();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            <VCard name='SAD' image={require('../assets/sad.jpg')} onTouch={() => {this.sad();this.writeVal();this.reDash()}}/>
            </TouchableHighlight>
            
            
            </ScrollView>
            <View style={{
                height: 30,
            }}>
            </View>   
                

            </View>
      </View>
    );
  }
}

export default Vote;

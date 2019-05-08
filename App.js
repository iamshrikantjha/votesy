import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import * as firebase from 'firebase';

import Welcome from "../votesy/screens/Welcome";
import Login from '../votesy/screens/Login';
import Register from '../votesy/screens/Register';
import Choose from '../votesy/screens/Choose';
import Dashboard from '../votesy/screens/Dashboard';
import Vote from '../votesy/screens/Vote';
import VCard from '../votesy/screens/VCard';
import Success from '../votesy/screens/Success';
import Results from '../votesy/screens/Results';
import Loader from './screens/Loader';

console.disableYellowBox = true;
//firebase configuration
const firebaseConfig = {
   // Initialize Firebase
  //  apiKey: "AIzaSyBRfiYwOC_ByXoOBFtHrefA1uhjaPF-YXI",
  //  authDomain: "final-year-29dcd.firebaseapp.com",
  //  databaseURL: "https://final-year-29dcd.firebaseio.com",
  //  projectId: "final-year-29dcd",
  //  storageBucket: "final-year-29dcd.appspot.com",
  //  messagingSenderId: "287725621632",
  //  appId: "1:287725621632:web:5f3e9ecb92435e40"
   
    apiKey: "AIzaSyB1RqRvYcH2Vb0f81aPPBUfmj9rYKtOv6Y",
    authDomain: "react-plan-566fc.firebaseapp.com",
    databaseURL: "https://react-plan-566fc.firebaseio.com",
    projectId: "react-plan-566fc",
    storageBucket: "react-plan-566fc.appspot.com",
    messagingSenderId: "1094224639253"
}

firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator({
Welcome: {
  screen: Welcome,
  navigationOptions: () => ({
    header: null,
  }),
},
Choose: {
  screen: Choose,
  navigationOptions: () => ({
    header: null,
  }),
},
Register: {
  screen: Register,
  navigationOptions: () => ({
    header: null,
  }),
},
Login: {
  screen: Login,
  navigationOptions: () => ({
    header: null,
  }),
},

  Dashboard: {
    screen: Dashboard,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Results: {
    screen: Results,
    navigationOptions: () => ({
      header: null,
    }),
  },  
  Vote: {
    screen: Vote,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Success: {
    screen: Success,
    navigationOptions: () => ({
      header: null,
    }),
  },

});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

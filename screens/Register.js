import React, { Component } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native';

import { Ionicons, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

import * as firebase from 'firebase';

import {YellowBox} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            username: '',
            email: '',
            password: '',
        })
    }

    signUpUser = (username, email, password) => {
        this.reSign = () => {
            this.props.navigation.navigate('Login')
        }
        this.reReg = () => {
            this.props.navigation.navigate('Register')
        }
        try {
            if(this.state.password.length<6)
            {
                alert("Please enter atleast 6 characters");
                return;
            }

            else if(this.state.email==0)
            {
                alert('Please enter vaild email address')
            }

            else if(this.state.username==0)
            {
                alert('Please enter vaild username')
            }

            else {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(()=>Alert.alert('Account Successfully Created'))
                .catch(error => {   
                    switch(error.code) {
                      case 'auth/email-already-in-use':
                            Alert.alert('Email already in use !')
                            this.reReg();
                            break;
                       case 'auth/invalid-email':
                            Alert.alert('Invalid Email Address');
                            break;    
                   }
                 })

            // firebase.auth().signOut().then(function() {
            //     console.log('Logged Out');
            //     // navigate('Login'); 
            //   }, function(error) {
            //     console.log('Error');
            //   });
                firebase.auth().onAuthStateChanged((user) => {
                    if (user != null) {
                    console.log(user.email);
                    console.log(user.uid);
                    var uid = user.uid;
                    var email = user.email;
                    console.log('Mission one');
                    firebase.database().ref('user/' + uid).set({
                        name: username,
                        uid : uid,
                        email: email,
                        voted: 0,
                        // return;
                    });
                    this.reSign();
                    console.log(user.email);
                    console.log(user.uid);
                    }
                    return;
            });
            }
            

        }catch(err){
            alert("Error : ", err);
         }
    }

    

    // logInUser = (email, password) => {
        
    // }

  render() {
    YellowBox.ignoreWarnings(['Warning: ...']);
    return (
      
                // <KeyboardAvoidingView style={{
                //     flex: 1,
                //     // backgroundColor: "#94e3f7"
                // }} behavior="padding" enabled>
       <View style={{
          flex: 1,
        //   flexDirection: "column",
      }}> 
      {/* <KeyboardAwareScrollView style={{
          flex: 1,
      }}>  */}
            

            <View style={{
                flex:1,
                backgroundColor: "#94e3f7",
                alignItems: "center",
                //   justifyContent: "center",
                
            }}>
                <Image style={{
                    // backgroundColor: "black",
                    marginTop: 110,
                }}
                    source={require('../assets/logo.png')}>
                    
                </Image>
               
            </View>
            <View style={{
                flex:1,
                alignItems: "center",
                flexDirection: "column",
                // backgroundColor: "#eaeff7",
            }}>

            </View>
            <View
                style={{
                    // justifyContent: "center",
                    // alignItems: "center",
                    marginTop: 250,
                    alignSelf: "center",
                    position: "absolute"
                }}
                >
               


            <View style={{
                width: 300,
                height: 400,
                flexDirection: "column",
                backgroundColor: "white",
                alignItems: "center",
                borderRadius: 8,
                elevation: 7,
            }}>
                <Text style={{
                        width: 100,
                        height: 50,
                        backgroundColor: "white",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#458ac9",
                        marginTop: 20,
                    }}>
                        Sign Up
                    </Text>
                    
                    {/* Username */}
                    <View style={{
                        flexDirection: "row",
                        // backgroundColor: "grey",
                        borderRadius: 20,
                        borderColor: "#458ac9",
                        borderWidth: 2,
                        width: 250,
                        height: 40,
                        alignItems: "center",
                        marginTop: 20,

                    }}>
                        <AntDesign name="user" size={20} color="#458ac9" style={{
                            // paddingLeft: 50
                            // backgroundColor: "blue",
                            paddingLeft: 10,
                            

                        }}/>
                       
                        <TextInput
                            placeholder="Username"
                            style={{
                                // backgroundColor: "pink",
                                flex: 1,
                                paddingLeft: 15,     
                            }}
                            autoCapitalize="none"
                            autoCorrect = {false}
                            onChangeText={(username)=>this.setState({username})}
                        />
                    </View>


                    {/* Email */}
                    <View style={{
                        flexDirection: "row",
                        // backgroundColor: "grey",
                        borderRadius: 20,
                        borderColor: "#458ac9",
                        borderWidth: 2,
                        width: 250,
                        height: 40,
                        alignItems: "center",
                        marginTop: 20,

                    }}>
                        <MaterialIcons name="email" size={20} color="#458ac9" style={{
                            // paddingLeft: 50
                            // backgroundColor: "blue",
                            paddingLeft: 10,
                            

                        }}/>
                       
                        <TextInput
                            placeholder="Email"
                            style={{
                                // backgroundColor: "pink",
                                flex: 1,
                                paddingLeft: 15,     
                            }}
                            autoCapitalize="none"
                            autoCorrect = {false}
                            onChangeText={(email)=>this.setState({email})}
                        />
                    </View>


                    {/* Password */}
                    <View style={{
                        flexDirection: "row",
                        // backgroundColor: "grey",
                        borderRadius: 20,
                        borderColor: "#458ac9",
                        borderWidth: 2,
                        width: 250,
                        height: 40,
                        alignItems: "center",
                        marginTop: 20,

                    }}>
                        <Entypo name="lock" size={20} color="#458ac9" style={{
                            // paddingLeft: 50
                            // backgroundColor: "blue",
                            paddingLeft: 10,
                            

                        }}/>
                       
                        <TextInput
                            placeholder="Password"
                            style={{
                                // backgroundColor: "pink",
                                flex: 1,
                                paddingLeft: 15,     
                            }}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect = {false}
                            onChangeText={(password)=>this.setState({password})}    
                        />
                    </View>

                    {/* Button */}
                    <TouchableOpacity onPress={()=> {this.signUpUser(this.state.username, this.state.email, this.state.password)}}>
                    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}></TouchableOpacity> */}
                    <View style={{
                        flexDirection: "row",    
                        width: 250,
                        height: 40,
                        backgroundColor: "#2eb2d6",
                        borderRadius: 30,
                        marginTop: 40,
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
                            fontSize: 15,
                            color: "white",
                            paddingLeft: 15,              
                        }}>
                            Sign Up
                        </Text>
                    </View>
                    </TouchableOpacity>
                    

            </View>
            
        </View>       
       {/* </KeyboardAwareScrollView>   */}
      </View>
    )
  }
}

export default Register;
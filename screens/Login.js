import React, { Component } from 'react';
import { View, Text, Image, TextInput, KeyboardAvoidingView,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Alert } from 'react-native';

import { Ionicons, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

import * as firebase from 'firebase';

import {YellowBox} from 'react-native';
// import Dashboard from './Dashboard';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: '',
        })
    }

    // signUpUser = (email, password) => {

    // }
    

    logInUser = (email, password) => {
        this.reSign=()=>{
            this.props.navigation.navigate(Login)
        }
        try {
            if(this.state.password.length<6)
            {
                alert("Please enter atleast 6 characters")
                return;
            }



            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(()=>{this.props.navigation.navigate('Dashboard')})
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            }
            else if (errorCode === 'auth/invalid-email')
            {
                alert('Invalid email');
            } 
            else if (errorCode === 'auth/user-disabled')
            {
                alert('User disabled');
            } 
            else if (errorCode === 'auth/user-not-found')
            {
                alert('User not found');
            } 
            else if (errorCode === 'auth/wrong-password')
            {
                alert('Wrong Password');
            }
            
            else {
                alert(errorMessage);
            }
            console.log(error);
            });
            

            firebase.auth().signInWithEmailAndPassword (email, password).then((user) => {
                // console.log(user);
                // debugger;
                this.props.navigation.navigate('Dashboard')

                
                return;
            })
            .catch(error => {   
                switch(error.code) {
                   case 'auth/invalid-email':
                        Alert.alert('Invalid Email Address');
                        break;    
               }
             })
           

        } catch (error) {
            alert("Error : ", err);
        }
    }


  render() {
    YellowBox.ignoreWarnings(['Warning: ...']);
    return (
      <View style={{
          flex: 1,
          flexDirection: "column",
      }}>
            

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
                        Sign In
                    </Text>

                    {/* Username */}
                    {/* <View style={{
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
                     */}
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
                            onChangeText={(email)=>this.setState({email})}
                        />
                    </View>

                    {/* Password */}
                    <View style={{
                        flexDirection: "row",
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
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Password"
                            style={{
                                // backgroundColor: "pink",
                                flex: 1,
                                paddingLeft: 15,     
                            }}
                            onChangeText={(password)=>this.setState({password})}
                        />
                    </View>

                    {/* Button */}
                    <TouchableOpacity onPress={() => this.logInUser(this.state.email, this.state.password)}>
                    <View style={{
                        flexDirection: "row",    
                        width: 250,
                        height: 45,
                        borderColor: "#2eb2d6",
                        borderWidth: 5,
                        borderRadius: 30,
                        marginTop: 35,
                        alignItems: "center",
                        justifyContent: "center",
                        elevation: 5,
                        }}>
                        <Text 
                            style={{
                                    width: 100,
                                    // alignItems: "center",
                                    // backgroundColor: "orange",
                                    flexDirection: "row",
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    color: "#2eb2d6",
                                    paddingLeft: 15,              
                                }}>
                                    Sign In
                                </Text>
                        </View>
                    </TouchableOpacity>
            </View>
            
        </View>       
      
            

      </View>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import { Text, View,
    TouchableHighlight,Alert, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Dimensions  } from 'react-native';

import * as firebase from 'firebase';

import {YellowBox} from 'react-native';

// import { Vote } from './Vote';
import {
    PieChart,
  } from 'react-native-chart-kit'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
{

        this.checkAdmin=()=>{
                ele = () => {
                    this.props.navigation.navigate('Results');
                }
                firebase.database().ref('user/').once('value', function(snapshot){
                    console.log(snapshot.val().admin)
                    if (snapshot.val().admin==0)
                    {
                        this.ele();
                        return;
                    }
                    else if(snapshot.val().admin==1){
                        console.log("Alert is about to come")
                        alert("Results not published yet.");
                        return;
                    }
            
            })
        }
    // Election Page Redirection
    



    
    this.checkvote = () => {
        navy = () => {
            this.props.navigation.navigate('Vote');
        }
        
        console.log('Start Checking')
        // console.log(this.state.name);
        // var name = this.state.name;
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('user/'+userId).once('value', function(snapshot){
            if (snapshot.val().voted==1)
            {
                alert("Sorry you cannot vote because you have already voted.");
                // this.props.navigation.navigate('Vote');
                return;
            }
            else {
                console.log("Checking Closed Eligible");
                console.log('Redirecting to next screen');
                this.navy();
                console.log('Redirection Completed');
                return;
            }
        })
    }
    
    

    this.logOutUser = () => {
        firebase.auth().signOut().then(function() {
            console.log('Logged Out');
            // this.setState={this.props.navigation.navigate('Login')}
          }, function(error) {
            console.log('Error');
          });
        }
    }
    
} 
  render() {

    

    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
        }}>
        <View style={{
            flex: 1,
            backgroundColor: '#94e3f7',
            justifyContent: "flex-end",
        }}>
        {/* Text */}

        <Text style={{
            fontSize: 40,
            fontWeight: "500",
            color: "#2eb2d6",
            marginBottom: 50,
            marginLeft: 25,
        }}>
            Dashboard
        </Text>

        </View>
        
        
            <View style={{
                flex: 2,
                backgroundColor: "white",
                alignItems: "center",
            }}>
                {/* This function is our Dashboardbutton */}
                <TouchableOpacity onPress={() => this.checkvote()}>
                <View style={{
                    flexDirection: "row",
                    // margin: 30,
                    marginTop: 30,
                    marginBottom: 10,
                    width: 300,
                    height: 70,
                    borderRadius: 7,
                    elevation: 7,
                    backgroundColor: '#94e3f7',
                    alignItems: "center",
                }}>
                    <Text style={{
                        paddingLeft: 20,
                        flex: 1,
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#2eb2d6",
                    }}>
                       Vote for your country now !
                    </Text>

                </View>
                </TouchableOpacity>

                {/* This function is our Resultbutton */}
                <TouchableOpacity onPress={() => this.checkAdmin()}>
                <View style={{
                    flexDirection: "row",
                    marginTop: 20,
                    width: 300,
                    height: 70,
                    marginBottom: 170,
                    borderRadius: 7,
                    elevation: 7,
                    backgroundColor: '#94e3f7',
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Text style={{
                        paddingLeft: 20,
                        flex: 1,
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#2eb2d6",
                    }}>
                        Voting Results !
                    </Text>

                </View>
                </TouchableOpacity>


                
                

                {/* Button */}
                <TouchableOpacity onPress={() => {this.logOutUser();this.props.navigation.navigate('Login')}}>
                <View style={{
                        flexDirection: "row",    
                        width: 250,
                        height: 40,
                        marginTop: 30,
                        marginBottom: 40,
                        backgroundColor: "#2eb2d6",
                        borderRadius: 30,
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
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>   
            </View>
        </View>
    )
  }
}

export default Dashboard;
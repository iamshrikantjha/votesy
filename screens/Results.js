import React, { Component } from 'react';
import { Text, View,
    TouchableHighlight,Alert, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Dimensions  } from 'react-native';

import * as firebase from 'firebase';

import {
    PieChart,
  } from 'react-native-chart-kit'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            bjp:'',
            cong: '',
            aap:'',
            bsp:'',
            cpi:'',
            jmm:'',
            mgp: '',
            npp:'',
            sp:'',
            sad:'',
            value:'null',
        })

                
        this.componentDidMount=()=> {
            firebase.database().ref("candid/BJP").once('value')
              .then(snapshot => {
                let bjp = snapshot.val().votes;
                this.setState({ bjp });
              })
              firebase.database().ref("candid/CONG").once('value')
              .then(snapshot => {
                let cong = snapshot.val().votes;
                this.setState({ cong });
              })
              firebase.database().ref("candid/AAP").once('value')
              .then(snapshot => {
                let aap = snapshot.val().votes;
                this.setState({ aap });
              })
              firebase.database().ref("candid/BSP").once('value')
              .then(snapshot => {
                let bsp = snapshot.val().votes;
                this.setState({ bsp });
              })
              firebase.database().ref("candid/CPI").once('value')
              .then(snapshot => {
                let cpi = snapshot.val().votes;
                this.setState({ cpi });
              })
              firebase.database().ref("candid/JMM").once('value')
              .then(snapshot => {
                let jmm = snapshot.val().votes;
                this.setState({ jmm });
              })
              firebase.database().ref("candid/MGP").once('value')
              .then(snapshot => {
                let mgp = snapshot.val().votes;
                this.setState({ mgp });
              })
              firebase.database().ref("candid/NPP").once('value')
              .then(snapshot => {
                let npp = snapshot.val().votes;
                this.setState({ npp });
              }),
              firebase.database().ref("candid/SP").once('value')
              .then(snapshot => {
                let sp = snapshot.val().votes;
                this.setState({ sp });
              })
              firebase.database().ref("candid/SAD").once('value')
              .then(snapshot => {
                let sad = snapshot.val().votes;
                this.setState({ sad });
              })

        }
    

    
} 
  render() {

    const data = [
        { name: 'BJP', votes : this.state.bjp, color: 'pink', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'CONG', votes: this.state.cong, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'AAP', votes: this.state.aap, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'BSP', votes: this.state.bsp, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'CPI', votes: this.state.cpi, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'JMM', votes: this.state.jmm, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'MGP', votes: this.state.mgp, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'NPP', votes: 15, color: 'aqua', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'SP', votes: this.state.sp, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        { name: 'SAD', votes: this.state.sad, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 10 },
      ]
      const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 1 // optional, default 3
      }
    
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
            Election Result 
        </Text>

        </View>
        
        
            <View style={{
                flex: 2,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent:"center",
            }}>
                {/* This function is our Result */}

                <View style={{
                    // flex:1,
                    height: 300,
                    backgroundColor: '#cef5ff',
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    borderRadius: 15,

                }}>
                    <PieChart
                        data={data}
                        width={300}
                        height={220}
                        chartConfig={chartConfig}
                        accessor="votes"
                        backgroundColor="transparent"
                        paddingLeft="35"
                        absolute
                        />
                </View> 
                
                
                
              

                {/* Button */}
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Dashboard')}}>
                <View style={{
                        flexDirection: "row",    
                        width: 250,
                        height: 40,
                        marginTop: 60,
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
                            Dashboard
                        </Text>
                    </View>
                </TouchableOpacity>   
            </View>
        </View>
    )
  }
}

export default Dashboard;
import React, { Component } from 'react';
import { Image, Text, View, Button } from 'react-native';

const VCard = (props) => {
    return (
         <View>
            <View style={{
                    flexDirection: "row",
                    marginTop: 30,
                    width: 300,
                    height: 100,
                    borderRadius: 8,
                    // backgroundColor: "blue",
                    alignItems: "center",
                    borderWidth: 3,
                    borderBottomColor: "red",
                    borderColor: "#2eb2d6",
                    elevation: 5,
                }}>
                    <Image 
                        style={{
                            height: 70,
                            width: 70,
                            resizeMode: "contain",
                            marginLeft: 10,
                            borderWidth: 2,
                            // borderColor: "red",
                            // borderRadius: 3,
                            overflow: "hidden",
                        }}
                        source={props.image}
                    />
                    <Text style={{
                        flex:1,
                        fontSize: 25,
                        fontWeight: "bold",
                        paddingLeft: 20,
                        color: "#2eb2d6",

                    }}>
                        {props.name}
                    </Text>

                    <View style={{
                        paddingRight: 10,
                        flex: 1,
                        // backgroundColor: "blue",
                        // overflow: "hidden",
                        width: 10,
                    }}>
                    
                    <Button
                        title="Vote"
                        onPress={props.onTouch}
                        color="#2eb2d6"
                    />
                    </View>
                </View>
            </View>
    );
}

export default VCard;


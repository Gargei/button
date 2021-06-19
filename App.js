import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View>
      style={{backgroundcolor: "blue", alignitems: "center", paddingTop: 10, justifyconent: "center"}}
      

      <TouchableOpacity
      style={{
        backgroundcolor: "yellow",
        width: 200,
        height:70,
        aligncontent: "center",
        borderRadius: 20,
        borderWidth: 5,
        borderColor: "green"
       }}>

       <Text style={{color: "black", fontWeight: 10, fontStyle:"itilic"}}>
    Click on Button
    </Text>

      </TouchableOpacity>
      </View>
    )
  }
}


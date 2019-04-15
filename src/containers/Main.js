import React, { Component } from 'react';
import { ScrollView , Text } from "react-native";
import Header from '../components/Header.js';

class Main extends Component {
     
    constructor(props){
      super(props)      
    }

    render() {  
        return (
            <ScrollView>
                <Header/>                                                        
                <Text> Main container </Text>
                {this.props.children}
            </ScrollView>
            );        
        }
    }

export default Main;
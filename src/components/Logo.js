import React from 'react';
import { Image , StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    logo:{
        position: "absolute",
        left: 25,
        top: 15
    }        
  });

const Logo = (props) => {
    return (        
        <Image style={styles.logo} source={require('tagse/assets/logo.png')} />
    );
}

export default Logo;


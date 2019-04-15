import React from 'react';
import { Image , StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    logo:{
        justifyContent: "flex-start",        
        alignItems: "flex-start",    
        marginLeft: 25,
        marginTop: 16
    }        
  });

const Logo = (props) => {
    return (        
        <Image style={styles.logo} source={require('tagse/assets/logo.png')} />
    );
}

export default Logo;


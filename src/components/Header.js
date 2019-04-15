import React from 'react';
import { ImageBackground ,View , StyleSheet} from 'react-native';
import { Dimensions } from "react-native";
import Head from './Head.js';

let width = Dimensions.get('window').width; //full width
  

let styles = StyleSheet.create({
  backgroundImage: {        
    backgroundColor: 'rgba(121, 70, 161,0.8)',        
    height:433,
    marginTop: 24,
    width:width,
  }
});

const Header = (props) => {
    return (
        <View>
            <ImageBackground source={require('tagse/assets/bg_header_2.png')} style={styles.backgroundImage}>            
                <Head/>
            </ImageBackground>            
        </View>
    );
}

export default Header;


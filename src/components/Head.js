import React from 'react';
import { Image,Text,View  , StyleSheet} from 'react-native';
import Logo from './Logo.js';
import Profile from './Profile.js';
import Search from './Search.js';
import config from '../configs/config.js';

let styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',        
    }        
  });

const Head = (props) => {
    return (
        <View style={styles.container}>
            <Logo style={styles.logo}/>
            <Profile  />
            <Search />
            {props.children}
        </View>
    );
}

export default Head;


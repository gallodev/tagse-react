import React from 'react';
import { Image , StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    profile: {
        position: "absolute",
        right: 25,
        top: 7,        
        width:50,
        height:50
    }
  });

const Profile = (props) => {
    return (        
        <Image style={styles.profile} source={require('tagse/assets/profile.png')} />
    );
}

export default Profile;


import React from 'react';
import { TextInput , StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    search: {        
        marginTop: 200,     
        width:300,
        height:50,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        textAlign:"center"
    }
  });

const Search = (props) => {
    return (        
        <TextInput style={styles.search}/>
    );
}

export default Search;


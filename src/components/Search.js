import React from 'react';
import { TextInput , StyleSheet , View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

let styles = StyleSheet.create({
    search: {        
        flex:1,        
        height:58,
        color: "#FFFFFF",
        paddingLeft : 10,        
        fontSize:16,
    },
    view:{        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        
        borderColor: "#FFFFFF",        
        borderWidth: 2,        
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    icon : {
        padding: 10,
        margin: 1,        
        resizeMode: 'stretch',
        alignItems: 'center',
    }    
  });

const Search = (props) => {
    return (        
        <View style={styles.view}>            
            <TextInput placeholder="Digite o que deseja pesquisar" placeholderTextColor="#FFFFFF" style={styles.search}/>        
            <Ionicons style={styles.icon} name="md-search" size={32} color="#FFFFFF" />
        </View>
    );
}

export default Search;


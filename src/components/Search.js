import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {SEARCH_BAR_PLACEHOLDER} from "../constants/strings";

const Search = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/search.png')}
                resizeMode='contain'/>
            <TextInput
                style={styles.input}
                placeholder={SEARCH_BAR_PLACEHOLDER}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        direction: 'rtl',
        borderWidth: 0.2,
        borderColor: 'grey',
    },
    image: {
        width: 18,
        margin: 15
    },
    input: {
        writingDirection: 'rtl',
        height: 45,
    }
});

export default Search;

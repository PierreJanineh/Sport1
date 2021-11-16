import React, {useEffect} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {SEARCH_BAR_PLACEHOLDER} from "../constants/strings";
import * as Actions from "../features/menu/actions/categories.action";
import {useSelector} from "react-redux/lib/hooks/useSelector";

const Search = (props) => {

    const searchText = useSelector(state => state.categories.searchTxt);

    useEffect(() => {
        props.dispatch(searchText === "" ? Actions.getCategories() : Actions.filterCategories());
    }, [searchText]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/search.png')}
                resizeMode='contain'
            />
            <TextInput
                style={styles.input}
                placeholder={SEARCH_BAR_PLACEHOLDER}
                onChangeText={s => {
                    props.dispatch(Actions.setSearchText(s));
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 0.2,
        borderColor: 'grey',
    },
    image: {
        width: 18,
        margin: 15
    },
    input: {
        writingDirection: 'rtl',
        textAlign: 'right',
        height: 45,
    }
});

export default Search;

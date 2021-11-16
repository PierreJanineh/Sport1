import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BKGD_GREY} from "../constants/colors";

const ItemsList = (props) => {
    return (
        <FlatList
            style={styles.container}
            data={props.items}
            renderItem={props.renderItem}
            // keyExtractor={item => item.id}
            scrollEnabled={true}
            ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {

    },
    itemSeparator: {
        backgroundColor: BKGD_GREY,
        height: 2,
        width: '100%',
    },
});

export default ItemsList;

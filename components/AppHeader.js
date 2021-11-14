import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';

const AppHeader = (props) => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                default: styles.header
            })
        }}>
            <View style={styles.favBtnContainer}>
                <Image
                    style={styles.favPersonIcon}
                    source={require('../assets/favPerson.png')}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImg}
                    source={require('../assets/sport1Svg.png')}
                    resizeMode='cover'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 50,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    header: {
        backgroundColor: '#141414',
    },
    favBtnContainer: {
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        elevation: 1
    },
    favPersonIcon: {
        marginHorizontal: 30,
    },
    logoContainer: {
        zIndex: 2,
        elevation: 2,
    },
    logoImg: {
        height: '50%',
    },
});

export default AppHeader;

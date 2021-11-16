import React, {useEffect} from 'react';
import AppHeader from './AppHeader';
import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import Category from '../features/menu/models/Category';
import {useSelector} from 'react-redux/lib/hooks/useSelector';
import {useDispatch} from 'react-redux';
import * as Actions from "../features/menu/actions/categories.action";
import ItemsList from "./ItemsList";
import {BKGD_GREY} from "../constants/colors";
import Search from "./Search";
import {GENERAL_ITEM, LOGO} from "../constants/strings";

const MainApp = () => {
    const dispatch = useDispatch();

    //Call Api Function when component first mounts
    useEffect( () => {
        dispatch(Actions.getCategories());
    }, []);

    const categories: Category[] = useSelector(state => state.categories.categories);
    const links = useSelector(state => state.categories.links);

    const separator = {title: GENERAL_ITEM};

    const linkNames = Object(links).keys;
    const linkURLs = Object(links).values;

    const logo = {title: LOGO};

    const linksExtraction = (item): string => {
        if (linkNames) {
            return linkURLs[linkNames.indexOf(item)];
        }
    };

    // const combinedArr = [...categories, separator];
    // const combinedArr1 = [...combinedArr, ...linkNames];

    const renderItem = (item) => {

        const getListItemText = () => {
            if (categories.indexOf(item) && item.item && item.item.title) {
                return item.item.title;
            } else {
                return linksExtraction(item);
            }
        };

        if (item.item && item.item && item.item.title === logo.title) {
            return (
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/createdByMoveo.png')}
                        resizeMode='contain'
                    />
                </View>
            );
        }

        return (
            <View style={(item.item && item.item && item.item.title === separator.title) ? styles.generalGreyContainer : styles.textContainer}>
                <Text style={(item.item && item.item && item.item.title === separator.title) ? styles.generalGrey: styles.text}>
                    {getListItemText()}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <AppHeader/>
            <Search />
            <ItemsList
                items={[
                    ...categories,
                    logo]}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: BKGD_GREY,
    },
    textContainer: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        writingDirection: 'rtl',
        marginEnd: 25,
        fontSize: 18,
    },
    logoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BKGD_GREY,
    },
    logo:{
        paddingVertical: 50
    },
    generalGreyContainer: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: BKGD_GREY,
    },
    generalGrey: {
        writingDirection: 'rtl',
        marginEnd: 25,
    },
});

export default MainApp;

import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

import { useTranslation } from 'react-i18next';

import '../../i18n/i18n'

const WelcomeScreen = () => {

    const YoutubeLink = "CfPxlb8-ZQ0";
    const YoutubeLink2 = "lA1ItxM9yIE";

    const {t, i18n} = useTranslation();


    return(
        <ScrollView style={style.LoginMain} >
            <View style={style.WelcomeImg}>
                <Image 
                    source={require('../../../src/img/welcome-page-Logo.jpeg')}
                />
                <Text style={style.textOne}>
                    {t('title')}
                </Text>
                <Text style={style.textTwo}>
                    {t('description')}
                </Text>
            </View>
            <View>
                <YoutubeIframe 
                    height={250}
                    videoId={YoutubeLink}
                />
                <YoutubeIframe 
                    height={250}
                    videoId={YoutubeLink2}
                />
            </View>
            <View style={style.ButtonContainer}>
                <View style={style.enButton}>
                    <Button 
                        title="EN"
                        onPress={() => {
                            i18n.changeLanguage('en')
                        }}
                    />
                </View>
                <View style={style.zhButton}>
                    <Button 
                        title="ZH"
                        onPress={() => {
                            i18n.changeLanguage('zh')
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    LoginMain: {
        backgroundColor: 'white',
    },
    WelcomeImg: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textOne: {
        fontSize: 28,
    },
    textTwo: {
        marginTop: 5,
        fontSize: 16,
    },
    ButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    enButton: {
        borderColor : 'black',
        borderWidth: 2,
        margin: 10,
        width: 100,
    },
    zhButton: {
        borderColor : 'black',
        borderWidth: 2,
        margin: 10,
        width: 100,
    }
})

export default WelcomeScreen;
import {
    SafeAreaView,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    ImageBackground,
    Dimensions,
    Keyboard,
    TextInput
} from 'react-native'

import { useEffect, useState } from 'react'

import { colors, constants } from '../../styles';

const { width } = Dimensions.get('window');

export const assets = [require('assets/images/background-img.png')]

export default function Welcome() {

    const [keyboardOffset, setKeyboardOffset] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardOffset(e.endCoordinates.height);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOffset(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <ImageBackground
                    source={assets[0]}
                    style={[styles.image, { marginBottom: -keyboardOffset }]}

                />
                <KeyboardAvoidingView
                    style={[
                        styles.keyboardAvoidingView,
                    ]}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput style={{ backgroundColor: 'blue', width: '100%' }} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.COLORS.BACKGROUND,
    },
    image: {
        zIndex: -1,
        width,
        height: '70%'
    },
    keyboardAvoidingView: {
        flex: 1,
        borderTopLeftRadius: constants.BORDER_RADIUS.CONTAINER,
        borderTopRightRadius: constants.BORDER_RADIUS.CONTAINER,
        backgroundColor: colors.COLORS.BACKGROUND,
    },
});

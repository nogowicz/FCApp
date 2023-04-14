import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native'


import { colors, constants, spacing, typography } from '../../styles';
import Container from 'components/container';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet'
import Button from 'components/button';
import { useMemo, useRef } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'views/navigation/Navigation';


import GoogleIcon from 'assets/svg/icon-google.svg'
import FacebookIcon from 'assets/svg/icon-facebook.svg'
import AppleIcon from 'assets/svg/icon-apple.svg'
import EmailIcon from 'assets/svg/icon-mail.svg'
import { SCREENS } from 'views/navigation/constants';

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'WELCOME'>;

export const assets = [require('assets/images/background-img.png')]

type WelcomeProps = {
    navigation: WelcomeScreenNavigationProp;
}

export default function Welcome({ navigation }: WelcomeProps) {
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['55%'], []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Container>
                    <View style={styles.titleContainer}>
                        <Text
                            style={styles.titleText}
                        >FC.APP</Text>
                        <Text
                            style={styles.subTitleText}
                        >Witaj w Football Challenge</Text>
                    </View>
                </Container>
                <BottomSheet
                    style={styles.bottomSheet}
                    ref={bottomSheetModalRef}
                    snapPoints={snapPoints}
                    backgroundStyle={styles.bottomSheetBackground}
                    handleIndicatorStyle={{ backgroundColor: colors.COLORS.BACKGROUND }}

                >

                    <Text style={styles.contentContainerSectionTitleText}>MASZ JUŻ KONTO?</Text>

                    <Button
                        onPress={() => console.log("Zaloguj się")}
                        text='Zaloguj się'
                        mode='filled'
                    />

                    <Text style={styles.contentContainerSectionTitleText}>LUB ZAREJESTRUJ SIĘ</Text>

                    <Button
                        onPress={() => console.log("Użyj konta Google")}
                        text='Użyj konta Google'
                        mode='outline'
                        icon={<GoogleIcon />}
                    />

                    <Button
                        onPress={() => console.log("Użyj konta Faceboo")}
                        text='Użyj konta Facebook'
                        mode='outline'
                        icon={<FacebookIcon />}
                    />


                    <Button
                        onPress={() => console.log("Użyj konta Apple")}
                        text='Użyj konta Apple'
                        mode='outline'
                        icon={<AppleIcon />}
                    />


                    <Button
                        onPress={() => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID)}
                        text='Zarejestruj się E-mailem'
                        mode='outline'
                        icon={<EmailIcon />}
                    />


                </BottomSheet>
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
        backgroundColor: colors.COLORS.BACKGROUND
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: spacing.SCALE_30,

    },
    titleText: {
        ...typography.FONT_BOLD,
        color: colors.COLORS.TEXT,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        fontSize: typography.FONT_SIZE_80,

    },
    subTitleText: {
        ...typography.FONT_REGULAR,
        color: colors.COLORS.TEXT,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        fontSize: typography.FONT_SIZE_16,
    },
    contentContainer: {
        backgroundColor: colors.COLORS.BACKGROUND,
    },
    contentContainerSectionTitleText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_14,
        textAlign: 'center',
        marginVertical: spacing.SCALE_16
    },
    bottomSheet: {
        paddingHorizontal: spacing.SCALE_20,
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    bottomSheetBackground: {
        backgroundColor: colors.COLORS.BACKGROUND,
        borderTopLeftRadius: constants.BORDER_RADIUS.CONTAINER,
        borderTopRightRadius: constants.BORDER_RADIUS.CONTAINER,
    },
});

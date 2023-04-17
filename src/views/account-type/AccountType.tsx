import {
    StyleSheet,
    View,
    TouchableOpacity,
    SafeAreaView,
    Text,
    ImageBackground,
    Dimensions,
    Image,
} from 'react-native'
import {
    useRef,
    useMemo,
} from 'react'

import { colors, spacing, typography, constants } from 'styles';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'views/navigation/Navigation';


import Container from 'components/container';
import ArrowLeft from 'assets/svg/arrow-left.svg'
import Button from 'components/button';
import AccountTypeOption from 'components/account-type-option';
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';

export const assets = [
    require('assets/images/sygnet-logo.png'),
    require('assets/images/manager-image.png'),
    require('assets/images/player-image.png'),
    require('assets/images/supporter-image.png'),
    require('assets/images/organizer-image.png'),
]

export type AccountTypeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ACCOUNT_TYPE'>;

type AccountTypeProps = {
    navigation: AccountTypeScreenNavigationProp;
}

const { width } = Dimensions.get("window")

export default function AccountType({ navigation }: AccountTypeProps) {

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['85%'], []);
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Container>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleLeftContainer}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <ArrowLeft />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.titleText}>FC.APP</Text>
                        <View style={styles.titleRightContainer} />
                    </View>
                </Container>
                <BottomSheet
                    ref={bottomSheetModalRef}
                    snapPoints={snapPoints}
                    backgroundStyle={styles.bottomSheetBackground}
                    handleIndicatorStyle={{ backgroundColor: colors.COLORS.BACKGROUND }}
                    style={styles.bottomSheetContainer}

                >
                    <ImageBackground
                        source={assets[0]}
                        style={styles.contentContainerSection}
                    >

                        <Text style={styles.contentContainerSectionTitleText}>Wybierz rodzaj konta</Text>

                        <Text style={styles.contentContainerSectionSubTitleText}>
                            Wybierz rodzaj swojego konta. W późniejszym etapie będzie możliwość zmiany lub dodania innych typów konta.
                        </Text>
                        <View>
                            <AccountTypeOption
                                onPress={() => console.log("Wybrano tryb konta: trener")}
                                image={1}
                                title='Trener'
                                description='Zarządza drużynami, organizuje wydarzenia i wprowadza statystyki zawodników'
                            />

                            <AccountTypeOption
                                onPress={() => console.log("Wybrano tryb konta: zawodnik")}
                                image={2}
                                title='Zawodnik'
                                description='Dołącza do drużyny i bierze udział w sparingach oraz turniejach'
                            />

                            <AccountTypeOption
                                onPress={() => console.log("Wybrano tryb konta: kibic")}
                                image={3}
                                title='Kibic'
                                description='Obserwuje wydarzenia i drużyny, może być opiekunem gracza'
                            />

                            <AccountTypeOption
                                onPress={() => console.log("Wybrano tryb konta: organizator")}
                                image={4}
                                title='Organizator'
                                description='Tworzy i organizuje sparingi, turnieje i wydarzenia'
                            />

                        </View>
                        <View style={styles.bottomTextContainer}>
                            <Text style={styles.bottomText}>
                                Tworząc konto zgadzasz się na warunki</Text>

                            <Button
                                text='Regulaminu i Polityki Prywatności'
                                mode='simple'
                                onPress={() => console.log("Regulamin i polityka prywatności")}
                            />
                        </View>
                    </ImageBackground>

                </BottomSheet>
            </View>
        </SafeAreaView>
    )
};

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
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: spacing.SCALE_40,
        paddingHorizontal: spacing.SCALE_20,

    },
    titleText: {
        ...typography.FONT_BOLD,
        color: colors.COLORS.TEXT,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        fontSize: typography.FONT_SIZE_55,
    },

    bottomSheetBackground: {
        backgroundColor: colors.COLORS.BACKGROUND,
        borderTopLeftRadius: constants.BORDER_RADIUS.CONTAINER,
        borderTopRightRadius: constants.BORDER_RADIUS.CONTAINER,
    },
    titleLeftContainer: {
        flex: 1,
    },
    titleRightContainer: {
        flex: 1,
    },
    contentContainerSectionTitleText: {
        ...typography.FONT_BOLD,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_18,
        textAlign: 'center',
    },
    contentContainerSectionSubTitleText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_14,
        marginHorizontal: spacing.SCALE_50,
    },
    contentContainerSection: {
        flex: 1,
        width,
        height: '100%',
        justifyContent: 'space-between',
    },
    bottomText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_14,
        textAlign: 'center',
    },
    bottomSheetContainer: {
        alignItems: 'center',
    },
    bottomTextContainer: {
        marginBottom: spacing.SCALE_20,
    }
});
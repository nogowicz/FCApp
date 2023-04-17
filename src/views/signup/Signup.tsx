
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import Container from 'components/container/Container';
import { useMemo, useRef, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'views/navigation/Navigation';

import { colors, constants, spacing, typography } from 'styles';
import { preparePages } from './helpers';


import ArrowLeft from 'assets/svg/arrow-left.svg'
import Panel from './panel';

type PageType = {
    id: string,
    textField: JSX.Element,
    button: JSX.Element,
}

export type PagesArrayType = PageType[];


export type SignupScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SIGN_UP'>;

type SignupProps = {
    navigation: SignupScreenNavigationProp;
}

export default function Signup({ navigation }: SignupProps) {
    const [page, setPage] = useState(0);

    function handlePageWithError(page: number) {
        setPage(page);
    }

    function handleNextPage() {
        setPage(prevPage => prevPage + 1);
    }
    function handleBack() {
        setPage(prevPage => prevPage - 1);
    }

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['70%'], []);

    const pages: PagesArrayType = preparePages({ navigation, handleNextPage, handlePageWithError })

    return (
        <SafeAreaView style={styles.root}>

            <View style={styles.container}

            >

                <Container>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleLeftContainer}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    if (page === 0) {
                                        navigation.goBack();
                                    } else {
                                        handleBack();
                                    }
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
                >

                    <Panel
                        {...pages[page]}
                        step={page + 1}
                        steps={pages}
                    />

                </BottomSheet>

            </View>
        </SafeAreaView>


    );
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
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: spacing.SCALE_40,
        paddingHorizontal: spacing.SCALE_20,

    },
    titleText: {
        ...typography.FONT_BOLD,
        color: colors.COLORS.TEXT,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        fontSize: 55,

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

});
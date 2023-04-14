import {
    SafeAreaView,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    ImageBackground,
    Dimensions,
    Keyboard,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native'


import { colors, constants, spacing, typography } from '../../styles';
import Container from 'components/container';
import BottomSheet from '@gorhom/bottom-sheet'
import Button from 'components/button';
import { useCallback, useMemo, useRef } from 'react';

const { width } = Dimensions.get('window');

export const assets = [require('assets/images/background-img.png')]

export default function Welcome() {

    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

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
                    <BottomSheet
                        ref={bottomSheetRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                    </BottomSheet>
                    {/* <View style={styles.contentContainer}>
                        <Text style={styles.contentContainerSectionTitleText}>MASZ JUŻ KONTO?</Text>
                        <Button />
                    </View> */}


                </Container>
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
        borderTopLeftRadius: constants.BORDER_RADIUS.CONTAINER,
        borderTopRightRadius: constants.BORDER_RADIUS.CONTAINER,
        marginTop: '60%',
        alignItems: 'center',
        paddingVertical: spacing.SCALE_20,
        justifyContent: 'space-between',
    },
    contentContainerSectionTitleText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_14
    },
});

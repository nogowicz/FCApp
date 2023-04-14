
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import Container from 'components/container/Container';
import { useMemo, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native'

import { colors, constants, spacing, typography } from 'styles';

import ArrowLeft from 'assets/svg/arrow-left.svg'

export default function Signup() {
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['80%'], []);

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Container>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleLeftContainer}>
                            <ArrowLeft />
                        </View>
                        <Text style={styles.titleText}>FC.APP</Text>
                        <View style={styles.titleRightContainer} />
                    </View>
                </Container>
                <BottomSheet
                    style={styles.bottomSheet}
                    ref={bottomSheetModalRef}
                    snapPoints={snapPoints}
                    backgroundStyle={styles.bottomSheetBackground}
                    handleIndicatorStyle={{ backgroundColor: colors.COLORS.BACKGROUND }}

                >
                    <Text style={styles.contentContainerSectionTitleText}>Utwórz konto</Text>

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
    titleLeftContainer: {
        flex: 1,
    },
    titleRightContainer: {
        flex: 1,
    },
    contentContainerSectionTitleText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_18,
        textAlign: 'center',
        marginVertical: spacing.SCALE_16
    },
});
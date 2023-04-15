
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import Container from 'components/container/Container';
import { useMemo, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native'

import TextField from 'components/text-field';

import { colors, constants, spacing, typography } from 'styles';

import ArrowLeft from 'assets/svg/arrow-left.svg'
import Person from 'assets/svg/icon-user-form.svg'
import Button from 'components/button';

export default function Signup() {
    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['70%'], []);

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
                    ref={bottomSheetModalRef}
                    snapPoints={snapPoints}
                    backgroundStyle={styles.bottomSheetBackground}
                    handleIndicatorStyle={{ backgroundColor: colors.COLORS.BACKGROUND }}

                >
                    <View style={styles.bottomSheet}>
                        <Text style={styles.contentContainerSectionTitleText}>Utwórz konto</Text>
                        <TextField
                            label="Imię i nazwisko"
                            keyboardType="default"
                            children={<Person />}
                        />
                        <Button
                            text="Dalej"
                            onPress={() => console.log('Dalej')}
                            mode='filled'
                        />
                    </View>

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
    bottomSheet: {
        flex: 1,
        paddingHorizontal: spacing.SCALE_20,
        alignContent: 'center',
        justifyContent: 'space-between',
        marginVertical: spacing.SCALE_20,
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
    },
});
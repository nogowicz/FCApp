import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'views/navigation/Navigation';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    SafeAreaView,
    Text,
} from 'react-native'
import {
    useRef,
    useMemo,
} from 'react'
import Container from 'components/container';

import ArrowLeft from 'assets/svg/arrow-left.svg'
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import { colors, spacing, typography, constants } from 'styles';

export type AccountTypeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ACCOUNT_TYPE'>;

type AccountTypeProps = {
    navigation: AccountTypeScreenNavigationProp;
}


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

                >


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
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { colors, constants, spacing, typography } from 'styles';
import { Dispatch, ReactNode, SetStateAction } from 'react'
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = {
    text: string;
    activeOpacity?: number;
    mode: 'outline' | 'filled' | 'simple';
    onPress: Dispatch<SetStateAction<number>> | any;
    icon?: ReactNode;
}

export default function Button({ text, activeOpacity = 0.7, mode, onPress, icon }: ButtonProps) {
    if (mode === 'outline') {
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={onPress}
                style={styles.outlineContainer}
            >
                <View style={styles.outlinedButtonLeftContainer}>
                    {icon}
                </View>
                <Text style={styles.buttonText}>{text}</Text>
                <View style={styles.outlinedButtonRightContainer} />
            </TouchableOpacity>
        );
    } else if (mode === 'filled') {
        return (
            <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={onPress}
                style={styles.filledContainer}
            >
                <LinearGradient
                    colors={[colors.COLORS.SECONDARY, colors.COLORS.PRIMARY]}
                    style={styles.linearGradientContainer}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={styles.outlinedButtonLeftContainer} />
                    <Text style={styles.filledButtonText}>{text}</Text>
                    <View style={styles.outlinedButtonRightContainer} />
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.simpleButtonContainer}
            onPress={onPress}
        >
            <Text style={styles.simpleButtonText}>{text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    outlineContainer: {
        borderWidth: 1,
        borderColor: colors.COLORS.SECONDARY,
        borderRadius: constants.BORDER_RADIUS.BUTTON,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.SCALE_8,
        paddingHorizontal: spacing.SCALE_12,
        marginVertical: spacing.SCALE_8,
    },
    buttonText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        fontSize: typography.FONT_SIZE_16,
        color: colors.COLORS.HINT,
    },
    simpleButtonText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        fontSize: typography.FONT_SIZE_14,
        color: colors.COLORS.PRIMARY,
    },
    outlinedButtonLeftContainer: {
        flex: 1,
    },
    outlinedButtonRightContainer: {
        flex: 1,
    },
    filledContainer: {
        borderRadius: constants.BORDER_RADIUS.BUTTON,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: colors.COLORS.PRIMARY,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: constants.BORDER_RADIUS.BUTTON,

    },
    linearGradientContainer: {
        flex: 1,
        borderRadius: constants.BORDER_RADIUS.BUTTON,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.SCALE_12,
        paddingHorizontal: spacing.SCALE_12,
        marginVertical: spacing.SCALE_8,

    },
    filledButtonText: {
        ...typography.FONT_BOLD,
        color: colors.COLORS.TEXT,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        fontSize: typography.FONT_SIZE_18,
    },
    simpleButtonContainer: {
        alignItems: 'center'
    }
});
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { colors, constants, spacing, typography } from 'styles';
import { assets } from 'views/account-type/AccountType';

type AccountTypeOptionProps = {
    image: number;
    title: string;
    description: string;
    onPress: () => any;
};

export default function AccountTypeOption({ image, title, description, onPress }: AccountTypeOptionProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.imageContainer}>
                <Image source={assets[image]} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: spacing.SCALE_20,
        borderRadius: constants.BORDER_RADIUS.CONTAINER,
        borderWidth: 1,
        borderColor: colors.COLORS.PRIMARY,
        marginVertical: spacing.SCALE_10,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: colors.COLORS.PRIMARY,
        borderTopLeftRadius: constants.BORDER_RADIUS.CONTAINER,
        borderBottomLeftRadius: constants.BORDER_RADIUS.CONTAINER,
    },
    textContainer: {
        flex: 2,
        backgroundColor: colors.COLORS.SECONDARY,
        borderTopRightRadius: constants.BORDER_RADIUS.CONTAINER,
        borderBottomRightRadius: constants.BORDER_RADIUS.CONTAINER,
        paddingVertical: spacing.SCALE_10,
        paddingHorizontal: spacing.SCALE_4,
    },
    titleText: {
        ...typography.FONT_BOLD,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_16,
    },
    descriptionText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_14,
    },
    image: {
        borderBottomLeftRadius: constants.BORDER_RADIUS.CONTAINER,
        width: '100%',
        marginTop: -spacing.SCALE_16,
    }
});
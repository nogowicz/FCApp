import {
    TextInput,
    View,
    Text,
    StyleSheet,
    TextInputProps,
} from 'react-native'

import {
    ReactNode,
    useState
} from 'react';
import { colors, constants, spacing, typography } from 'styles';
import { FONT_WEIGHT_REGULAR } from 'styles/typography';

type TextFieldProps = {
    label: string;
    error?: any;
    children?: ReactNode;
    keyboardType?: TextInputProps['keyboardType'];
    props?: TextInputProps;
};

export default function TextField({
    label,
    error,
    children,
    keyboardType,
    ...props
}: TextFieldProps) {
    const [focus, setFocus] = useState(false);
    return (
        <View style={styles.container}>
            {label ?
                <Text
                    style={[
                        styles.label,
                        error && styles.labelWithError
                    ]}>{label}</Text> : null}
            <View
                style={[
                    styles.inputContainer,
                    focus && styles.focus,
                    error && styles.error
                ]}>
                {children}
                <TextInput
                    style={styles.input}
                    {...props}
                />
            </View>
            {error && <Text style={styles.errorMessage}>{error?.message}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    label: {
        ...typography.FONT_REGULAR,
        fontWeight: FONT_WEIGHT_REGULAR,
        color: colors.COLORS.HINT,
        fontSize: typography.FONT_SIZE_16,
        marginBottom: spacing.SCALE_8,
    },
    input: {
        ...typography.FONT_REGULAR,
        fontWeight: FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_16,
        marginHorizontal: spacing.SCALE_12,
    },
    inputContainer: {
        borderWidth: 1.5,
        borderColor: colors.COLORS.SECONDARY,
        borderRadius: constants.BORDER_RADIUS.INPUT,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.SCALE_12,
    },
    focus: {
        borderColor: colors.COLORS.PRIMARY,
    },
    error: {
        borderColor: colors.COLORS.ERROR,
    },
    labelWithError: {
        color: colors.COLORS.ERROR,
    },
    errorMessage: {
        color: colors.COLORS.ERROR,
        ...typography.FONT_REGULAR,
        fontWeight: FONT_WEIGHT_REGULAR,
        fontSize: typography.FONT_SIZE_14,
        marginTop: spacing.SCALE_8,
    },

});

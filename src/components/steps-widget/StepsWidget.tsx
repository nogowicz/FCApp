import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import { colors, spacing, typography } from 'styles';

import ProgressBar from 'components/progress-bar';
import { PagesArrayType } from 'views/signup/Signup';


type StepsWidgetProps = {
    step: number,
    steps: PagesArrayType,
}

export default function StepsWidget({
    step,
    steps,
}: StepsWidgetProps
) {

    return (
        <View>
            <View style={styles.upperContainer}>
                <Text style={styles.stepText}>Krok:</Text>
                <View>
                    <Text style={styles.stepCounterText}>{step}/{steps.length}</Text>
                </View>
            </View>
            <View>
                <ProgressBar step={step} steps={steps.length} height={15} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    upperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: spacing.SCALE_12,
    },
    stepText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_16,
        marginBottom: spacing.SCALE_8,
    },
    stepCounterText: {
        ...typography.FONT_BOLD,
        fontWeight: typography.FONT_WEIGHT_BOLD,
        color: colors.COLORS.SECONDARY,
        fontSize: typography.FONT_SIZE_80,
    },
});

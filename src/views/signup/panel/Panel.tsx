import {
    Text,
    View,
    StyleSheet,
} from "react-native";
import { PagesArrayType } from "../Signup";
import StepsWidget from "components/steps-widget";
import { spacing, typography, colors } from "styles";

type PanelProps = {
    id: string,
    textField: JSX.Element,
    button: JSX.Element,
    step: number,
    steps: PagesArrayType,
}


export default function Panel({
    id,
    textField,
    button,
    step,
    steps,
}: PanelProps) {
    return (
        <View style={styles.bottomSheet}>
            <Text style={styles.contentContainerSectionTitleText}>Utwórz konto</Text>
            <View>
                {textField}
            </View>

            <StepsWidget
                step={step}
                steps={steps}
            />

            {button}
        </View>
    )
};

const styles = StyleSheet.create({
    bottomSheet: {
        flex: 1,
        paddingHorizontal: spacing.SCALE_20,
        alignContent: 'center',
        justifyContent: 'space-between',
        marginVertical: spacing.SCALE_20,
    },
    contentContainerSectionTitleText: {
        ...typography.FONT_REGULAR,
        fontWeight: typography.FONT_WEIGHT_REGULAR,
        color: colors.COLORS.TEXT,
        fontSize: typography.FONT_SIZE_18,
        textAlign: 'center',
    },
});

import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'styles';

export default function Button() {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <LinearGradient
                colors={[
                    colors.COLORS.PRIMARY,
                    colors.COLORS.TEXT,

                ]}
                style={styles.linearGradient}
            >
                <Text style={styles.buttonText}>
                    Sign in with Facebook
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    linearGradient: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#ffffff',
    },
});
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native'
import { colors } from '../../styles';

export default function Welcome() {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>

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
        backgroundColor: colors.COLORS.BACKGROUND
    },
});


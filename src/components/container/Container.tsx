import {
    View,
    ImageBackground,
    Dimensions,
    StyleSheet,
} from 'react-native'
import { colors } from 'styles';
import {
    ReactNode,
} from 'react';


const assets = [require('assets/images/background-img.png')]

const { width, height } = Dimensions.get("window")

type ContainerProps = {
    children: ReactNode,
}

export default function Container({ children }: ContainerProps) {


    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.COLORS.BACKGROUND,

        }}>

            <ImageBackground

                source={assets[0]}
                style={styles.imageBackground}
            >

                {children}

            </ImageBackground>


        </View >
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        width,
        height: height / 2,
        zIndex: -2,
    },

});
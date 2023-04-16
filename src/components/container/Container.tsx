import {
    View,
    ImageBackground,
    Dimensions,
} from 'react-native'
import { colors } from 'styles';
import {
    ReactNode,
} from 'react';


const assets = [require('assets/images/background-img.png')]

const { width } = Dimensions.get("window")

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
                style={{
                    width,
                    height: '70%',
                    zIndex: -1,
                }}
            >

                {children}

            </ImageBackground>


        </View >
    );
}
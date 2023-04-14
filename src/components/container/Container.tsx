import {
    View,
    ImageBackground,
    Dimensions,
    Keyboard,
} from 'react-native'
import { colors } from 'styles';
import {
    useEffect,
    useState,
    ReactNode,
} from 'react';


export const assets = [require('assets/images/background-img.png')]

const { width } = Dimensions.get("window")

type ContainerProps = {
    children: ReactNode,
}

export default function Container({ children }: ContainerProps) {

    const [keyboardOffset, setKeyboardOffset] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardOffset(e.endCoordinates.height);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOffset(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.COLORS.BACKGROUND,
        }}>

            <ImageBackground source={assets[0]} style={
                {
                    marginBottom: -keyboardOffset,
                    width,
                    height: '70%',
                    zIndex: -1,
                }}
            >

                {children}

            </ImageBackground>


        </View>
    );
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '../constants';

import Welcome from 'views/welcome-screen';
import Signup from 'views/signup/Signup';
import AccountType from 'views/account-type';

export default function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={SCREENS.AUTH.ACCOUNT_TYPE.ID}
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}
        >
            <Stack.Screen
                name={SCREENS.AUTH.WELCOME.ID}
                component={Welcome}
            />

            <Stack.Screen
                name={SCREENS.AUTH.SIGN_UP.ID}
                component={Signup}
            />

            <Stack.Screen
                name={SCREENS.AUTH.ACCOUNT_TYPE.ID}
                component={AccountType}
            />

        </Stack.Navigator>
    );
}
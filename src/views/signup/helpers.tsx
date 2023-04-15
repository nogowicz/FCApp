import {
    Dispatch,
    SetStateAction,
} from "react"
import {

} from 'react-native'
import { SignupScreenNavigationProp } from "./Signup"

import Person from 'assets/svg/icon-user-form.svg'
import Phone from 'assets/svg/icon-phone-form.svg'
import Mail from 'assets/svg/icon-mail-form.svg'
import Lock from 'assets/svg/icon-lock-form.svg'


import TextField from "components/text-field"
import Button from "components/button"
import { SCREENS } from "views/navigation/constants"

export type PreparePagesType = {
    navigation: SignupScreenNavigationProp,
    handleNextPage: Dispatch<SetStateAction<number>>
}

export function preparePages({
    navigation,
    handleNextPage,
}: PreparePagesType) {
    return [
        {
            id: 'name',
            textField: (
                <TextField
                    label="Imię i nazwisko"
                    keyboardType="default"
                    children={<Person />}
                />
            ),
            button: (
                <Button
                    text="Dalej"
                    onPress={handleNextPage}
                    mode='filled'
                />
            )
        },
        {
            id: 'phone',
            textField: (
                <TextField
                    label="Telefon"
                    keyboardType="number-pad"
                    children={<Phone />}
                />
            ),
            button: (
                <Button
                    text="Dalej"
                    onPress={handleNextPage}
                    mode='filled'
                />
            )
        },
        {
            id: 'mail',
            textField: (
                <TextField
                    label="Email"
                    keyboardType="default"
                    children={<Mail />}
                />
            ),
            button: (
                <Button
                    text="Dalej"
                    onPress={handleNextPage}
                    mode='filled'
                />
            )
        },
        {
            id: 'password',
            textField: (
                <TextField
                    label="Hasło (min 6 znaków, w tym cyfra)"
                    keyboardType="default"
                    children={<Lock />}
                />
            ),
            button: (
                <Button
                    text="Dalej"
                    onPress={() => navigation.navigate(SCREENS.AUTH.ACCOUNT_TYPE.ID)}
                    mode='filled'
                />
            )
        },

    ];
}
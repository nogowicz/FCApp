import {
    Dispatch,
    SetStateAction,
} from "react"
import { SignupScreenNavigationProp } from "./Signup"

import Person from 'assets/svg/icon-user-form.svg'
import Phone from 'assets/svg/icon-phone-form.svg'
import Mail from 'assets/svg/icon-mail-form.svg'
import Lock from 'assets/svg/icon-lock-form.svg'


import TextField from "components/text-field"
import Button from "components/button"
import { Controller, useForm } from "react-hook-form";
import { SCREENS } from "views/navigation/constants"
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./signupValidationSchema"
import { View } from "react-native"

export type PreparePagesType = {
    navigation: SignupScreenNavigationProp,
    handleNextPage: Dispatch<SetStateAction<number>>
}

export function preparePages({
    navigation,
    handleNextPage,
}: PreparePagesType) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            phone: '',
            mail: '',
            password: '',
        }
    });

    type OnSubmitProps = {
        name: string;
        phone: string;
        mail: string;
        password: string;
    }


    const onSubmit = (data: OnSubmitProps) => console.log(data);

    return [
        {
            id: 'name',
            textField: (
                <View>
                    <Controller
                        name='name'
                        rules={{
                            required: true
                        }}
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label="Imię i nazwisko"
                                keyboardType="default"
                                children={<Person />}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.name}

                            />
                        )}
                    />
                </View>
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
                <>
                    <Controller
                        name='phone'
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label="Telefon"
                                keyboardType="number-pad"
                                children={<Phone />}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.phone}

                            />

                        )}
                    />
                </>


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
                <View>
                    <Controller
                        name='mail'
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label="Email"
                                keyboardType="default"
                                children={<Mail />}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.mail}

                            />
                        )}
                    />
                </View>
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
                <>
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                label="Hasło (min 6 znaków, w tym cyfra)"
                                keyboardType="default"
                                children={<Lock />}
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                error={errors.password}

                            />
                        )}
                    />
                </>
            ),
            button: (
                <Button
                    text="Dalej"
                    //@ts-ignore
                    onPress={handleSubmit(onSubmit)}
                    mode='filled'
                />
            )
        },

    ];
}
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react"
import {
    View,
    Pressable,
} from "react-native"



import Person from 'assets/svg/icon-user-form.svg'
import Phone from 'assets/svg/icon-phone-form.svg'
import Mail from 'assets/svg/icon-mail-form.svg'
import Lock from 'assets/svg/icon-lock-form.svg'

import TextField from "components/text-field"
import Button from "components/button"

import { SignupScreenNavigationProp } from "./Signup"
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./signupValidationSchema"
import { SCREENS } from "views/navigation/constants"

export type PreparePagesType = {
    navigation: SignupScreenNavigationProp,
    handleNextPage: Dispatch<SetStateAction<number>>
    handlePageWithError: Function,
}

export function preparePages({
    navigation,
    handleNextPage,
    handlePageWithError
}: PreparePagesType) {
    const [backendErrorMessageName, setBackendErrorMessageName] = useState<string>();
    const [backendErrorMessagePhone, setBackendErrorMessagePhone] = useState<string>();
    const [backendErrorMessageEmail, setBackendErrorMessageEmail] = useState<string>();
    const [backendErrorMessagePassword, setBackendErrorMessagePassword] = useState<string>();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            phone: '',
            mail: '',
            password: '',
        }
    });



    type FormDataProps = {
        name: string;
        phone: string;
        mail: string;
        password: string;
    }


    const onSubmit = async (formData: FormDataProps) => {

        try {
            const [firstName, lastName] = formData.name.split(' ');
            const formDataModified = {
                first_name: firstName,
                last_name: lastName,
                phone: formData.phone,
                email: formData.mail,
                password1: formData.password,
                password2: formData.password,
                language: 1,
            }

            const response = await fetch('https://api.dev.footballchallengeapp.com/auth/registration/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataModified),
            });

            const data = await response.json();
            console.log("DATA: ", data);
            console.log("RESPONSE: ", response);

            if (!response.ok) {
                if (data.first_name || data.last_name) {
                    setBackendErrorMessageName(data.first_name[0]);
                    handlePageWithError(0);
                } else if (data.phone) {
                    setBackendErrorMessagePhone(data.phone[0]);
                    handlePageWithError(1);
                } else if (data.email) {
                    setBackendErrorMessageEmail(data.email[0])
                    handlePageWithError(2);
                } else {
                    setBackendErrorMessagePassword(data.password1[0])
                    handlePageWithError(3);
                }
                return;
            } else {
                navigation.navigate(SCREENS.AUTH.ACCOUNT_TYPE.ID);
            }



        } catch (error) {
            console.log("ERROR: ", error);
        }
    };

    if (errors) {
        useEffect(() => {
            if (errors.name) {
                handlePageWithError(0);
            } else if (errors.phone) {
                handlePageWithError(1);
            } else if (errors.mail) {
                handlePageWithError(2);
            } else if (errors.password) {
                handlePageWithError(3);
            }

        }, [errors]);
    }



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
                                onChangeText={(value) => {
                                    onChange(value)
                                    setBackendErrorMessageEmail('');
                                }}
                                error={errors.name}
                                backendError={backendErrorMessageName}
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
                                onChangeText={(value) => {
                                    onChange(value)
                                    setBackendErrorMessagePhone('');
                                }}
                                error={errors.phone}
                                backendError={backendErrorMessagePhone}
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
                                onChangeText={(value) => {
                                    onChange(value)
                                    setBackendErrorMessageEmail('');
                                }}
                                error={errors.mail}
                                backendError={backendErrorMessageEmail}
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
                //Pressable is used instead of View due to a strange bug that occurs when rendering forms.
                <Pressable>
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
                                secureTextEntry={true}
                                onChangeText={(value) => {
                                    onChange(value)
                                    setBackendErrorMessagePassword('');
                                }}
                                error={errors.password}
                                backendError={backendErrorMessagePassword}
                            />
                        )}
                    />
                </Pressable>
            ),
            button: (
                <Button
                    text="Dalej"
                    onPress={handleSubmit(onSubmit)}
                    mode='filled'
                />
            )
        },

    ];
}
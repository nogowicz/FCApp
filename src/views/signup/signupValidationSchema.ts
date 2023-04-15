//@ts-ignore
import { object, string } from 'yup';

const phoneRegex = /^[0-9]{9}$/;
const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const passwordRegex = /(?=.*[0-9])/;
export const schema = object({
  name: string()
    .matches(nameRegex, 'Proszę podaj imię i nazwisko')
    .required('Proszę podaj imię i nazwisko'),
  phone: string()
    .matches(phoneRegex, 'Proszę podaj numer telefonu')
    .required('Proszę podaj numer telefonu'),
  mail: string().email().required(),
  password: string()
    .min(6)
    .matches(passwordRegex, 'Hasło musi zawierać conajmniej jedną cyfrę')
    .required(),
}).required();

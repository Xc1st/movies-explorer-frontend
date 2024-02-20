/* eslint-disable react/prop-types */
import EntryPage from './EntryPage';
import Input from './Input';
export default function Login({ name }) {
    return (
        <EntryPage name={name}>
            <Input
            name = {'email'}
            placeholder={'Введите Email'} ></Input>
            <Input
            name = {'password'}
            placeholder={'Введите пароль'}></Input>
            
        </EntryPage>
    )
}
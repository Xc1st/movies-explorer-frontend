/* eslint-disable react/prop-types */
import EntryPage from './EntryPage';
import Input from './Input';
export default function Login({ name }) {
    return (
        <EntryPage name={name}>
            <Input
            minLength={2}
            maxLength={30}
            required
            name = {'email'}
            placeholder={'Введите Email'} ></Input>
            <Input
            required
            name = {'password'}
            placeholder={'Введите пароль'}></Input>
            
        </EntryPage>
    )
}
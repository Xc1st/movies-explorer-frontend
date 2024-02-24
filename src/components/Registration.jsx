/* eslint-disable react/prop-types */
import EntryPage from './EntryPage';
import Input from './Input';
export default function Registration({ name }) {
    return (
        <EntryPage name={name}>
            <Input
            minLength={2}
            maxLength={30}
            required
            name = {'name'}
            placeholder={'Введите имя'}></Input>
            <Input
            required
            name = {'email'}
            placeholder={'Ведите Email'}></Input>
            <Input
            minLength={2}
            maxLength={30}
            required
            name = {'password'}
            placeholder={'Введите пароль'}></Input>
        </EntryPage>
    )
}
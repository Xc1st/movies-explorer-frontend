/* eslint-disable react/prop-types */
import EntryPage from './EntryPage';
import Input from './Input';
export default function Registration({ name }) {
    return (
        <EntryPage name={name}>
            <Input
            name = {'name'}
            placeholder={'Введите имя'}></Input>
            <Input
            name = {'email'}
            placeholder={'Ведите Email'}></Input>
            <Input
            name = {'password'}
            placeholder={'Введите пароль'}></Input>
        </EntryPage>
    )
}
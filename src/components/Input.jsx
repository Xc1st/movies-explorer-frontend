/* eslint-disable react/prop-types */

export default function Input({ name, isInputValid, error, placeholder, minLength, maxLength }) {
    return (
        <>
            {name === 'password' || name === 'email' || name === 'name' ?
                <>
                    <p className="login__input-caption">{name === 'email' ? 'E-mail' : name === 'password' ? 'Пароль' : 'Имя'}</p>
                    <input
                        minLength={minLength}
                        maxLength={maxLength}
                        required
                        placeholder={placeholder}
                        type={name}
                        className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
                    />
                    <span className="login__error error">{error}</span>
                </>
                :
                name === 'search-string' ?
                    <>
                        <input
                            required
                            type="text"
                            className={`search-string__input ${isInputValid === undefined || isInputValid ? '' : 'search-string_invalid'}`}
                            placeholder="Фильм"
                        />
                        <span className="search-string__error error">{error}</span>
                    </>
                    :
                    <>
                        <input
                        required
                            placeholder={placeholder}
                            type="text"
                            className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invalid'}`}
                        />
                        {/* <span className="login__error error">{error}</span> */}
                    </>
            }
        </>
    )
}
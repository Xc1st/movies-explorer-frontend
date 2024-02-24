/* eslint-disable react/prop-types */
export default function Form({ name, children, titleButton, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="form">
            <div>{children}</div>
            {name === 'sign-in' || name === 'sign-up' ?
                <button type="submit" className="login__button">
                    {titleButton}
                </button>
                :
                <button type="submit" className="profile__save">
                    {titleButton}
                </button>
            }
        </form >
    )
}
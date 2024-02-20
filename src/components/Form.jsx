/* eslint-disable react/prop-types */
export default function Form({ name, children, titleButton, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="form">
            <div>{children}</div>
            {name === 'sign-in' || name === 'sign-up' ?
                <button className="login__button">
                    {titleButton}
                </button>
                :
                <button className="profile__save">
                    {titleButton}
                </button>
            }
        </form >
    )
}
import form from './form.css';

const FormComponent = () => {
    return (
        <div className="form-container">
            <div className="form__title">
                <h3>Connect with us</h3>
            </div>
            <div className="form__inputs">
                <input className="form__input" placeholder="Name"></input>
                <input className="form__input" placeholder="Email"></input>
                <textarea className="form__input" placeholder="Message"></textarea>
                <button type="submit">enviar
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fill-rule="evenodd"  stroke-width="2"><path d="M15 1l9 9-9 9M0 10h24"/></g></svg>
                </button>
            </div>
        </div>
    )
}
export default FormComponent;
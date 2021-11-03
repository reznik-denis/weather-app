import s from './form.module.css';

function Form() {
    return <form className={s.form}>
        <label className={s.lableForm} htmlFor="city">Enter your city</label>
        <input className={s.inputLable} type="text" id="city" />
    </form>
}

export default Form;
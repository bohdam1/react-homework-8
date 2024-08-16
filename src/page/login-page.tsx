import { LoginForm } from "../components/LoginForm/LoginForm"
import img from "./book.jpg"
import phone from "./15.png"
import css from "./login-page.module.css"
import { AuthNav } from "../components/AuthNav/AuthNav"
export const LoginPage = ()=> {


    return (
        <>
        <AuthNav/>
        <section className={css.join_sectoin}>
        <div className={css.phone_container}>
            <div className={css.img_container}>
                <img className={css.phonebook} src={img}  alt="phonbook"/>
            </div>
            <h1 className={css.maine_title}> WELCOME TO phone book</h1>
            <h2 className={css.second_title}>Sign in with your credentials to access your account</h2>
            <LoginForm/>
        
        </div>
        <div className={css.ph_container}>
           <img className={css.phone} src={phone} alt="phon"/>
        </div>

        </section>
        </>
    )
}

import { JoinForm } from "../components/JoinForm/JoinForm"
import css from "./Join-page.module.css"
import img from "./book.jpg"
import phone from "./15.png"
import { AuthNav } from "../components/AuthNav/AuthNav"


export const JoinPage = ()=> {


    return (
        <>
        <AuthNav/>
        <section className={css.join_sectoin}>
        <div className={css.ph_container}>
           <img className={css.phone} src={phone} alt="phon"/>
        </div>
        <div className={css.phone_container}>
            <div className={css.img_container}>
                <img className={css.phonebook} src={img}  alt="phonbook"/>
            </div>
            <h1 className={css.maine_title}> WELCOME TO phone book</h1>
            <h2 className={css.second_title}>Join with your credentials to access your account</h2>
            <JoinForm/>
            </div>

        </section>
        
        </>
        
       
       
    )
}
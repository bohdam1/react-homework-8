import { FormBook } from '../components/form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';

import bookImage from './book.jpg'; // Імпорт зображення з тієї ж папки
import css from "./contact=page.module.css"


export const ContactPage = () => {

  return (
    <div className={css.section_container}>
      <div className={css.title_container}>
      <h1 className={css.maine_title}>Enter <br/>
        important<br/>
        numbers </h1>
      <h2  className={css.second_title}>in the phone book so  you don't lose them!</h2>
      <img className={css.img} src={bookImage} alt="Book"/>

      </div>
      <FormBook />
      
      <ContactsList  />
    </div>
  );

}
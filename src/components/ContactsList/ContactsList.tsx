import React, { useEffect } from "react";
import css from "./contactlist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchContactsThunk,deleteContactsThunk} from "../../redux/Contact/thunk"
import Filter from "../Filter/Filter"
import png from "./33.png"
import { RootState } from "../../redux/store";
import{AppDispatch} from "../../redux/store"

export const ContactsList = () => {
    const dispatch:AppDispatch = useDispatch();
    const contacts = useSelector((state:RootState) => state.contacts.items) || []
    
    const filter = useSelector((state:RootState) => state.filter.filter); 
   

    useEffect(() => {
        dispatch(fetchContactsThunk())
    },[dispatch])
    
    const filteredContacts = contacts && contacts.length > 0
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    : [];

    const handleDelete = (id:string) => {
        dispatch(deleteContactsThunk(id));
    };
 
    
    return (
        <div className={css.list_container}>
            <h2 className={css.title}>Contact</h2>
            <div className={css.container_logo}>
            <img src={png} alt="logo" className={css.logo}/>
            </div>
            
            <Filter  />
            <ul className={css.contact_list}>
                {filteredContacts.map(({ id, name, number }) => (
                    <li key={id} className={css.contact_item}>
                        <div className={css.kolo}>

                        </div>
                        <div className={css.infoforcontact}>
                        <p className={css.text}>
                            {name}: {number}
                        </p>  
                        </div>
                        <button onClick={() => handleDelete(id)} className={css.button_close}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        
        
        </div>
    );
};

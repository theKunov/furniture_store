import styles from'./Contacts.module.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacts() {

    const [addAdditionalClass, setAddAdditionalClass] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);
    
    //EmailJs 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2twvzot', 'template_iq1vyi8', form.current, 'Qnfu359kdEM4gXBnv')
            .then((result) => {
                e.target.reset();
                setIsEmailSent(true);
                setTimeout(() => { setAddAdditionalClass(true)}, 1000);
                setTimeout(() => setIsEmailSent(false), 2000);
                handleReset();
        }, (error) => {
          console.log(error.text);
        });
    };

    // Email Values
    const initialFormValues = {
        projectDesc: '',
        size: '',
        material: '',
        username: '',
        tel: '',
        email: ''
    };
    const [values, setValues] = useState(initialFormValues);

    const [materials, setMaterials] = useState({});

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const [validations, setValidations] = useState(true);
    const handleTelInput = (e) => {
        const telValue = e.target.value;
        if (!telValue.match(/^[0-9]*$/)) {
          setValidations(false);
          onChangeHandler(e);
        } else {
          setValidations(true);
          onChangeHandler(e);
        }
    }

    const onMaterialsChange = (e) => {
        setMaterials(state => ({ ...state, [e.target.value]: e.target.checked }));
    }

    // Reset Values after Succes 
    const handleReset = () => {
        setValues(initialFormValues);
      };

    // attach class to circle loader
    const circleLoaderClasses = `${styles['circle-loader']} ${addAdditionalClass ? styles['load-complete'] : ''}`;
    const circleLoaderClassesCheckmark = `${styles['checkmark']} ${styles['draw']} ${addAdditionalClass ? styles['complete'] : ''}`;
  
  return ( 
    <div className={styles['form-wrap']}>
        {isEmailSent && 
            <div className={styles['circle-loader-wrap']}>
            <div className={styles['circle-loader-frame']}>
                <div className={circleLoaderClasses}>
                    <div className={circleLoaderClassesCheckmark}></div>
                </div>
            </div>
        </div>
        }
        
        <form ref={form} onSubmit={sendEmail}>
            <h2>Направи запитване</h2>
            <div>
                <textarea
                    rows="8"
                    name="projectDesc"
                    id="projectDesc"
                    placeholder="Описание на проекта"
                    value={values.projectDesc}
                    onChange={onChangeHandler}
                />
            </div>

            <div>
                <input
                    type="text"
                    name="size"
                    id="size"
                    placeholder="Размери"
                    value={values.size}
                    onChange={onChangeHandler}
                    className={styles['size-input']}
                />
            </div>

            <div>
                <label className={styles['material-label']}>От какъв материал ще е проекта?</label>
                <ul>
                    <li>
                        <input type="checkbox" name="materials" value="masiv" id="masiv" onChange={onMaterialsChange} checked={materials['masiv'] || false} />
                        <label htmlFor="masiv">Масив</label>
                    </li>
                    <li>
                        <input type="checkbox" name="materials" value="pdch" id="pdch" onChange={onMaterialsChange} checked={materials['pdch'] || false} />
                        <label htmlFor="pdch">ПДЧ</label>                 
                    </li>                   
                    <li>
                        <input type="checkbox" name="materials" value="mdf" id="mdf" onChange={onMaterialsChange} checked={materials['mdf'] || false} />
                        <label htmlFor="mdf">МДФ</label>                 
                    </li>                   
                    <li>           
                        <input type="checkbox" name="materials" value="metal" id="metal" onChange={onMaterialsChange} checked={materials['metal'] || false} />
                        <label htmlFor="metal">Метал</label>
                    </li>
                </ul>
            </div>
            <div>
                <input
                    type="text"
                    name="username"
                    required 
                    id="username"
                    value={values.username}
                    placeholder="Име и фамилия"
                    className={styles['name-input']}
                    onChange={onChangeHandler}
                />
            </div>

            <div>
                <input
                    type="tel" 
                    pattern="[0-9]*" 
                    required 
                    name="tel"
                    id="tel"
                    value={values.tel}
                    placeholder="Телефон за връзка"
                    className={styles['phone-input']}
                    onChange={handleTelInput}
                />
                {!validations && (
                    <p  className={styles['phone-error']}>Моля, добавете валиден номер</p>
                  )}
            </div>


            <div>
                <input className={styles['submit-btn']} type="submit" value="Изпрати запитване" />
            </div>
        </form>
    </div>
    
  );
}

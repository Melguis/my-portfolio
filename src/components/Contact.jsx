import React, { useRef } from 'react'

import '../styles/contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillCheckCircle} from 'react-icons/ai'
import {AiFillExclamationCircle} from 'react-icons/ai'

import emailjs from 'emailjs-com'
import swal from 'sweetalert';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ob3nqn', 'template_jnmltfo', form.current, 'HSQTG12HVBVZMT6eg')
    
    .then((result) => {
      console.log(result.text);
      swal("Muito bem!", "Email enviado com sucesso!", "success");
    })

    .catch((error) => {
      console.log(error.text);
      swal("Seu email é inválido!", "Digite seu email corretamente", "error");
    })
    e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5>Mande-me uma mensagem</h5>
      <h2>Contato</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>jorgehenriquedasilva2014@hotmail.com</h5>
            <a href="mailto:jorgehenriquedasilva2014@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='.contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Jorge Henrique</h5>
            <a href="https://www.linkedin.com/in/jorge-henrique1/" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='.contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (61) 98345-7180</h5>
            <a href="https://wa.me/+5561983457180" target="_blank">Send a message</a>
          </article>
        </div>
          {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <div className="form_img">
              <AiFillCheckCircle className="img_check" />
              <AiFillExclamationCircle className="img_error" />
              <small>Error message</small>
            </div>
          </div>

          <div className="form-control">
            <input type="email" name='email' placeholder='Your Email' required/>
            <div className="form_img error">
              <AiFillCheckCircle className="img_check" />
              <AiFillExclamationCircle className="img_error" />
              <small>Error message</small>
            </div>
          </div>

          <div className="form-control">
            <textarea type="message" rows="7" placeholder='Your Message' required></textarea>
            <div className="form_img">
              <AiFillCheckCircle className="img_check" />
              <AiFillExclamationCircle className="img_error" />
              <small>Error message</small>
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

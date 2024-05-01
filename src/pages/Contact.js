import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";


export default function Contact(){
   return(
    <>
     <motion.div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16 text-center"
      initial ={{x: "100vw"}}
       animate={{ x: 0}}
       transition={{ type: "spring" , delay: 0.5}}
     >
      <div>
        <h2 className="font-medium text-2xl text-gray-800">Contact WebMuba</h2>
        <p className="text-lg leading-relaxed text-slate-500 mt-3">
          Have something to say? We are here to help. Fill up the form or send email or call phone.
        </p>
        <div className="flex items-center mt-2 space-x-2 text-gray-600">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 w-4 h-4" />
          <a href="mailto:mubaiwaKumbirai24@gmail.com" className="text-gray-600">
            mubaiwaKumbirai24@gmail.com
          </a>
        </div>
        <div className="flex items-center mt-2 space-x-2 text-gray-600">
          <FontAwesomeIcon icon={faPhone} className="text-gray-400 w-4 h-4" />
          <a href="tel:+263 71 224 1838" className="text-gray-600">
            +263 71 224 1838
          </a>
        </div>
      </div>
      <ContactForm/>
    </motion.div>
  
    </>
   )

}
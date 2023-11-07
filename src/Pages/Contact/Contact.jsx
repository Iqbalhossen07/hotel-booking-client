import ContactAccordion from "../ContactAccordion/ContactAccordion";
import ContactAddress from "../ContactAddress/ContactAddress";

const Contact = () => {
    return (
        <section>
           <div>
           <ContactAddress></ContactAddress>
           </div>

           <div>
            <ContactAccordion></ContactAccordion>
           </div>
        </section>
    );
};

export default Contact;
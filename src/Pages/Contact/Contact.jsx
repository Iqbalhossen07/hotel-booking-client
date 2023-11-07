import ContactAccordion from "../ContactAccordion/ContactAccordion";
import ContactAddress from "../ContactAddress/ContactAddress";
import Footer from "../../Footer/Footer";

const Contact = () => {
    return (
        <section>
           <div>
           <ContactAddress></ContactAddress>
           </div>

           <div>
            <ContactAccordion></ContactAccordion>
           </div>
           <div>
            <Footer></Footer>
           </div>
        </section>
    );
};

export default Contact;
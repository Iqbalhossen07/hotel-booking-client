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
           <div>
          <h2 className='text-center mt-10 mb-10 text-base md:text-3xl lg:text-4xl font-semibold text-[#26917C]'>FAQ</h2>
        </div>
            <ContactAccordion></ContactAccordion>
           </div>
           <div className="mt-20">
            <Footer></Footer>
           </div>
        </section>
    );
};

export default Contact;
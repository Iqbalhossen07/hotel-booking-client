import ContactAccordion from "../ContactAccordion/ContactAccordion";
import ContactAddress from "../ContactAddress/ContactAddress";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <section>
             <Helmet>
                <title>
                    Hotel || Contact
                </title>
            </Helmet>
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
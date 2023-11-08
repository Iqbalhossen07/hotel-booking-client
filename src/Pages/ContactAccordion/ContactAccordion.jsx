

const ContactAccordion = () => {
    return (
        <section className="flex justify-center">
          
 <div className=" lg:w-1/2">
 <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  How can you make a reservation?
  </div>
  <div className="collapse-content"> 
    <p>You can make a reservation by visiting our website, calling our reservations team atPhone Number, or by emailing us at Email Address.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is your cancellation policy?
  </div>
  <div className="collapse-content"> 
    <p>Our cancellation policy may vary depending on the type of reservation and rate plan. Please refer to your reservation confirmation or contact our reservations team for specific details.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What room types do you offer?
  </div>
  <div className="collapse-content"> 
    <p>We offer a variety of room types, including standard rooms, suites, and more. You can find detailed information on our website, or contact our reservations team for assistance.</p>
  </div>
</div>
 </div>
        </section>
    );
};

export default ContactAccordion;
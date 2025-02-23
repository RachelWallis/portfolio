import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import appData from "@data/app.json";

const Contact = () => {
  return (
    <Layouts fullWidth>
        <PageBanner pageTitle={"Get in touch!"} align={"center"} />
      
        {/* info */}
        <div>
            <ul className="mil-puplication-details mil-up mil-mb-90">
                <li>
                    <span className="mil-upper mil-accent">Call: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">+44(0)752 654 9897</span>
                </li>
                <li>
                    <span className="mil-upper mil-accent">Email: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">rachel@rachel-wallis.com</span>
                </li>
            </ul>
        </div>

        {/* contact     
        <div className="mil-section-title mil-up">
            <div className="mil-divider" />
            <h3>Let's Talk</h3>
        </div>

        
        <div id="contact" className="mil-p-90-60">
        <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        status.innerHTML = "Thanks for your submission!";
                        form.reset()
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "Oops! There was a problem submitting your form"
                            }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="row align-items-center">
                <div className="col-lg-6 mil-up">
                    <input 
                      type="text" 
                      placeholder="What's your name"
                      name="name" 
                      required="required" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name} 
                    />
                </div>
                <div className="col-lg-6 mil-up">
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      name="email"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} 
                    />
                </div>
                <div className="col-lg-12 mil-up">
                    <textarea 
                      placeholder="Tell us about our project"
                      name="message" 
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message} 
                    />
                </div>
                <div className="col-lg-8">
                    <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
                </div>
                <div className="col-lg-4">
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        <button type="submit" className="mil-btn mil-sm-btn">
                            <span>Send message</span>
                        </button>
                    </div>
                </div>
                <div className="form-status" id="contactFormStatus" />
            </form>
            )}
            </Formik>
        </div>
         */}
    
    </Layouts>
  );
};
export default Contact;

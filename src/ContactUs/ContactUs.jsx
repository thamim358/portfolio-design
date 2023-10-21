import React, { useState, useEffect, useRef } from "react";
import "../Header/Header.scss";
import "./ContactUs.scss";
import emailjs from "emailjs-com";
import WOW from "wow.js";
// import contactImg from "../img/contact-img.svg";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  const [status, setStatus] = useState({});
  const textShadowStyle = {
    textShadow: "8px 8px 12px rgba(0, 0, 0, 0.5)",
  };
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  //   dropdown: "Yes",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmits = (e) => {
  //   e.preventDefault();

  //   // Replace these values with your own
  //   const serviceId = 'service_jgfsuqn';
  //   const templateId = 'template_n2jqcc6';
  //   const userId = 'yG7XtxVoGKsFafIuG';

  //   emailjs
  //     .send(serviceId, templateId, {
  //       from_name: formData.firstName + ' ' + formData.lastName,
  //       from_email: formData.email,
  //       phone: formData.phone,
  //       message: formData.message,
  //     }, userId)
  //     .then(() => {
  //       setStatus({ message: 'Email sent successfully!' });
  //       setFormData({
  //         firstName: '',
  //         lastName: '',
  //         email: '',
  //         phone: '',
  //         message: '',
  //       });
  //     })
  //     .catch((error) => {
  //       setStatus({ message: 'Error sending email.' });
  //       console.error('Error sending email:', error);
  //     });
  // };
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [phone, setPhone] = useState('');

  // const handleSubmits = (e) => {
  //   e.preventDefault();

  //   // Replace these values with your own
  //   const serviceId = 'service_jgfsuqn';
  //   const templateId = 'template_n2jqcc6';
  //   const userId = 'yG7XtxVoGKsFafIuG';

  //   emailjs.send(serviceId, templateId, {
  //     from_name: name,
  //     from_email: email,
  //     phone:phone,
  //     message: message,

  //   }, userId)
  //     .then(() => {
  //       console.log('Email sent successfully!');
  //       // Reset form fields
  //       setName('');
  //       setEmail('');
  //       setPhone('');
  //       setMessage('');
  //     })
  //     .catch((error) => {
  //       console.error('Error sending email:', error);
  //     });
  // };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sly09r6",
        "template_n2jqcc6",
        form.current,
        "yG7XtxVoGKsFafIuG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ success: true, message: "Email sent successfully!" });
        },
        (error) => {
          console.log(error.text);
          setStatus({ success: false, message: "Failed to send email." });
        }
      );
  };

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const form = event.target;
  //   const data = new FormData(form);

  //   axios
  //     .post("http://localhost/contactus/contact.php", data)
  //     .then((response) => {
  //       console.log(response.data); // Handle success response
  //       window.alert("Success: " + response.data); // Display success alert with response data
  //       form.reset(); // Reset form fields
  //     })
  //     .catch((error) => {
  //       console.error(error); // Handle error
  //     });
  // }

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <section className="contact space" id="contactme" style={textShadowStyle}>
        <Container>
          <div className="">
            <Row className="flex flex-col justify-center items-center md:flex-row p-5">
              <Col
                size={12}
                md={6}
                className="md:w-3/5 lg:p-3px tracking-wider wow fadeInUp"
              >
                {/* <img
                  src={contactImg}
                  alt="Contact Us"
                  className="mt-10 pt-10"
                /> */}
                <div className="phone">
                  <div className="shadow"></div>
                  <div className="speaker"></div>
                  <div className="camera"></div>
                  <div className="screen">
                    <div className="contents">
                      <div className="menubar">
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                      </div>

                      <div className="entry" id="focus">
                        <div className="entry-content">
                          <div className="profiler"></div>
                          <div className="title text-sm"></div>
                          <div className="text text-sm"></div>
                          <div className="text"></div>

                          <div className="add-content"></div>
                          <div className="add-content"></div>
                          <div className="add-content"></div>
                          <div className="add-content"></div>
                          <div className="add-content"></div>
                          <div className="add-content"></div>
                        </div>
                      </div>

                      <div className="entry">
                        <div className="entry-content">
                          <div className="profiler"></div>
                          <div className="title"></div>
                          <div className="text"></div>
                          <div className="text"></div>
                        </div>
                      </div>

                      <div className="entry">
                        <div className="entry-content">
                          <div className="profiler"></div>
                          <div className="title"></div>
                          <div className="text"></div>
                          <div className="text"></div>
                        </div>
                      </div>

                      <div className="entry">
                        <div className="entry-content">
                          <div className="profiler"></div>
                          <div className="title"></div>
                          <div className="text"></div>
                          <div className="text"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn"></div>
                </div>
              </Col>
              <Col size={12} md={6}>
                <div className="lg:mt-5 mt-5 mr-10 justify-self-center md:justify-center">
                  <div className="Name uppercase text-4xl text-gray-400 mb-5 font-bold wow rotateIn">
                    Get In touch
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-wrap -mx-1 ">
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          type="text"
                          id="firstName"
                          name="firstname"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-1">
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email"
                          name="user_email"
                          required
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1 wow fadeInUp">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone No"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-1 wow fadeInUp">
                      <textarea
                        rows="6"
                        id="message"
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>
                      <button
                        className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold py-2 px-14 rounded-md hover:from-pink-500 hover:to-yellow-500 wow bounceIn cursor-pointer"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                {status.message && (
                  <Col className="mt-3 text-bold text-lg text-green-500">
                    {status.message}
                  </Col>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <div className="divider-grad-mask mt-10"></div>
    </>
  );
}

export default ContactUs;

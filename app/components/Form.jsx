"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  //SDK start
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yltqt9i",
        "template_62nsl8h",
        form.current,
        "u4wmW8gGyno08287R"
      )
      .then(
        (result) => {
          document.getElementById("success").innerHTML =
            "Your Message Was Sent, Thank You! We Will Be In Touch Shortly";
          console.log(result.text);
        },
        (error) => {
          document.getElementById("success").innerHTML =
            "Sorry your message was not sent! Please try email or WhatsApp";
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  //SDK end
  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col font-bold text-lg mb-2">
          <label>Name</label>
          <input
            required
            type="text"
            name="user_name"
            className=" w-[350px] px-2 py-2 border-2 border-gray-800 rounded-full"
            placeholder="Full Name"
          />
        </div>
        <div className="flex flex-col font-bold text-lg mb-2">
          <label>Email</label>
          <input
            required
            type="email"
            name="user_email"
            className="w-[350px] px-2 py-2 border-2 border-gray-800 rounded-full"
            placeholder="example@email.com"
          />
        </div>
        <div className="flex flex-col font-bold text-lg mb-2">
          <label>Message</label>
          <textarea
            required
            type="text"
            name="message"
            className=" resize-none w-[350px] h-[200px] px-2 py-2 border-2 border-gray-800 rounded-3xl"
          />
        </div>
        <button
          type="submit"
          value="Send"
          className=" font-title mt-7 bg-gray-800 text-[20px] text-white rounded-[4px] w-[120px] h-10 flex items-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="text-[25px] mt-2 px-2 text-center" id="success"></div>
    </div>
  );
};

export default Form;

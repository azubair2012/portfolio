import React from "react";

const Form = () => {
  return (
    <div>
      <form action="" className="flex flex-col items-center">
        <div className="flex flex-col font-bold text-lg">
          <label htmlFor="">Name</label>
          <input
            required
            type="text"
            name="name"
            className="w-[350px] px-2 py-2 border-2 border-gray-800 rounded-full"
          />
        </div>
        <div className="flex flex-col font-bold text-lg">
          <label htmlFor="">Email</label>
          <input
            required
            type="text"
            name="email"
            className="w-[350px] px-2 py-2 border-2 border-gray-800 rounded-full"
          />
        </div>
        <div className="flex flex-col font-bold text-lg">
          <label htmlFor="">Message</label>
          <input
            required
            type="text"
            name="message"
            className="w-[350px] h-[200px] px-2 py-2 border-2 border-gray-800 rounded-3xl"
          />
        </div>
        <button
          type="submit"
          value="Submit"
          className="font-title mt-7 bg-gray-800 text-[20px] text-white rounded-[4px] w-[120px] h-10 flex items-center justify-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;

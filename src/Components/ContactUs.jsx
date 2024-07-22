import React, { useState } from "react";
import DemoImage from "../Images/ContactPageImage2.png";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    address: "",
    pincode: "",
    VisitDate: "",
    dateOfPurchase: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex items-center flex-col  ">
      {/* <h1 className=" text-2xl font-bold mt-2">Contact Us</h1> */}
      <div className="w-full flex  flex-col lg:flex-row  gap-2  rounded ">
        <div className="img w-full lg:w-[50%]">
          <img src={DemoImage} className=" " alt="contact us" />
        </div>
        <div className=" flex w-full lg:w-[50%] ">
          <form
            onSubmit={handleSubmit}
            className=" w-[90%] lg:w-[80%] p-1 lg:p-4  h-full lg:h-[70vh] shadow-m"
          >
            <h1 className=" text-2xl font-bold my-2">Contact Us</h1>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                pattern="\+?[0-9\s\-\(\)]*"
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div className=" flex flex-col lg:flex-row justify-between ">
              <div className=" w-full lg:w-[45%]">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  pattern="\d{6}"
                  maxlength="6"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2  mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
                />
              </div>
              <div className=" w-full lg:w-[50%]">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Visit
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="When Would You Like to Visit"
                  value={formData.VisitDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2  mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="dateOfPurchase"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Purchase
              </label>
              <input
                type="date"
                name="dateOfPurchase"
                id="dateOfPurchase"
                value={formData.dateOfPurchase}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white rounded-md bg-black hover:bg-slate-700 transition-all duration-300 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

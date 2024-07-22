import React, { useState } from "react";
import DemoImage from "../Images/ContactPageImage2.png";
import { apiConnector } from "../Services/connector";
import { endpoints } from "../Services/apis";
const { GET_IN_TOUCH } = endpoints;

const GetInTouchForm = () => {
  const [loading, Setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    date: "",
    message: "",
    // location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("get in touch form", formData);

    try {
      Setloading(true);
      const response = await apiConnector("POST", GET_IN_TOUCH, formData);
      if (response.status === 201) {
        alert("Form submitted successfully");
        console.log("Form submitted successfully", response.data);
        Setloading(false);
        // alert(response?.data?.message);

        // Trigger PDF download
        // const link = document.createElement("a");
        // link.href = "/Brochure.pdf"; // Adjust the path to your PDF file
        // link.setAttribute("download", "Brochure.pdf");
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
      } else {
        alert("Form submission failed");
        console.error("Form submission failed", response);
        Setloading(false);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      Setloading(false);
    }
  };

  return (
    <div className="flex items-center flex-col   ">
      <div className="w-full flex  flex-col lg:flex-row rounded ">
        <div className="img w-full lg:w-[50%]">
          <img src={DemoImage} alt="contact us" />
        </div>
        <div className=" flex justify-center w-full lg:w-[40%] ">
          <form
            onSubmit={handleSubmit}
            className=" w-full  p-4 h-full  shadow-md"
          >
            <h1 className=" text-2xl font-bold my-2">Get In Touch with Us</h1>
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
                className="w-full px-3 py-2 focus:none  outline-none mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No.
              </label>
              <input
                type="text"
                name="phone"
                pattern="\+?[0-9\s\-\(\)]*"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2  mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2  mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
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
                className="w-full px-3 py-2  mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
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
                  Date of Purchase
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="When would you like to make the purchase"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2  mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
                />
              </div>
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
                className="w-full px-3 py-2  mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
            </div>
            <div>
              <button
                disabled={loading}
                type="submit"
                className="w-full px-4 py-2 text-white bg-black hover:bg-slate-700 transition-all duration-300 focus:ring-offset-2"
              >
                {loading ? "Submiting..." : "Submit & Download Brochure"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;

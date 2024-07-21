import React, { useState } from "react";
import DemoImage from "../Images/ContactPageImage2.png";


const GetInTouchForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    dateOfPurchase: "",
    message: "",
    location: "",
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

    if (!formData.location) {
      return
    }
    // Log form data (optional, for verification purposes)
    // console.log(formData);

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = "/Brochure.pdf"; // Adjust the path to your PDF file
    link.setAttribute("download", "Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center flex-col   ">
      <div className="w-full flex  flex-col lg:flex-row justify-between   rounded ">
        <div className="img w-full lg:w-[50%]">
          <img src={DemoImage} alt="contact us" />
        </div>
        <div className=" flex justify-center w-full lg:w-[40%] ">
          <form
            onSubmit={handleSubmit}
            className=" w-[90%] lg:w-[70%] p-4 my-8 h-full lg:h-[80vh] shadow-md"
          >
            <h1 className=" text-2xl font-bold mt-2">Get In Touch with Us</h1>
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
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pincode
              </label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm bg-slate-200"
              />
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
                placeholder="When would you like to make the purchase"
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
               Select a nearest Location
              </label>
              <input
                name="location"
                id="location"
                value={formData.location}
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
                className="w-full px-4 py-2 text-white bg-black hover:bg-slate-700 transition-all duration-300 focus:ring-offset-2"
              >
                Submit & Download Brochure
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;

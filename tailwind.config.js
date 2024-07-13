const flowbite = require("flowbite-react/tailwind");
 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",flowbite.content(),],
  theme: {
    extend: {
      colors: {
        // customColor: "#5F8575", // Replace with your hex color code
        headerColor: "#000000", // Replace with your hex color code
        customGreen: "#32C86E", // Replace with your hex color code
        
      },
    },
  },
  plugins: [flowbite.plugin(),],
};

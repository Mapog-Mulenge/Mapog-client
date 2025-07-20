import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4 text-sm">
      &copy; {new Date().getFullYear()} Mapog Technologies. All rights reserved.
    </footer>
  );
}

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <p className="text-sm text-gray-600">
        Periodic Table © {new Date().getFullYear()} Created by Error Makes Clever
      </p>
    </footer>
  );
};

export default Footer;
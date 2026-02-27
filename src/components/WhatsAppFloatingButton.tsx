import React from "react";

const WhatsAppFloatingButton: React.FC = () => {
  const phone = "918600669633"; // without +
  const message = encodeURIComponent(
    "Hi, I want to know more about your CRM and how it can help me grow my business"
  );
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50"
    >
      {/* WhatsApp logo SVG (simplified) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-6 h-6"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339.6 55.9 283.3 32 222.4 32 99.3 32 0 131.3 0 254.4c0 45 11.8 88.7 34.2 127.7L0 480l101.9-33.8c37.7 20.6 80.4 31.3 123.2 31.3h.1c123.1 0 222.4-99.3 222.4-222.4 0-60.9-23.9-117.2-66.7-159.3zm-158.5 346.7h-.1c-34.2 0-67.7-9.2-96.9-26.5l-6.9-4.1-65.3 21.6 21.9-63.6-4.5-7.3c-18.5-29.8-28.3-64.4-28.3-99.7 0-97.2 79.1-176.3 176.3-176.3 47.1 0 91.3 18.3 124.5 51.6 33.1 33.2 51.4 77.4 51.4 124.5 0 97.2-79.1 176.3-176.3 176.3z" />
        <path d="M308.7 344.6l-34.7-9.9c-4.7-1.3-9.6-.5-13.4 2.1l-19.7 14.8c-26-13.9-47.2-35-61-61l14.8-19.7c2.7-3.8 3.5-8.7 2.1-13.4l-9.9-34.7c-2.3-8-9.9-13.3-18.1-12.3l-51 7.4c-8.8 1.3-15.6 8.8-16 17.6-1.4 27.2 4.1 54.1 16.3 78.4 12.2 24.2 30.4 44.5 53.1 59.3 22.7 14.8 48.6 23.3 75.8 24.2 8.8.2 16.4-6.3 17.6-15.1l7.4-51c1-8.1-4.3-15.7-12.4-18z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatingButton;

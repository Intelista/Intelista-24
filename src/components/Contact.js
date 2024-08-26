import React from "react";
const contact = "/images/contact.png";

export default function Contact() {
  return (
    <div className=" grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32my-8 bg-black bg-opacity-25 dark:bg-gray-100 dark:bg-opacity-10 text-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact Us!</h2>
          <div className="text-gray-400 dark:text-gray-600">Have Any Queries?</div>
        </div>
        <img
          src={contact}
          alt="Contact Us"
          className="p-6 max-w-full h-auto md:h-64" // Ensures the image is responsive and fits the container
        />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">Coordinator</h3>
          <p className="text-gray-400 dark:text-gray-600">Name: Shanmugam.S</p>
          <p className="text-gray-400 dark:text-gray-600">Contact: +91 9962075982</p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-100 dark:text-gray-800">Register Team</h3>
          <p className="text-gray-400 dark:text-gray-600">Name: Sanjaynathan L</p>
          <p className="text-gray-400 dark:text-gray-600">Contact: +91 9486735400</p>
        </div>
      </div>
    </div>
  );
}
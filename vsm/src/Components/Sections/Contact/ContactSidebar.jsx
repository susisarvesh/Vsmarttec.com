import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactSidebar = () => {
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    // Left section animation
    gsap.from(leftSectionRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: leftSectionRef.current,
        start: "top 80%", // Start animation when element is in view
      },
    });

    // Right section animation
    gsap.from(rightSectionRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: rightSectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 m-3 md:grid-cols-3 lg:grid-cols-3">
      {/* Left Section (First Column) */}
      <div
        ref={leftSectionRef}
        className="w-full rounded-lg bg-customBlue text-white p-6"
      >
        {/* Call to Action Section */}
        <div className="mb-6">
          <h2 className="text-xl font-normal mb-4">
            Would you rather have a call with us?
          </h2>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">
            Book call →
          </button>
        </div>

        {/* Other Contact Options */}
        <div className="border-t border-white pt-6">
          <h3 className="text-xl mb-2">Other contact options:</h3>
          <div className="space-y-2">
            <a
              href="mailto:vsmarttec@gmail.com"
              className="block bg-white text-customBlue px-4 py-2 rounded-md hover:bg-gray-100"
            >
              vsmarttec@gmail.com
            </a>
            <a
              href="tel:+919444971577"
              className="block bg-white text-customBlue px-4 py-2 rounded-md hover:bg-gray-100"
            >
              +91 9444971577
            </a>
            <a
              href="tel:+914426262743"
              className="block bg-white text-customBlue px-4 py-2 rounded-md hover:bg-gray-100"
            >
              +91 4426262743
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (Second Column, spans 2 columns on large screens) */}
      <div
        ref={rightSectionRef}
        className="col-span-1 md:col-span-2 lg:col-span-2 shadow-md w-full p-6 rounded-lg overflow-y-auto"
      >
        {/* Content for the second section */}
        <h2 className="text-customBlue text-3xl font-semibold">Right Side Content</h2>
        <p className="text-customBlue mt-2">
          This section can contain more details, images, or any other content you need.
          Add more content here to make the section scrollable on smaller devices or with long content.
        </p>
        <p className="text-customBlue mt-2">
          More content to demonstrate the scrollable right section. You can fill this with additional paragraphs, 
          images, or any other elements that cause the content to overflow.
        </p>
        <p className="text-white mt-2">
          Right section keeps scrolling, while the left section remains sticky.
        </p>
        <p className="text-customBlue mt-2">
          Add as much content here as needed to see the effect.
        </p>
      </div>
    </div>
  );
};

export default ContactSidebar;

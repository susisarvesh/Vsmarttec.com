import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactSidebar = () => {
  const [showForm, setShowForm] = useState(false);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const svgRef = useRef(null);
  const iconRef = useRef(null);
  const formRef = useRef(null);
  const overlayRef = useRef(null);

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

    // Circle animation
    gsap.fromTo(
      svgRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      }
    );

    // Message icon animation
    gsap.fromTo(
      iconRef.current,
      { y: -5 },
      {
        y: 5,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  // Handle form visibility and animation
  const openForm = () => {
    setShowForm(true);
    // Disable scroll when form is open
    document.body.classList.add("no-scroll");
    gsap.fromTo(
      formRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.7, ease: "power4.out" } // Updated duration and easing
    );
  };

  const closeForm = () => {
    gsap.to(formRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5, // Smooth transition for closing
      ease: "power3.inOut",
      onComplete: () => {
        setShowForm(false);
        // Re-enable scroll when form is closed
        document.body.classList.remove("no-scroll");
      },
    });
  };

  // Close form if clicked outside
  const handleOutsideClick = (e) => {
    if (overlayRef.current && !overlayRef.current.contains(e.target)) {
      closeForm();
    }
  };

  // Event listener for clicking outside
  useEffect(() => {
    if (showForm) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showForm]);

  return (
    <div className="grid grid-cols-1 gap-4 m-3 md:grid-cols-3 lg:grid-cols-3">
      {/* Left Section (First Column) */}
      <div ref={leftSectionRef} className="w-full rounded-lg bg-customBlue text-white p-6">
        <div className="mb-6">
          <h2 className="text-xl font-normal mb-4">Would you rather have a call with us?</h2>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300">
            Book call →
          </button>
        </div>
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

      {/* Right Section */}
      <div
        ref={rightSectionRef}
        className="col-span-1 md:col-span-2 lg:col-span-2 shadow-md w-full p-6 rounded-lg overflow-y-auto"
      >
        <h2 className="text-customBlue text-3xl font-semibold">Contact Us</h2>
        <div className="mt-6 flex justify-center cursor-pointer" onClick={openForm}>
          <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="200" height="200">
            <circle cx="32" cy="32" r="30" fill="#4CAF50" />
            <g ref={iconRef} fill="#FFFFFF">
              <path d="M20 24h24c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V26c0-1.1.9-2 2-2zm0 2v3l12 5 12-5v-3H20zm12 7l12-5v7l-12 5-12-5v-7l12 5z" />
            </g>
          </svg>
        </div>
        <p className="text-gray-500 text-center mt-4">Click the form to get in touch!</p>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div
            ref={formRef}
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full sm:w-11/12 md:w-2/3 lg:w-1/2 relative"
          >
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-4xl text-gray-500 hover:text-black focus:outline-none"
              style={{ transform: "scale(1.2)", transition: "transform 0.3s ease" }}
            >
              &times; {/* "X" icon for close */}
            </button>
            <h3 className="text-xl font-semibold mb-4 text-customBlue">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-2 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-2 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium">Company Name</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="mt-2 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-2 p-2 w-full border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  className="mt-2 p-2 w-full border rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-black"
                  onClick={closeForm}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSidebar;

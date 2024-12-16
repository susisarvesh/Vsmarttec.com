import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';

// Register the ScrollToPlugin and ScrollTrigger with gsap
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const imgLink = "https://media.istockphoto.com/id/2156384702/photo/abstract-background.jpg?s=2048x2048&w=is&k=20&c=9jcNtBYkRglvLFMJkFAnI-DmS1gS8QSJe5c5RK9xguI=";

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const items = [
  {
    title: "Powering Innovation: Automotive Battery Leader",
    details: "A global automotive battery giant with over 15,000 employees and 17 business units. Vsmart has been their trusted partner for 13+ years, implementing advanced attendance and access control systems. Over 100 readers and multiple access solutions have streamlined operations and enhanced security.",
    image: "https://ik.imagekit.io/zhf0gkzac/VSmart/vscasestudy/Automotive-Battery-PNG-Free-Image.png?updatedAt=1734309530015",
  },
  {
    title: "Securing the Nation: Defense Tech Partner",
    details: "A prominent defense research organization specializing in critical systems. Vsmart provided integrated attendance, vehicle access, cafeteria management, and surveillance solutions, ensuring high security and operational efficiency across their facilities.",
    image: "https://ik.imagekit.io/zhf0gkzac/VSmart/vscasestudy/Defence-Budget-2024-AI-image-.webp?updatedAt=1734309853112",
  },
  {
    title: "Driving Efficiency: Tyre Industry Pioneer",
    details: "India's largest tyre manufacturer and a global brand leader. Vsmart delivered ERP-integrated attendance solutions, simplifying workforce management and improving productivity across their operations, ensuring seamless system integration.",
    image: "https://ik.imagekit.io/zhf0gkzac/VSmart/vscasestudy/18990368_m-e1530161429828.jpg?updatedAt=1734310031291",
  },
  {
    title: "Safeguarding Operations: Edible Oil Titan",
    details: "A leading edible oil manufacturer with an extensive presence in India and Indonesia. Vsmart installed 200+ high-end CCTV systems to monitor and secure multiple plants, providing real-time visibility and ongoing system support for maximum reliability.",
    image: "https://ik.imagekit.io/zhf0gkzac/VSmart/vscasestudy/edible-oils-418048_l.jpg?updatedAt=1734310188072",
  },
];


  const detailsRefs = useRef([]); // Refs for description parts
  const containerRef = useRef(null); // Ref for the entire component

  const toggleExpand = (index) => {
    const newIndex = expandedIndex === index ? -1 : index;
    setExpandedIndex(newIndex);

    setTimeout(() => {
      if (detailsRefs.current[index]) {
        gsap.to(window, {
          duration: 1, 
          scrollTo: {
            y: detailsRefs.current[index],
            offsetY: 100,
          },
          ease: "power2.out",
        });
      }
    }, 300);
  };

  useEffect(() => {
    detailsRefs.current.forEach((ref, index) => {
      if (ref) {
        if (expandedIndex === index) {
          gsap.fromTo(
            ref,
            { height: 0, opacity: 0 },
            { height: "auto", opacity: 1, duration: 0.6, ease: "power1.out" }
          );
        } else {
          gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: "power1.out" });
        }
      }
    });
  }, [expandedIndex]);

  useEffect(() => {
    // Animate the entire component when it comes into view
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Start the animation when the top of the container reaches the bottom of the viewport
          toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="w-7xl mx-5 p-5 bg-customBlue rounded-3xl flex flex-col justify-center items-center text-center select-none">
      <p className="text-white mb-4 text-3xl mt-9">
  <span className="text-orange-500">Case Studies</span>
  <sup>&emsp;_____&emsp;</sup>Highlighting impactful solutions driving business success.
</p>


      <div className="max-w-5xl p-4 bg-white rounded-2xl w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`border-b ${expandedIndex === index ? 'border-gray-600' : 'hover:border-gray-400'}`}
          >
            <div
              onClick={() => toggleExpand(index)}
              className={`cursor-pointer p-4 font-semibold flex justify-between ${
                expandedIndex === index ? 'text-customBlue' : 'text-gray-400 hover:text-gray-500'
              } transition-colors duration-75`}
            >
              {/* This is title */}
              <h2 className="text-lg font-medium">{item.title}</h2>
            </div>
            <div
              ref={(el) => (detailsRefs.current[index] = el)} // Ref for the description part
              className="overflow-hidden"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="gap-5 items-center justify-center p-4 flex flex-col lg:flex-row-reverse">
                {/* This is description */}
                <p className="bg-gray-100 p-5 mb-5 text-gray-700 rounded-3xl text-left lg:h-72 lg:w-2/3 lg:text-xl sm:h-2/4 sm:max-w-xl">
                  {item.details} &nbsp;
                  {/* <span>Company Name</span> */}
                </p>
                {/* this description ends here */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-3xl lg:w-1/3 lg:h-72 sm:h-80 md:w-full object-cover md:h-62"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

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
      title: "Batman",
      details: "\"Design really helped kick-start my interior design and architecture business online! With their talent for web design, our website became a hit. It's super easy to navigate and showcases our work beautifully. Thanks to them, we're now able to reach new heights and we are closer to our business goals!\"",
      image: imgLink,
    },
    { title: "Superman", details: "\"Additional info about Superman\"", image: imgLink },
    { title: "Strange", details: "\"Additional info about Strange\"", image: imgLink },
    { title: "Hulk", details: "\"Additional info about Hulk\"", image: imgLink },
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
        <span className="text-orange-500">Success stories</span>
        <sup>&emsp;_____&emsp;</sup>A few testimonials from satisfied clients!
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
                expandedIndex === index ? 'text-black' : 'text-gray-400 hover:text-gray-500'
              } transition-colors duration-75`}
            >
              {/* This is title */}
              <p>{item.title}</p>
            </div>
            <div
              ref={(el) => (detailsRefs.current[index] = el)} // Ref for the description part
              className="overflow-hidden"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="gap-5 items-center justify-center p-4 flex flex-col lg:flex-row-reverse">
                {/* This is description */}
                <p className="bg-gray-100 p-5 mb-5 text-gray-700 rounded-3xl text-left lg:h-72 lg:w-2/3 lg:text-xl sm:h-2/4 sm:max-w-xl">
                  {item.details} &nbsp;<span>Company Name</span>
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

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Susindran S",
    role: "Founder | Managing Director at Vsmart",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore accusantium explicabo maiores pariatur. Incidunt culpa consequatur dolorum provident totam voluptates ipsa eaque neque optio inventore, odit, unde earum labore aliquid.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQHdqmmuiJORfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1624854246489?e=1730937600&v=beta&t=Be3tbnOtgcAQ6dgwRbXU5FMSlzJW7kiEDJz_27d4eZU",
  },
  {
    name: "Raja CS",
    role: "Founder | Managing Director at Vsmart",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore accusantium explicabo maiores pariatur. Incidunt culpa consequatur dolorum provident totam voluptates ipsa eaque neque optio inventore, odit, unde earum labore aliquid.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQF_SdAfwQUkOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517756585845?e=1730937600&v=beta&t=sucKfWr--x2AkL6GtVMtKNZ04Vs4yZC6aselynRN4dE",
  },

];

const Ceos = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100 }, // Start with y at 100 (down) and opacity at 0
      {
        opacity: 1,
        y: 0, // Animate to y at 0 (normal position)
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center">
      <section ref={sectionRef} className="py-10 px-4 bg-white lg:max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-light leading-normal text-center mb-10 text-customBlue">
          Meet the Creative Minds Behind Vsmart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-100 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.description}</p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 mt-4 block"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ceos;
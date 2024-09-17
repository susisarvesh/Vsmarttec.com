import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const JobOpenings = () => {
  const titleRef = useRef(null);
  const jobRefs = useRef([]);

  const jobs = [
    { title: 'Cloud Architect', location: 'Bangalore', positions: 2 },
    { title: 'DevOps Engineer', location: 'Chennai', positions: 3 },
    { title: 'Web Developer', location: 'Madurai', positions: 1 },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%', 
        toggleActions: 'play none none none', 
      },
    });

    jobRefs.current.forEach((job, index) => {
      gsap.from(job, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: job, 
          start: 'top 90%', 
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      <h1
        className="text-3xl font-bold text-center mb-8"
        ref={titleRef}
      >
        Job Openings
      </h1>

      <div className="flex flex-col space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b-2 border-gray-200 py-4"
            ref={(el) => (jobRefs.current[index] = el)} 
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-500">{job.location}</p>
            </div>
            <div className="text-right">
              <p className="text-customBlue font-semibold mb-2">{job.positions} Positions</p>
              <button className="bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpenings;
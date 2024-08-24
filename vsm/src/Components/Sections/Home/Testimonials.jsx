import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const imgLink = "/public/elephant.png";

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const items = [
    { title: "Batman", details: "\"Aspectify Design really helped kick-start my interior design and architecture business online! With their talent for web design, our website became a hit. It's super easy to navigate and showcases our work beautifully. Thanks to them, we're now able to reach new heights and we are closer to our business goals!\"", image: imgLink },
    { title: "Superman", details: "\"Additional info about Superman\"", image: imgLink }, 
    { title: "Strange", details: "\"Additional info about Strange\"", image: imgLink },
    { title: "Hulk", details: "\"Additional info about Hulk\"", image: imgLink },
  ];

  const detailsRefs = useRef([]);

  const toggleExpand = (index) => {
    setExpandedIndex( index);
  };

  useEffect(() => {
    detailsRefs.current.forEach((ref, index) => {
      if (ref) {
        if (expandedIndex === index) {
          // Expand animation (rise into view)
          gsap.fromTo(ref, 
            { height: 0, opacity: 0 }, 
            { height: "auto", opacity: 1, duration: 0.6, ease: "power1.out" }
          );
        } else {
          // Collapse animation (sink out of view)
          gsap.to(ref, { height: 0, opacity: 0, duration: 0.5, ease: "power1.out" });
        }
      }
    });
  }, [expandedIndex]);

  return (
    <div className='lg:ml-[64px]'>
    <div className=' max-w-7xl mx-5 p-5 bg-black rounded-3xl  flex flex-col justify-center items-center text-center select-none' >
      <p className='text-white mb-4 text-3xl mt-9'>
        <span className='text-gray-500'>Success stories</span><sup>&emsp;_____&emsp;</sup>A few testimonials  from satisfied clients!
      </p>

      <div className=" max-w-5xl p-4  bg-white rounded-2xl  " >
        {items.map((item, index) => (
          <div key={index} className={`border-b ${expandedIndex === index ? 'border-gray-600' : 'hover:border-gray-400'}`}>
            <div
              onClick={() => toggleExpand(index)}
              className={`cursor-pointer p-4 font-semibold  flex justify-between ${
                expandedIndex === index ? 'text-black' : 'text-gray-400 hover:text-gray-500'
              } transition-colors duration-75`}
            >
              <p>{item.title}</p>
            </div>
            <div
              ref={(el) => (detailsRefs.current[index] = el)}
              className='overflow-hidden'  // Add overflow-hidden to container
              style={{ height: 0, opacity: 0 }}
            >
              <div className=' gap-5  items-center justify-center p-4 lg:flex flex-row-reverse '>
                <p className='bg-gray-100 p-5 mb-5 text-gray-700 rounded-3xl text-left lg:h-72 lg:w-2/3 lg:text-xl sm:h-2/4 sm:max-w-xl '><p>{item.details}</p> &nbsp;<p>Company Name</p></p>
                <img src={item.image} className='rounded-3xl  lg:w-1/3 lg:h-72 sm:h-80   md:w-full  object-cover md:h-62' />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  );
};

export default Testimonials;

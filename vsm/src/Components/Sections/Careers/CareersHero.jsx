
function CareersHero() {
  return (
    <div className="relative h-auto rounded-[20px] flex flex-col justify-center items-start m-4 overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartmp4/istock_video_1620060047085%20(1).mp4?updatedAt=1726403105896  " type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      <div className="relative z-10 max-w-4xl p-4 lg:p-12 text-white mb-96">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-poppins">
       Grow Together with <span className='text-gray-400'>Vsmart</span> — Where Progress Meets Innovation
        </h1>
        
      </div>

      <div className="absolute right-0 bottom-0 max-w-3xl p-4 lg:p-12 text-white mb-16">
        <p className="text-base lg:text-lg text-gray-300">
        At Vsmart, every step in your career is a chance to learn, grow, and connect with a community that values your unique skills and passions.
        </p>
     
      </div>
    </div>
  );
}

export default CareersHero;





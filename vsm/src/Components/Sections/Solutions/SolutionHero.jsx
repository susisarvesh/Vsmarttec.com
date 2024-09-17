
function SolutionHero() {
  return (
    <div className="relative h-auto rounded-[20px] flex flex-col justify-center items-start m-4 overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartmp4/problem%20solving%20vsmart.mp4?updatedAt=1725185801351" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      <div className="relative z-10 max-w-4xl p-4 lg:p-12 text-white mb-96">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-poppins">
         Tailored <span className="text-gray-400">Custom Services Personalized</span>            Solutions for Every Need

        </h1>
      </div>

      <div className="absolute right-0 bottom-0 max-w-3xl p-4 lg:p-12 text-white mb-16">
        <p className="text-base lg:text-lg text-gray-300">
        With over 6 years of experience, Vsmart provides top-notch product and technical support for corporate and government clients. Our certified team ensures first-call resolution and exceptional customer service for a wide range of products and services.
        </p>
      <button className="mt-8 bg-white text-black py-3 px-6 rounded-lg text-sm md:text-base lg:text-lg font-semibold flex items-center">
              Book a free discovery call <span className="ml-2">→</span>
            </button>
      </div>
    </div>
  );
}

export default SolutionHero;
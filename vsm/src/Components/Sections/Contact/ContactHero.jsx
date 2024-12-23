
function ContactHero() {
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
        Empowering <span className="text-gray-400">Progress </span>  with Excellence and Innovation
        </h1>
        
      </div>

      <div className="absolute right-0 bottom-0 max-w-3xl p-4 lg:p-12 text-white mb-16">
        <p className="text-base lg:text-lg text-gray-300">
        When your business demands more than the ordinary, you need a security solution that stands out. At Vsmart, we specialize in delivering innovative security systems and custom software solutions that not only protect your assets but also drive your business forward. Trust us to elevate your security and empower your success
        </p>
     
      </div>
    </div>
  );
}

export default ContactHero;





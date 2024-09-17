
const GoogleMapEmbed = () => {
  return (
    <div className="w-auto">
          <iframe
              className="rounded-lg h-[350px] w-full w-auto shadow-md md:w-full lg:w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.125812849576!2d80.224754!3d13.091212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52642e23a31e37%3A0x1ce92ba5ee5d2b1d!2sVSMART%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1726469746562!5m2!1sen!2sus"
        width="auto"
        style={{ border: 0 }}
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;

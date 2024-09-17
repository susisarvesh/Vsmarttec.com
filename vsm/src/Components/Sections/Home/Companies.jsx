import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Companies = () => {
  const imgRef = useRef([]);
  const [currentCarousel, setCurrentCarousel] = useState(0);

  // Array of arrays to manage different sets of logos with names
  const clientSets = [
    [
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/amarraja.jpeg?updatedAt=1724591953707", name: "Amarraja" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/vedanta.png?updatedAt=1724591953702", name: "Vedanta" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/SRF_Limited.png?updatedAt=1724591953757", name: "SRF Limited" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/PSA.jpeg?updatedAt=1724591953788", name: "PSA" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/wheels_india_limited_logo.jpeg?updatedAt=1724591953792", name: "Wheels India Limited" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/duopont.png?updatedAt=1724591953687", name: "Duopont" },
    ],
    [
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/Indian_Space_Research_Organisation-Logo.wine.png?updatedAt=1724592405673", name: "Indian Space Research Organisation" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/CFTRI-CSIR-India-Logo-Vector.svg-.png?updatedAt=1724592406062", name: "CFTRI-CSIR India" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/images.png?updatedAt=1724592405966", name: "Images" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/Indira_Gandhi_Centre_for_Atomic_Research_Logo.png?updatedAt=1724592406306", name: "Indira Gandhi Centre for Atomic Research" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/DRDO-logo.png?updatedAt=1724592406391", name: "DRDO" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/CSIR-Logo.png?updatedAt=1724592406530", name: "CSIR" },
    ],
    [
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/srm-institute-of-science-and-technology-vector-logo.png?updatedAt=1724596275001", name: "SRM" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/msmse.jpeg?updatedAt=1724594548803", name: "MSMSE" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/khc-logo_pnm9dp.png?updatedAt=1724592909753", name: "KHC" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/unnamed.png?updatedAt=1724592909757", name: "Unnamed" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/1631331989378.jpeg?updatedAt=1724592909626", name: "1631331989378" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/mms.png?updatedAt=1724592909616", name: "MMS" },
    ],
    [
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/ilfs.jpg?updatedAt=1724594662589", name: "ILFS" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/tataas.png?updatedAt=1724594662667", name: "Tata" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/General_Electric_logo.svg.png?updatedAt=1724594662496", name: "General Electric" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/mrf.png?updatedAt=1724594662456", name: "MRF" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/sikof.png?updatedAt=1724594662471", name: "Sikof" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/logo-LT.jpg?updatedAt=1724594662175", name: "LT" },
    ],
    [
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/indian-bank-1907-vector-logo-11574257516zjtfwxooqu-removebg-preview.png?updatedAt=1724596526141", name: "Indian Bank" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/cirton.png?updatedAt=1724594793781", name: "Cirton" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/112131.png?updatedAt=1724594793773", name: "112131" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/ap.png?updatedAt=1724594793815", name: "AP" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/mangal-logo-new.png?updatedAt=1724594793839", name: "Mangal" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/galla-removebg-preview.png?updatedAt=1724597121240", name: "Galla" },
    ],
    [
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/indian%20air%20force.png?updatedAt=1724594878211", name: "Indian Air Force" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/indian%20customs.jpeg?updatedAt=1724594878547", name: "Indian Customs" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/indianna.png?updatedAt=1724596904825", name: "Indian Navy" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/csirmadras.jpeg?updatedAt=1724594878449", name: "CSIR Madras" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/CSIR-National_Aerospace_Laboratories_Logo.png?updatedAt=1724594878566", name: "CSIR National Aerospace Laboratories" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/TNPOLICE-765x1100.jpeg?updatedAt=1724595972181", name: "TN Police" },
    ],
    [
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/corporates-irel-logo.jpg?updatedAt=1724594988733", name: "IREL" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/tofpl.jpeg?updatedAt=1724594988838", name: "TOFPL" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/tnhp.jpeg?updatedAt=1724594988699", name: "TNHP" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/nth.jpeg?updatedAt=1724594988402", name: "NTH" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/csir.jpeg?updatedAt=1724594988376", name: "CSIR" },
      { logo: "https://ik.imagekit.io/zhf0gkzac/VSmart/vsmartcompanies/TNEB-TANGEDCO-Recruitment.png?updatedAt=1724594988843", name: "TNEB TANGEDCO" },
    ],
  ];

  // GSAP Animation on Change
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }
    );
  }, [currentCarousel]); // Re-run animation when currentCarousel changes

  // Automatically change carousel every 3.3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarousel((prev) => (prev + 1) % clientSets.length);
    }, 3300);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const ClientLogo = ({ logo, name, index }) => {
    return (
      <div
        style={{ textAlign: "center", margin: "0.5%" }}
        ref={(el) => (imgRef.current[index] = el)}
      >
        <img
          src={logo}
          className="rounded-lg mix-blend-multiply grayscale object-cover hover:grayscale-0 transition duration-600 lg:m-2"
          style={{
            width: "160px", // Fixed width
            height: "139px", // Fixed height
            objectFit: "contain", // Ensure the image covers the area
            userSelect: "none",
            aspectRatio: "3/2" // Ensuring consistent aspect ratio
          }}
          alt={`Client Logo: ${name}`} // Use name for alt attribute
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center text-xl mt-10">
      <div className="text-2xl mb-4 flex items-center justify-center md:text-2xl lg:text-3xl lg:mb-0">
        <h3 className="text-2xl mb-4 flex items-center justify-center md:text-2xl lg:text-3xl lg:mb-0">
          Clients Who Trust Our Expertise
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2%",
          padding: "2%",
        }}
      >
        {clientSets[currentCarousel].map((client, index) => (
          <ClientLogo key={index} logo={client.logo} name={client.name} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Companies;

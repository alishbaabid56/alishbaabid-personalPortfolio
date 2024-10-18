"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

  const handleOpenCV = () => {
    const link = document.createElement('a');
    link.href = '/images/cv1.png'; // Replace with your actual file path
    link.target = '_blank'; // Opens in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up after opening the CV
  };

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        
        {/* Image Section */}
        <div className="col-span-5 sm:order-last sm:place-self-center">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] overflow-hidden relative mx-auto sm:mx-0">
            <Image
              src="/images/pic.png"
              alt="my pic"
              width={300}
              height={300}
              className="object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block">
              Hello, I am
            </span>
            <span className="block">
              <TypeAnimation
                sequence={[
                  'Alishba Abid',
                  1000,
                  'Web Developer',
                  1000,
                  'Graphic Designer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-2xl mb-6 lg:text-xl">
            I am a passionate frontend developer and graphic designer, with expertise in HTML, CSS, 
            and JavaScript.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
             hover:bg-slate-200 text-white">
              Hire Me
            </button>
           
            <button onClick={handleOpenCV}
             className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
             <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

























// "use client";

// import React from 'react'
// import Image from 'next/image'
// import { TypeAnimation } from 'react-type-animation';

 

// const HeroSection = () => {

//   const handleOpenCV = () => {
//     const link = document.createElement('a');
//     link.href = '/images/mycv.png'; // Replace with your actual file path
//     link.target = '_blank'; // Opens in a new tab
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link); // Clean up after opening the CV
//   };
//   return (
//     <section className="py-10">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         {/* Text Section */}
//         <div className="col-span-7 place-self-center text-center sm:text-left">
//           <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-6xl font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block">
//               Hello, I'm
//             </span>
//             <span className="block">
//             <TypeAnimation
//       sequence={[
        
//         'Alishba Abid',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'Web Developer',
//         1000,
//         'Graphic Designer',
//         1000,
        
//       ]}
//       wrapper="span"
//       speed={50}
      
//       repeat={Infinity}
//     />
              

//             </span>
//           </h1>
//           <p className="text-[#ADB7BE] text-2xl mb-6 lg:text-xl">
//             I am a passionate frontend developer and graphic designer, with expertise in HTML, CSS, 
//             and JavaScript.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
//             <button className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
//              hover:bg-slate-200 text-white">
//               Hire Me
//             </button>
//             <button onClick={handleOpenCV}
//              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
//              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Download CV</span>
//             </button>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="col-span-5 place-self-center mt-10 sm:mt-0">
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] overflow-hidden relative">
//             <Image 
//               src="/images/pic.png" 
//               alt="my pic"
//               width={300}
//               height={300}
//               className="object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection
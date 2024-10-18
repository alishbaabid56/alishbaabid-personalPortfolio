
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  const renderTabContent = () => {
    if (tab === 'Skills') {
      return (
        <p className="text-base md:text-lg">
          I am skilled in HTML, CSS, JavaScript, Next.js, and frontend design. I constantly improve my skills to create responsive, user-friendly web applications.
        </p>
      );
    } else if (tab === 'Education') {
      return (
        <p className="text-base md:text-lg">
          I have studied web development and graphic design with a focus on modern frontend 
          technologies like React Tailwind CSS and Next.js.
        </p>
      );
    } else if (tab === 'Experience') {
      return (
        <p className="text-base md:text-lg">
          I have experience working on real-world projects including eCommerce websites
           personal portfolios and graphic design for various clients.
        </p>
      );
    }
  };

  return (
    <section className="text-white py-8 sm:py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-8 lg:px-16">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 -ml-5 mt-20 mr-20 sm:-mt-28 lg:mt-20 sm:-mb-10">
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
       

        {/* Content Section */}
        <div id="about" className='mt-30'>
        <h2 className="lg:mt-20 text-4xl md:text-6xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 overflow-hidden border-r-2 border-black whitespace-nowrap animate-typewriter">
  About Me
</h2>



           <p className="text-base md:text-lg mb-8">
            I am a passionate Frontend Developer and Graphic Designer with a strong foundation in HTML CSS
            JavaScript and Next.js. My journey in web development has been fueled by a love for creating clean
            functional  and visually appealing user interfaces. Lets create something amazing together!
          </p> 

          {/* Tab Buttons */}
          <div className="flex justify-start space-x-4 mb-6">
            <button
              className={`font-semibold hover:text-white text-[#ADB7BE] border-b-2 ${tab === 'Skills' ? 'border-purple-500' : 'border-transparent'}`}
              onClick={() => handleTabChange('Skills')}
            >
              Skills
            </button>
            <button
              className={`font-semibold hover:text-white text-[#ADB7BE] border-b-2 ${tab === 'Education' ? 'border-purple-500' : 'border-transparent'}`}
              onClick={() => handleTabChange('Education')}
            >
              Education
            </button>
            <button
              className={`font-semibold hover:text-white text-[#ADB7BE] border-b-2 ${tab === 'Experience' ? 'border-purple-500' : 'border-transparent'}`}
              onClick={() => handleTabChange('Experience')}
            >
              Experience
            </button>
          </div>

          {/* Tab Content */}
          <CSSTransition
            key={tab} // Unique key based on the tab to trigger re-mounting
            in={true}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="transition-opacity duration-500 ease-in-out opacity-100">
              {renderTabContent()}
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
































// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { CSSTransition } from 'react-transition-group';

// const AboutSection = () => {
//   const [tab, setTab] = useState("Skills");

//   const handleTabChange = (id: string) => {
//     setTab(id);
//   };

//   const renderTabContent = () => {
//     if (tab === 'Skills') {
//         return (
//           <p className="text-base md:text-lg transition-opacity duration-500 ease-in-out opacity-100">
//             I am skilled in HTML, CSS, JavaScript, Next.js, and frontend design. I constantly improve my skills to create responsive, user-friendly web applications.
//           </p>
//         )
      
//     } else if (tab === 'Education') {
//       return (
//         <p className="text-base md:text-lg transition-opacity duration-500 ease-in-out">
//           I have studied web development and graphic design, with a focus on modern frontend technologies like React, Tailwind CSS, and Next.js.
//         </p>
//       );
//     } else if (tab === 'Experience') {
//       return (
//         <p className="text-base md:text-lg transition-opacity duration-500 ease-in-out">
//           I have experience working on real-world projects, including eCommerce websites, personal portfolios, and graphic design for various clients.
//         </p>
//       );
//     }
//   };

//   return (
//     <section className="text-white py-8 sm:py-10">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-8 lg:px-16">
//         {/* Image Section */}
//         <div className="mb-8 md:mb-0 -ml-5 mt-20 mr-20 sm:-mt-28">
//           <Image
//             src="/images/about.png"
//             alt="About Me"
//             width={500}
//             height={500}
//             className=" mx-auto w-3/4 md:w-full"
//           />
//         </div>

//         {/* Content Section */}
//         <div id="about">
//           <h2 className= " mt-20 text-4xl md:text-6xl mb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//             About Me
//           </h2>

//           <p className="text-base md:text-lg mb-8">
//             I am a passionate Frontend Developer and Graphic Designer with a strong foundation in HTML, CSS, 
//             JavaScript, and Next.js. My journey in web development has been fueled by a love for creating clean,
//             functional, and visually appealing user interfaces. Let's create something amazing together!
//           </p>

//           {/* Tab Buttons */}
//           <div className="flex justify-start space-x-4 mb-6">
//             <button
//               className={`font-semibold hover:text-white text-[#ADB7BE] border-b-2 ${tab === 'Skills' ? 'border-purple-500' : 'border-transparent'}`}
//               onClick={() => handleTabChange('Skills')}
//             >
//               Skills
//             </button>
//             <button
//               className={`font-semibold hover:text-white text-[#ADB7BE] border-b-2 ${tab === 'Education' ? 'border-purple-500' : 'border-transparent'}`}
//               onClick={() => handleTabChange('Education')}
//             >
//               Education
//             </button>
//             <button
//               className={`font-semibold hover:text-white text-[#ADB7BE] border-b-2 ${tab === 'Experience' ? 'border-purple-500' : 'border-transparent'}`}
//               onClick={() => handleTabChange('Experience')}
//             >
//               Experience
//             </button>
//           </div>

//           {/* Tab Content */}
//           <CSSTransition
//             in={!!tab}
//             timeout={300}
//             classNames="fade"
//             unmountOnExit
//           >
//             <div className="transition-opacity duration-500 ease-in-out">
//               {renderTabContent()}
//             </div>
//           </CSSTransition>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;






















// "use client";

// import React,{useTransition ,useState} from 'react'
// import Image from 'next/image'

// const AboutSection = () => {
//     const [tab,setTab] = useState("Skills");
//     const [startTransition , isPending ] = useTransition();

//     const handleTabChange = (id) =>{
//         startTransition(() => {
//             setTab(id);
//         })
//     }
//   return (
//     <section className="text-white"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 
//     xl:gap-16 sm:py-16 xl:px-16 " ></div>
//     <Image src="/images/about.png" alt="about pic"width={500} height={500}/>
//     <div>
//         <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

//         <p className="text-base md:text-lg">
//             I am a passionate Frontend Developer and Graphic Designer with a strong foundation in HTML, CSS, 
//             JavaScript, and Next.js. My journey in web development has been fueled by a love for creating clean,
//             functional, and visually appealing user interfaces. With a keen eye for design and a commitment to
//             user experience, I blend creativity and technical expertise to bring ideas to life on the web. 
//             I am constantly learning and exploring new technologies, ensuring that my skills stay sharp and
//             up-to-date in this ever-evolving industry. Whether it's building responsive websites, crafting
//             engaging visuals, or solving complex challenges, I strive for excellence in everything I do.
//             Let's create something amazing together!

// </p>
// <div className="flex flex-row mt-8">
//     <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
//         Skills</span>
//     <span>Eduaction</span>
//     <span>Experience</span>

// </div>
//     </div>
//     </section>

//   )
// }

// export default AboutSection
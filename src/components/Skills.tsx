export default function Skills() {
    return (
      <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
        
        {/* Left side - My Story */}
        <div className="bg-gray-950 p-6 rounded-lg shadow-lg border border-purple-700">
          <h2 className="text-5xl font-extrabold text-center mb-4 text-purple-500">My Story</h2>
          <p className="text-gray-300 leading-relaxed text-center text-[19px]">
          From a young age I have always been fascinated by the digital world, where creativity and logic 
          come together to shape the future. This curiosity led me to pursue a journey in web development
           specializing as a Frontend Developer and Graphic Designer. Over the year I ve honed my skills 
           in essential technologies like HTML CSS JavaScript and Next.js continuously challenging myself
            to build visually appealing user-centric interfaces. My passion for design extends beyond just 
            writing code I love creating layouts that captivate users through clean and intuitive designs
             ensuring every pixel has a purpose. My dedication doesnt stop there—learning never ends for me.
              I ventured into graphic design mastering tools like Photoshop Illustrator and more recently 
              Figma  which opened doors to bringing my artistic visions to life in a digital format. 


          </p>
        </div>
  
        {/* Right side - My Skills */}
        <div className="bg-gray-950 p-6 rounded-lg shadow-lg border border-purple-700">
          <h2 className="text-5xl font-extrabold mb-4 text-center text-purple-500">My Skills</h2>
          <ul className="space-y-4">
            <li className="bg-gray-400 p-3 rounded-lg">
              <div className="flex justify-between">
                <span>HTML/CSS</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div>
              </div>
            </li>
  
            <li className="bg-gray-400 p-3 rounded-lg">
              <div className="flex justify-between">
                <span>Next.js</span>
                <span>75%</span>
                </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full w-3/4"></div>
            </div>
          </li>

          
          <li className="bg-gray-400 p-3 rounded-lg">
              <div className="flex justify-between">
                <span>Typescript</span>
                <span>80%</span>
                </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-pink-500 h-2.5 rounded-full w-3/4"></div>
            </div>
          </li>

          <li className="bg-gray-400 p-3 rounded-lg">
            <div className="flex justify-between">
              <span>Graphic Design</span>
              <span>90%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-purple-500 h-2.5 rounded-full w-9/10"></div>
            </div>
          </li>

          <li className="bg-gray-400 p-3 rounded-lg">
            <div className="flex justify-between">
              <span>Illustrator</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full w-4/5"></div>
            </div>
          </li>

          <li className="bg-gray-400 p-3 rounded-lg">
            <div className="flex justify-between">
              <span>Photoshop</span>
              <span>99%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2.5">
              <div className="bg-red-500 h-2.5 rounded-full w-5/10"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}  
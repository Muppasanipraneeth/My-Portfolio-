
const Projects = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>

      <div className="bg-white p-4 shadow-md rounded-lg mb-6">
        <h3 className="text-2xl font-semibold">Swiggy Clone</h3>
        <p className="text-lg">Tools: React.js, Redux, Tailwind CSS, Swiggy APIs</p>
        <p>Developed a responsive food delivery platform using Swiggy APIs.</p>
        <a href="https://github.com/Muppasanipraneeth/REACT-Learning/tree/main/learning" className="text-blue-500 hover:underline">View Project</a>
      </div>

      <div className="bg-white p-4 shadow-md rounded-lg mb-6">
        <h3 className="text-2xl font-semibold">Simple Todo Application</h3>
        <p className="text-lg">Tools: React.js, Node.js, Express.js, MongoDB, Tailwind CSS</p>
        <p>Built a full-stack task management app with real-time updates.</p>
        <a href="https://github.com/Muppasanipraneeth/REACT-Learning/tree/main/learning" className="text-blue-500 hover:underline">View Project</a>
      </div>

      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold">GATE Exam Practice Website</h3>
        <p className="text-lg">Tools: React.js, Node.js, Express.js, MongoDB, Tailwind CSS</p>
        <p>A comprehensive platform for college students to practice GATE exams.</p>
        <a href="https://college-website-self.vercel.app/" className="text-blue-500 hover:underline">Visit Website</a>
      </div>
    </div>
  );
};

export default Projects;


const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-4 animate-fade-in-down">About Me</h2>
      <p className="text-lg animate-fade-in-up">
        Hi,  I am Madiga Praneeth, a MERN Stack Developer from Andhra Pradesh, India. I am passionate about building full-stack web applications and solving algorithmic challenges.
      </p>
      <div className="mt-6 animate-fade-in-up">
        <a href="https://github.com/Muppasanipraneeth" className="text-blue-200 hover:underline">GitHub</a> | 
        <a href="https://leetcode.com/u/muppasanipraneeth/" className="ml-2 text-blue-200 hover:underline">LeetCode</a> | 
        <a href="https://www.geeksforgeeks.org/user/muppasanipraneeth19/" className="ml-2 text-blue-200 hover:underline">GeeksforGeeks</a> | 
        <a href="https://www.linkedin.com/in/muppasani-praneeth-066080262/" className="ml-2 text-blue-200 hover:underline">LinkedIn</a>
      </div>
    </div>
  );
};

export default Home;

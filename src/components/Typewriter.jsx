import Typewriter from "typewriter-effect"


const TypeWriter = () => {

    return (
        <div className="text-primary fst-italic">
            <Typewriter 
                options={{
                    strings: ['MERN Stack Developer', 'Next.js Developer', 'Freelancer', 'Tech Enthusiast', 'Open Source Contributor','5 years+ Experience','15+ Projects Completed', 'Problem Solver', 'Team Player', 'Lifelong Learner'],
                    autoStart: true,
                    loop: true
                }}
                className="text-secondary" 
          />
        </div>
    );
}
 
export default TypeWriter;
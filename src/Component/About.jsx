export default function About() {
    return (
        <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-6 p-6">
            <div>
                <img src="/PROFILE.jpeg" alt="Profile" className="rounded-2xl shadow-2xl shadow-black border-8 border-white" />
            </div>

            <div className="p-4">
                <h1 className="flex items-center justify-center text-xl md:text-3xl text-orange-500 underline font-medium">
                    About Me
                </h1>

                <div className="p-3">
                    <span className="text-lg">👋 Hi, I'm Dheeraj Patidar</span><br />
                    <span>
                        I'm a passionate Frontend Developer with a love for building beautiful, fast, and user-focused web and mobile apps. A graduate with a degree in B.Tech in Computer Science Engineering, I thrive on learning, collaborating, and solving real-world problems.
                    </span>
                </div>

                <div className="p-2">
                    <h1 className="text-xl text-violet-600 font-medium">Skills:</h1>

                    <div className="mt-2 flex flex-wrap gap-2 text-white">
                        {["ReactJS", "JavaScript", "HTML", "CSS", "Python"].map(s => (
                            <span key={s} className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 font-medium transition-transform duration-300 hover:scale-110" >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-2">
                    <p>I believe in continuous learning and enjoy working in dynamic teams where ideas grow into impactful solutions. My focus is on crafting interfaces that are not just visually stunning, but also intuitive and accessible.</p>
                    <p>If you have an exciting opportunity, a project idea, or just want to connect, let's collaborate! I am always open to new challenges and meaningful conversations.</p>
                </div>
            </div>
        </div>
    );
}

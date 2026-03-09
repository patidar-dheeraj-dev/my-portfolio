export default function Project() {
    let projects = [
        {
            title: "My Portfolio",
            image: "/portfolio.png",
            tech: ["HTML", "TailwindCSS", "ReactJs"],
            view: "/",
            code: "/"
        },
        {
            title: "Task Manager",
            image: "/task.png",
            tech: ["Redux", "Tailwind", "ReactJs"],
            view: "https://taskmanagers-two.vercel.app/",
            code: "https://github.com/patidar-dheeraj-dev/task_managers"
        },
        {
            title: "Tic-Tac-Toe",
            image: "/OX.png",
            tech: ["HTML", "CSS", "JavaScript"],
            view: "/",
            code: "https://github.com/patidar-dheeraj-dev/Tic-Tac-Toe"
        },
        {
            title: "Login Form",
            image: "/login.png",
            tech: ["HTML", "CSS", "JavaScript"],
            view: "/",
            code: "https://github.com/patidar-dheeraj-dev/login-form"
        },
        {
            title: "E-Commerce",
            image: "/e-commerce.png",
            tech: ["HTML", "CSS", "JavaScript"],
            view: "https://e-commerce-dusky-eight-37.vercel.app/",
            code: "https://github.com/patidar-dheeraj-dev/e-commerce"
        }
    ];
    return (
        <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-teal-700 mb-10">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {projects.map((project, index) => (
                    <div key={index} className="w-full max-w-sm p-4 rounded-xl shadow-xl hover:scale-105 transition duration-300">

                        <img src={project.image} alt={project.title} className="rounded-xl" />

                        <h1 className="text-center mt-3 text-lg font-semibold text-fuchsia-500">
                            {project.title}
                        </h1>

                        <div className="flex justify-center flex-wrap gap-2 mt-4">
                            {project.tech.map((item, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-teal-500 text-white text-sm">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center gap-4 mt-4">
                            {project.view && (
                                <a href={project.view} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-emerald-500 text-white rounded-full">
                                    View
                                </a>
                            )}

                            {project.code && (
                                <a href={project.code} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-emerald-500 text-white rounded-full">
                                    Code
                                </a>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

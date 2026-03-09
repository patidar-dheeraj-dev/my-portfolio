import { useState } from "react";
import Home from "../Component/Home";
import About from "../Component/About";
import Education from "../Component/Education";
import Tech from "../Component/Tech";
import Contact from "../Component/Contact";
import Project from "../Component/Project";

export default function Nav() {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="p-2 w-full md:hidden bg-gray-800">
                <button className="md:hidden text-3xl text-white" onClick={() => setIsOpen(!isOpen)} >☰</button>
                <div className={`flex flex-col w-auto sm:w-1/3  md:w-auto absolute md:static left-0 top-14 bg-blue-100 md:bg-transparent md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0 md:max-h-none"}`}>
                    <a href=".
                    /Home.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-black hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" onClick={() => setIsOpen(false)}><i class="fa-regular fa-house text-orange-400"></i> Home</a>
                    <a href="./About.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-black hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" onClick={() => setIsOpen(false)}><i>ℹ️ </i> About</a>
                    <a href="./Education.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-black hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" onClick={() => setIsOpen(false)}><i class="fa-solid fa-book-open-reader text-"></i> Education</a>
                    <a href="./Tech.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-black hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" onClick={() => setIsOpen(false)}><i class="fa-solid fa-dna text-red-500"></i> Tech Stack</a>
                    <a href="./Project.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-black hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" onClick={() => setIsOpen(false)}><i class="fa-regular fa-folder-open text-yellow-400"></i> Projects</a>
                    <a href="./Contact.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-black hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" onClick={() => setIsOpen(false)}><i class="fa-solid fa-id-badge"></i> Contact Me</a>
                </div>
            </nav>
            <div className="min-h-screen flex">
                <nav className="w-1/5 h-screen bg-black hidden sticky top-0 md:block grid justify-center items-center">
                    <aside className="w-full h-full flex justify-items-center items-center flex-col">
                        <div>
                            <img src="/PROFILE.jpeg" alt="Profile Image" className="w-50 border p-2 rounded-full shadow-xl mt-15" />
                        </div>
                        <div className="flex flex-col">
                            <a href="./Home.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-white hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" ><i class="fa-regular fa-house text-orange-400"></i> Home</a>
                            <a href="./About.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-white hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" ><i>ℹ️ </i> About</a>
                            <a href="./Education.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-white hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" ><i class="fa-solid fa-book-open-reader text-"></i> Education</a>
                            <a href="./Tech.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-white hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" ><i class="fa-solid fa-dna text-red-500"></i> Tech Stack</a>
                            <a href="./Project.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-white hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" ><i class="fa-regular fa-folder-open text-yellow-400"></i> Projects</a>
                            <a href="./Contact.jsx" className="p-3 text-lg hover:bg-gray-900 font-medium text-white hover:rounded-xl hover:p-2 hover:shadow-2xl transition-transform duration-300 hover:scale-115" ><i class="fa-solid fa-id-badge"></i> Contact Me</a>
                        </div>
                    </aside>
                </nav>
                <div className="w-full h-fit">
                    <Home />
                    <About/>
                    <Education/>
                    <Tech/>
                    <Project/>
                    <Contact/>
                </div>
            </div>
        </>
    )
}
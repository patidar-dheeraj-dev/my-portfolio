export default function Tech() {
    return (
        <div className="w-full py-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-teal-700 mb-10">
                TECHNOLOGIES STACK
            </h2>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="text-2xl sm:text-3xl border p-5 text-center rounded-xl bg-pink-500 hover:bg-fuchsia-500 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                    <h2><i className="fa-brands fa-html5 text-orange-500"></i> HTML</h2>
                </div>

                <div className="text-2xl sm:text-3xl border p-5 text-center rounded-xl bg-pink-500 hover:bg-indigo-700 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                    <h2><i className="fa-brands fa-css3-alt text-violet-500"></i> CSS</h2>
                </div>

                <div className="text-2xl sm:text-3xl border p-5 text-center rounded-xl bg-pink-500 hover:bg-fuchsia-800 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                    <h2><i className="fa-brands fa-js text-yellow-400"></i> JavaScript</h2>
                </div>

                <div className="text-2xl sm:text-3xl border p-5 text-center rounded-xl bg-pink-500 hover:bg-indigo-700 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                    <h2><i className="fa-brands fa-bootstrap text-violet-500"></i> Bootstrap</h2>
                </div>

                <div className="text-2xl sm:text-3xl border p-5 text-center rounded-xl bg-pink-500 hover:bg-purple-700 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                    <h2><i className="fa-brands fa-react text-cyan-500"></i> ReactJS</h2>
                </div>

                <div className="text-2xl sm:text-3xl border p-5 text-center rounded-xl bg-pink-500 hover:bg-fuchsia-700 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                    <h2><i className="fa-brands fa-python"></i> Python</h2>
                </div>

                <div className="text-2xl sm:text-3xl border p-5 text-center rounded-xl bg-pink-500 hover:bg-pink-700 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                    <h2><i className="fa-solid fa-code text-cyan-500"></i> TailwindCSS</h2>
                </div>
            </div>
        </div>
    );
}

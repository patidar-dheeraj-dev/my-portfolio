import { useEffect } from "react"
import Aos from "aos";


export default function Education() {
    useEffect(() => {
        Aos.init({
            duration: 900,
            offset: 120,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-12">
                EDUCATION DETAILS
            </h2>

            <div className="relative max-w-6xl mx-auto">
                <div className="absolute hidden md:block left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200" />
                <div className="flex flex-col md:flex-row items-center mb-20">
                    <div className="w-full md:w-1/2 md:pr-10" data-aos="fade-left" >
                        <div className="bg-white rounded-xl shadow p-6 border">
                            <h3 className="text-2xl font-bold text-teal-700">B.Tech</h3>
                            <p className="text-gray-800 font-semibold">
                                Indore (M.P) - India
                            </p>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Bachelor of Technology in Computer Science Engineering from
                                Chamelli Devi Group Of Institute (CDGI), Indore, affiliated
                                with RGPV University Bhopal.
                            </p>
                        </div>
                    </div>

                    <div className="relative hidden md:block flex flex-col items-center mx-6">
                        <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl shadow">
                            🎓
                        </div>
                        <p className="mt-2 font-semibold text-gray-700">2022-2026</p>
                    </div>

                    <div className="w-full md:w-1/2" />
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2" />

                    <div className="relative hidden md:block flex flex-col items-center mx-6">
                        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow">
                            🎓
                        </div>
                        <p className="mt-2 font-semibold text-gray-700">2019-2022</p>
                    </div>

                    <div className="w-full md:w-1/2 md:pl-10" data-aos="fade-right">
                        <div className="bg-white rounded-xl shadow p-6 border">
                            <h3 className="text-2xl font-bold text-teal-700">
                                Higher Education (10+2)
                            </h3>
                            <p className="text-gray-800 font-semibold">
                                C.B.S.E (M.P) - India
                            </p>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Higher Education (10+2) in Science Stream from Adarsh Academy,
                                Dhamnod, affiliated with C.B.S.E.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

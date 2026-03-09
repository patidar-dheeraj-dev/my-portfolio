import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send message. " + error.text);
                }
            );
    };

    return (
        <div className="h-xl flex justify-center w-full py-12 px-4">
            <form ref={formRef} onSubmit={sendEmail} className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-10 transition-transform duration-300 hover:scale-110">
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <h1 className="text-xl font-semibold">Contact With me</h1>
                    <a href="https://github.com/patidar-dheeraj-dev">
                        <i className="fa-brands fa-github text-2xl font-bold"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/patidar-dheeraj-dev">
                        <i className="fa-brands fa-linkedin text-2xl text-blue-500"></i>
                    </a>
                    <a href="https://www.instagram.com/dheerajdheeru_patidar09?igsh=MXIzMW5vZTZkYmF3eA==">
                        <i className="fa-brands fa-instagram text-pink-400 text-2xl"></i>
                    </a>
                    <a href="https://wa.me/8770325996">
                        <i className="fa-brands fa-whatsapp text-2xl text-green-500 font-bold"></i>
                    </a>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="h-px bg-slate-400 w-20 md:w-28"></div>
                    <h2 className="text-lg text-teal-700">OR</h2>
                    <div className="h-px bg-slate-400 w-20 md:w-28"></div>
                </div>

                <div className="flex justify-center gap-4 flex-col items-center mt-2">
                    <input type="text" name="user_name" placeholder="Enter Your Name" className="border-2 shadow-sm focus:shadow-blue-300 outline-none border-slate-300 rounded-lg py-2 px-3 w-full" required />
                    <input type="email" name="user_email" placeholder="Enter Your E-mail" className="border-2 shadow-sm focus:shadow-blue-300 outline-none border-slate-300 rounded-lg py-2 px-3 w-full" required />
                    <input type="number" name="user_phone" placeholder="Enter Your Contact No." className="border-2 shadow-sm focus:shadow-blue-300 outline-none border-slate-300 rounded-lg py-2 px-3 w-full" />
                    <textarea name="message" placeholder="Enter Your Message" className="border-2 shadow-sm focus:shadow-blue-300 outline-none border-slate-300 rounded-lg py-2 px-3 w-full" rows="4" required></textarea>
                    <button type="submit" className="w-full md:w-1/2 mx-auto mt-2 font-medium rounded-full px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white transition">SEND</button>
                </div>
            </form>
        </div>
    );
}

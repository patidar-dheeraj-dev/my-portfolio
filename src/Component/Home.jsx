export default function Home() {
    return (
        <div className="w-full h-60 bg-gray-500 flex flex-col justify-items-center items-center gap-5">
            <div className="w-full flex-col flex justify-items-center items-center text-white mt-10">
                <h1 className="text-lg sm:text-xl md:text-3xl">Hi👋🏻 <span>I'am</span></h1>
                <h1 className="text-xl sm:text-2xl md:text-4xl text-fuchsia-500 font-bold">FrontEnd Developer!</h1>
            </div>
            <div className="flex gap-3">
                <a className="p-3 rounded-full bg-green-500" href="https://wa.me/8770325996"><i class="fa-brands fa-whatsapp text-2xl text-white font-bold"></i></a>
                <a className="p-3 rounded-full bg-orange-500" href="https://drive.google.com/file/d/13WAP-EQm80l_rWEIMHPrmNUpd7c9tHQy/view?usp=drivesdk"><i class="fa-regular fa-file-lines text-2xl text-white font-bold"></i></a>
                <a className="p-3 rounded-full bg-slate-800" href="https://github.com/patidar-dheeraj-dev"><i class="fa-brands fa-github text-2xl text-white font-bold"></i></a>
            </div>
        </div>
    )
}


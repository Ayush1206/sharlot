export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://ayushdatanextapps.s3.eu-north-1.amazonaws.com/sharlot_2.mp4"
                autoPlay
                loop
                muted
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold text-white"> </h1>
                <p className="text-lg mt-4 text-gray-300">

                </p>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-10 w-full flex justify-center">
                <div className="animate-bounce text-gray-300">
                    <p>Scroll Down</p>
                    <span className="block w-6 h-6 border-t-2 border-l-2 border-gray-300 rotate-45 mt-2"></span>
                </div>
            </div> */}
        </section>
    );
}

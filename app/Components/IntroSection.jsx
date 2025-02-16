import Image from "next/image";

const IntroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
            {/* Left Side - Text Content */}
            <div className="md:w-1/2 max-w-3xl space-y-6 text-center md:text-left">
                {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome to Our Platform</h2> */}
                <p className="text-gray-700 text-lg text-justify">
                    Welcome to <span className="font-bold italic text-blue-800 text-2xl">Vitamin Sea Beach Resort</span> a place where you are more than just a
                    guest—your family. Here, the ocean whispers peace, and the air is filled with a
                    calm that invites you to leave the world behind. Nestled by the coast, surrounded
                    by the shade of coconut trees, this is a sanctuary that offers not just a stay, but a
                    feeling—a sense of belonging, warmth, and pure joy
                </p>
                <p className="text-gray-700 text-lg text-justify">
                    Every corner of our resort is designed with care to make you feel at home,
                    whether you are here to rest, explore, or create lasting memories with those you
                    love. Let the waves soothe you, the gentle breeze embrace you, and the beauty
                    of nature remind you of what it means to unwind truly
                </p>
                <p className="text-gray-700 text-lg text-justify">
                    Vitamin Sea Beach Resort is more than just a place to stay—it's a destination in itself. Situated
                    right on the shores of Murud Beach, our resort offers the rare luxury of private beach access,
                    letting you enjoy the sea at your own pace. Whether it's a morning stroll on the sands or a quiet
                    evening under the stars, your perfect getaway starts here
                </p>

                <p className="text-gray-700 text-lg text-justify">
                    Come and experience a place where time slows down, and every moment feels like a natural
                    wonder
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 ml-0 md:ml-16">
                <Image
                    src="/Beach.jpg"
                    alt="Intro Image"
                    width={1000}
                    height={1000}
                    className="rounded-2xl shadow-lg"
                />
            </div>
        </section>
    );
};

export default IntroSection;

import { useEffect, useState } from "react";
import KnowButton from "./KnowButton";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import Fixedbg from "./Fixedbg";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import { Heart } from "lucide-react";

const Project = () => {
  const [ploaded, setpLoaded] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [isLiked1, setIsLiked1] = useState(false);
  const [isLiked2, setIsLiked2] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  const toggleLike1 = () => {
    setIsLiked1(!isLiked1);
  };
  const toggleLike2 = () => {
    setIsLiked2(!isLiked2);
  };

  useEffect(() => {
    // Trigger the animations after component mounts
    setpLoaded(true);
  }, [setpLoaded]);

  return (
    <>
      <div className="relative overflow-hidden ">
        <Fixedbg />
        {/* projects1 section start */}
        <div className="mx-12 md:mx-12 lg:mx-24  md:h-screen h-auto flex justify-center items-center md:overflow-hidden overflow-visible md:mt-0 mt-20">
          <div className="">
            <div
              className={`transform transition-transform duration-[1200ms] delay-[300ms] ease-in-out md:w-1/2 w-full${
                ploaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } md:text-left text-left`}>
              <h1 className="lg:text-3xl text-2xl font-bold text-left lg:mb-8 md:mb-2">
                My Projects
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="flex-row md:flex justify-between md:items-center items-start w-full h-full gap-10">
                <div
                  className={`transform transition-transform duration-[1200ms] delay-[300ms] ease-in-out md:w-1/2 w-full ${
                    ploaded
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  } md:text-left text-left`}>
                  <div className="md:text-4xl lg:text-4xl text-xl font-bold">
                    UX/UI • Branding • Web Responsive
                  </div>

                  <div className="mt-6 md:mt-8 text-[13px] md:text-base leading-relaxed">
                    The clean layout, vibrant colors, and clear typography
                    suggest a modern and user-friendly design
                  </div>
                  <div className="mt-8">
                    Below the navbar is a prominent hero image. This hero image
                    serves a crucial role in web design by capturing the user's
                    attention and introducing the website's core message. In
                    this case, the hero image showcases a collection of mobile
                    apps, reinforcing the website's focus on mobile app
                    development.
                  </div>
                </div>
                <div
                  className={`mt-32 md:mt-0 transform transition-transform duration-[1200ms] delay-[300ms] ease-in-out md:w-1/2 w-full ${
                    ploaded
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  } md:text-right text-right w-full md:w-auto `}>
                  <Link href={"/"}>
                    <img
                      src="/project1.png"
                      alt="Portfolio"
                      className="w-[500px] md:w-[950px] ml-auto md:ml-0 -mt-20 md:mt-0"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="visible md:hidden">
              <div className="flex-row md:flex justify-between md:items-center items-start w-full h-full">
                <div
                  className={`mt-32 md:mt-0 transform transition-transform duration-[1200ms] delay-[300ms] ease-in-out md:w-1/2 w-full ${
                    ploaded
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  } md:text-right text-right w-full md:w-auto `}>
                  <Link href={"/"}>
                    <img
                      src="/project1.png"
                      alt="Portfolio"
                      className="w-[480px] sm:w-[500px] md:w-[850px] ml-auto md:ml-0 -mt-20 md:mt-0"
                    />
                  </Link>
                </div>
                <div
                  className={`transform transition-transform duration-[1200ms] delay-[300ms] ease-in-out md:w-1/2 w-full${
                    ploaded
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  } md:text-left text-left`}>
                  <div className="md:text-4xl text-xl font-bold mt-10 md:mt-0">
                    UX/UI • Branding • Web Responsive
                  </div>

                  <div className="mt-6 md:mt-8 text-[13px] md:text-base leading-relaxed">
                    Responsive web design and visual development for a
                    delivery-only restaurant startup.
                  </div>
                  <div className="mt-8">
                    {" "}
                    Below the navbar is a prominent hero image. This hero image
                    serves a crucial role in web design by capturing the user's
                    attention and introducing the website's core message. In
                    this case, the hero image showcases a collection of mobile
                    apps, reinforcing the website's focus on mobile app
                    development.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* projects section end */}

        {/* projects2 section start */}
        <div className="mx-12 md:mx-12 lg:mx-24  md:h-screen h-auto flex justify-center items-center md:overflow-hidden overflow-visible md:mt-0 mt-20">
          <div className="hidden md:block">
            <div className="flex-row md:flex justify-between md:items-center items-start w-full h-full md:gap-10">
              <div className="md:w-1/2 w-full mt-32 md:mt-0 md:text-right text-right">
                <Link href={"/"}>
                  <img
                    src="/project3.png"
                    alt="Portfolio"
                    className="w-[480px] sm:w-[500px] md:w-[800px] ml-auto md:ml-0 -mt-20 md:mt-0"
                  />
                </Link>
              </div>

              <div className="md:w-1/2 w-full md:text-left text-left">
                <div className="md:text-4xl text-xl text-right font-bold">
                  Hot & Spice Resturent
                </div>

                <div className="mt-6 md:mt-8 text-[13px] md:text-base text-right leading-relaxed">
                  Food delivery or restaurant app. It showcases a dark theme
                  with high contrast elements, primarily using shades of black
                  and gray with white text for readability.
                </div>
                <div className="mt-8 text-right">
                  Allow users to easily customize dishes by offering a variety
                  of add-ons, size options, and dietary-specific modifications.
                  This caters to users with allergies or specific preferences
                  and reduces the need for order notes
                </div>
              </div>
            </div>
          </div>

          <div className="visible md:hidden">
            <div className="flex-row md:flex justify-between md:items-center items-start w-full h-full">
              <div className="mt-32 md:mt-0 md:text-right text-right w-full md:w-auto ">
                <Link href={"/"}>
                  <img
                    src="/project3.png"
                    alt="Portfolio"
                    className="w-[480px] sm:w-[500px] md:w-[800px] ml-auto md:ml-0 -mt-20 md:mt-0"
                  />
                </Link>
              </div>

              <div className="md:text-left text-left mt-10 md:mt-0">
                <div className="md:text-4xl text-xl font-bold">
                  Hot & Spice Resturent
                </div>

                <div className="mt-6 md:mt-8 text-[13px] md:text-base leading-relaxed">
                  Food delivery or restaurant app. It showcases a dark theme
                  with high contrast elements, primarily using shades of black
                  and gray with white text for readability.
                </div>
                <div className="mt-8">
                  Allow users to easily customize dishes by offering a variety
                  of add-ons, size options, and dietary-specific modifications.
                  This caters to users with allergies or specific preferences
                  and reduces the need for order notes
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* projects2 section end */}

        {/* projects3 section strat */}
        <ImageSlider />
        {/* projects3 section end */}

        {/* project4 section start */}
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-24 lg:h-[110vh] h-auto relative flex justify-center items-center md:overflow-hidden overflow-visible md:mt-0 mt-20">
          <div className="flex flex-col justify-between space-y-7 w-full">
            <h1 className="text-center text-white md:text-4xl text-xl font-bold mb-5">
              Responsive Web
            </h1>

            <div className="w-full flex flex-wrap justify-center items-center gap-5">
              <Link href="https://colorfull-blue.vercel.app/" target="_blank">
                <div className="h-[280px] md:h-[320px] sm:w-[260px] md:w-[300px] w-full rounded-lg relative group  transform transition-transform duration-300 ease-in-out hover:scale-105">
                  <img
                    src="card (1).png"
                    className="w-full h-full object-cover object-left rounded-lg"
                    alt="Colorful Web"
                  />
                  <div className="absolute inset-0 flex items-end p-2 bg-gradient-to-b from-transparent to-[#1a1919] opacity-0 group-hover:opacity-80 rounded-lg transition-opacity duration-300">
                    <p className="text-white text-xl font-bold relative z-20">
                      ColourFull Web
                    </p>
                    <div className="absolute right-2 z-30">
                      <Heart
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike();
                        }}
                        className={`bg-amber-100 rounded-full w-8 h-8 p-1 cursor-pointer transition-colors duration-300 ${
                          isLiked ? "text-red-500" : "text-black"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://elegantweb.onrender.com/" target="_blank">
                <div className="h-[280px] md:h-[320px] sm:w-[260px] md:w-[300px] w-full rounded-lg relative group  transform transition-transform duration-300 ease-in-out hover:scale-105">
                  <img
                    src="card (2).png"
                    className="w-full h-full object-cover rounded-lg"
                    alt="Elegant Restaurant"
                  />
                  <div className="absolute inset-0 flex items-end p-2 bg-gradient-to-b from-transparent to-[#1a1919] opacity-0 group-hover:opacity-80 rounded-lg transition-opacity duration-300">
                    <p className="text-white text-xl font-bold relative z-20">
                      Elegant Resturent
                    </p>
                    <div className="absolute right-2 z-30">
                      <Heart
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike1();
                        }}
                        className={`bg-amber-100 rounded-full w-8 h-8 p-1 cursor-pointer transition-colors duration-300 ${
                          isLiked1 ? "text-red-500" : "text-black"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="https://landingsky.netlify.app/" target="_blank">
                <div className="h-[280px] md:h-[320px] transform transition-transform duration-300 ease-in-out hover:scale-105 sm:w-[260px] md:w-[300px] w-full rounded-lg relative group">
                  <img
                    src="card (3).png"
                    className="w-full h-full object-cover object-left rounded-lg"
                    alt="Landing Page Site"
                  />
                  <div className="absolute inset-0 flex items-end p-2 bg-gradient-to-b from-transparent to-[#1a1919] opacity-0 group-hover:opacity-80 rounded-lg transition-opacity duration-300">
                    <p className="text-white text-xl font-bold relative z-20">
                      Landing Page Site
                    </p>
                    <div className="absolute right-2 z-30">
                      <Heart
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike2();
                        }}
                        className={`bg-amber-100 rounded-full w-8 h-8 p-1 cursor-pointer transition-colors duration-300 ${
                          isLiked2 ? "text-red-500" : "text-black"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* project4 section end */}

        {/* project5 section start */}

        <div className="mx-12 md:mx-12 lg:mx-24  md:h-screen h-auto flex justify-center items-center md:overflow-hidden overflow-visible md:mt-0 mt-20">
          <div className="md:flex block justify-center items-center">
            <div className="md:w-1/2 w-full h-full">
              <div className="md:text-4xl text-xl font-bold">
                Let's Drink is a food delivery.
              </div>

              <div className="mt-6 md:mt-8 text-[13px] md:text-base leading-relaxed">
                Let's Drink is a food delivery app that brings you a variety of
                delicious drinks and snacks right to your doorstep. With a
                user-friendly interface and a wide range of options, you can
                easily find your favorite beverages and treats. Whether you're
                craving a refreshing juice, a decadent dessert, or a quick
                snack, Let's Drink has something for everyone. Enjoy convenient
                delivery and enjoy your favorite drinks and snacks anytime,
                anywhere
              </div>
            </div>
            <div className="md:w-1/2 w-full h-full">
              <Link href={"/"}>
                <img
                  src="/big-img2.png"
                  alt="Portfolio"
                  className="w-[480px] sm:w-[500px] md:w-[800px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* project4]5 section end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
    </>
  );
};

export default Project;

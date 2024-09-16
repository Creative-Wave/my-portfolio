import Display from "@/components/Display";
import Topbar from "@/components/Topbar";
import { darkTheam } from "@/utilities/darktheam";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const index = () => {
  const [theam, setTheam] = useAtom(darkTheam);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (theam) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [theam]);

  if (loading) {
    return (
      <div className="preloader flex items-center justify-center h-screen bg-white dark:bg-black">
        {/* Preloader Container */}
        <div className="relative flex items-center justify-center">
          {/* Logo */}
          <img
            src="logo-no-background.png"
            alt="Logo"
            className="w-20 md:w-32 z-10"
          />

          {/* Custom animated loader */}
          <div className="absolute flex items-center justify-center">
            <div className="custom-loader"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Topbar children />
      <Display />
    </>
  );
};

export default index;

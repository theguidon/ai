import GlitchBG from "../assets/glitch-bg-2.gif";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, useLocation } from "wouter";

// GSAP for animation because its a pain without
// https://gsap.com/docs/v3/
gsap.registerPlugin(useGSAP);

const CrashPage = () => {
  const [location, navigate] = useLocation();
  useEffect(() => {
    const delay = setInterval(() => {
      navigate("/about");
    }, 10000);

    return () => clearInterval(delay);
  }, [navigate]);

  const mainRef = useRef(null);
  useGSAP(
    () => {
      var tl = gsap.timeline({ repeat: -1 });
      tl.to(".crash-background", {
        background: `linear-gradient(312deg, #E46351 -24.28%, #E46351 107.05%), url(${GlitchBG}) lightgray 50% / cover no-repeat`,
        duration: 1,
        delay: 1,
      });
      tl.to(".error-text", {
        color: "#E46351",
        duration: 1,
      });
      tl.to(".crash-background", {
        background: `linear-gradient(312deg, #E46351 -24.28%, #E46351 107.05%), url(${GlitchBG}) lightgray 50% / cover no-repeat`,
        duration: 1,
      });
      tl.to(".error-text", {
        color: "#85e0a3",
        duration: 1,
      });
    },
    { scope: mainRef },
  );

  return (
    <main className="w-screen h-screen" ref={mainRef}>
      <div
        className="bg-cover w-full h-full fixed -z-10 crash-background"
        style={{
          background: `linear-gradient(312deg, #7FF7D7 -24.28%, #0D0B10 107.05%), url(${GlitchBG}) lightgray 50% / cover no-repeat`,
          backgroundBlendMode: "color, normal",
        }}
      />

      <div className="w-full h-full flex flex-col justify-center text-light-green error-text">
        <h1 className={`font-redaction-35 text-[7rem] text-center`}>
          System Error 404
        </h1>
        <h2 className={`font-redaction-50 text-[2rem] text-center`}>
          This interactive is no longer working.
        </h2>
      </div>

      <Link to="/about" className="w-full h-full z-10 fixed top-0 left-0" />
    </main>
  );
};

export default CrashPage;

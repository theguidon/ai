import GlitchBG from "../assets/glitch-bg.gif";
import AILogo from "../assets/ai-logo.svg";
import GuidonLogo from "../assets/guidon.svg";
import QuestionCircle from "../assets/question-circle-fill.svg";
import { BsFileEarmarkText, BsFileRichtext } from "react-icons/bs";
import { IconBase } from "react-icons";
import { Link } from "wouter";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

/**
 *
 * @param {{
 * title: string,
 * description: string,
 * icon: React.ReactNode
 * to: string
 * }}  props
 */

const Card = (props) => {
  return (
    <>
      <Link asChild to={props.to}>
        <article
          className="rounded-lg p-[1.5rem] grid gap-4 border-[#EBFFE099] border basis-1/3 hover:bg-[radial-gradient(#E5FFD455_0%,_#FFFFFF55_100%)] cursor-pointer"
          style={{
            backdropFilter: "blur(21px) saturate(150%)",
          }}
        >
          <div className="text-light-green grid gap-2.5">
            <div>{props.icon}</div>
            <h4 className="font-bold text-2xl">{props.title}</h4>
          </div>
          <p className="font-bold text-white/70">{props.description}</p>
        </article>
      </Link>
    </>
  );
};
const TitlePage = () => {
  const typedEl = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["What can I help you with today?"],
      typeSpeed: 50,
      cursorChar: "|",
    });

    return () => typed.destroy();
  });
  return (
    <main className="min-h-screen w-screen p-[1.5rem] md:px-[7.5rem] flex flex-col justify-center">
      <div
        className="top-0 left-0 w-full h-full fixed -z-20"
        style={{
          backgroundImage:
            "linear-gradient(311.99deg, #0C4346 -24.28%, #0D0B10 107.05%)",
        }}
      ></div>

      <div
        className="top-0 left-0 w-full h-full opacity-30 fixed -z-10"
        style={{
          backgroundImage: `url(${GlitchBG})`,
        }}
      />

      <div
        className="top-0 left-0 w-full h-full opacity-10 fixed -z-10"
        style={{
          backgroundColor: "#070707",
        }}
      />
      <section className="flex flex-col">
        <Link
          to="/about"
          className="text-white text-4 font-bold rounded-[0.5rem] bg-[#122429] border-light-green border-[1px] p-[0.75rem] w-fit self-end flex flex-row gap-[0.6rem]"
        >
          <img src={QuestionCircle} />
          About
        </Link>
        <div className="flex items-center justify-center flex-col gap-4 pt-[3rem]">
          <img src={GuidonLogo} className="w-[13.5rem] pb-[3rem]" />
          <img
            src={AILogo}
            alt="AI Logo"
            className="mx-auto size-[3rem] md:size-[6.5rem] rounded-[1.25rem]"
            style={{
              background:
                "linear-gradient(131deg, #FFF -119.31%, rgba(153, 153, 153, 0.00) 145.54%)",
            }}
          />
          <h1 className="font-redaction-20 text-[1.5rem] text-[#7FCD78] text-center py-[1rem] md:text-[2rem] md:py-[0rem]">
            Creating Entropy: The Degeneration of Generative AI
          </h1>
            <span
              ref={typedEl}
              className="font-bold text-[2.25rem] text-white text-center md:text-[3.5rem] typed"
            ></span>
        </div>
        <div className="flex flex-col justify-center gap-6 md:flex-row pt-[2rem] pb-[3.5rem]">
          <Card
            icon={<BsFileEarmarkText size={40} />}
            title="Write me an essay"
            description="on Jośe Rizal’s novels Noli Me Tángere and El Filibusterismo"
            to="/essay"
          />
          <Card
            icon={<BsFileRichtext size={40} />}
            title="Design an infographic"
            description="on the preventative measures during disasters"
            to="/infographic"
          />
          <Card
            to="/audio"
            icon={
              <IconBase
                size={40}
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.25 5.5C21.9404 5.5 22.5 6.05964 22.5 6.75V34.25C22.5 34.9404 21.9404 35.5 21.25 35.5C20.5596 35.5 20 34.9404 20 34.25V6.75C20 6.05964 20.5596 5.5 21.25 5.5ZM16.25 10.5C16.9404 10.5 17.5 11.0596 17.5 11.75V29.25C17.5 29.9404 16.9404 30.5 16.25 30.5C15.5596 30.5 15 29.9404 15 29.25V11.75C15 11.0596 15.5596 10.5 16.25 10.5ZM26.25 10.5C26.9404 10.5 27.5 11.0596 27.5 11.75V29.25C27.5 29.9404 26.9404 30.5 26.25 30.5C25.5596 30.5 25 29.9404 25 29.25V11.75C25 11.0596 25.5596 10.5 26.25 10.5ZM11.25 14.25C11.9404 14.25 12.5 14.8096 12.5 15.5V25.5C12.5 26.1904 11.9404 26.75 11.25 26.75C10.5596 26.75 10 26.1904 10 25.5V15.5C10 14.8096 10.5596 14.25 11.25 14.25ZM31.25 14.25C31.9404 14.25 32.5 14.8096 32.5 15.5V25.5C32.5 26.1904 31.9404 26.75 31.25 26.75C30.5596 26.75 30 26.1904 30 25.5V15.5C30 14.8096 30.5596 14.25 31.25 14.25ZM6.25 16.75C6.94036 16.75 7.5 17.3096 7.5 18V23C7.5 23.6904 6.94036 24.25 6.25 24.25C5.55964 24.25 5 23.6904 5 23V18C5 17.3096 5.55964 16.75 6.25 16.75ZM36.25 16.75C36.9404 16.75 37.5 17.3096 37.5 18V23C37.5 23.6904 36.9404 24.25 36.25 24.25C35.5596 24.25 35 23.6904 35 23V18C35 17.3096 35.5596 16.75 36.25 16.75Z"
                  fill="#85E0A3"
                />
              </IconBase>
            }
            title="Generate an audio essay "
            description="that reflects on the human experience"
          />
        </div>
        <img src={GuidonLogo} className="w-[26.25rem] md:hidden" />
      </section>
    </main>
  );
};

export default TitlePage;

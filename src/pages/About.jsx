import ai1 from "../assets/ai1.png";
import ai2 from "../assets/ai2.png";
import ai3 from "../assets/ai3.png";
import ai4 from "../assets/ai4.png";
import ai5 from "../assets/ai5.png";
import ai6 from "../assets/ai6.png";
import ai7 from "../assets/ai7.png";
import ai8 from "../assets/ai8.png";
import ai9 from "../assets/ai9.png";
import ai10 from "../assets/ai10.png";
import ball from "../assets/ball.png";

import chatgpt from "../assets/chatgpt.svg";
import perplexity from "../assets/perplexity.svg";
import midjourney from "../assets/midjourney.svg";

import { Link } from "wouter";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// GSAP for animation because its a pain without
// https://gsap.com/docs/v3/
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  // animate image horizontal scroll
  const mainRef = useRef(null);
  useGSAP(
    () => {
      const galleryArray = gsap.utils.toArray(".gallery");
      galleryArray.forEach((gallery) => {
        gsap.to(gallery, {
          scrollTrigger: { trigger: gallery, scrub: 1 },
          x: -window.innerWidth,
        });
      });
    },
    { scope: mainRef },
  );

  return (
    <main
      className="text-pink flex flex-col overflow-hidden relative"
      ref={mainRef}
      style={{
        background: "linear-gradient(312deg, #99151F -24.28%, #0D0B10 39.68%)",
      }}
    >
      <Link
        to="/"
        className="self-end w-fit bg-light-red rounded-[0.5rem] p-[0.5rem] m-[1.62rem] flex flex-row gap-[0.5rem] text-[0.875rem] font-bold items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="arrow-counterclockwise">
            <g id="Vector">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 4.49988C16.1421 4.49988 19.5 7.85775 19.5 11.9999C19.5 16.142 16.1421 19.4999 12 19.4999C7.85786 19.4999 4.5 16.142 4.5 11.9999C4.5 10.8817 4.7442 9.82267 5.18146 8.87139C5.35445 8.49503 5.18959 8.04969 4.81323 7.8767C4.43687 7.7037 3.99154 7.86856 3.81854 8.24492C3.29279 9.38872 3 10.6611 3 11.9999C3 16.9704 7.02944 20.9999 12 20.9999C16.9706 20.9999 21 16.9704 21 11.9999C21 7.02932 16.9706 2.99988 12 2.99988V4.49988Z"
                fill="currentColor"
              />
              <path
                d="M12 6.69924V0.800522C12 0.482583 11.6292 0.308899 11.3849 0.512438L7.8457 3.4618C7.66579 3.61172 7.66579 3.88804 7.8457 4.03796L11.3849 6.98732C11.6292 7.19086 12 7.01718 12 6.69924Z"
                fill="currentColor"
              />
            </g>
          </g>
        </svg>
        Restart Simulation
      </Link>
      <section className="flex flex-col items-center p-[2rem] pt-0 md:px-[6rem]">
        <h1 className="text-light-red text-[1.5rem] bg-dark-red w-[6rem] text-center rounded-[0.5rem] p-[0.25rem 0.5rem]">
          ABOUT
        </h1>
        <h2 className="text-light-red text-[3rem] font-bold text-center lg:text-[5.125rem]">
          Degenerative AI
        </h2>
        <div className="flex flex-col gap-[1.62rem] max-w-full md:text-[1.25rem] lg:max-w-[50rem] lg:text-[1.5rem] z-10">
          <p className="font-redaction">
            The emergence of Generative Artificial Intelligence (GenAI) has
            enabled models like ChatGPT and Bard platforms for its users to
            input prompts, for which GenAI models would accordingly generate
            responses.
          </p>
          <div
            className="border-pink border-[1px] border-solid rounded-[0.5rem] p-[1.5rem] relative"
            style={{
              background:
                "linear-gradient(124deg, rgba(255, 255, 255, 0.00) -22.38%, rgba(255, 255, 255, 0.04) 70.38%)",
              backdropFilter: "blur(21px)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-[3.125rem] h-[3.125rem] translate-x-[50%] translate-y-[-50%] rounded-[0.3rem] lg:w-[4.6rem] lg:h-[4.6rem]"
              style={{
                background:
                  "linear-gradient(169deg, rgba(255, 3, 3, 0.49) -155.52%, rgba(109, 55, 55, 0.50) 161.13%)",
                backdropFilter: "blur(33px)",
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-[1.5rem] h-[1.5rem] translate-x-[-50%] translate-y-[50%] rounded-[0.25rem] z-10 lg:w-[3rem] lg:h-[3rem]"
              style={{
                background:
                  "linear-gradient(169deg, rgba(255, 0, 0, 0.87) -155.52%, rgba(124, 94, 94, 0.90) 161.13%)",
                backdropFilter: "blur(50px)",
              }}
            ></div>
            <p className="text-dark-pink font-redaction-50 font-bold">
              Notably, these models do not create original responses by itself;
              rather, they are trained to draw from the large and extensive
              pools of data, which are openly sourced content on the Internet.
            </p>
          </div>
          <div className="flex flex-row gap-[15%] w-[120dvw] translate-x-[150%] gallery lg:hidden">
            <img src={ai1} />
            <img src={ai1} />
            <img src={ai1} />
          </div>
          <p className="font-redaction-20">
            Typically, answers given by GenAI tools are{" "}
            <a
              className="underline"
              href="https://www.utoronto.ca/news/training-ai-machine-generated-text-could-lead-model-collapse-researchers-warn"
            >
              generated
            </a>{" "}
            by large language models (LLMs) that provide the building blocks to
            address abundant queries of text, audio, or image. To arrive at a
            cohesive and human-like answer, LLMs{" "}
            <a
              className="underline"
              href="https://machinelearningmastery.com/what-are-large-language-models/"
            >
              train
            </a>{" "}
            themselves through massive amounts of data from various sources
            available—books, articles, journals, etc. As a result, GenAI models
            can create an entirely new set of information for internet users to
            consume.
          </p>
          <div className="relative flex justify-center lg:h-[35rem]">
            <img
              src={ball}
              className="aspect-square z-50 self-center lg:w-[20rem]"
            />
            <img
              src={chatgpt}
              className="absolute left-[-5%] w-[20dvw] top-1/2 translate-y-[-50%] max-w-[6rem] lg:w-[20rem] lg:max-w-none lg:left-[-20%] lg:top-[35%]"
            />
            <img
              src={perplexity}
              className="mix-blend-difference bg-white absolute w-[20dvw] right-[5%] max-w-[6rem] lg:w-[15rem] lg:max-w-none"
            />
            <img
              src={midjourney}
              className="absolute w-[25dvw] right-[-5%] bottom-[-5%] max-w-[6rem] lg:max-w-none lg:w-[20rem] lg:right-[-30%]"
            />
            <div
              className="w-[2.6rem] h-[2.6rem] rounded-[0.3rem] absolute top-0 left-[60%] "
              style={{
                background:
                  "linear-gradient(169deg, rgba(255, 0, 0, 0.87) -155.52%, rgba(124, 94, 94, 0.90) 161.13%)",
                backdropFilter: "blur(25.6px)",
              }}
            ></div>
            <div className="absolute top-0 right-[70dvw] flex flex-col gap-[0.3rem] lg:top-[-50%]">
              <div
                className="w-[18rem] h-[0.5rem] rounded-[0.3rem] lg:h-[1rem]"
                style={{
                  background:
                    "linear-gradient(267deg, rgba(251, 30, 53, 0.50) 3.46%, rgba(0, 50, 48, 0.20) 125.92%)",
                }}
              ></div>
              <div
                className="w-[18rem] h-[0.5rem] rounded-[0.3rem] translate-x-[-10%] lg:h-[1rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 50, 48, 0.20) 5.76%, rgba(251, 30, 53, 0.50) 71.18%, rgba(0, 50, 48, 0.20) 98.26%)",
                }}
              ></div>
              <div
                className="w-[18rem] h-[0.5rem] rounded-[0.3rem] translate-x-[-20%] lg:h-[1rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 50, 48, 0.10) 40.48%, rgba(251, 30, 53, 0.50) 69.77%)",
                }}
              ></div>
            </div>
            <div className="absolute bottom-0 right-[5dvw] flex flex-col gap-[0.3rem] scale-x-[-1] lg:right-[-20%] lg:bottom-[10%]">
              <div
                className="w-[9rem] h-[0.5rem] rounded-[0.3rem] lg:h-[1rem] lg:w-[33rem]"
                style={{
                  background:
                    "linear-gradient(267deg, rgba(251, 30, 53, 0.50) 3.46%, rgba(0, 50, 48, 0.20) 125.92%)",
                }}
              ></div>
              <div
                className="w-[7rem] h-[0.5rem] rounded-[0.3rem] lg:h-[1rem] lg:w-[33rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 50, 48, 0.20) 5.76%, rgba(251, 30, 53, 0.50) 71.18%, rgba(0, 50, 48, 0.20) 98.26%)",
                }}
              ></div>
              <div
                className="w-[6rem] h-[0.5rem] rounded-[0.3rem] lg:h-[1rem] lg:w-[33rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 50, 48, 0.10) 40.48%, rgba(251, 30, 53, 0.50) 69.77%)",
                }}
              ></div>
            </div>
            <div className="absolute hidden bottom-0 right-[60dvw] flex-col gap-[0.3rem] lg:flex">
              <div
                className="w-[18rem] h-[0.5rem] rounded-[0.3rem] lg:h-[1rem]"
                style={{
                  background:
                    "linear-gradient(267deg, rgba(251, 30, 53, 0.50) 3.46%, rgba(0, 50, 48, 0.20) 125.92%)",
                }}
              ></div>
              <div
                className="w-[18rem] h-[0.5rem] rounded-[0.3rem] translate-x-[-10%] lg:h-[1rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 50, 48, 0.20) 5.76%, rgba(251, 30, 53, 0.50) 71.18%, rgba(0, 50, 48, 0.20) 98.26%)",
                }}
              ></div>
              <div
                className="w-[18rem] h-[0.5rem] rounded-[0.3rem] translate-x-[-20%] lg:h-[1rem]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 50, 48, 0.10) 40.48%, rgba(251, 30, 53, 0.50) 69.77%)",
                }}
              ></div>
            </div>
          </div>
          <p className="font-redaction">
            However, the issue arises when GenAI models gather inaccurate chunks
            of information also propagated online. As GenAI continues to be{" "}
            <a
              className="underline"
              href="https://machinelearningmastery.com/what-are-large-language-models/"
            >
              utilized
            </a>{" "}
            and trained for future models of the same caliber, its repercussions
            include the susceptibility of its models to degrade the quality of
            its outputs due to a lack of novel and factual data that the model’s
            competence is reliant on. Researchers refer to this phenomenon of
            GenAI degeneration as “model collapse,” in which the model{" "}
            <a className="underline" href="http://arxiv.org/pdf/2305.17493v2">
              starts
            </a>{" "}
            to project their own reality upon the data pool it “learns” from the
            internet. As the GenAI models are continually utilized by Internet
            users, troves of these erroneous data proliferate.
          </p>
          <div
            className="border-pink border-[1px] border-solid rounded-[0.5rem] p-[1.5rem] relative"
            style={{
              background:
                "linear-gradient(124deg, rgba(0, 0, 0, 1) -22.38%, rgba(255, 255, 255, 0.04) 70.38%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-[3.125rem] h-[3.125rem] translate-x-[50%] translate-y-[-50%] rounded-[0.3rem] z-10 lg:right-[-15%] lg:w-[4.6rem] lg:h-[4.6rem]"
              style={{
                background:
                  "linear-gradient(169deg, rgba(255, 3, 3, 0.49) -155.52%, rgba(109, 55, 55, 0.50) 161.13%)",
                backdropFilter: "blur(33px)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-[1.5rem] h-[1.5rem] translate-x-[-110%] translate-y-[-110%] rounded-[0.15rem] z-10 lg:w-[4.6rem] lg:h-[4.6rem] lg:translate-x-[-50%] lg:translate-y-[-50%]"
                style={{
                  background:
                    "linear-gradient(169deg, rgba(213, 93, 93, 0.49) -155.52%, rgba(109, 55, 55, 0.50) 161.13%)",
                  backdropFilter: "blur(17px)",
                }}
              ></div>
            </div>
            <p className="text-dark-pink font-redaction-50 font-bold">
              The learning process of future GenAI models thus further
              deteriorates, ultimately defeating the fundamental purpose of AI
              to be helpful.
            </p>
          </div>
          <div className="absolute hidden top-[64%] right-0 flex-col gap-[0.3rem] lg:flex">
            <div
              className="w-[18rem] h-[0.5rem] rounded-[0.3rem] lg:h-[1rem]"
              style={{
                background:
                  "linear-gradient(267deg, rgba(251, 30, 53, 0.50) 3.46%, rgba(0, 50, 48, 0.20) 125.92%)",
              }}
            ></div>
            <div
              className="w-[18rem] h-[0.5rem] rounded-[0.3rem] translate-x-[-10%] lg:h-[1rem]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 50, 48, 0.20) 5.76%, rgba(251, 30, 53, 0.50) 71.18%, rgba(0, 50, 48, 0.20) 98.26%)",
              }}
            ></div>
            <div
              className="w-[18rem] h-[0.5rem] rounded-[0.3rem] translate-x-[-20%] lg:h-[1rem]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 50, 48, 0.10) 40.48%, rgba(251, 30, 53, 0.50) 69.77%)",
              }}
            ></div>
          </div>
          <p className="font-redaction-20">
            This occurrence of GenAI degeneration is not{" "}
            <a className="underline" href="http://arxiv.org/pdf/2311.12202">
              limited
            </a>{" "}
            to prompts in the form of text. Audio and image-generative systems
            are also vulnerable to flaws learned from online sources as these
            models are trained on their input data while lacking the system to
            verify their credibility. Studies show that when these models are
            retrained on the data of their own generated content, text-to-image
            responses produce highly distorted results due to their
            vulnerability to being “poisoned” from manipulated data found
            online.
          </p>
          <div className="flex flex-row gap-[15%] w-[120dvw] translate-x-[150%] gallery lg:hidden">
            <img src={ai1} />
            <img src={ai1} />
            <img src={ai1} />
          </div>
          <p className="font-redaction-20 lg:mb-[10%]">
            From the finite knowledge that GenAI models depend on, overly
            producing AI-generated data may lead to a staggering, widespread
            model collapse. As inaccurate information clouds the corpus of
            available knowledge online, this phenomenon exacerbates the risk
            that AI users and consumers of such content might face.
          </p>
        </div>
      </section>
      <hr />
      <section className="flex flex-row justify-center p-[2rem] md:px-[6rem]">
        <div className="flex flex-col gap-[1.5rem] lg:max-w-[50rem]">
          <div className="lg:flex lg:flex-row lg:justify-between gap-4">
            <div>
              <h2 className="text-[2rem] font-bold mb-[0.75rem]">
                Writeup&nbsp;by
              </h2>
              <p>
                Allen&nbsp;P.&nbsp;Gacutan, Ram&nbsp;Hebron, and
                Paolo&nbsp;Velilla
              </p>
            </div>
            <div>
              <h2 className="text-[2rem] font-bold mb-[0.75rem]">
                Designed&nbsp;by
              </h2>
              <p>
                Tiffani&nbsp;Ong, Razel&nbsp;Tan, Sam&nbsp;Villamin, and
                Kathrynne&nbsp;Yu
              </p>
            </div>
            <div>
              <h2 className="text-[2rem] font-bold mb-[0.75rem]">
                Developed&nbsp;by
              </h2>
              <p>Gabriel&nbsp;Paolo&nbsp;Tiu, and Waleed&nbsp;Lugod</p>
            </div>
          </div>
          <div>
            <h2 className="text-[2rem] font-bold mb-[0.75rem]">
              AI Generated Photos&nbsp;by
            </h2>
            <p>
              Jason M. Allen (Midjourney), InflatableGull (Midjourney),
              Alexander Mordvintsev (Deepdream), Karen X Cheng (OpenAI), Floris
              Groesz (Dall-E), Jassenescapist, takieddine1758 (Midjourney &
              LeonardoAI), Nitasha Tiku, Kevin Schaul and Szu Yu Chen (Stable
              Diffusion & Midjourney), Andy Herd (TensorFlow), Johannes Vermeer
              (Dall-E).
            </p>
          </div>
        </div>
        <div
          className="w-[7rem] h-[7rem] absolute top-[10%] right-0 rounded-[0.4rem]"
          style={{
            background:
              "linear-gradient(169deg, rgba(255, 0, 0, 0.87) -155.52%, rgba(194, 122, 122, 0.49) 161.13%)",
            backdropFilter: "blur(55px)",
          }}
        ></div>
        <div
          className="w-[4.6rem] h-[4.6rem] absolute top-[19%] right-[-1%] rounded-[0.4rem]"
          style={{
            background:
              "linear-gradient(169deg, rgba(255, 3, 3, 0.49) -155.52%, rgba(109, 55, 55, 0.50) 161.13%)",
            backdropFilter: "blur(50px)",
          }}
        ></div>
        <div
          className="w-[4.6rem] h-[4.6rem] absolute top-[12%] left-[3%] rounded-[0.4rem]"
          style={{
            background:
              "linear-gradient(169deg, rgba(255, 0, 0, 0.87) -155.52%, rgba(124, 94, 94, 0.90) 161.13%)",
            backdropFilter: "blur(50px)",
          }}
        ></div>
        <div
          className="w-[4.6rem] h-[4.6rem] absolute top-[30%] right-[3%] rounded-[0.4rem]"
          style={{
            background:
              "linear-gradient(169deg, rgba(255, 3, 3, 0.49) -155.52%, rgba(109, 55, 55, 0.50) 161.13%)",
            backdropFilter: "blur(50px)",
          }}
        ></div>
        <div
          className="absolute top-[13%] right-1/2 translate-x-[-500%] w-[6rem] h-[6rem] hidden lg:block"
          style={{ background: `url(${ai1}) center` }}
        ></div>
        <div
          className="absolute top-[13%] right-1/2 translate-x-[350%] w-[12rem] h-[7.25rem] hidden lg:block"
          style={{ background: `url(${ai2}) top / cover` }}
        ></div>
        <div
          className="absolute top-[25%] left-[85%] w-[39rem] h-[14rem] hidden lg:block"
          style={{ background: `url(${ai3}) top left / contain` }}
        ></div>
        <div
          className="absolute top-[55%] right-[88%] w-[15rem] h-[18rem] rounded-[1.5rem] hidden lg:block"
          style={{ background: `url(${ai4}) top / cover` }}
        ></div>
        <div
          className="absolute top-[63%] right-[85%] w-[7rem] h-[7rem] rounded-[1rem] hidden lg:block"
          style={{ background: `url(${ai5}) top / cover` }}
        ></div>
        <div
          className="absolute top-[67%] right-[-5%] w-[11.75rem] h-[13.25rem] rounded-[1rem] hidden lg:block"
          style={{ background: `url(${ai6}) top / cover` }}
        ></div>
        <div
          className="absolute top-[76%] right-1/2 translate-x-[-380%] w-[7rem] h-[7rem] hidden lg:block"
          style={{ background: `url(${ai8}) top / cover` }}
        ></div>
        <div
          className="absolute top-[73%] right-1/2 translate-x-[-400%] w-[7rem] h-[7rem] hidden lg:block"
          style={{ background: `url(${ai7}) top / cover` }}
        ></div>
        <div
          className="absolute top-[80%] right-1/2 translate-x-[-220%] w-[13rem] h-[13rem] hidden lg:block"
          style={{ background: `url(${ai9}) center / cover` }}
        ></div>
        <div
          className="absolute top-[80%] right-1/2 translate-x-[320%] w-[13rem] h-[13rem] hidden lg:block"
          style={{ background: `url(${ai10}) center / cover` }}
        ></div>
      </section>
    </main>
  );
};

export default AboutPage;

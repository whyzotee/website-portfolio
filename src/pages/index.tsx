/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typed from "typed.js";
import Link from "next/link";
import Lottie from "lottie-react";
import codingAnimation from "../../public/coding_animation.json";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from "@/components/langtoggle";

interface LanguageSwitcherProps {
  onLocaleChange: (newLocale: string) => void;
  currentLocale: string;
}

export default function Home({
  onLocaleChange,
  currentLocale,
}: LanguageSwitcherProps) {
  const wordAnim = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(wordAnim.current, {
      strings: ["Chatnarint.", "Developer.", "Student."],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <main className="w-full m-auto overflow-y-hidden bg-[#252525]">
      <nav className="bg-[#505050]">
        <div className="max-w-[1280px] py-4 m-auto flex justify-between font-semibold">
          <div className="flex">
            <h1 className="text-[#FFDAB9] text-xl ml-4 lg:ml-0">@whyzotee</h1>
          </div>
          <div className="hidden lg:flex gap-8 text-xl">
            <Link href="#first_section" as="#first_section">
              <FormattedMessage id="nav.home" />
            </Link>
            <Link href="#mywork_section">
              <FormattedMessage id="nav.mywork" />
            </Link>
            <Link href="#">
              <FormattedMessage id="nav.aboutme" />
            </Link>
            <Link href="https://github.com/whyzotee" target="_blank">
              Github
            </Link>
            <LanguageSwitcher
              onLocaleChange={onLocaleChange}
              currentLocale={currentLocale}
            />
          </div>
        </div>
      </nav>

      <section
        id="first_section"
        className="max-w-[1280px] flex flex-col-reverse lg:flex-row justify-center items-center m-auto px-4 py-12 lg:px-0 lg:py-32 gap-x-12"
      >
        <div className="lg:w-1/2 flex flex-col lg:text-xl gap-y-2 lg:gap-y-6">
          <p>
            <FormattedMessage id="welcome.msg" />
          </p>
          <h1 className="flex text-2xl lg:text-4xl font-bold">
            Hello World!, I&#39;m&nbsp;
            <span className="text-[#FFDAB9]" ref={wordAnim}></span>
          </h1>
          <p>
            <FormattedMessage id="des.self.info" />
          </p>
          <Link
            className="text-center m-4 lg:m-0 lg:w-fit px-4 py-2 text-xl font-semibold bg-[#505050] rounded-lg"
            href="#"
          >
            Remume Click!
          </Link>
        </div>
        <div className=" lg:w-1/2 lg:h-[500px]">
          <Lottie animationData={codingAnimation} loop={false} />
        </div>
      </section>

      <section className="max-w-[1280px] flex flex-col lg:flex-row m-auto py-12">
        <div className="lg:w-1/2 px-4 lg:px-0 flex flex-col text-base">
          <h1 className="text-4xl font-bold">
            <FormattedMessage id="skills" />
          </h1>
          <div className="flex flex-col lg:flex-row my-12 gap-6 items-start">
            <div className="h-16 w-16 p-3 bg-[#505050] rounded-full">
              <img src="/logo/flutter_logo.png" alt="flutter_logo" />
            </div>
            <div className="lg:w-[70%] flex flex-col gap-2 text-xl">
              <h2 className="flex items-center text-2xl font-bold">
                Flutter&ensp;
                <span className="text-base text-[#FFDAB9] font-normal">
                  Application framework
                </span>
              </h2>
              <p>
                Flutter transforms the app development process. Build, test, and
                deploy beautiful mobile, web, desktop, and embedded apps from a
                single codebase.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-12 gap-6 items-start">
            <div className="h-16 w-16 p-3 bg-[#505050] rounded-full filter">
              <img src="/logo/react_logo.png " alt="react_logo" />
            </div>
            <div className="lg:w-[70%] flex flex-col gap-2 text-xl">
              <h2 className="flex items-center text-2xl font-bold">
                React Js&ensp;
                <span className="text-base text-[#FFDAB9] font-normal">
                  Js framework
                </span>
              </h2>
              <p>
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on components. It is maintained
                by Meta (formerly Facebook) and a community of individual
                developers and companies.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-12 gap-6 items-start">
            <div className="h-16 w-16 p-3 bg-[#505050] rounded-full filter">
              <img src="/logo/cpp_logo.png" alt="cpp_logo" />
            </div>
            <div className="lg:w-[70%] flex flex-col gap-2 text-xl">
              <h2 className="flex items-center text-2xl font-bold">
                CPP&ensp;
                <span className="text-base text-[#FFDAB9] font-normal">
                  Programming language
                </span>
              </h2>
              <p>
                CPP is a high-level, general-purpose programming language
                created by Danish computer scientist Bjarne Stroustrup. First
                released in 1985 as an extension of the C programming language.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-12 gap-6 items-start">
            <div className="h-16 w-16 p-3 bg-[#505050] rounded-full">
              <img src="/logo/js_logo.png" alt="js_logo" />
            </div>
            <div className="lg:w-[70%] flex flex-col gap-2 text-xl">
              <h2 className="flex items-center text-2xl font-bold">
                Javascript&ensp;
                <span className="text-base text-[#FFDAB9] font-normal">
                  Programming language
                </span>
              </h2>
              <p>
                Javascript is a programming language that is one of the core
                technologies of the World Wide Web, alongside HTML and CSS. As
                of 2023, 98.7% of websites use JavaScript on the client side for
                webpage behavior.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-4 lg:px-0 flex flex-col">
          <h1 className="text-[#FFDAB9] text-4xl font-bold">More Sikls</h1>
          <div className="flex flex-col lg:flex-row my-12 gap-6 items-start">
            <div className="h-16 w-16 p-3 bg-[#505050] rounded-full">
              <img
                className="h-full w-full object-contain"
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"
                alt="git_logo"
              />
            </div>
            <div className="lg:w-[70%] flex flex-col gap-2 text-xl">
              <h2 className="flex items-center text-2xl font-bold">
                Git&ensp;
                <span className="text-base text-[#FFDAB9] font-normal">
                  Project management
                </span>
              </h2>
              <p>
                Git is a free and open source distributed version control system
                designed to handle everything from small to very large projects
                with speed and efficiency.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-12 gap-6 items-start">
            <div className="h-16 w-16 p-3 bg-[#505050] rounded-full">
              <img
                className="h-full w-full object-contain invert"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png"
                alt="git_logo"
              />
            </div>
            <div className="lg:w-[70%] flex flex-col gap-2 text-xl">
              <h2 className="flex items-center text-2xl font-bold">
                Github&ensp;
                <span className="text-base text-[#FFDAB9] font-normal">
                  Project management
                </span>
              </h2>
              <p>
                Github is a platform and cloud-based service for software
                development and version control using Git, allowing developers
                to store and manage their code.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-12 gap-6 items-start">
            <div className="h-16 w-16 p-3 bg-[#505050] rounded-full">
              <img
                className="h-full w-full object-contain"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                alt="figma_logo"
              />
            </div>
            <div className="lg:w-[70%] flex flex-col gap-2 text-xl">
              <h2 className="flex items-center text-2xl font-bold">
                Figma&ensp;
                <span className="text-base text-[#FFDAB9] font-normal">
                  Designing & Protoyping tool
                </span>
              </h2>
              <p>
                Figma is a collaborative web application for interface design,
                with additional offline features enabled by desktop applications
                for macOS and Windows. The feature set of Figma focuses on user
                interface and user experience design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] flex justify-center m-auto py-12">
        <h1 id="mywork_section" className="text-4xl font-bold">
          My Work
        </h1>
      </section>

      <footer className="bg-[#505050]">
        <div className="max-w-[1280px] p-4 m-auto flex flex-col lg:flex-row ">
          <div className="text-base lg:w-1/3">
            <h1 className="text-xl text-[#FFDAB9] font-bold">@whyzotee</h1>
            <p>เย็นนี้กินอะไรดี?</p>
          </div>
          <div className="lg:w-1/3">
            <h1 className="text-xl text-[#FFDAB9] font-bold">Follow Me</h1>
            <div className="flex flex-col">
              <Link href="#">Github</Link>
              <Link href="#">Instragram</Link>
              <Link href="#">Facebook</Link>
            </div>
          </div>
          <div className="lg:w-1/3">
            <h1 className="text-xl text-[#FFDAB9] font-bold">More Link</h1>
            <ul>
              <li>Brabrabra</li>
              <li>Brabrabra</li>
              <li>Brabrabra</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

import Image from "next/image";

import Nav from "../components/nav";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"], fallback: ["arial"] });

export default function Home() {
  return (
    <div>
      <header className={inter.className}>
          <Nav logo="YN" />   
      </header>
      <main className={inter.className}>
        <section className="intro">
          <About
            welcome="Hello, I am"
            name="Your Name"
            // avatar
            introduction="I enjoy creating amazing experiences for people"
            callToActionButton="Get In Touch"
          />
        </section>
        <section className="projects" id="my-projects">
          <section className="project-one ">
            <div
              className="md:mt-20 lg:grid lg:grid-cols-2 lg:justify-items-end lg:gap-x-6 lg:items-center
            "
            >
              <div className=" grid justify-center lg:order-last lg:justify-self-start">
                <Image
                  className="lg:max-w-[36rem]"
                  src="/images/projects-img/big-unsplash-party.png"
                  alt="image of a celebration"
                  height={597}
                  width={701}
                />
              </div>
              <div>
                <Projects
                  title="Project 1"
                  date="June 2022"
                  info="Lorem ipsum dolor sit amet consectetur. A posuere in senectus urna diam egestas nisl est malesuada. Ultricies faucibus placerat consequat nisl sapien sem ipsum arcu."
                />
                <div className="grid grid-rows-1 justify-items-center mb-11 ">
                  <div className="grid grid-cols-2 max-w-xxs gap-x-3 md:max-w-xl  lg:pl-6 ">
                    <Image
                      className="h-[6.7rem]
                      md:h-[13.4rem] lg:h-[13rem]"
                      src="/images/projects-img/big-pexels-laptop-notes.png"
                      alt="image of a laptop with a notebook, pen and cup of coffee"
                      height={213}
                      width={303}
                    />
                    <Image
                      src="/images/projects-img/big-pexels-camera.png"
                      alt="image of a camera on a tripod"
                      height={213}
                      width={276}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="project-two">
            <div className="grid justify-center md:mt-20  lg:grid-cols-2 lg:justify-items-end lg:gap-x-6 lg:items-center lg:mb-40 lg:mt-40">
              <div className="lg:order-last  lg:justify-self-start">
                <Image
                  className="lg:max-w-[36rem]"
                  src="/images/projects-img/big-unsplash-event-dinner.png"
                  alt="image of an empty room with tables set up for an event"
                  height={438}
                  width={579}
                />
              </div>
              <div className="lg:justify-self-start">
                <Projects
                  title="Project 2"
                  date="Sept 2021"
                  info="Lorem ipsum dolor sit amet consectetur. Ultricies faucibus placerat consequat nisl sapien sem ipsum arcu."
                />
              </div>
              <iframe
                className="w-full lg:max-w-xl lg:h-[100%] lg:row-span-2 lg:pl-6 lg:order-first"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OW_EmSfKAdA"
                title="YouTube video player"
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          <section className="project-three">
            <div className="md:mt-20 md:mb-20 md lg:grid lg:grid-cols-1 lg:mb-40">
              <div className="bg-[url('/images/projects-img/big-pexels-conference-image.png')] bg-center grid grid-cols-1 mt-11 mb-11 md:h-[49.25rem] lg:h-[49.25rem] lg:w-[72rem] lg:ml-6 lg:justify-self-center lg:rounded-md" aria-label="background image of an audotorium filled with business people">
                <div className="bg-black rounded-[1rem] px-6 bg-opacity-[55%] py-20 lg:rounded-sm">
                  <div className="grid grid-flow-row justify-items-center">  
                      <Projects
                        title="Project 3"
                        date="Dec 2020"
                        info="Lorem ipsum dolor sit amet consectetur. A posuere in senectus urna diam egestas nisl est malesuada."
                      />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="contact" id="contact-me">     
            <Contact
              title="Contact"
              firstPara="Interested in creating a new project with me?"
              secondPara="You can contact me on any social media platform or send me an email at "
              email="yourname@email.com"
            />
        </section>
      </main>
      <footer className={inter.className}>
        <h4 className="text-center mt-10 mb-4 text-xs">
          Copyright 2022 Your Name
        </h4>
      </footer>
    </div>
  );
}

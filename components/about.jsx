import Link from "next/link";
import Image from "next/image";
import desktopAvatar from "../public/images/about-img/big-pexels-girl-smiling-square.png";
import mobileAvatar from "../public/images/about-img/pexels-girl-smiling-circle-small.png";

import { Norican } from "@next/font/google";
const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

export default function About({
  welcome,
  name,
  introduction,
  callToActionButton,
}) {
  return (
    <div
      className=" grid grid-flow-rows justify-items-center
     lg:grid-cols-2 lg:justify-items-end
     lg:gap-x-6 lg:mt-20"
    >
      <div className="contents lg:grid lg:content-center">
        <h1
          className=" text-5xl pb-2 mt-11 md:text-6xl  lg:pl-8 
       lg:text-6xl "
        >
          {welcome}
        </h1>
        <>
          <div className={norican.className}>
            <h1
              className=" text-7xl text-center pb-4 px-2 bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text md:text-8xl md: pr-8
          lg:text-9xl lg:text-left lg:pl-4 lg:pb-6 lg:leading-[10rem] 
          "
            >
              {name}
            </h1>
          </div>
        </>
        <div className="py-7 justify-self-center lg:hidden">
          <Image src={mobileAvatar} alt="circular avatar" />
        </div>

        <h1
          className=" text-4.5 max-w-xxs pb-3.5 leading-[2.8rem] 
      md:max-w-md
      md:mb-2
      lg:grid  lg:max-w-xl lg:max-h-80 lg:text-5xl lg:leading-[4.5rem] lg:pl-8 "
        >
          {introduction}
        </h1>
        <div
          className="
      bg-gradient-to-r from-aqua to-lavender w-72 text-center text-2xl p-0.8 rounded-md mb-11 mt-4
      md:w-[28rem] lg:ml-8 hover:scale-110 transition ease-in-out delay-200 "
        >
          <div className="bg-gradient-to-r from-[#080344] via-[#0E0946] to-[#080344] p-4 rounded-md lg:text-3xl ]  hover:scale-100 ">
            <Link href="#contact-me">
              <button>{callToActionButton}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid lg:my-10 lg:justify-self-start">
        {/*lg:grid*/}
        <Image src={desktopAvatar} alt="square avatar" priority />
      </div>
    </div>
  );
}

{
  /** 
   * <div className="bg-yellow-400 grid grid-flow-row justify-items-center lg:grid-cols-2 lg:justify-items-end lg:gap-x-8">
      <h1 className="bg-green-500 text-5xl pb-2 mt-11 lg:grid lg:order-1 lg:self-end  
       lg:text-6xl ">{welcome}</h1>
      <div className="bg-slate-800 lg:grid lg:order-3 lg:self-center">
        <div className={norican.className}>
          <h1 className="text-7xl text-center pb-4 px-2 bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text lg:text-9xl lg:pb-6 lg:leading-[10rem]">
            {name}
          </h1>
        </div>
      </div>
      <div className="py-7 lg:hidden">
        <Image src={mobileAvatar} alt="circular avatar" />
      </div>

      <h1 className="bg-purple-700 text-4.5 max-w-xxs pb-3.5 leading-[2.8rem] lg:grid lg:order-5 lg:max-w-xl lg:max-h-80 lg:text-5xl lg:leading-[4.5rem] lg:pl-8 lg:self-center">
        {introduction}
      </h1>
      <div
        className="
      bg-gradient-to-r from-aqua to-lavender w-72 text-center text-2xl p-0.8 rounded-md mb-11 lg:grid lg:order-6 lg:max-h-20"
      >
        <div className="bg-gradient-to-r from-[#080344] via-[#0E0946] to-[#080344] p-4 rounded-md lg:text-3xl lg:grid lg:order-7">
          <Link href="#contact-me">
            <button>{callToActionButton}</button>
          </Link>
        </div>
        </div>
        <div className="hidden lg:grid lg:order-2 lg:row-span-4 lg:my-10 lg:justify-self-start">
          
          <Image src={desktopAvatar} alt="square avatar" priority />
        </div>
      </div>
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * **lg copy without extra divs
   * <div className="bg-yellow-400 grid grid-flow-row justify-items-center lg:grid-cols-2 lg:place-items-center">
      <h1 className="bg-green-500 text-5xl pb-2 mt-11 lg:grid lg:order-1 lg:self-end lg:justify-self-center lg:text-6xl">{welcome}</h1>
      <div className="bg-slate-800 lg:grid lg:order-3 ">
        <div className={norican.className}>
          <h1 className="text-7xl text-center pb-4 px-2 bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text lg:text-9xl ">
            {name}
          </h1>
        </div>
      </div>
      <div className="py-7 lg:hidden">
        <Image src={mobileAvatar} alt="circular avatar" />
      </div>

      <h1 className="bg-purple-700 text-4.5 max-w-xxs pb-3.5 leading-[2.8rem] lg:grid lg:order-5 lg:max-h-80 lg:max-w-2xl lg:text-6xl lg:leading-[4.5rem]">
        {introduction}
      </h1>
      <div
        className="
      bg-gradient-to-r from-aqua to-lavender w-72 text-center text-2xl p-0.8 rounded-md mb-11 lg:grid lg:order-6 lg:max-h-20"
      >
        <div className="bg-gradient-to-r from-[#080344] via-[#0E0946] to-[#080344] p-4 rounded-md lg:text-3xl lg:grid lg:order-7">
          <Link href="#contact-me">
            <button>{callToActionButton}</button>
          </Link>
        </div>
        </div>
        <div className="hidden lg:grid lg:order-2 lg:row-span-6">
          
          <Image src={desktopAvatar} alt="square avatar" priority />
        </div>
      </div>
   * 
   * 
   * 
   * 
   * button copy
   * <div
        className="
      bg-gradient-to-r from-aqua to-lavender w-72 text-center text-2xl p-0.8 rounded"
      >
        <div className="bg-gradient-to-r from-[#080344] via-[#0E0946] to-[#080344] p-4">
          <Link href="#contact-me">
            <button>{callToActionButton}</button>
          </Link>
        </div>
      </div>
   * 
   * clean copy that works but shows error in console of keys not having unique identifier (can't seem to get object array and props right?) error is noted below

const avatarImgs = [desktopAvatar, mobileAvatar];

const AvatarPics = () => {
  return (
    <div>
      {avatarImgs.map((avatarImg) => {
        return (
          <div key={{ avatarImg }}>
            <Image src={avatarImg} alt="avatars" />
          </div>
        );
      })}
    </div>
  );
};
export default function About({ aboutInfo }) {
  return (
    <div>
      <AvatarPics />
      <h1>{aboutInfo}</h1>
       }
    </div>
  );
}

*** full console error ***

Warning: Encountered two children with the same key, `[object Object]`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    at div
    at AvatarPics
    at div
    at About (webpack-internal:///./components/about.jsx:70:11)
    at section
    at main
    at Home
    at App (webpack-internal:///./pages/_app.js:15:11)
    at PathnameContextProviderAdapter (webpack-internal:///./node_modules/next/dist/shared/lib/router/adapters.js:62:11)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:301:63)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:850:919)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:61:1)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:171:11)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:350:11)
*/
}

// const handleClick = () => {
//   return(
//     <>
//   <Link href="#title"></Link>;</>
//   )
// };
// const CTAButton = () => {
//   return (
//     <div>
//       <button onClick={handleClick}>Get In Touch</button>
//     </div>
//   );
// };

// const CtaButton = () => {
//               return (<>
//               <Link href="#ctitle">
//                 <button>Get In Touch</button>
//               </Link>;
//               </>)
// }

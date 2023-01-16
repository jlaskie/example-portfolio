import Image from "next/image";
import Link from "next/link";

import twitterIcon from "../public/assets/Twitter-social-icons-circle-blue-1.png";
import linkedInIcon from "../public/assets/LI-In-Bug-1.png";
import instaIcon from "../public/assets/Instagram_Glyph_Gradient_1.png";
import profileImg from "../public/images/social-img/big-pexels-woman-tea.png";

import { Norican } from "@next/font/google";
const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

const SocialMedia = () => {
  return (
    <div className="grid grid-rows-3 gap-9 lg:mt-24">
      <div className="">
        <Link href="https://www.instagram.com/">
          <Image src={instaIcon} alt="social media links" />
        </Link></div>
        <div className=" ">
        <Link href="https://twitter.com/?lang=en">
          <Image src={twitterIcon} alt="social media links" />
        </Link></div>
        <div className="">
        <Link href="https://uk.linkedin.com/">
          <Image src={linkedInIcon} alt="social media links" />
        </Link></div>
      
    </div>
  );
};

export default function Contact({title, firstPara, secondPara, email}) {
  return (
    <div className=" lg:grid lg:grid-cols-2 lg:justify-items-end lg:gap-x-3 lg:items-center">
      <div className=" grid grid-flow-row justify-center mb-8 lg:justify-self-end lg:mb-0">
        <div className=" max-w-md grid justify-items-center  ">
          <div className=" max-w-[12rem] ">
            <div className={norican.className}>
              <h1 className="pb-4 text-6xl bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text lg:text-7xl">
                {title}
              </h1>
            </div>
          </div>
          <div className="grid grid-rows-1 border-teal-300/60 rounded-lg border-2 lg:w-full">
            <p className="  text-2xl my-6 ml-8 mr-5 lg:text-3xl lg:leading-normal">
              {firstPara} <br /> {secondPara} {email}
            </p>
          </div>
        </div>
      </div>
      <div className=" lg:max-w-xl lg:justify-self-start">
        <div className="flex justify-center gap-10 lg:gap-5">
          <div className="self-center">
            <SocialMedia />
          </div>
          <div className="lg:hidden">
            <Image
              src={profileImg}
              alt="woman drinks tea"
              height={302}
              width={235}
            />
          </div>
          <div className="hidden lg:flex">
            <Image src={profileImg} alt="woman drinks tea" />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* *** centered contact box
      <div className="bg-cyan-400 grid justify-center">
    <div className="bg-gray-600 max-w-xs">
      <div className="bg-orange-300">
      <div className={norican.className}>
        <h1 className="text-6xl text-center bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text">
          {title}
        </h1>
        </div>
      </div>
      
        <p className="bg-purple-600 ">
          {firstPara} <br /> {secondPara} {email}
        </p>
      </div>
    </div>
  
  
  
  
  
  
  
  
  <Sizes />
const mobileImg = <Image
    src={profileImg}
    alt="woman drinks tea"
    height={302}
    width={235} />
    const tabletImg = <Image src={profileImg} alt="woman drinks tea" />;
function Sizes() {
    if (window.screen.width < 400) {
  mobileImg;
} else {
 tabletImg;
}
}*/
}




{
  /*       
  <Image
    src={profileImg}
    alt="woman drinks tea"
    height={302}
    width={235}
    // sizes="(max-width: 400px) 10vw, (max-width: 200px) 50vw"
    // style={width="auto", height:302 }
    // sizes="(max-width: 235px)100vw,
    //   (max-width: 334px) 50vw,
    //   33vw }"
    // height={302} max-width: 235px, max-height: 302px
    // width={235} max-width: 334px, max-height: 514
  />;
  
  
  
  
  
  
  
  <>
         <Image src={profileImg} priority alt="woman drinks tea" /> 
      </>
      
   ***copy that works version 1
const SocialMediaIcons = () => {
    return(
        <div>
            {[
                instaIcon, twitterIcon,
                linkedInIcon
            ].map((path) => {
                return (
                    <div key={path}>
                        <Image src={path} alt="socials"/>
                    </div>
                )
            })}
        </div>
    )
 };

export default function SocialMedia() {
  return (
    <div>
      <>
         <SocialMediaIcons /> 
        
      </>
      <>
        <Image src={profileImg} priority alt="woman drinks tea" />
      </>
    </div>
  );
}

**another copy
const icons = [{
    anIcon: <Image src={instaIcon} alt="instagram" />,
}, 
{
    anIcon: <Image src={twitterIcon} alt="twitter" />
},
{
    anIcon: <Image src={linkedInIcon} alt="linkedIn" />
}
]

const SocialMediaIcons = ({instaIcon, twitterIcon, linkedInIcon}) => {
  return (
    <div>
        
    </div>
  );
};

* */
}

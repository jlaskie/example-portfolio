
export default function Projects({ title, date, info }) {
  return (
    <div className=" grid grid-flow-row justify-items-center my-8 ">
      <div className="max-w-xxs md:max-w-xl lg:max-w-xl lg:pl-6 ">
        <h1>{title}</h1>
        {/*max-w-[28rem] for date why did i do this*/}
        <h4 className="pt-2 pb-10">{date}</h4>
        <p>{info}</p>
      </div>
    </div>
  );
}


{
  /* clean copy 2

const mainProjectImgs = [celebrationImg, eventDinnerImg, conferenceImg]

const MainProjectPics = () => {
  return(
    <div>
      {mainProjectImgs.map((mainProjectImg) => {
        return (
          <div key={{ mainProjectImg }}>
            <Image src={mainProjectImg} alt="events" />
          </div>
        );
      })}
    </div>
  )
}







**clean copy**
const mainProjectImgs = [celebrationImg, eventImg]

const MainProjectPics = () => {
  return(
    <div>
      {mainProjectImgs.map((mainProjectImg) => {
        return (
          <div key={{ mainProjectImg }}>
            <Image src={mainProjectImg} alt="avatars" />
          </div>
        );
      })}
    </div>
  )
}

*/
}


// const MainProjectPics = () => {
//   return(
//     <div>
//       {mainProjectImgs.map((mainProjectImg) => {
//         return (
//           <div key={ `${mainProjectImg} `}>
//           </div>
//         );
//       })}
//     </div>
//   )
// }

// let img = [<Image src={celebrationImg} />, <Image src={eventImg} />];

// const Img = () => (
//   <Image
//     src="/images/projects-img/big-unsplash-party.png"
//     height={597}
//     width={701}
//     alt="a party"
//   />
// );



{
  /*
const mainProjectImgs = {
  firstPhoto: <Image src={celebrationImg} alt="party" width={701} height={597} />,
  secondPhoto: <Image src={eventDinnerImg} alt="party" width={579} height={438} />
} */
}
{
  /*
const MainProjectPics = () => {
  return(
    <div>
      {mainProjectImgs.map((mainProjectImg) => {
        return (
          <div key={{ mainProjectImg }}>
            <Image src={mainProjectImg} alt="events" />
          </div>
        );
      })}
    </div>
  )
} 

*** start of file

import Image from "next/image";
import celebrationImg from "../public/images/projects-img/big-unsplash-party.png";
import eventDinnerImg from "../public/images/projects-img/big-unsplash-event-dinner.png";
import conferenceImg from "../public/images/projects-img/big-pexels-conference-image.png";
import laptopImg from "../public/images/projects-img/big-pexels-laptop-notes.png";
import cameraImg from "../public/images/projects-img/big-pexels-laptop-notes.png";



*/
}
import { useParams } from "react-router-dom";
import { pageProps } from "../type";

const Page: React.FC<pageProps> = ({ data, dark }) => {
  const { name } = useParams();
  let company;

  if (name) {
    company = data.find((companyname) => companyname.company === name);
    console.log(company);
  }

  return (
    <main
      className={`desktop:px-[355px] mt-[61px] relative px-6 pb-40 font-kumbr md:mt-[46px] md:px-10 ${
        !dark ? "bg-lightGrey" : "bg-midNight"
      }`}
    >
      <div
        className={` pt-[49px] pb-[32px]   rounded-md relative z-30 md:flex md:items-center md:p-0 md:rounded-tl-none ${
          !dark ? "bg-white" : "bg-darkBlue"
        }`}
      >
        <div
          style={{ backgroundColor: company?.logoBackground }}
          className={`h-[50px] w-[50px] grid items-center justify-center md:rounded-bl-md md:rounded-none rounded-xl absolute left-[50%] translate-x-[-50%] top-[-25px] md:static
          md:translate-x-0 md:h-[140px] md:w-[140px]`}
        >
          <img src={company?.logo} className="md:w-[81px]" />
        </div>
        <div className="md:ml-10">
          <h1
            className={` md:text-start md:text-2xl md:leading-6 text-center font-bold   text-xl leading-5 ${
              !dark ? "text-darkBlue" : "text-white"
            }`}
          >
            {company?.company}
          </h1>
          <p className=" text-center text-base font-normal mt-[13px] leading-4  text-darkGrey">
            {`${company?.company}.com`}
          </p>
        </div>
        <div className="mx-[90px] mt-[27px] h-[48px] md:ml-auto md:m-0 md:mr-10">
          <a href={company?.website}>
            <div
              className={`px-5 py-4  h-[48px]  cursor-pointer rounded-md ${
                !dark
                  ? "bg-lightVioletbg hover:bg-lightVioletHover"
                  : "bg-darkbg hover:bg-darkHover "
              } `}
            >
              <p
                className={` text-center font-bold text-sm leading-[17px] t ${
                  !dark ? "text-violet" : "text-white"
                }`}
              >
                Company Site
              </p>
            </div>
          </a>
        </div>
      </div>
      <section
        className={`mt-6 px-6 py-10 rounded-md md:mt-8 md:px-12 ${
          !dark ? "bg-white" : "bg-darkBlue"
        }`}
      >
        <div className="md:flex items-center">
          <div>
            <div className="flex  gap-3 ">
              <p className="text-base font-normal leading-5 text-darkGrey">
                {company?.postedAt}
              </p>
              <div className="w-1 h-1 rounded-[50%] mt-3 bg-darkGrey"></div>
              <p className="text-base font-normal leading-5 text-darkGrey">
                {company?.contract}
              </p>
            </div>
            <h1
              className={` md:text-start md:text-3xl md:leading-6 font-bold text-darkBlue mt-3 text-xl leading-6 ${
                !dark ? "text-darkBlue" : "text-white"
              }`}
            >
              {company?.position}
            </h1>
            <p className=" font-bold text-sm  mt-3 leading-[17px] text-violet ">
              {company?.location}
            </p>
          </div>
          <a href={company?.apply} className="md:ml-auto">
            <div className=" md:mt-0  mt-[54px] bg-violet rounded-md cursor-pointer hover:bg-lightViolet  px-[54px] py-4">
              <p className=" text-base text-center text-white leading-4 font-bold">
                Apply Now
              </p>
            </div>
          </a>
        </div>
        <p className="mt-8 font-normal text-base text-darkGrey">
          {company?.description}
        </p>
        <h2
          className={`font-bold text-darkBlue mt-10 text-xl leading-6 ${
            !dark ? "text-darkBlue" : "text-white"
          }`}
        >
          Requirements
        </h2>
        <p className="mt-7 font-normal text-base text-darkGrey">
          {company?.requirements.content}
        </p>
        <ul className=" flex flex-col gap-2 mt-8">
          {company?.requirements.items.map((item, index) => {
            return (
              <li key={index} className="grid grid-cols-[4px_auto] gap-8">
                <div className="w-1 h-1 rounded-[50%] mt-[10px] bg-violet"></div>
                <p className="font-normal text-base text-darkGrey">{item}</p>
              </li>
            );
          })}
        </ul>
        <h2
          className={`font-bold text-darkBlue mt-10 text-xl leading-6 ${
            !dark ? "text-darkBlue" : "text-white"
          }`}
        >
          What You Will Do
        </h2>
        <p className="mt-7 font-normal text-base text-darkGrey">
          {company?.role.content}
        </p>
        <ul className=" flex flex-col gap-2 mt-8">
          {company?.role.items.map((item, index) => {
            return (
              <li key={index} className="grid grid-cols-[4px_auto] gap-8">
                <p className="font-bold text-base text-violet leading-[26px]">
                  {index}
                </p>
                <p className="font-normal text-base text-darkGrey">{item}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <footer
        className={`desktop:px-[355px] md:px-10 p-6 w-full  absolute rounded-md left-0 bottom-0 md:flex md:justify-between md:items-center md:h-[96px] ${
          !dark ? "bg-white" : "bg-darkBlue"
        }`}
      >
        <div>
          <h1
            className={`hidden md:block  font-bold text-darkBlue mt-3 text-xl leading-6 ${
              !dark ? "text-darkBlue" : "text-white"
            }`}
          >
            {company?.position}
          </h1>
          <p className="hidden mt-3 md:block text-base font-normal leading-5 text-darkGrey">
            So Digital Inc.
          </p>
        </div>
        <a href={company?.apply}>
          <div className=" bg-violet hover:bg-lightViolet cursor-pointer rounded-md py-4 md:px-7">
            <p className=" text-base text-center text-white leading-4 font-bold">
              Apply Now
            </p>
          </div>
        </a>
      </footer>
    </main>
  );
};

export default Page;

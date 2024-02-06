import { Link } from "react-router-dom";
import { homeProps } from "../type";
import { useState } from "react";

const Home: React.FC<homeProps> = ({ data, dark, modal, setModal }) => {
  const [nameValue, setNameValue] = useState("");
  const [nameSubmit, setNameSubmit] = useState("");
  const [placeValue, setPlaceValue] = useState("");
  const [placeSubmit, setPlaceSubmit] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [submitfullTime, setSubmitfullTime] = useState(false);
  const [amount, setAmount] = useState(12);

  console.log(amount);
  const handlePlaceSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlaceSubmit(placeValue);
    setModal(false);
    setSubmitfullTime(fullTime);
    e.preventDefault();
    setNameSubmit(nameValue);
  };

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNameSubmit(nameValue);
  };

  const filteredData = data.filter((company) => {
    const filterName = company.position.toLowerCase().includes(nameSubmit);
    const filterPlace = company.location.toLowerCase() === placeSubmit;
    const filterTime = company.contract === "Full Time";
    if (placeSubmit !== "" && submitfullTime) {
      return filterName && filterPlace && filterTime;
    }
    if (submitfullTime) {
      return filterName && filterTime;
    }
    if (placeSubmit !== "" && !submitfullTime) {
      return filterName && filterPlace;
    }
    return filterName;
  });

  return (
    <>
      <main
        className={`px-6 pt-9 relative min-h-main pb-[62px] md:px-10 font-kumbr desktop:px-[165px] desktop:pt-11  ${
          !dark ? "bg-lightGrey" : "bg-midNight"
        }`}
      >
        <div className="md:flex md:relative md:z-50">
          <form className="  " onSubmit={handleNameSubmit}>
            <div
              className={` desktop:min-w-[464px]  relative z-30 rounded-md md:min-w-[222px] md:flex ${
                !dark ? "bg-lightGrey" : "bg-darkBlue"
              }`}
            >
              <input
                onChange={(e) => setNameValue(e.target.value)}
                type="text"
                value={nameValue}
                className={` desktop:pl-[72px] md:pl-16 outline-none border-none text-base leading-5 font-normal py-[32px] pl-6 h-20 w-full rounded-md md:rounded-tr-none md:rounded-br-none   ${
                  !dark ? "bg-white" : "bg-darkBlue"
                } ${dark ? "text-white" : "text-darkBlue"} `}
                placeholder="Filter by title…"
              />
              <img
                src="/assets/mobile/icon-filter.svg"
                className="absolute top-[30px] right-[88px] cursor-pointer md:hidden"
                onClick={() => setModal(!modal)}
              />
              <img
                src="/assets/desktop/icon-search.svg"
                className="hidden md:block absolute left-6 top-7 desktop:left-8"
              />
              <button className="w-[48px] h-12 bg-violet rounded-md md:hidden grid items-center justify-center absolute top-4 right-4 hover:bg-lightViolet">
                <img src="/assets/mobile/icon-search.svg" className="md:hi" />
              </button>
              <div className="hidden md:block bg-darkGrey md:w-[1px] md:h-auto "></div>
            </div>
          </form>
          <form className=" md:grow-1 " onSubmit={handlePlaceSubmmit}>
            <div
              className={`bg-white absolute z-50 left-6 right-6 top-[225px] rounded-md md:flex  md:rounded-tl-none md:rounded-bl-none ${
                !modal ? "hidden" : "block"
              } md:block md:static ${
                !dark ? "md:bg-white" : "md:bg-darkBlue"
              } `}
            >
              <div className=" desktop:min-w-[300px] flex items-center relative md:grow-1 md:min-w-[213px]">
                <input
                  value={placeValue}
                  onChange={(e) => setPlaceValue(e.target.value)}
                  type="text"
                  placeholder="Filter by location…"
                  className={`outline-none ml-[33px] p-6 w-full  ${
                    !dark ? "md:bg-white" : "md:bg-darkBlue"
                  }`}
                />
                <img
                  src="/assets/desktop/icon-location.svg"
                  className="absolute left-6 text-base font-normal"
                />
              </div>
              <div className="w-full h-[1px] bg-darkGrey md:w-[1px] md:h-auto "></div>
              <div className="  desktop:min-w-[346px] desktop:gap-[26px] desktop:justify-normal md:flex md:grow-1 md:min-w-[252px] md:h-20 justify-between md:py-4 md:pl-5 md:pr-4">
                <div className=" desktop:grow-2  flex mt-6 ml-6 items-center md:ml-0 md:mt-0 ">
                  <input
                    onClick={() => setFullTime(!fullTime)}
                    type="checkbox"
                    id="checkbox"
                    className="border-none w-6 h-6"
                  />
                  <label
                    htmlFor="checkbox"
                    className={`font-bold  text-base leading-6 ml-4  md:leading-4 ${
                      !dark ? "md:text-black" : "md:text-white"
                    }`}
                  >
                    Full Time{" "}
                    <span className="md:hidden desktop:inline-block">
                      Only{" "}
                    </span>
                  </label>
                </div>
                <button className=" desktop:ml-auto  desktop:min-w-[123px]  bg-violet hover:bg-lightViolet m-6 py-4 w-button font-bold text-base text-white rounded-md md:m-0 md:w-20 md:p-0 ">
                  <p className="text-center">Search</p>
                </button>
              </div>
            </div>
          </form>
        </div>
        <section className=" desktop:gap-x-[30px] desktop:gap-y-[65px] desktop:mt-[105px] desktop:grid-cols-[auto_auto_auto] mt-[57px] flex flex-col  gap-[49px] md:grid md:grid-cols-[auto_auto] md:mt-[70px] md:gap-x-[11px] md:gap-y-[65px]">
          {filteredData.slice(0, amount).map((item, index) => {
            return (
              <Link key={index} to={"/" + item.company}>
                <div
                  className={`pl-8  pb-9 pt-[49px] rounded-md relative  ${
                    !dark ? "bg-white " : "bg-darkBlue"
                  }`}
                >
                  <div
                    style={{ backgroundColor: item.logoBackground }}
                    className={`h-[50px] w-[50px] grid items-center justify-center rounded-xl absolute top-[-25px] `}
                  >
                    <img src={item.logo} />
                  </div>
                  <div className="flex  gap-3 mt-6">
                    <p className="text-base font-normal leading-5 text-darkGrey">
                      {item.postedAt}
                    </p>
                    <div className="w-1 h-1 rounded-[50%] mt-3 bg-darkGrey"></div>
                    <p className="text-base font-normal leading-5 text-darkGrey">
                      {item.contract}
                    </p>
                  </div>
                  <h1
                    className={`font-bold  mt-4 text-xl leading-6  hover:cursor-pointer hover:text-darkGrey ${
                      !dark ? "text-darkBlue " : "text-white"
                    }`}
                  >
                    {item.position}
                  </h1>
                  <p className="text-base font-normal leading-5 mt-[17px] text-darkGrey">
                    {item.company}
                  </p>
                  <p className=" mt-11 font-bold text-sm leading-[17px] text-violet ">
                    {item.location}
                  </p>
                </div>
              </Link>
            );
          })}
          <div className=" justify-self-center desktop:col-[1_/_4]  col-[1_/_3]">
            <button
              onClick={() => setAmount(data.length)}
              className={`bg-violet hover:bg-lightViolet px-[30px] cursor-pointer rounded-md py-4   ${
                amount == data.length ? " hidden" : "block"
              } ${filteredData.length <= 12 ? "hidden" : "block"}`}
            >
              <p className=" text-base text-center   text-white leading-4 font-bold">
                Load More
              </p>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

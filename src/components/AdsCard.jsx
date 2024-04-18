import { Carousel } from "@material-tailwind/react";
function AdsCard() {
  return (
    <div className="w-64 h-96">
      <Carousel className="rounded-xl w-64 h-64">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="w-64 h-64"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="w-64 h-64"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="w-64 h-64"
        />
      </Carousel>
      <div className="py-2 px-1">
        <div className="flex justify-between">
          <h1 className="font-semibold text-[14px]">Karachi,Pakistan</h1>
          <h1>★ 4.93</h1>
        </div>
        <h2 className="text-gray-600 text-[14px]">938 kilometer away</h2>
        <h2 className="text-gray-600 text-[14px]">16-2 Jun</h2>
        <h1 className=" text-[14px]">
          <span className="font-semibold">2000</span> night
        </h1>
      </div>
    </div>
  );
}

export default AdsCard;

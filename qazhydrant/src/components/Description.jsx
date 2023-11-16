const Description = () => {
  return (
    <div className="flex flex-col py-8 justify-center items-center contactbg px-4 sm:px-6 lg:px-8">
      <img src="graphic/logo.png" className="w-32 sm:w-40 lg:w-48 py-4" />
      <p className="text-center  text-lg sm:text-sm lg:text-base px-2 sm:px-4 lg:px-0">
        <span className="font-extrabold text-main">QazHydrant</span> enables
        firefighters to find the nearest hydrants by digitalizing fire hydrant
        locations:
      </p>
      <div className="w-full flex flex-col items-center my-4">
        <img
          src="images/screenshots.png"
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl drop-shadow-lg my-4"
        />
        <div className="pt-4 w-full">
          <p className="text-center text-xs sm:text-sm font-regular tracking-wider uppercase">
            Finalist of
          </p>
          <div className="flex flex-wrap justify-center space-x-16 items-center mt-2">
            <img src="graphic/sft.png" className="w-20 sm:w-32 lg:w-64 my-2" />
            <img src="graphic/hub.jpg" className="w-16 sm:w-24 lg:w-48 my-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

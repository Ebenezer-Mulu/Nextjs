import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <div className="container ">
        <h1 className="my-5 font-bold text-3xl">Choose a gallery</h1>
        <div className="items flex gap-12 ">
          <Link
            href="/portfolio/illustrations"
            className="border-2 border-gray-400 rounded-md relative h-h-250 w-w-250 flex flex-col justify-end"
          >
            <span className="absolute bottom-0 right-0 text-3xl font-bold">
              Illustration
            </span>
          </Link>

          <Link
            href="/portfolio/websites"
            className="border-2 border-gray-400 rounded-md relative h-h-250 w-w-250 flex flex-col justify-end"
          >
            <span className=" absolute bottom-0 right-0 text-3xl font-bold">
              Websites
            </span>
          </Link>
          <Link
            href="/portfolio/application"
            className="border-2 border-gray-400 rounded-md relative h-h-250 w-w-250 flex flex-col justify-end"
          >
            <span className=" absolute bottom-0 right-0 text-3xl font-bold">
              Application
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

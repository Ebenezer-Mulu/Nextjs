import Button from "../../components/Button/button";
import Image from "next/image";
import about from "public/about.jpeg";

const About = () => {
  return (
    <div className="">
      <div className="relative h-80 mt-10">
        <Image
          src={about}
          className="h-full object-cover filter grayscale  contrast-100"
        />

        <div className="absolute bottom-5 left-5">
          <h1 className="text-xl font-bold text-white">Digital StoryTellers</h1>
        </div>
      </div>

      <div className="mt-10 mb-20 flex justify-between gap-20">
        <div className=" flex-1">
          <h1 className="mb-6 font-bold text-2xl ">Who Are We?</h1>
          <p className="text-xl text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            ea! Eius sapiente adipisci delectus molestiae debitis nisi rem
            repellat. Aliquid quam molestias adipisci ad totam ducimus non ab
            nulla iure tenetur. Deleniti pariatur consequuntur officiis quidem
            aut? Magni ipsam eos natus debitis asperiores officia sunt cumque
            labore omnis. Inventore, ipsum.
          </p>
        </div>

        <div className="ml-5 flex-1">
          <h1 className="mb-6 font-bold text-2xl">What We Do?</h1>
          <p className="text-xl mb-10 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            voluptatem distinctio tempore excepturi delectus possimus commodi
            optio, quam consectetur maiores!
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;

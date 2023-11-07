import Image from "next/image";
import Hero from "public/hero.png";
import Button from "../components/Button/button";

export default function Home() {
  return (
    <div className="flex gap-20">
      <div className="flex-1 mt-24 flex flex-col gap-12">
        <h1 className="text-7xl bg-gradient-to-r  from-green-900 to-gray-300 bg-clip-text text-transparent font-bold">
          Better design for your digital products.
        </h1>
        <p className="text-xl">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1">
        <Image src={Hero} className="w-full  object-cover" />
      </div>
    </div>
  );
}

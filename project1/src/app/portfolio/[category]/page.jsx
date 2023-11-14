import Image from "next/image";
import Button from "../../../components/Button/button";
import image from "../../../../public/img.jpg";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category); //  folder name category

  return (
    <div className="container">
      <h1>{params.category}</h1>
      {data.map((item) => (
        <div className="flex gap-20 my-12 justify-between" key={item.id}>
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="justify-end text-4xl font-bold">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
            <Button url="#" text="See More" />
          </div>

          <div className="flex-1 h-96 relative">
            <Image src={image} className="h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

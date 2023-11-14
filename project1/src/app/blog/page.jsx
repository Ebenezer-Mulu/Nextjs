import Image from "next/image";
import Button from "../../components/Button/button";
import image from "../../../public/img.jpg";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts/", {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="flex my-12 gap-10"
          key={item.id}
        >
          <div className="h-48 relative">
            {/* <Image src={item.image} className="h-full w-96 object-cover" /> */}
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="justify-end text-4xl font-bold">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

import Image from "next/image";
import image from "../../../../public/img.jpg";
import user from "../../../../public/user.png";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="container">
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col">
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <p className="mt-5 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatem facilis omnis deleniti expedita perspiciatis alias nihil!
            Atque voluptates
          </p>
          <div className="flex mt-10 gap-5">
            <Image src={user} className="w-16 h-16 object-cover" />
            <p className="text-center mt-auto">John Doe</p>
          </div>
        </div>

        <div className="flex-1 h-h-250">
          <Image src={image} className="h-full object-cover" />
        </div>
      </div>

      <div className="mt-10">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          obcaecati, facilis at eligendi laborum et incidunt animi quo corporis
          veritatis ex earum doloribus vel ut soluta culpa debitis tenetur eum
          fugit ratione omnis aut! Ullam recusandae animi quos deleniti, ea id
          atque, omnis ducimus inventore soluta beatae molestias expedita harum
          minima perferendis mollitia, cumque labore aut neque. Dolorum,
          consequatur quia!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

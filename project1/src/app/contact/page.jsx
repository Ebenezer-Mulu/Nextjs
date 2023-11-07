import Image from "next/image";
import contact from "../../../public/contact.png";
import Button from "../../components/Button/button";

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold mt-7 mb-10 text-center">
        Let's Keep in Touch
      </h1>
      <div className="flex align-middle gap-48">
        <Image
          src={contact}
          className="flex-1 w-11 h-300 animate-move animate-duration-2 infinite ease-in-out alternate"
        />

        <form className="flex-1 flex flex-col gap-5">
          <input
            type="text"
            placeholder="name"
            className="p-2 bg-transparent border-2 border-gray-500 "
          />
          <input
            type="text"
            placeholder="email"
            className="p-2 bg-transparent border-2 border-gray-500"
          />
          <textarea
            placeholder="message"
            cols={30}
            rows={10}
            className="p-2 bg-transparent border-2 border-gray-500 "
          />
          <Button url="/" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

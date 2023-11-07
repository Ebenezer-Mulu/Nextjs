import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between mt-12">
      <div>&copy;2023 Lamamia. All rights reserved</div>

      <div className="flex gap-3">
        <Image
          src="/1.png"
          alt="facebook"
          width={15}
          height={10}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/2.png"
          alt="facebook"
          width={15}
          height={10}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/3.png"
          alt="facebook"
          width={15}
          height={10}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/4.png"
          alt="facebook"
          width={15}
          height={10}
          className="opacity-60 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;

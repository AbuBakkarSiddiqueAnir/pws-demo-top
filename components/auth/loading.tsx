import Image from "next/image";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
}

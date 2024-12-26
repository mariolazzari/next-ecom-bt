import Image from "next/image";
import loader from "@/assets/loader.gif";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Image src={loader} width={150} height={150} alt="loading..." />
    </div>
  );
}

export default LoadingPage;

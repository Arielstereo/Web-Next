import Image from "next/image";

const Hero = ({url}) => {
  return (
    <div>
      <Image
        className="w-full h-[600px] object-cover"
        src={url}
        alt="photo"
        width={800}
        height={800}
      />
    </div>
  )
}

export default Hero
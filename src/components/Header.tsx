import Image from "next/image";
import Battery from "@/public/icons/battery.svg";
import Wifi from "@/public/icons/wifi.svg";

export default function Header() {
  return (
    <header
      className="flex flex-row h-fit py-[20px] px-[30px] border-b border-b-[6px] justify-between"
      style={{ borderBottomColor: "var(--color-border)" }}
    >
      {/* left container */}
      <div className="flex flex-row gap-3 items-center">
        <p>vina&apos;s portfolio</p>
      </div>

      {/* right container */}
      <div className="flex flex-row gap-3 items-center">
        <Image src={Battery} alt="battery icon" />
        <Image src={Wifi} alt="battery icon" />
        <p>fri, aug 1</p>
        <p>4:08pm</p>
      </div>
    </header>
  );
}

import Profile from "@/public/icons/profile.svg";
import Image from "next/image";

export default function AboutWindow() {
  return (
    <div className="flex flex-row gap-[68px] items-center justify-center p-8">
      <Image src={Profile} alt="temporary profile icon" />
      <div className="flex flex-col gap-4">
        <h1>hi, i&apos;m <span style={{ color: "var(--color-primary)" }}>vina</span></h1>
        <p>
          i&apos;m a junior at tufts university studying CS
          <br />
          currently a software developer @ freebites
        </p>
        <p>
          passionate about the intersection of
          <br />
          coding and design!
        </p>
      </div>
    </div>
  );
}
import Profile from "@/public/icons/profile.svg";
import Image from "next/image";

export default function AboutWindow() {
    return (
        <div className="flex bg-red-50 items-center">
            <Image
                src={Profile}
                alt="temporary profile icon"
            />
        </div>
    );
}
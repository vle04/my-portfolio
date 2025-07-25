"use client"

import Image from "next/image";
import BunnyAvatar from "@/public/images/bunny-avatar.png";

export default function Hero() {
    return (
        <div className="flex flex-row justify-center items-center gap-[70px]">
            <Image
                src={BunnyAvatar}
                alt="vina head with a bunny hat"
                width={250}
                height={350}
            />

            {/* text container */}
            <div>
                <h1>hi, i'm vina</h1>
                <p>i'm a junior at tufts university studying computer science!</p>
                <p>currently a software developer @ freebites</p>
                <p>passionate about the intersection of design and tech :D</p>
            </div>
        </div>
    );
}
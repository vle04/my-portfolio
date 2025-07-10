'use client';

import { useState } from "react";
import Image from "next/image";

export default function ProfileCard() {
    // state for the profile image
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-row items-center justify-between border-4 border-gray-400 rounded-xl max-w-4xl gap-6 p-6" 
            style={{ borderColor: "var(--color-border"}}
        >
            <div className="relative w-[250px] h-[250px] flex items-center justify-center flex-shrink-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={isHovered ? "/vina-avatar-blink.png": "/vina-avatar.png"}
                    alt="hand-drawn avatar of vina"
                    width={220}
                    height={200}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
                />
            </div>
            <div className="flex flex-col">
                <h1 className="text-3xl">hi, i&apos;m vina</h1>
                <p>i&apos;m a rising junior studying computer science at tufts university.</p>
                <p>this portfolio is currently under construction, check back later!</p>
                <Image
                    src={"/stars.png"}
                    alt="star icons"
                    width={220}
                    height={200}
                    className="mt-4"
                />
            </div>
        </div>
    );
}
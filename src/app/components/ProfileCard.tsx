'use client';

// import { useState } from "react";
import Image from "next/image";

export default function ProfileCard() {
    // state for the profile image
    // const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-row border border-gray-200 max-w-6xl max-h-1vh text-center p-8 bg-red-50"
        >
            <Image
                src={"/vina-avatar.png"}
                alt="self-drawn avatar"
                width={220}
                height={200}
            />
            <div>
                <h1>hi, i&apos;m vina</h1>
                <text>i&apos;m an aspiring software developer studing computer science at tufts university!</text>
                {/* vina&apos;s portfolio, under construction haha */}
            </div>
        </div>
    );
}
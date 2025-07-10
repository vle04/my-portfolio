'use client';

// import { useState } from "react";

export default function ProfileCard() {
    // state for the profile image
    // const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-row border border-gray-200 max-w-6xl max-h-1vh text-center p-8 bg-red-50"
        >
            <img src={"/vina-avatar.png"} className="w-55"></img>
            <div>
                <h1>hi, i'm vina</h1>
                <text>i'm an aspiring software developer studing computer science at tufts university!</text>
                {/* vina&apos;s portfolio, under construction haha */}
            </div>
        </div>
    );
}
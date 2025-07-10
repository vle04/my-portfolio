'use client';

import { useState } from "react";

export default function ProfileCard() {
    // state for the profile image
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="bg-white border border-gray-200 max-w-xs text-center p-8"
        >
            vina&apos;s portfolio, under construction haha
        </div>
    );
}
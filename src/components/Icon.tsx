"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

interface IconProps {
    name: string;
    icon: IconType;
}

export default function Icon({ name, icon }: IconProps) {

    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    }

    const handleMouseLeave = () => {
        setShowTooltip(false);
    }
    
    return (
        <div 
            className="flex flex-col items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {icon({ className: "h-6 w-6" })}
            {showTooltip && 
                <motion.div 
                    className="text-xs text-center absolute top-40 p-1 bg-[#28282b93] rounded-md"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 0.15 }}
                >
                {name}
                </motion.div>
            }
        </div>
    )
}
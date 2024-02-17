"use client"


import { IconType } from "react-icons";
import {
    FaExternalLinkAlt,
} from "react-icons/fa";

interface LinkProps {
    name: string;
    url: string;
    icon: IconType;
}

export default function Link({ name, url, icon }: LinkProps) {

    
    return (
       <a className="flex justify-between items-center gap-4 w-36 bg-transparent rounded-md cursor-pointer" href={url}>
            <div className="flex justify-start items-center gap-2">
                {icon({ className: "h-6 w-6" })}
                <p>{name}</p>
            </div>
            <FaExternalLinkAlt className="h-3 w-3"/>
       </a>
    )
}
"use client"

import { motion } from "framer-motion";
import getLanyard from "../data/websocket";

import Link from "./Link";
import Icon from "./Icon";
import {
    SiVisualstudiocode,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiMongoose,
    SiMongodb,
    SiGithub
} from "react-icons/si";

const getAssetUrl = (appId: string, asset: string) =>
    asset.startsWith('mp:external') 
    ? `https://media.discordapp.net/${asset.replace('mp:', '')}`
    : `https://cdn.discordapp.com/app-assets/${appId}/${asset}.png`;

const UserCard = () => {

	const userData = getLanyard();

    const avatar: string = `https://cdn.discordapp.com/avatars/${userData?.discord_user.id}/${userData?.discord_user.avatar}`
    let activity = userData?.activities?.find((x) => x.type === 0);

  	return (
        <>
            {userData ? (
                <>
                    <div className="flex flex-col rounded-md max-w-xl w-full mx-auto justify-center items-start bg-[#28282b4f] backdrop-blur-2xl p-8">
                        <div className="flex justify-center items-center gap-4">
                            <img className="w-24 rounded-full" src={avatar}/>
                            <div className="flex flex-col justify-center items-start leading-3">
                                <p className="text-xl font-bold text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">{userData.discord_user.display_name}</p>
                                <p className="text-l text-[#b8b8b8] drop-shadow-xl shadow-[#5c5c5c]">@{userData.discord_user.username}</p>     
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-xl text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">Frontend dev</p>
                            <p className="text-l text-[#dfdfdf] drop-shadow-xl shadow-[#5c5c5c]">Technologies I use</p>
                            <div className="flex items-center justify-start gap-2 mt-2">
                                <Icon name="VS Code" icon={SiVisualstudiocode} />
                                <Icon name="Python" icon={SiPython} />
                                <Icon name="JavaScript" icon={SiJavascript} />
                                <Icon name="TypeScript" icon={SiTypescript} />
                                <Icon name="React" icon={SiReact} />
                                <Icon name="Next.js" icon={SiNextdotjs} />
                                <Icon name="Mongoose" icon={SiMongoose} />
                                <Icon name="MongoDB" icon={SiMongodb} />
                            </div>
                        </div>
                        <div className="mt-6 flex flex-col gap-2">
                            <Link name="GitHub" url="https://github.com/ustalam" icon={SiGithub} />
                        </div>
                    </div>
                    {userData?.listening_to_spotify ? (	
                            <div className="flex mt-5 flex-col rounded-md max-w-xl w-full mx-auto justify-center items-start bg-[#28282b4f] backdrop-blur-2xl p-8">
                                <div className="flex justify-center items-center gap-4">
                                    <img className="w-16 rounded-md" src={userData.spotify.album_art_url}/>
                                    <div className="flex flex-col justify-center items-start leading-5">
                                        <p className="text-l font-bold text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">Listening to {userData.spotify.song}</p>
                                        <p className="text-l text-[#b8b8b8] drop-shadow-xl shadow-[#5c5c5c]">by {userData.spotify.artist}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                            </>
                        )
                    }
                    {activity ? (
                         <div className="flex mt-5 flex-col rounded-md max-w-xl w-full mx-auto justify-center items-start bg-[#28282b4f] backdrop-blur-2xl p-8">
                            <div className="flex justify-center items-center gap-4">
                                <img className="w-16 rounded-md" src={activity.assets?.large_image
                        		? getAssetUrl(activity.application_id!, activity.assets?.large_image)
                        		: `https://dcdn.dstn.to/app-icons/${activity.application_id}`}/>
                                <div className="flex flex-col justify-center items-start leading-5">
                                    <p className="text-l font-bold text-[#ffffff] drop-shadow-xl shadow-[#5c5c5c]">{activity.name}</p>
                                    <p className="text-l text-[#b8b8b8] drop-shadow-xl shadow-[#5c5c5c]">{activity.details}</p>
                                    <p className="text-l text-[#b3b3b3] drop-shadow-xl shadow-[#5c5c5c]">{activity.state}</p>
                                </div>
                            </div>
                        </div>
                    ): (
                        <>
                        </>
                    )}
                </>
            ) : (
                <motion.div 
                    className=""
                    animate={{ rotate: 180, scale: 1 }}
                    >
                    <svg width="38" className="" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
					    <g fill="none" fillRule="evenodd">
					      	<g transform="translate(1 1)" strokeWidth="2">
					    		<circle strokeOpacity=".5" cx="18" cy="18" r="18" />
					    		<path d="M36 18c0-9.94-8.06-18-18-18" />
					      	</g>
					    </g>
			  	    </svg>
                </motion.div>
            )}
        </>
  	);
}

export default UserCard;
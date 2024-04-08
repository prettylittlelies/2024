import UserCard from "@/components/UserCard";

export default function Home() {
  	return (
    	<main className="h-screen">
			<div className="fixed size-full bg-fill bg-cover" style={{backgroundImage: "url(https://r2-bios.e-z.host/d9fc6be5-2bee-4f58-a979-7bf0902eea54/e5orhiufl3.jpg)", filter: "blur(0.5px)", transform: "scale(1.025)"}}/>
			<div className="flex flex-col items-center justify-center h-screen w-full p-4">
				<UserCard />
			</div>
    	</main>
  	);
}

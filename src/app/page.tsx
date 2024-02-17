import UserCard from "@/components/UserCard";

export default function Home() {
  	return (
    	<main className="h-screen">
			<div className="fixed size-full bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('/bg.jpg')", filter: "blur(2px)", transform: "scale(1.025)"}}/>
			<div className="flex flex-col items-center justify-center h-screen w-full p-4">
				<UserCard />
			</div>
    	</main>
  	);
}

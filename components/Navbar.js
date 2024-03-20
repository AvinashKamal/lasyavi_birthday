import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="flex justify-between max-w-7xl mx-auto p-4">
				<Image src={"/next.svg"} alt={'Logo'} width={100} height={50}  />
				<nav className={'flex gap-4 items-center'}>
					<Link href={'/'}>Home</Link>
				</nav>
			</div>
		</>
	)
}

export default Navbar
'use client';

import Image from "next/image";
import Countdown from "@/components/Countdown";
import ImageGallery from "@/components/ImageGallery";
import { motion } from 'framer-motion'
import {useState} from "react";

const images = [
	{
		src: '/gallery-1.jpg',
		alt: 'Image 1'
	},
	{
		src: '/gallery-2.jpg',
		alt: 'Image 2'
	},
	{
		src: '/gallery-3.jpg',
		alt: 'Image 3'
	},
	{
		src: '/gallery-2.jpg',
		alt: 'Image 4'
	},
	{
		src: '/gallery-3.jpg',
		alt: 'Image 5'
	},
	{
		src: '/gallery-1.jpg',
		alt: 'Image 6'
	},
	{
		src: '/gallery-3.jpg',
		alt: 'Image 7'
	},
	{
		src: '/gallery-2.jpg',
		alt: 'Image 8'
	},
	{
		src: '/gallery-1.jpg',
		alt: 'Image 9'
	}
]

export default function Home() {
	const targetDate = new Date('2024-03-24');
	const [isBGVisible, setIsBGVisible] = useState(false);
	return (
		<>
			<section className={'bg-gradient-to-r from-[#1E0074] to-[#1E009F] min-h-screen p-4 relative overflow-hidden'}>
				<div className="bg-pattern absolute top-0 left-0 right-0 bottom-0 z-0"/>
				<div className={'hero max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative'}>
					<motion.h1
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className={'text-[48px] md:text-[64px] lg:text-[96px] text-center lg:text-left text-white z-50'}
					>
						Laasyavi's 1st Birthday
					</motion.h1>

					<motion.img
						className={'hero-bg-1 absolute bottom-0 md:right-10 md:bottom-[unset] z-20'}
						src={'/bg-1.svg'}
						alt={'Hero Image BG'}
						width={500}
						height={500}
						initial={{ opacity: 0, x: 100 }} // Slide in from the right
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						onLoad={() => {
							console.log('loaded');
							setIsBGVisible(true)
						}}
					/>
					{/*{isBGVisible && (*/}
						<motion.img
							src={'/hero-img.png'}
							alt={'Laasyavi'}
							width={600}
							height={600}
							className={'z-50'}
							initial={{ opacity: 0, y: -100 }} // Slide in from the left
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						/>
					{/*)}*/}
				</div>
			</section>
			<div className="gallery relative overflow-hidden p-4 py-8">
				<div className="border-bg-1-wrapper absolute bottom-0 left-0">
					<div className={'border-bg-circle-1'}/>
				</div>
				<div className="border-bg-2-wrapper absolute top-0 right-0">
					<div className={'border-bg-circle-2'}/>
				</div>
				<div className={'max-w-7xl mx-auto relative'}>
					<h1 className={'text-center text-7xl mb-3'}>Gallery</h1>
					{/*<h3 className={'text-center text-3xl'}></h3>*/}
					<div className={"md:max-w-[70%] mx-auto mb-5"}>
						<ImageGallery images={images}/>
					</div>
				</div>
			</div>
			<div className="timer bg-gradient-to-r from-[#1E0074] to-[#1E009F] relative overflow-hidden">
				<div
					className="bg-pattern absolute top-0 left-0 right-0 bottom-0 z-0"
				/>
				<div
					className="border-bg absolute top-0 left-0"
				/>
				<div className="border-bg-2 absolute bottom-0 right-0"/>
				<div className="border-bg-3 absolute bottom-0 left-0"/>
				<div className={'max-w-7xl mx-auto p-4 py-16 relative flex flex-col items-center gap-4'}>
					<h1 className={'text-[36px] text-center mb-3 text-white'}>You are invited</h1>
					<p className={'text-center md:max-w-[60%] mx-auto mb-5 text-white'}>Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Consectetur dicta dolorem eligendi facere
						mollitia. Debitis fuga inventore itaque iusto mollitia pariatur, quae reiciendis repellendus saepe sed, unde
						veniam vero voluptatibus.</p>
					<Countdown targetDate={targetDate}/>
				</div>
			</div>
			<div className={'about'}>
				<div className={'max-w-7xl mx-auto p-4 py-16 relative flex flex-col gap-24'}>
					<div
						className="about-section-1 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center justify-center">
						<Image src={'/exp-image.jpg'} alt={'About frame'} width={500} height={500}/>
						<div className="about-content">
							<h1 className={'text-7xl mb-3 text-center md:text-left'}>Our Experience</h1>
							<p className={'mb-5 text-center md:text-left'}>
								This past year with Laasyavi has been a whirlwind of wonder. We can hardly believe it's been twelve months since we first held her tiny hand in ours. The journey of parenthood has been filled with sleepless nights, overflowing hearts, and a love that grows stronger with each passing day.
							</p>
							<p className={'mb-5 text-center md:text-left'}>
								Watching Laasyavi explore the world, learn new things, and develop her own little personality has been the most incredible adventure. We feel incredibly blessed to be her parents and can't wait to see what the next year holds!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="party-venue bg-gradient-to-r from-[#1E0074] to-[#1E009F] relative">
				<div
					className="bg-pattern absolute top-0 left-0 right-0 bottom-0 z-0"
				/>
				<div className={'max-w-7xl mx-auto p-4 py-16 relative flex flex-col gap-4'}>
					<h1 className={'text-7xl text-center mb-3 text-white'}>Party Venue</h1>
					<p className={'text-center md:max-w-[60%]  mx-auto mb-5 text-white'}>Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Consectetur dicta dolorem eligendi facere
						mollitia. Debitis fuga inventore itaque iusto mollitia pariatur, quae reiciendis repellendus saepe sed, unde
						veniam vero voluptatibus.
					</p>
					<div className="location-info flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 items-center mt-5">
						<Image
							src={'/venue.svg'}
							alt={'Location'}
							width={500}
							height={500}
						/>
						<div className="location-content relative text-center lg:text-left">
							<h1 className={'text-[48px] md:text-[64px] lg:text-[96px] mb-3 text-white'}>Nandana Banquet Hall</h1>
							<p className={'mb-8 md:max-w-[60%] md:mx-auto text-white'}>S.R Plaza, X" road, opposite Kakatiya
								University - SDLCE, Kakatiya University, Hanamkonda, Telangana 506009</p>
							<a href="https://maps.app.goo.gl/HKsiGc7Ks5oPuTR7A" target="_blank" rel="noreferrer"
								 className={' mt-4 text-[#1C3676] text-2xl text-center md:text-left py-2 px-4 bg-white font-600 rounded-md'}>Get
								Direction</a>
						</div>
					</div>
				</div>
			</div>
			<footer className={'footer relative overflow-hidden'}>
				<div className="border-bg-1-wrapper absolute bottom-0 left-0 z-20">
					<div className={'border-bg-circle-1'}/>
				</div>
				<div className="border-bg-2-wrapper absolute top-0 right-0 z-20">
					<div className={'border-bg-circle-2'}/>
				</div>
				<div className={'max-w-7xl relative mx-auto p-4 py-16 z-50'}>
					<h1 className={'text-7xl text-center mb-5'}>Contact Us</h1>
					<div className="contact grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-12 md:gap-8 lg:gap-4">
						<div className="info text-[#1C3676] flex flex-col gap-3 items-center">
							<h1 className={'text-4xl mb-3'}>Get in touch</h1>
								<a href={'tel:+91 984 222 2222'} className={'text-[#1C3676] text-2xl decoration-2 underline'}>Sahith: +91 984
									222 2222</a>

								<a href={'tel:+91 984 222 2222'} className={'text-[#1C3676] text-2xl decoration-2 underline'}>Ravali: +91 984
									222 2222</a>
						</div>
						<div className="party-time text-[#1C3676] flex flex-col gap-3 items-center">
							<h1 className={'text-4xl mb-3'}>Party time</h1>
							<h3 className={'text-2xl mb-3 font-bold'}>Sunday, 24 March, 2024</h3>
							<p className={'text-xl font-bold'}>06:00 PM - After</p>
						</div>
						<div className="party-venue text-[#1C3676] flex flex-col gap-3 items-center">
							<h1 className={'text-4xl mb-3'}>Party venue</h1>
							<h3 className={'text-2xl mb-3 font-bold'}>Nandana Banquet Hall</h3>
							<p className={'text-xl font-bold text-center'}>S.Rة, X" road, opposite Kakatiya University - SDLCE,
								Kakatiya University, Hanamkonda, Telangana 506009</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

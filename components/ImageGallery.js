'use client';

import React, {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';

const ImageGallery = ({images}) => {
	const [isDesktop, setIsDesktop] = useState(false);
	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};

	// const visible = (index) => ();

	const carouselSettings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<>
			<div className="py-8 max-w-[1000px] md:max-w-[80%] mx-auto relative">
				<Slider
					ref={slider => {
						sliderRef = slider;
					}}
					{...carouselSettings}
				>
					{images.map((image, index) => (
						<div key={index} className={'w-full rounded-2xl'}>
							<Image
								src={image.src}
								alt={image.alt}
								className="w-full h-full rounded-2xl object-contain aspect-[4/3]"
								width={200}
								height={200}
								fetchPriority={'high'}
							/>
						</div>
					))}
				</Slider>
				<ChevronLeft
					onClick={previous}
					sx={{
						fontSize: '4rem',
						color: '#1E0074',
					}}
					className={'absolute bottom-0 left-0 z-50'}
				/>
				<ChevronRight
					onClick={next}
					sx={{
						fontSize: '4rem',
						color: '#1E0074',
					}}
					className={'absolute bottom-0 right-0 z-50'}
				/>
			</div>
		</>
	);
};
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import Image from "next/image";

export default ImageGallery;

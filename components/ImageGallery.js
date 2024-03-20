'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageGallery = ({ images }) => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 768px)');
		setIsDesktop(mediaQuery.matches);
		mediaQuery.addEventListener('change', (e) => setIsDesktop(e.matches));
	}, []);

	const carouselSettings = {
		dots: false,
		// infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 3000,
		arrows: true,
	};

	return (
		<div className="py-8">
			{isDesktop ? (
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
					{images.map((image, index) => (
						<img src={image.src} alt={image.alt} key={index} className="w-full rounded-2xl" />
					))}
				</div>
			) : (
				<Slider {...carouselSettings}>
					{images.map((image, index) => (
						<div key={index} className={'rounded-lg p-4'}>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full rounded-2xl"
								width={300}
								height={300}
							/>
						</div>
					))}
				</Slider>
			)}
		</div>
	);
};

export default ImageGallery;

'use client';

import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
	const [timeRemaining, setTimeRemaining] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	useEffect(() => {
		const intervalId = setInterval(() => {
			const now = new Date().getTime();
			const distance = targetDate.getTime() - now;

			if (distance >= 0) {
				setTimeRemaining({
					days: Math.floor(distance / (1000 * 60 * 60 * 24)),
					hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
					minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((distance % (1000 * 60)) / 1000)
				});
			} else {
				clearInterval(intervalId); // Stop the timer when it reaches 0
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [targetDate]);

	return (
		<div className="countdown-timer flex justify-center items-center gap-5">
			{/*<div className={'timer-card'}>*/}
				<h2 className={'text-[28px] text-center md:text-4xl text-white'}>{timeRemaining?.days <10 && '0'}{timeRemaining.days} <span className={'text-[18px] md:text-2xl'}>Days</span></h2>
				<h2 className={'text-[28px] text-center md:text-4xl text-white'}>{timeRemaining?.hours <10 && '0'}{timeRemaining.hours} <span className={'text-[18px] md:text-2xl'}>hours</span></h2>
				<h2 className={'text-[28px] text-center md:text-4xl text-white'}>{timeRemaining?.minutes <10 && '0'}{timeRemaining.minutes} <span className={'text-[18px] md:text-2xl'}>minutes</span></h2>
				<h2 className={'text-[28px] text-center md:text-4xl text-white'}>{timeRemaining?.seconds <10 && '0'}{timeRemaining.seconds} <span className={'text-[18px] md:text-2xl'}>seconds</span></h2>
		</div>
	);
}

export default CountdownTimer;
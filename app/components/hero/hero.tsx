'use client';

import { useTheme } from 'next-themes';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { merryWeather } from '../../fonts';
import { AtSignIcon } from '../layouts/icons/at-sign-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import { XIcon } from '../layouts/icons/x-icon';
import LightRays from '../light-rays/LightRays';

export default function Hero() {
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Get the current theme (resolved with system theme if using system preference)
	const currentTheme = mounted ? theme || systemTheme : 'dark';

	// Light mode uses warm orange, dark mode uses cyan
	const raysColor = currentTheme === 'light' ? '#ff8c00' : '#00ffff';

	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			{mounted && (
				<LightRays
					raysOrigin='top-center'
					raysColor={raysColor}
					raysSpeed={1.5}
					lightSpread={0.8}
					rayLength={1.2}
					followMouse={true}
					mouseInfluence={0.1}
					noiseAmount={0.1}
					distortion={0.05}
				/>
			)}
			<div
				className={classNames('relative min-h-svh', merryWeather.className)}
			>
					<div className='absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 lg:ml-14'>
						<h1 className='text-2xl font-medium md:mr-4 md:text-4xl'>
						I&apos;m Theodhore - a passionate{' '}
						<span className='font-bold'>Fullstack Web Developer</span> and a
						<span className='italic border-b border-b-primary-500'> dedicated student</span> in my 6th
						semester.
						</h1>
						<section className='relative z-10'>
							<p className='text-base text-justify'>
							I&apos;m deeply passionate about crafting beautiful and functional web
							experiences. Currently, I&apos;m actively exploring the Web3 ecosystem
							and diving into decentralized technologies. Balancing my studies in
							semester 6 with my development journey, I&apos;m constantly pushing
							the boundaries of what&apos;s possible on the web. I&apos;m seeking
								new challenges, collaborations, and opportunities to learn and grow
								as a developer.
							</p>
						</section>
						<section className='relative z-10 flex space-x-4 items-center text-sm'>
							<div>
								<p>More about me: </p>
								<div className='flex -ml-2'>
									<Link
										href='https://www.linkedin.com/in/theodhore-riyanto/'
										target='_blank'
										rel='noreferrer'
										aria-label='linkedin'
										data-skip-splash-cursor
									>
										<LinkedinIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://github.com/theodhorex'
										target='_blank'
										rel='noreferrer'
										aria-label='github'
										data-skip-splash-cursor
									>
										<GithubIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://x.com/0xnanode'
										target='_blank'
										rel='noreferrer'
										aria-label='twitter'
										data-skip-splash-cursor
									>
										<XIcon className='h-9 w-9' />
									</Link>
									<Link
										href='mailto:theodhore.dev@gmail.com'
										aria-label='email'
										rel='noreferrer'
										data-skip-splash-cursor
									>
										<AtSignIcon className='h-9 w-9' />
									</Link>
								</div>
							</div>
							<div className='h-14 border-l border-gray-300' />
							<div
								className='flex flex-wrap space-x-3 space-y-1'
								data-skip-splash-cursor
							>
								<Link href='/projects'>/projects</Link>
								<Link href='/thoughts'>/thoughts</Link>
								<Link href='/uses'>/uses</Link>
								<Link href='/stats'>/stats</Link>
							</div>
						</section>
					</div>
				</div>
			</main>
		);
	}

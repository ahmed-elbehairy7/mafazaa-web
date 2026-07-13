"use client";

import React from "react";
import Image from "next/image";

export default function AppDownloadSection() {
	const apkUrl = "https://github.com/mafazaa-org/app/releases/download/v2/app-release.apk";

	return (
		<section className="relative py-24 px-6 md:px-12 lg:px-32 flex flex-col items-center justify-center overflow-hidden bg-dark-one/20">
			{/* Inline Styles for Custom 3D Floating Animations */}
			<style jsx global>{`
				@keyframes phoneFloat {
					0%, 100% {
						transform: rotateX(12deg) rotateY(-20deg) rotateZ(3deg) translateY(0px);
					}
					50% {
						transform: rotateX(12deg) rotateY(-20deg) rotateZ(3deg) translateY(-22px);
					}
				}
				@keyframes shadowScale {
					0%, 100% {
						transform: translateX(-50%) scale(0.9);
						opacity: 0.5;
					}
					50% {
						transform: translateX(-50%) scale(0.7);
						opacity: 0.25;
					}
				}
				.animate-phone-3d {
					animation: phoneFloat 5s ease-in-out infinite;
					transform-style: preserve-3d;
				}
				.animate-shadow-3d {
					animation: shadowScale 5s ease-in-out infinite;
				}
			`}</style>

			{/* Background Halo Glows */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(24,202,211,0.08),_transparent_55%),_radial-gradient(circle_at_bottom_left,_rgba(96,20,140,0.12),_transparent_50%)]" />
			</div>

			<div className="relative mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 bg-clip-padding p-8 sm:p-12 md:p-16 shadow-2xl shadow-primary-color/20 backdrop-blur-xl">
				{/* Glowing decoration light */}
				<div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent-color/10 blur-3xl" />
				<div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-secondary-color/10 blur-3xl" />

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					
					{/* Text and Action Area */}
					<div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-right order-2 lg:order-1">
						{/* Accent Badge */}
						<div className="self-start mb-2 inline-flex items-center gap-2 rounded-full border border-accent-color/40 bg-accent-color/10 px-4 py-1.5 text-xs font-semibold text-bright-one">
							<span className="h-2 w-2 rounded-full bg-accent-color animate-pulse shadow-[0_0_12px_rgba(24,202,211,0.9)]" />
							تطبيق مفازا للهواتف الذكية
						</div>

						<h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-bright-one">
							تطبيقنا متاح الآن على الأندرويد <br />
							و الحمد لله
						</h2>

						{/* Action Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
							<a
								href={apkUrl}
								className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary-color to-secondary-color px-8 py-4 text-base font-bold text-bright-one shadow-lg shadow-primary-color/40 hover:opacity-95 hover:scale-105 hover:shadow-accent-color/20 focus:outline-none focus:ring-2 focus:ring-accent-color transition-all duration-300"
							>
								{/* Android Icon */}
								<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
									<path d="M17.523 15.3l1.816 3.146a.5.5 0 0 1-.183.683.499.499 0 0 1-.683-.183L16.64 15.77a10.024 10.024 0 0 1-4.64.98 10.024 10.024 0 0 1-4.64-.98l-1.83 3.176a.502.502 0 0 1-.683.183.5.5 0 0 1-.183-.683l1.816-3.146A9.972 9.972 0 0 1 2.25 8.75a.5.5 0 0 1 1 0 8.972 8.972 0 0 0 17.5 0 .5.5 0 0 1 1 0 9.972 9.972 0 0 1-4.227 6.55zM7.5 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm9 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
								</svg>
								تحميل مباشر للأندرويد (APK)
							</a>
						</div>
						<span className="text-xs text-bright-two/70 mt-2 block">
							تطبيق آمن ومعتمد • إصدار APK مباشر v2.0.0
						</span>
					</div>

					{/* 3D Phone Mockup Showcase */}
					<div className="lg:col-span-5 flex flex-col justify-center items-center h-[520px] relative order-1 lg:order-2">
						{/* Floating shadow beneath phone */}
						<div className="absolute bottom-2 left-1/2 w-48 h-5 bg-black/40 rounded-full blur-xl animate-shadow-3d transform -translate-x-1/2 pointer-events-none" />

						{/* Phone body */}
						<div className="relative w-[270px] h-[520px] rounded-[38px] bg-slate-900 border-[7px] border-slate-800 shadow-2xl animate-phone-3d overflow-hidden flex flex-col select-none group cursor-pointer hover:[animation-play-state:paused] transition-transform duration-300">
							
							{/* Glossy screen glare */}
							<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 pointer-events-none z-20" />
							
							{/* Top dynamic island camera notch */}
							<div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-2.5">
								<div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
								<div className="w-1.5 h-1.5 rounded-full bg-[#0d1b2a] ml-1.5 border border-slate-900" />
							</div>

							{/* App screenshot */}
							<div className="absolute inset-0 w-full h-full z-10">
								<Image
									src="/app-screenshot.png"
									alt="تطبيق مفازا"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}

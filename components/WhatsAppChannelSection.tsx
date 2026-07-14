"use client";

import React from "react";
import Image from "next/image";
import mafazaaLogo from "@/assets/الشعار/الشعار/3مفازا.png";

export default function WhatsAppChannelSection() {
	const whatsappUrl = "https://whatsapp.com/channel/0029Vb5NRuqLY6dCU3qeXO2i";

	return (
		<section className="relative py-24 px-6 md:px-12 lg:px-32 flex flex-col items-center justify-center overflow-hidden bg-dark-one/20">
			{/* Inline Styles for WhatsApp section specific animations */}
			<style jsx global>{`
				@keyframes floatCard {
					0%, 100% {
						transform: translateY(0px) rotate(1deg);
					}
					50% {
						transform: translateY(-15px) rotate(-1deg);
					}
				}
				@keyframes chatBubble1 {
					0%, 100% { transform: translateY(0px) scale(1); }
					50% { transform: translateY(-4px) scale(1.01); }
				}
				@keyframes chatBubble2 {
					0%, 100% { transform: translateY(0px) scale(1); }
					50% { transform: translateY(-6px) scale(1.01); }
				}
				.animate-float-card {
					animation: floatCard 6s ease-in-out infinite;
				}
				.animate-chat-1 {
					animation: chatBubble1 4s ease-in-out infinite;
				}
				.animate-chat-2 {
					animation: chatBubble2 4.5s ease-in-out infinite;
				}
			`}</style>

			{/* Background Halo Glows */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.08),_transparent_55%),_radial-gradient(circle_at_top_right,_rgba(13,48,158,0.12),_transparent_50%)]" />
			</div>

			<div className="relative mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-white/5 bg-clip-padding p-8 sm:p-12 md:p-16 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
				{/* Glowing decoration lights */}
				<div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl" />
				<div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-primary-color/10 blur-3xl" />

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					{/* Text and Action Area */}
					<div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-right order-2 lg:order-1">
						{/* Accent Badge */}
						<div className="self-start mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-bright-one">
							<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
							قناة الواتساب الرسمية
						</div>

						<h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-bright-one">
							تابع قناة الواتساب <br />
							<span className="text-emerald-400">لتصلك آخر التحديثات والدروس</span>
						</h2>

						<p className="text-base sm:text-lg text-bright-two leading-relaxed max-w-xl">
							انضم إلى قناتنا الرسمية على الواتساب لتلقي التحديثات الجديدة، والإعلانات الدعوية فور صدورها مباشرة على هاتفك.
						</p>

						{/* Action Button */}
						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-base font-bold text-bright-one shadow-lg shadow-emerald-500/30 hover:opacity-95 hover:scale-105 hover:shadow-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
							>
								{/* WhatsApp Icon */}
								<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
									<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.597-1.002-5.037-2.825-6.861-1.822-1.824-4.248-2.827-6.852-2.828-5.441 0-9.865 4.372-9.867 9.733-.001 1.761.469 3.479 1.36 4.98L2.093 21.91l4.554-1.756zM17.01 14.5c-.273-.137-1.62-.8-1.87-.893-.253-.09-.436-.137-.62.137-.183.273-.708.893-.867 1.077-.16.183-.318.206-.59.07-.272-.137-1.15-.425-2.19-1.355-.809-.723-1.356-1.617-1.515-1.89-.159-.272-.017-.42.12-.556.122-.122.272-.317.408-.477.136-.16.18-.272.272-.454.09-.18.045-.34-.022-.477-.068-.137-.62-1.49-.85-2.04-.223-.538-.45-.465-.62-.474-.16-.008-.343-.01-.527-.01-.18 0-.477.067-.727.34-.25.272-.953.93-1.953 2.27 0 1.338.975 2.628 1.11 2.81 1.15 1.547 2.519 2.5 3.823 3.066 1.093.475 2.084.59 2.87.472.877-.13 1.62-.65 1.848-1.25.228-.6.228-1.116.16-1.224-.07-.107-.253-.172-.527-.31z"/>
								</svg>
								اضغط هنا للانضمام
							</a>
						</div>
					</div>

					{/* 3D Floating Mockup Showcase */}
					<div className="lg:col-span-5 flex flex-col justify-center items-center h-[520px] relative order-1 lg:order-2">
						{/* WhatsApp Phone/Mockup Window */}
						<div className="relative w-[340px] rounded-3xl border border-white/10 bg-[#0b141a] shadow-2xl animate-float-card overflow-hidden flex flex-col select-none">
							
							{/* WhatsApp Top Header Bar */}
							<div className="bg-[#202c33] px-4 py-3 flex items-center justify-between text-right border-b border-[#2a3942]/50">
								<div className="flex items-center gap-3">
									<div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-[#111b21] flex items-center justify-center flex-shrink-0">
										<Image
											src={mafazaaLogo}
											alt="شعار مفازا"
											fill
											className="object-cover"
										/>
									</div>
									<div className="flex-1 text-right">
										<div className="flex items-center gap-1.5 justify-start">
											<h4 className="text-[#e9edef] font-bold text-sm leading-tight">مفازا | القناة الرسمية</h4>
											{/* Verified Badge */}
											<svg className="w-3.5 h-3.5 text-[#00a884] fill-current" viewBox="0 0 24 24">
												<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
											</svg>
										</div>
										<p className="text-[10px] text-[#8696a0]">٤,٥٢١ من المتابعين</p>
									</div>
								</div>
								
								{/* Top Right Actions */}
								<div className="flex items-center gap-3 text-[#aebac1]">
									<button className="hover:text-white transition-colors">
										<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
											<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
										</svg>
									</button>
									<a
										href={whatsappUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-1 rounded-full bg-[#00a884] text-[#111b21] text-xs font-bold hover:bg-[#00c99e] transition-colors"
									>
										متابعة
									</a>
								</div>
							</div>

							{/* Chat messages background with subtle WhatsApp grid pattern */}
							<div className="relative flex-1 p-4 space-y-6 min-h-[340px] bg-[#0b141a] overflow-y-auto" style={{
								backgroundImage: `radial-gradient(#1f2c34 1px, transparent 1px)`,
								backgroundSize: '16px 16px',
							}}>
								
								{/* Date separator */}
								<div className="flex justify-center my-2">
									<span className="text-[10px] text-[#8696a0] bg-[#182229] px-2.5 py-1 rounded-md">
										اليوم
									</span>
								</div>

								{/* Message 1 */}
								<div className="animate-chat-1 bg-[#202c33] rounded-2xl rounded-tr-none p-3 shadow-md max-w-[90%] relative ml-auto text-right">
									<p className="text-xs text-[#e9edef] leading-relaxed whitespace-pre-line">
										السلام عليكم ورحمة الله وبركاته. أهلاً بكم في قناة <span className="font-bold text-[#00a884]">مفازا</span> الرسمية. 🕊️
									</p>
									<div className="flex items-center justify-between mt-2">
										<span className="text-[9px] text-[#8696a0]">١٠:٠٠ ص</span>
									</div>
									
									{/* Reactions pill */}
									<div className="absolute -bottom-3 left-3 bg-[#1f2c34] border border-[#0b141a] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm text-[10px]">
										<span>👍</span>
										<span>❤️</span>
										<span className="text-[#8696a0] font-semibold text-[9px] ml-0.5">٤٢</span>
									</div>
								</div>

								{/* Message 2 */}
								<div className="animate-chat-2 bg-[#202c33] rounded-2xl rounded-tr-none p-3 shadow-md max-w-[92%] relative ml-auto text-right">
									{/* WhatsApp Link preview */}
									<div className="bg-[#111b21] rounded-lg border-r-4 border-[#00a884] p-2 mb-2 flex items-center justify-between gap-3 text-right">
										<div className="flex-1 min-w-0">
											<p className="text-xs font-semibold text-[#53bdeb] truncate">تطبيق مفازا للأندرويد</p>
											<p className="text-[10px] text-[#8696a0] truncate">تنزيل الإصدار الجديد المباشر</p>
											<p className="text-[9px] text-[#8696a0] truncate">mafazaa.com</p>
										</div>
										<div className="relative w-10 h-10 rounded bg-[#1f2c34] overflow-hidden flex-shrink-0">
											<Image
												src={mafazaaLogo}
												alt="شعار مفازا"
												fill
												className="object-contain p-1"
											/>
										</div>
									</div>

									<p className="text-xs text-[#e9edef] leading-relaxed whitespace-pre-line">
										تم إطلاق التحديث الجديد للمنهج والتطبيق المباشر. 📱
										{"\n\n"}
										نسعى لبناء جيل يعتز بدينه ويسير على خطى الصحابة الكرام. تابعونا لمعرفة آخر التحديثات وتنزيل الإصدارات الجديدة أولاً بأول.
									</p>
									<div className="flex items-center justify-between mt-2">
										<span className="text-[9px] text-[#8696a0]">١٠:٠٥ ص</span>
									</div>

									{/* Reactions pill */}
									<div className="absolute -bottom-3 left-3 bg-[#1f2c34] border border-[#0b141a] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm text-[10px]">
										<span>👍</span>
										<span>🔥</span>
										<span>❤️</span>
										<span className="text-[#8696a0] font-semibold text-[9px] ml-0.5">١٤٥</span>
									</div>
								</div>

							</div>

							{/* Chat Bottom Action (Mute/Join status bar) */}
							<div className="bg-[#1f2c34] px-4 py-3.5 text-center border-t border-[#2a3942]/50">
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs font-bold text-[#00a884] hover:text-[#00c99e] uppercase tracking-wider block transition-colors"
								>
									عرض القناة في واتساب
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

"use client";

import HeroSection from "@/components/HeroSection";
import type { HeroSectionProps } from "@/types/index";
import "./globals.css";

export default function Home() {
	const heroData: HeroSectionProps = {
		textColor: "#f2f2f2",
		description:"نسعى لبناء مجتمع أقرب ما يكون من جيل الصحابة رضوان الله عليهم",
		buttons: [],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "مفازا",
						url: "https://mafazaa.com",
						logo: "https://mafazaa.com/logo.png",
						description:
							"مشروع دعوي إسلامي يهدف إلى خدمة الإسلام والمسلمين. إن الله ابتعثنا لنخرج العباد من عبادة العباد إلى عبادة رب العباد، ومن ضيق الدنيا إلى سعة الدنيا والآخرة، ومن جور الأديان إلى عدل الإسلام.",
						mission:
							"خدمة الإسلام والمسلمين من خلال مشاريع دعوية ومحتوى إسلامي هادف",
						sameAs: [
							"https://facebook.com/mafazaa.unite",
							"https://youtube.com/@mafazaa_official",
							"https://github.com/mafazaa-org/",
						],
						contactPoint: {
							"@type": "ContactPoint",
							email: "support@mafazaa.com",
							contactType: "دعم فني",
						},
					}),
				}}
			/>
			<main dir="rtl" className="min-h-screen bg-dark-one pb-16">
				<HeroSection {...heroData} />

				{/* Video Lectures Section */}
				<section className="relative py-12 px-4 flex flex-col items-center justify-center overflow-hidden">
					{/* Subtle background halo */}
					<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,48,158,0.20),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(96,20,140,0.18),_transparent_55%)]" />
					</div>

					<div className="relative mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 bg-clip-padding p-8 sm:p-10 shadow-2xl shadow-primary-color/40 backdrop-blur-xl">
						<div className="text-center space-y-2 mb-8">
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-bright-one">
								المنهج |{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-accent-color to-secondary-color">
									الشروحات المرئية
								</span>
							</h2>
							<p className="text-sm text-bright-two">لقاءات توضيحية وتفصيلية عن معالم وهدف المنهج</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Card 1: أولى خطوات الاستقامة */}
							<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
								<h3 className="text-base font-semibold mb-3 text-right text-bright-one group-hover:text-accent-color transition-colors">
									أولى خطوات الاستقامة
								</h3>
								<div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5 bg-black/40">
									<iframe
										className="absolute inset-0 w-full h-full border-0"
										src="https://www.youtube.com/embed/ztdNLqV4Tnw?start=1022"
										title="أولى خطوات الاستقامة | أحمد البحيري"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									></iframe>
								</div>
							</div>

							{/* Card 2: الهدف والمنهج */}
							<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
								<h3 className="text-base font-semibold mb-3 text-right text-bright-one group-hover:text-accent-color transition-colors">
									الهدف والمنهج
								</h3>
								<div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5 bg-black/40">
									<iframe
										className="absolute inset-0 w-full h-full border-0"
										src="https://www.youtube.com/embed/LTQZYFaQ0Yg"
										title="الهدف و المنهج | أحمد البحيري"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

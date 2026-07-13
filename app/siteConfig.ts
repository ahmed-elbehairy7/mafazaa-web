import githubIcon from "@/assets/github.svg";
import youtubeIcon from "@/assets/youtube.svg";
import whatsappIcon from "@/assets/whatsapp.svg"
import type {
	HeaderConfig,
	FooterConfig,
} from "@/types/index";

export const headerConfig: HeaderConfig = {
	socialLinks: [

		{
			href: "https://youtube.com/@mafazaa_official",
			src: youtubeIcon,
			text: "YouTube",
		},

		{
			href: "https://github.com/mafazaa-org/",
			src: githubIcon,
			text: "GitHub",
		},
		{
			href: "https://whatsapp.com/channel/0029Vb5NRuqLY6dCU3qeXO2i",
			src: whatsappIcon,
			text: "Whatsapp channel"
		}
	],
	importantLinks: [],
};

export const footerConfig: FooterConfig = {
	socialLinks: [
		{
			href: "https://youtube.com/@mafazaa_official",
			src: youtubeIcon,
			text: "YouTube",
		},

		{
			href: "https://github.com/mafazaa-org/",
			src: githubIcon,
			text: "GitHub",
		},
		{
			href: "https://whatsapp.com/channel/0029Vb5NRuqLY6dCU3qeXO2i",
			src: whatsappIcon,
			text: "Whatsapp channel"
		}
	],
	importantLinks: [],
	supportEmail: "support@mafazaa.com",
};

export const siteLinks = headerConfig;

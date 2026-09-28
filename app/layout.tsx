import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Gautam Kumar | Mern Stack Developer",
	description:
		"Mern Stack Developer with 1+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, Node.js, Express, and MongoDB Based in Delhi, India.",
	keywords: [
		"Gautam Kumar",
		"Mern Stack Developer",
		"Backend Developer",
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Delhi",
		"Web Developer",
		"Portfolio",
		"Full Stack Developer",
	],
	authors: [{ name: "Gautam  kumar", url: "https://mymodernportfolio-ochre.vercel.app/" }],
	creator: "Gautam kumar",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://mymodernportfolio-ochre.vercel.app/",
		title: "Gautam kumar | Frontend Developer | Backend Developer | Mern Stack Developer",
		description:
			"Mern Stack Developer with 1+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, Node.js, Express, and MongoDB Based in Delhi, India.",
		siteName: "Gautam Kumar Portfolio",
		images: [
			{
				url: "/assets/my-image.png",
				width: 1200,
				height: 630,
				alt: "Gautam Kumar - Mern Stack Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Gautam Kumar | Mern Stack Developer",
		description: "Mern Stack Developer specializing in React, Next.js, TypeScript, Node.js, Express.Js",
		images: ["/assets/my-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	metadataBase: new URL("https://mymodernportfolio-ochre.vercel.app/"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" type="image/svg+xml" href="/icon.svg" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#5B4FE8" />
			</head>
			<body className="font-body">
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

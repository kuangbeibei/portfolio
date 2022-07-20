import type { NextPage } from "next";
import Head from "next/head";
import {
	Header,
	Hero,
	Skills,
	Projects,
	WorkExperience,
	About,
	Contact,
	Footer,
	LeftSocialBar,
	RightEmailBar
} from "Components";
import {images} from "Constants"

const Home: NextPage = () => (
	<>
		<Head>
			<title>Kuang Dan</title>
			<meta name="description" content="Kuang Dan's Portfolio" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header />
		<main id="content">
			<Hero />
			<About />
			<WorkExperience />
			<Skills />
			<Projects />
			<Contact />
			<LeftSocialBar />
			<RightEmailBar />
		</main>
		<Footer />
	</>
);

export default Home;

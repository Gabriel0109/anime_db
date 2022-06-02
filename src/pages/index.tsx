import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Banner } from "../components/Banner";
import { Anime } from "../components/Anime";

const Home: NextPage = () => {

	return (
		<>
			<Banner>
				<Anime />
			</Banner>
		</>
	);
};

export default Home;
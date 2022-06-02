import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/globals.scss";

import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ApolloProvider client={client}>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
							transition: {
								delay: 0.6,
							},
						},
					}}
				>
					<Header />
					<Component {...pageProps} />
				</motion.div>
			</ApolloProvider>
		</>
	);
}

export default MyApp;


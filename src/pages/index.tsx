import type { NextPage } from "next";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Banner } from "../components/Banner";
import { useState } from "react";

const Home: NextPage = () => {
	//const [list, setList] = useState<Object>();
	var list;
	// Here we define our query as a multi-line string
	// Storing it in a separate .graphql/.gql file is also possible
	var query = `
		query ($id: Int) { # Define which variables will be used in the query (id)
		Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
			id
			title {
			romaji
			english
			native
			}
		}
		}
	`;

	// Define our query variables and values that will be used in the query request
	var variables = {
		id: 15125,
	};

	// Define the config we'll need for our Api request
	var url = "https://graphql.anilist.co",
		options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				query: query,
				variables: variables,
			}),
		};

	fetch(url, options)
		.then(handleResponse)
		.then(handleData)
		.catch(handleError);

	function handleResponse(response: any) {
		return response.json().then(function (json: any) {
			return response.ok ? json : Promise.reject(json);
		});
	}

	function handleData(data: any) {
		console.log(data);
	}

	function handleError(error: any) {
		alert("Error, check console");
		console.error(error);
	}

	return (
		<>
			<Banner>
				<>{list}</>
			</Banner>
		</>
	);
};

export default Home;

import { gql } from "@apollo/client";
import client from "../utils/apollo-client";

export async function getStaticProps() {
	const QUERY = gql`
		query ($id: Int) {
			# Define which variables will be used in the query (id)
			Media(id: $id, type: ANIME) {
				# Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
				id
				title {
					romaji
					english
					native
				}
			}
		}
	`;

	const { data } = await client.query({
		query: QUERY,
	});

	return {
		props: {
			animes: data.Media,
		},
	};
}
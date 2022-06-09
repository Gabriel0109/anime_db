import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { AnimeCard } from "../components/AnimeCard";
import { BannerAnime } from "../components/BannerAnime";
import styled from "../styles/anime.module.scss";

export default function Anime() {
	const QUERY = gql`
		query ($page: Int, $perPage: Int, $search: String) {
			Page(page: $page, perPage: $perPage) {
				pageInfo {
					total
					perPage
				}
				media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
					id
					title {
						romaji
						english
						native
						userPreferred
					}
					genres
					episodes
					format
					status
					isAdult
					season
					seasonYear
					endDate {
						year
						month
						day
					}
					countryOfOrigin
					isLicensed
					source
					popularity
					averageScore
					externalLinks {
						url
						site
					}
					coverImage {
						large
					}
				}
			}
		}
	`;

	const { data, loading, error } = useQuery(QUERY);

	if (loading) {
		return (
			<h2>
				<a
					href="#loading"
					aria-hidden="true"
					className="aal_anchor"
					id="loading"
				>
					<svg
						aria-hidden="true"
						className="aal_svg"
						height="16"
						version="1.1"
						viewBox="0 0 16 16"
						width="16"
					>
						<path
							fillRule="evenodd"
							d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
						></path>
					</svg>
				</a>
				Loading...
			</h2>
		);
	}

	if (error) {
		console.error(error);
		return null;
	}

	const animes = data;
	console.log(animes);

	return (
		<>
			<BannerAnime></BannerAnime>
			<div className={styled.RowAnime}>
				{animes.Page.media.map((anime: any) => (
					<Link
						key={anime.id}
						href={{
							pathname: "/animeDetails",
							query: { id: anime.id }, // the data
						}}
					>
						<a href="/animeDetails">
							<AnimeCard
								key={anime.id}
								title={anime.title.english}
								season={anime.season}
								score={anime.averageScore}
								popularity={anime.popularity}
								episodes={anime.episodes}
								genres={anime.genres}
								status={anime.status}
								link={anime.externalLinks}
								image={anime.coverImage.large}
							/>
						</a>
					</Link>
				))}
			</div>
		</>
	);
}

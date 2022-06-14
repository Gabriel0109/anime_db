import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

import styled from "../assets/styles/mangaDetails.module.scss";

export default function MangaDetails() {
	const { query } = useRouter();

	const QUERY = gql`
		{
			Media(id: ${query.id}, type: MANGA) {
				id
				title {
					romaji
					english
					native
					userPreferred
				}
				description
				hashtag
				trailer {
					id
					site
					thumbnail
				}
				status
				chapters
				volumes
				isAdult
				genres
				averageScore
				popularity
				format
				studios {
					edges {
						node {
							isAnimationStudio
							id
							name
						}
					}
				}
				coverImage {
					large
				}
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
				externalLinks {
					url
					site
				}
				characters(sort: [ROLE, ID]) {
					edges {
						id
						role
						node {
							name {
								full
							}
							image {
								large
							}
							siteUrl
						}
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

	const manga = data.Media;
	console.log("manga", manga);

	return (
		<div className={styled.MangaDetailsContainer}>
			<div className={styled.MangaImgDesc}>
				<div className="row">
					<div className="col-12 mb-4">
						<h1>{manga.title.english}</h1>
					</div>
					<div className="col-3">
						<img
							className={styled.MangaImg}
							src={manga.coverImage.large}
							alt={manga.title.english}
						/>
					</div>
					<div className="col-9">
						<h5 className={styled.MangaDescription}>
							{manga.description}
						</h5>
					</div>
				</div>
			</div>
			<div className={styled.MangaInfos}>
				<h4>Episodes: {manga.episodes}</h4>

				<p>Status: {manga.status}</p>
				<p>Season: {manga.season}</p>
				<p>SeasonYear: {manga.seasonYear}</p>
				<p>Score: {manga.averageScore}/100</p>
				<h4>Studio:</h4>
				<ul className="list-unstyled">
					{manga.studios.edges.map((studio: {}, index: number) => {
						<li key={"studio" + index}>
							<p>{studio.node.name}</p>
						</li>;
					})}
				</ul>
				<h4>Genres:</h4>
				<ul className="list-unstyled">
					{manga.genres.map((genre: string, index: number) => (
						<li key={"genre" + index}>
							<p>{genre}</p>
						</li>
					))}
				</ul>
				<p>
					endDate: {manga.endDate.day}/{manga.endDate.month}/
					{manga.endDate.year}
				</p>
				<h4>Leia:</h4>
				<ul className="list-unstyled">
					{manga.externalLinks.map((link: {}, index: number) => (
						<li key={"site" + index}>
							<a href={link.url} target="_blank">
								{link.site}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

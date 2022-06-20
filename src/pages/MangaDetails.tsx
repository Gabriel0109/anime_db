import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";

import styled from "../assets/styles/mangaDetails.module.scss";
import { MANGA_DETAILS_QUERY } from "../services/queries/manga";

export default function MangaDetails() {
	const { query } = useRouter();

	const { data, loading, error } = useQuery(MANGA_DETAILS_QUERY, {
		variables: { id: query.id },
	});

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
	console.log("Manga Details: ", manga);

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
						<h5
							dangerouslySetInnerHTML={{
								__html: manga.description,
							}}
							className={styled.MangaDescription}
						></h5>
					</div>
				</div>
			</div>
			<div className="mt-5 w-100">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#mostPopular"
							type="button"
							role="tab"
							aria-controls="mostPopular"
							aria-selected="true"
						>
							Infos
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#mostPopularManhwa"
							type="button"
							role="tab"
							aria-controls="mostPopularManhwa"
							aria-selected="false"
						>
							Characters
						</button>
					</li>
				</ul>
				<div className="tab-content" id="tabInitialContentManga">
					<div
						className="tab-pane fade show active"
						id="mostPopular"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<div className={styled.MangaInfos}>
							<h4>Chapters: {manga.chapters}</h4>

							<p>Status: {manga.status}</p>
							<p>Season: {manga.season}</p>
							<p>SeasonYear: {manga.seasonYear}</p>
							<p>Score: {manga.averageScore}/100</p>
							<h4>Studio:</h4>
							<ul className="list-unstyled">
								{manga.studios.edges.map(
									(studio: {}, index: number) => {
										<li key={"studio" + index}>
											<p>{studio.node.name}</p>
										</li>;
									}
								)}
							</ul>
							<h4>Genres:</h4>
							<ul className="list-unstyled">
								{manga.genres.map(
									(genre: string, index: number) => (
										<li key={"genre" + index}>
											<p>{genre}</p>
										</li>
									)
								)}
							</ul>
							<p>
								endDate: {manga.endDate.day}/
								{manga.endDate.month}/{manga.endDate.year}
							</p>
							<h4>Leia:</h4>
							<ul className="list-unstyled">
								{manga.externalLinks.map(
									(link: {}, index: number) => (
										<li key={"site" + index}>
											<a href={link.url} target="_blank">
												{link.site}
											</a>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="mostPopularManhwa"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<div className="row mt-5">
							{manga.characters.edges.map((character: any) => {
								return (
									<div
										key={character.id}
										className="col-1 character-card"
									>
										<Link
											href={{
												pathname: "/CharacterDetails",
												query: { id: character.node.id }, // the data
											}}
										>
											<a>
												<img
													src={
														character.node.image
															.medium
													}
													alt=""
												/>
												<p>
													{character.node.name.full}
												</p>
											</a>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

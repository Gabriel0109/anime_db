import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { AnimeCard } from "../components/AnimeCard";
import { BannerAnime } from "../components/BannerAnime";
import styled from "../assets/styles/anime.module.scss";

import { HOME_DATA_QUERY } from "../services/queries/anime";

var $ = require("jquery");
if (typeof window !== "undefined") {
	window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});

export default function Anime() {
	var { data, loading, error } = useQuery(HOME_DATA_QUERY);

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

	const mostPopular = data.mostPopular;
	const mostPopularNextSeason = data.mostPopularNextSeason;
	const mostPopularThisSeason = data.mostPopularThisSeason;
	const topScore = data.topScore;
	const trendingNow = data.trendingNow;

	const Responsive = {
		0: {
			items: 1.2,
		},
		580: {
			items: 2,
		},
		768: {
			items: 2.5,
		},
		900: {
			items: 3,
		},
		1200: {
			items: 3.5,
		},
		1400: {
			items: 4,
		},
	};

	return (
		<>
			<BannerAnime></BannerAnime>
			<div className={styled.animeTitleCarousel}>
				<h2>Most Popular:</h2>
			</div>
			<OwlCarousel
				loop
				nav={false}
				responsive={Responsive}
				autoplay={true}
				dots={false}
				autoplayTimeout={3200}
				autoplaySpeed={2000}
				autoplayHoverPause={true}
			>
				{mostPopular.media.map((anime: any) => (
					<div key={"carousel_id_" + anime.id} className="item">
						<AnimeCard
							key={"anime" + anime.id}
							id={anime.id}
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
					</div>
				))}
			</OwlCarousel>
			<div className={styled.animeTitleCarousel}>
				<h2>Most popular in the next season:</h2>
			</div>
			<OwlCarousel
				loop
				nav={false}
				responsive={Responsive}
				autoplay={true}
				dots={false}
				autoplayTimeout={3500}
				autoplaySpeed={2000}
				autoplayHoverPause={true}
			>
				{mostPopularNextSeason.media.map((anime: any) => (
					<div key={"carousel_id_" + anime.id} className="item">
						<AnimeCard
							key={"anime" + anime.id}
							id={anime.id}
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
					</div>
				))}
			</OwlCarousel>
			<div className={styled.animeTitleCarousel}>
				<h2>Most popular in this season:</h2>
			</div>
			<OwlCarousel
				loop
				nav={false}
				responsive={Responsive}
				autoplay={true}
				dots={false}
				autoplayTimeout={3700}
				autoplaySpeed={2000}
				autoplayHoverPause={true}
			>
				{mostPopularThisSeason.media.map((anime: any) => (
					<div key={"carousel_id_" + anime.id} className="item">
						<AnimeCard
							key={"anime" + anime.id}
							id={anime.id}
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
					</div>
				))}
			</OwlCarousel>
			<div className={styled.animeTitleCarousel}>
				<h2>Top score:</h2>
			</div>
			<OwlCarousel
				loop
				nav={false}
				responsive={Responsive}
				autoplay={true}
				dots={false}
				autoplayTimeout={3900}
				autoplaySpeed={2000}
				autoplayHoverPause={true}
			>
				{topScore.media.map((anime: any) => (
					<div key={"carousel_id_" + anime.id} className="item">
						<AnimeCard
							key={"anime" + anime.id}
							id={anime.id}
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
					</div>
				))}
			</OwlCarousel>
			<div className={styled.animeTitleCarousel}>
				<h2>Trending now:</h2>
			</div>
			<OwlCarousel
				loop
				nav={false}
				responsive={Responsive}
				autoplay={true}
				dots={false}
				autoplayTimeout={3200}
				autoplaySpeed={2000}
				autoplayHoverPause={true}
			>
				{trendingNow.media.map((anime: any) => (
					<div key={"carousel_id_" + anime.id} className="item">
						<AnimeCard
							key={"anime" + anime.id}
							id={anime.id}
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
					</div>
				))}
			</OwlCarousel>
		</>
	);
}

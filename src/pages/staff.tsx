import { useQuery, gql } from "@apollo/client";
import { MangaCard } from "../components/MangaCard";

import styled from "../assets/styles/manga.module.scss";

import { STAFF_HOME_DATA_QUERY } from "../services/queries/staff";

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

export default function Staff() {
	const ResponsiveMostPopular = {
		0: {
			items: 1.2,
		},
		580: {
			items: 3,
		},
		768: {
			items: 3.5,
		},
		900: {
			items: 4,
		},
		1200: {
			items: 4.5,
		},
		1400: {
			items: 5,
		},
	};

	const { data, loading, error } = useQuery(STAFF_HOME_DATA_QUERY);

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

	const staffBirthday = data.birthday.staff;
	const staffMostFavorite = data.mostFavorite.staff;

	console.log("data", staffBirthday);

	return (
		<>
			<div className={styled.mangaFirstContent}>
				<div>

					<OwlCarousel
						loop
						nav={false}
						responsive={ResponsiveMostPopular}
						autoplay={true}
						dots={false}
						autoplayTimeout={3000}
						autoplaySpeed={2000}
						autoplayHoverPause={true}
					>
						{staffBirthday.map((staff: any) => (
							<div
								key={"carousel_id_" + staff.id}
								className="item"
							>
								<MangaCard
									id={staff.id}
									key={staff.id}
									title={staff.name.full}
									image={staff.image.large}
								/>
							</div>
						))}
					</OwlCarousel>
                    <OwlCarousel
						loop
						nav={false}
						responsive={ResponsiveMostPopular}
						autoplay={true}
						dots={false}
						autoplayTimeout={3000}
						autoplaySpeed={2000}
						autoplayHoverPause={true}
					>
						{staffMostFavorite.map((staff: any) => (
							<div
								key={"carousel_id_" + staff.id}
								className="item"
							>
								<MangaCard
									id={staff.id}
									key={staff.id}
									title={staff.name.full}
									image={staff.image.large}
								/>
							</div>
						))}
					</OwlCarousel>
                </div>
			</div>
		</>
	);
}

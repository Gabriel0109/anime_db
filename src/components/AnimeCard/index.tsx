import Image from "next/image";
import Link from "next/link";
import styled from "./styles.module.scss";

export function AnimeCard(props: any) {
	const imgLoader = () => {
		return `${props.image}`;
	};

	return (
		<div className={styled.animeCard} key={props.id}>
			{props.image ? (
				<Image
					loader={imgLoader}
					src={props.image}
					alt={props.title}
					width="100%"
					height="400"
					unoptimized={true}
				/>
			) : (
				""
			)}
			<div className="context-sla">
				<h2>{props.title}</h2>
				<Link
					key={props.id}
					href={{
						pathname: "/AnimeDetails",
						query: { id: props.id }, // the data
					}}
				>
					<a className="button">See More</a>
				</Link>
			</div>
		</div>
	);
}

import Image from "next/image";
import styles from "./styles.module.scss";

export function AnimeCard(props: any) {

	const imgLoader = () => {
		return `${props.image}`;
	};

	return (
		<div className={styles.animeCard} key={props.id}>
			{props.image ? (
				<Image
					loader={imgLoader}
					src={props.image}
					width="100%"
					height="500"
					unoptimized={true}
				/>
			) : (
				""
			)}
			<h3>{props.title}</h3>
			<p><b>Episodes:</b> {props.episodes}</p>
			<p><b>Season:</b> {props.season}</p>
			<p><b>Score:</b> {props.score}/100</p>
			{/* <p>genres: {props.genres}</p> */}
			<p><b>status:</b> {props.status}</p>
			<a href={props.link.site}>{props.link.url}</a>
		</div>
	);
}

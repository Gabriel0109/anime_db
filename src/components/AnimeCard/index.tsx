import Image from "next/image";
import styles from "./styles.module.scss";

export function AnimeCard(props: any) {
	console.log(props.image);

	const imgLoader = ({ src }) => {
		return `${props.image[0].node.coverImage.large}`;
	};

	return (
		<div className={styles.animeCard} key={props.id}>
			{props.image[0] ? (
				<Image
					loader={imgLoader}
					src={props.image[0].node.coverImage.large}
					width="200"
					height="400"
				/>
			) : (
				""
			)}
			<h3>{props.title}</h3>
			<h4>Episodes: {props.episodes}</h4>
			<p>Season: {props.season}</p>
			<p>Score: {props.score}/100</p>
			{/* <p>genres: {props.genres}</p> */}
			<p>status: {props.status}</p>
			<a href={props.link.site}>{props.link.url}</a>
		</div>
	);
}

import Image from "next/image";
import styles from "./styles.module.scss";

export function MangaCard(props: any) {
	console.log(props.image);

	const imgLoader = ({ src }) => {
		return `${props.image}`;
	};

	return (
		<div className={styles.mangaCard} key={props.id}>
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
			<h4>Episodes: {props.episodes}</h4>
			<p>Season: {props.season}</p>
			<p>Score: {props.score}/100</p>
			<p>genres: {props.genres}</p>
			<p>status: {props.status}</p>
		</div>
	);
}

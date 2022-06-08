import styles from "./styles.module.scss";

export function MangaCard(props: any) {
	return (
		<div className={styles.mangaCard} key={props.id}>
			<h3>{props.title}</h3>
			<h4>Episodes: {props.episodes}</h4>
			<p>Season: {props.season}</p>
			<p>Score: {props.score}/100</p>
			<p>genres: {props.genres}</p>
			<p>status: {props.status}</p>
		</div>
	);
}

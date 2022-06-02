import styles from './styles.module.scss'

export function Anime(props: any) {
	
	return (
		<div className={styles.animeCard} key={props.id}>
			<h3>{props.title}</h3>
			<p>{props.title}</p>
		</div>
	);
}

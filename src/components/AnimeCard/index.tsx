import Image from "next/image";
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

			<h3>{props.title}</h3>
		</div>
	);
}

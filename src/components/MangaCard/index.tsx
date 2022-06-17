import Image from "next/image";
import Link from "next/link";
import styled from "./styles.module.scss";

export function MangaCard(props: any) {
	console.log(props.image);

	const imgLoader = ({ src }) => {
		return `${props.image}`;
	};

	return (
		<div className={styled.mangaCard} key={props.id}>
			{props.image ? (
				<Image
					loader={imgLoader}
					src={props.image}
					alt={props.title}
					width="100%"
					height="200"
					unoptimized={true}
				/>
			) : (
				""
			)}
			<div className="context-sla">
				<h5>{props.title}</h5>
				<Link
					key={props.id}
					href={{
						pathname: "/MangaDetails",
						query: { id: props.id }, // the data
					}}
				>
					<a>See More</a>
				</Link>
			</div>
		</div>
	);
}

import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ChildrenBanner {
	children: ReactNode;
}

export function BannerAnime({ children }: ChildrenBanner) {
	return (
		<>
			<div className={styles.bg}>
				<div className={styles.contentWrapper}>{children}</div>
			</div>
		</>
	);
}

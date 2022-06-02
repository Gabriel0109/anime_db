import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface Anime {
	id: number;
	name: string;
}

interface AnimeProviderProps {
	children: ReactNode;
}

interface AnimeContextData {
	animes: Anime[];
}

const AnimeContext = createContext<AnimeContextData>({} as AnimeContextData);

export function AnimeProvider({ children }: AnimeProviderProps): JSX.Element {
	
	const [animes, setAnimes] = useState<Anime[]>([]);

    return (
		<AnimeContext.Provider value={{ animes }}>
			{children}
		</AnimeContext.Provider>
	);
}

export function useAnime(): AnimeContextData {
	return useContext(AnimeContext);
}

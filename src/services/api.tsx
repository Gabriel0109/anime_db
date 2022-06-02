// https://anilist.gitbook.io/anilist-apiv2-docs/

import axios from "axios";


export const api = axios.create({
    baseURL: 'https://graphql.anilist.co',
});



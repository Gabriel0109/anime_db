// https://anilist.gitbook.io/anilist-apiv2-docs/
//# DOCS
// https://anilist.github.io/ApiV2-GraphQL-Docs/

import axios from "axios";


export const api = axios.create({
    baseURL: 'https://graphql.anilist.co',
});



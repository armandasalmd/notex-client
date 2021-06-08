import { INIT_READING_DATA } from "@actions/types";

const initialState = {
    header: {
        articleAuthor: {
            fullName: "",
            profileImage: null,
        },
        description: "",
        readingDuration: 0,
        updatedOn: "",
        title: "",
        tags: [],
        viewsCount: 0,
        voteCount: 0,
    },
    body: {
        coverImageSource: null,
        text: "",
    },
    footer: {
        articlesInCollection: [],
        suggestedArticles: [],
    },
    state: {
        isBookmarked: false,
        yourVoteStatus: 0,
        loading: true
    }
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case INIT_READING_DATA: {
            const { coverImageSource, text, ...rest } = payload.articleDetails;
            
            state.header = {
                articleAuthor: payload.articleAuthor,
                ...rest
            };
            state.body = {
                coverImageSource,
                text
            };
            state.footer = {
                articlesInCollection: payload.articlesInCollection,
                suggestedArticles: payload.suggestedArticles
            };
            state.state.loading = false;

            return {
                ...state,
            };
        }
        default:
            return state;
    }
}

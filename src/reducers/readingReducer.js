import {
    BOOKMARK_ARTICLE,
    CLEAR_READING_DATA,
    INIT_READING_DATA,
    SET_ARTICLE_VOTE,
    SELECT_READING_FOOTER_TAB,
} from "@actions/types";

import { ReadingUtils } from "@utils";

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
        loading: true,
        readNextTab: ReadingUtils.footerCollections.articlesInCollection,
    },
    identifier: "",
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case BOOKMARK_ARTICLE:
            state.state.isBookmarked = !!payload;
            return { ...state };
        case CLEAR_READING_DATA:
            return {
                ...initialState,
                state: {
                    ...state.state,
                    loading: true
                }
            };
        case INIT_READING_DATA: {
            let newState = { ...initialState };
            const { articleGuid, isBookmarked, coverImageSource, yourVoteStatus, text, ...rest } =
                payload.articleDetails;

            newState.header = {
                articleAuthor: payload.articleAuthor,
                ...rest,
            };
            newState.body = {
                coverImageSource,
                text,
            };
            newState.footer = {
                articlesInCollection: payload.articlesInCollection,
                suggestedArticles: payload.suggestedArticles,
            };
            newState.state.loading = false;
            newState.state.isBookmarked = isBookmarked;
            newState.state.yourVoteStatus = yourVoteStatus;
            newState.identifier = articleGuid;

            return newState;
        }
        case SET_ARTICLE_VOTE: {
            const { newVoteType, oldVoteType } = payload;

            state.header = {
                ...state.header,
                voteCount: state.header.voteCount + ReadingUtils.calculateVoteSurplus(newVoteType, oldVoteType),
            };
            state.state = {
                ...state.state,
                yourVoteStatus: newVoteType,
            };

            return { ...state };
        }
        case SELECT_READING_FOOTER_TAB:
            state.state = {
                ...state.state,
                readNextTab: payload,
            };
            return { ...state };
        default:
            return state;
    }
}

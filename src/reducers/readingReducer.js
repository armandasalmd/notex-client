import {} from "@actions/types";

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
        footerTabSelection: ReadingUtils.FOOTER_SECTIONS.CollectionArticles,
        isBookmarked: false,
        yourVoteStatus: 0,
    },
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        default:
            return state;
    }
}

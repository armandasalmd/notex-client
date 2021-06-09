const footerCollections = {
    articlesInCollection: {
        title: "Articles in collection",
        buttonText: "Same collection",
        reduxKey: "articlesInCollection"
    },
    suggestedArticles: {
        title: "Suggested articles",
        buttonText: "Suggested articles",
        reduxKey: "suggestedArticles"
    }
};

const voteType = {
    none: 0,
    upVote: 1,
    downVote: 2
};

const calculateVoteSurplus = (newVoteType, oldVoteType) => {
    if (oldVoteType === newVoteType)
        return 0;

    if (oldVoteType === voteType.none)
        return newVoteType === voteType.upVote ? 1 : -1;

    if (newVoteType === voteType.none)
        return oldVoteType === voteType.upVote ? -1 : 1;

    if (newVoteType === voteType.upVote && oldVoteType === voteType.downVote)
        return 2;
    else if (newVoteType === voteType.downVote && oldVoteType === voteType.upVote)
        return -2; 

    return 0;
};

export default {
    calculateVoteSurplus,
	footerCollections,
    voteType
};
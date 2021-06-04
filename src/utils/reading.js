const FOOTER_SECTIONS = {
	CollectionArticles: "COLLECTION_ARTICLES",
	SuggestedArticles: "SUGGESTED_ARTICLES"
};

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

export default {
	footerCollections,
    FOOTER_SECTIONS
};
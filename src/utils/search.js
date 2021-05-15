import { RouteUtils } from "@utils";

const PublishDateEnum = Object.freeze({
    NONE: 0,
    LAST_HOUR: 1,
    TODAY: 2,
    THIS_WEEK: 3,
    THIS_MONTH: 4,
    THIS_YEAR: 5
});

const ReadDurationEnum = Object.freeze({
    NONE: 0,
    SHORT: 1,
    MEDIUM: 2,
    LONG: 3
});

const MinimumRatingEnum = Object.freeze({
    NONE: 0,
    AT_LEAST_1_5: 1,
    AT_LEAST_2_5: 2,
    AT_LEAST_3_5: 3,
    AT_LEAST_4_5: 4
});

const searchAsync = (options) => {
    return RouteUtils.sendApiRequest(RouteUtils.api.articles.search, options);
};

const searchFilters = [
    {
        name: "Publish date",
        reduxName: "publishDateFilter",
        defaultValue: PublishDateEnum.NONE,
        options: [
            { name: "Last hour", value: PublishDateEnum.LAST_HOUR },
            { name: "Today", value: PublishDateEnum.TODAY },
            { name: "This week", value: PublishDateEnum.THIS_WEEK },
            { name: "This month", value: PublishDateEnum.THIS_MONTH },
            { name: "This year", value: PublishDateEnum.THIS_YEAR }
        ]
    },
    {
        name: "Read duration",
        reduxName: "readDurationFilter",
        defaultValue: ReadDurationEnum.NONE,
        options: [
            { name: "Short (< 4 minutes)", value: ReadDurationEnum.SHORT },
            { name: "Medium (4 - 20 minutes)", value: ReadDurationEnum.MEDIUM },
            { name: "Long (> 20 minutes)", value: ReadDurationEnum.LONG }
        ]
    },
    {
        name: "Minimum rating",
        reduxName: "minimumRatingFilter",
        defaultValue: MinimumRatingEnum.NONE,
        options: [
            { name: "4.5 star", value: MinimumRatingEnum.AT_LEAST_4_5 },
            { name: "3.5 star", value: MinimumRatingEnum.AT_LEAST_3_5 },
            { name: "2.5 star", value: MinimumRatingEnum.AT_LEAST_2_5 },
            { name: "1.5 star", value: MinimumRatingEnum.AT_LEAST_1_5 }
        ]
    },
];

export default {
    PublishDateEnum,
    ReadDurationEnum,
    MinimumRatingEnum,
    searchAsync,
    searchFilters
};
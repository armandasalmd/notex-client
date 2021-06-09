import React from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { GlobalUtils, ReadingUtils, MessageUtils } from "@utils";
import { submitVote } from '@actions/readingActions'

import { notification } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const Voting = () => {
    const dispatch = useDispatch();

    const count = useSelector((state) => state.reading.header.voteCount);
    const currentVoteStatus = useSelector((state) => state.reading.state.yourVoteStatus);
    const identifier = useSelector((state) => state.reading.identifier);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const onVote = (voteType) => {
        if (isAuthenticated) {
            MessageUtils.handleDispatch(dispatch, submitVote(identifier, voteType, currentVoteStatus), "Vote was not applied");
        } else {
            notification.info({
                message: "Cannot submit your vote",
                description: "Please login to continue...",
            });
        }
    };

    const getSelectedButtonClass = (isSelected) => (isSelected ? "ghostButton--selected" : "ghostButton--silent");

    const upVoteClasses = classnames(
        "ghostButton",
        getSelectedButtonClass(ReadingUtils.voteType.upVote === currentVoteStatus)
    );
    const downVoteClasses = classnames(
        "ghostButton",
        "ghostButton--noText",
        getSelectedButtonClass(ReadingUtils.voteType.downVote === currentVoteStatus)
    );

    return (
        <div className="voting">
            <div className="ghostButtonGroup">
                <button className={upVoteClasses} onClick={onVote.bind(this, ReadingUtils.voteType.upVote)}>
                    <span className="ghostButton__icon">
                        <ArrowUpOutlined />
                    </span>
                    {GlobalUtils.toDisplayCount(count)}
                </button>
                <button className={downVoteClasses} onClick={onVote.bind(this, ReadingUtils.voteType.downVote)}>
                    <span className="ghostButton__icon">
                        <ArrowDownOutlined />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Voting;

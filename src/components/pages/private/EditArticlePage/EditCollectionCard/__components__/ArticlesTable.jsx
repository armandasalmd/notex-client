import React from "react";
import { Link } from "react-router-dom";

import { GlobalUtils, EditArticleUtils, RouteVariables } from "@utils";

import { Button, Table } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import ArticleAccessPicker from "##/ArticleAccessPicker";
import ArticlesTableActions from "./ArticlesTableActions";

const getTableColumns = (actionEvents) => {
    const { onAccessStatusChange, ...rest } = actionEvents;

    return [
        { 
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a, b) => a.title < b.title ? -1 : 1,
            render: (data) => {
                const route = RouteVariables.app.shared.article;
                const link = route.link.replace(":" + route.paramNames.identifier, data.identifier)
                return (
                    <Link target="_blank" to={link}><Button type="link" icon={<LinkOutlined />}>{data.value}</Button></Link>
                );
            }
        },
        {
            title: "Last update",
            dataIndex: "lastUpdate",
            key: "lastUpdate" },
        {
            title: "Views count",
            dataIndex: "viewsCount",
            key: "viewsCount",
            sorter: (a, b) => a.viewsCount < b.viewsCount ? -1 : 1
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (data) => {
                const onChangeFn = (value) => GlobalUtils.callIfFunction(onAccessStatusChange, value, data.identifier);
                return <ArticleAccessPicker onChange={onChangeFn} value={data.value} />;
            },
            filters: [
                { text: "Published", value: "0" },
                { text: "Unlisted", value: "1" },
                { text: "Private", value: "2" }
            ],
            onFilter: (value, record) => record.status === value,
            sorter: (a, b) => a.status < b.status ? -1 : 1
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (data) => <ArticlesTableActions {...rest} identifier={data ? data.identifier : null} />
        },
    ];
};

const ArticlesTable = (props) => {
    const { actions, className, rawArticles } = props;

    return (
        <div className={className}>
            <Table
                columns={getTableColumns(actions)}
                size="middle"
                dataSource={EditArticleUtils.responseToTableData(rawArticles || [])}
                scroll={{
                    x: false
                }}
                pagination={{
                    showSizeChanger: true,
                    size: "default"
                }}
            />
        </div>
    );
};

export default ArticlesTable;
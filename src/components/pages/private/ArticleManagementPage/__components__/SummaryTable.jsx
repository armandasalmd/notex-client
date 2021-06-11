import React from "react";

import { GlobalUtils } from "@utils";

import { Table } from "antd";
import ArticleAccessPicker from "##/ArticleAccessPicker";
import SummaryTableActions from "./SummaryTableActions";
import SummaryExpandedRow from "./SummaryExpandedRow";

const getTableColumns = (onDelete, onAccessStatusChange) => {
    return [
        { 
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a, b) => a.title < b.title ? -1 : 1
        },
        { title: "Last update", dataIndex: "lastUpdate", key: "lastUpdate" },
        { 
            title: "Articles", 
            dataIndex: "count",
            sorter: (a, b) => a.count < b.count ? -1 : 1
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (data) => {
                const onChangeFn = (value) => {
                    onAccessStatusChange(value, data.identifier);
                };

                return <ArticleAccessPicker onChange={onChangeFn} value={data.value} />;
            },
            filters: [
                { text: "Published", value: "0" },
                { text: "Unlisted", value: "1" },
                { text: "Private", value: "2" }
            ],
            onFilter: (value, record) => GlobalUtils.getValue(record, "status.value") === value,
            sorter: (a, b) => a.status < b.status ? -1 : 1
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (data) => <SummaryTableActions onDelete={onDelete} identifier={data ? data.identifier : null} />
        },
    ];
};

const SummaryTable = (props) => {
    const { tableData, searching, onDelete, onAccessStatusChange } = props;
    
    const resultsCountLabel = (tableData) => {
        const count = (tableData && Array.isArray(tableData)) ? tableData.length : 0;
        return `${count} result${count > 1 ? "s" : ""} found`;
    };

    return (
        <div className="summaryTable">
            <Table
                title={() => resultsCountLabel(tableData)}
                columns={getTableColumns(onDelete, onAccessStatusChange)}
                loading={searching}
                size="middle"
                expandable={{
                    expandedRowRender: (record) => <SummaryExpandedRow collectionId={record.key} articleSummaries={record.articles} />,
                    rowExpandable: (record) => record.count > 0,
                }}
                dataSource={tableData}
                scroll={{
                    x: true
                }}
                pagination={{
                    showSizeChanger: true,
                    size: "default"
                }}
            />
        </div>
    );
};

export default SummaryTable;
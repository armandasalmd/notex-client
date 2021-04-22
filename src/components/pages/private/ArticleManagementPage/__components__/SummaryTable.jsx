import React from "react";

import { Select, Table } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import SummaryTableActions from "./SummaryTableActions";
import SummaryExpandedRow from "./SummaryExpandedRow";

const { Option } = Select;

const getTableColumns = (onEdit, onDelete, onAccessStatusChange) => {
    return [
        { 
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a, b) => a.title < b.title ? -1 : 1
        },
        { title: "Last update", dataIndex: "lastUpdate", key: "lastUpdate" },
        { 
            title: "Collection", 
            dataIndex: "isCollection",
            filters: [
                { text: "True", value: true },
                { text: "False", value: false }
            ],
            onFilter: (value, record) => record.isCollection === value,
            render: (data) => data ? 
                <CheckOutlined style={{fontSize: 18, color: "#07987E"}} /> : 
                <CloseOutlined style={{fontSize: 16, color: "#C4C4C4"}} />
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (data) => {
                const onChangeFn = (value) => {
                    onAccessStatusChange(value, data.identifier);
                };

                return (
                    <Select onChange={onChangeFn} value={data.value}>
                        <Option value="0">Published</Option>
                        <Option value="1">Unlisted</Option>
                        <Option value="2">Private</Option>
                    </Select>
                );
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
            render: (data) => <SummaryTableActions onEdit={onEdit} onDelete={onDelete} identifier={data ? data.identifier : null} />
        },
    ];
};

const SummaryTable = (props) => {
    const { tableData, searching, onEdit, onDelete, onAccessStatusChange } = props;
    
    const resultsCountLabel = (tableData) => {
        const count = (tableData && Array.isArray(tableData)) ? tableData.length : 0;
        return `${count} result${count > 1 ? "s" : ""} found`;
    };

    return (
        <div className="summaryTable">
            <Table
                title={() => resultsCountLabel(tableData)}
                columns={getTableColumns(onEdit, onDelete, onAccessStatusChange)}
                loading={searching}
                size="middle"
                expandable={{
                    expandedRowRender: (record) => <SummaryExpandedRow articleSummaries={record.articles} />,
                    rowExpandable: (record) => !!record.isCollection,
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
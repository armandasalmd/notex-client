import React, { useState } from "react";

import "./ArticleManagementPage.less";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input; 

const ArticleManagementPage = () => {
    const [ searching, setSearching ] = useState(false);

    const onSearch = (searchValue) => {
        if (searchValue && !searching) {
            console.log(searchValue);
            setSearching(true);

            setTimeout(() => setSearching(false), 3000);
        }
    };

    return (
        <div className="articleManagement">
            <div className="articleManagement__header">
                <h1 className="header">Article management</h1>
                <Button icon={<PlusOutlined />}>Add new collection</Button>
            </div>
            <div className="articleManagement__body card">
                <div className="card__header card__header--separatorSpiked">
                    <div className="articleManagement__search">
                        <p>Search for articles or collections</p>
                        <Search loading={searching} onSearch={onSearch} style={{minWidth: 364}} placeholder="Type to search" enterButton="Search" />
                    </div>
                </div>
                <div className="card__body">
                    <span>Article management table</span>
                    <span>Pagination</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleManagementPage;
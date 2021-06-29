import React from "react";
import { useHistory } from "react-router-dom";

import { GlobalUtils, SearchUtils } from "@utils";

import { Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';

const properties = SearchUtils.searchItemProps.childItem;

const CollectionArticlesMenu = (props) => {
    const { title, items, onClick } = props;
    const history = useHistory();

    const onItemClick = e => {
        if (e.key) {
            GlobalUtils.callIfFunction(onClick);
            history.push(SearchUtils.pathToArticle(e.key));
        }
    };

    const itemElements = Array.isArray(items) ? items.map(o => {
        return <Menu.Item key={GlobalUtils.getValue(o, properties.identifier)}>{GlobalUtils.getValue(o, properties.title, "")}</Menu.Item>;
    }) : [];

    const menu = (
        <Menu onClick={onItemClick}>
            {itemElements}
        </Menu>
    );
        
    return (
        <Dropdown overlay={menu}>
            <span className="resultCard__title">{title}<DownOutlined style={{marginLeft: 6, fontSize: 14, verticalAlign: "middle"}} /></span>
        </Dropdown>
    );
};

export default CollectionArticlesMenu;
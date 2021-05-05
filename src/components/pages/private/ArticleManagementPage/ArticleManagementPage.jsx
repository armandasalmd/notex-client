import React, { useState, useEffect } from "react";

import { ArticleManagementUtils, GlobalUtils } from "@utils";

import "./ArticleManagementPage.less";
import { Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { SummaryTable, SummarySearch } from "./__components__";
import CreateCollectionModal from "../CreateCollectionModal";

const ArticleManagementPage = () => {
    const [ searching, setSearching ] = useState(false);
    const [ searchData, setSearchData ] = useState(null);

    const [ addCollectionOpen, setAddCollectionOpen ] = useState(false);
    const [ addCollectionLoading, setAddCollectionLoading ] = useState(false);

    const [ createCollectionMetaData, setCreateCollectionMetaData ] = useState(null); 

    const onSearch = (searchValue) => {
        if (!searching) {
            setSearching(true);

            ArticleManagementUtils.articleManagementSearchApiCall(searchValue)
                .then((data) => {
                    setSearchData(data);
                })
                .catch(() => {
                    setSearchData([]);
                    message.error("Cannot connect to server");
                })
                .finally(() => setSearching(false));
        }
    };

    const onAccessStatusChange = (accessStatus, identifier) => {
        if (accessStatus && identifier) {
            setSearching(true);

            ArticleManagementUtils.changeAccessLevelApiCall(identifier, accessStatus, true)
                .then((res) => {
                    if (res.data.success) {
                        message.success("Status saved");

                        if (GlobalUtils.hasLength(searchData)) {
                            let collection = searchData.find(o => o.articleCollectionGuid === identifier);

                            collection.accessStatus = accessStatus;
                        }
                    } else {
                        message.error("Cannot change publication status");
                    }
                })
                .catch(() => {
                    message.error("Cannot change publication status");
                })
                .finally(() => setSearching(false));
        }
    };

    const onAddCollectionSubmit = (formData) => {
        setAddCollectionLoading(true);

        ArticleManagementUtils.createCollectionApiCall(formData)
            .then((res) => {
                if (res.data && Array.isArray(searchData)) {
                    searchData.push(res.data);
                    message.success("New collection added successfully");
                } else {
                    message.warn("Cannot update view. Try to refresh the page");
                }
            })
            .catch(() => {
                message.error("Cannot create new collection. Try again");
            })
            .finally(() => {
                setAddCollectionLoading(false);
                setAddCollectionOpen(false);
            });
    };

    const onOpenAddCollection = () => {
        if (createCollectionMetaData === null) {
            const cancelFn = message.loading("Fetching source notes...", 0);

            ArticleManagementUtils.fetchCreateCollectionMetaData().then((data) => {
                cancelFn();
                setCreateCollectionMetaData(data);
                setAddCollectionOpen(true);
            });
        } else {
            setAddCollectionOpen(true);
        }
    };

    const onCloseAddCollection = () => {
        setAddCollectionOpen(false);
    };
    
    const onDelete = (identifier) => {
        if (identifier) {
            setSearching(true);
            ArticleManagementUtils.deleteCollectionApiCall(identifier)
                .then((res) => {
                    if (res.data.success) {
                        setSearchData(searchData.filter(collection => {
                            return GlobalUtils.getValue(collection, "articleCollectionGuid") !== identifier;
                        }));

                        message.success("Article collection deleted");
                    } else {
                        message.error(res.message || "Error occured");
                    }
                })
                .finally(() => {
                    setSearching(false);
                });
        }
    };

    useEffect(() => {
        if (searchData === null && !searching) {
            onSearch("");
        }
    });

    return (
        <div className="articleManagement">
            <div className="articleManagement__header">
                <h1 className="header">Article management</h1>
                <Button onClick={onOpenAddCollection} icon={<PlusOutlined />}>Add new collection</Button>
            </div>
            <div className="articleManagement__body card">
                <div className="card__header card__header--separatorSpiked">
                    <SummarySearch onSearch={onSearch} searching={searching} />
                </div>
                <div className="card__content">
                    <SummaryTable onAccessStatusChange={onAccessStatusChange} onDelete={onDelete} searching={searching} tableData={ArticleManagementUtils.responseToTableData(searchData)} />
                </div>
            </div>
            <CreateCollectionModal loading={addCollectionLoading} metaData={createCollectionMetaData} visible={addCollectionOpen} onClose={onCloseAddCollection} onSubmit={onAddCollectionSubmit} />
        </div>
    );
};

export default ArticleManagementPage;

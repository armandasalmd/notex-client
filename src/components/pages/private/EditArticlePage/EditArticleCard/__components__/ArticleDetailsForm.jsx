import React, { useEffect } from "react";

import { ArticleManagementUtils, EditArticleUtils, GlobalUtils, MessageUtils } from "@utils";

import { SaveOutlined } from "@ant-design/icons";
import { Button, Row, Form, Input, Select, Cascader } from "antd";
import CoverUpload from "./CoverUpload";

const { Option } = Select;

const ArticleDetailsForm = (props) => {
    const { onSubmit, sourceMetaData, className, article } = props;
    const [form] = Form.useForm();

    const cascaderProps = {
        options: ArticleManagementUtils.sourceNotebooksToTreeData(sourceMetaData, true),
        placeholder: "Select source note"
    };

    const formItemCommon = (validationMsg) => {
        return { 
            rules: [{required: true, message: validationMsg}], 
            wrapperCol: { span: 8 }
        };
    };

    const handleSubmit = (data) => {
        data.sourceNoteId = GlobalUtils.getValue(data.sourceNoteId, "1", null);
        GlobalUtils.callIfFunction(onSubmit, data);
    };

    useEffect(() => {
        if (sourceMetaData && article.sourceNoteId && form) {
            const noteParentId = EditArticleUtils.findNoteParentIdInMetaData(sourceMetaData, article.sourceNoteId);

            if (GlobalUtils.hasLength(noteParentId)) {
                form.setFields([{
                    name: "sourceNoteId",
                    value: noteParentId? [noteParentId, article.sourceNoteId] : null
                }]);
            } else {
                MessageUtils.warning("Source article was removed. Please choose new source!");
            }
        }
    }, [sourceMetaData, article, form]);

    useEffect(() => {
        if (article && form) {
            form.setFields([
                { name: "title", value: article.title },
                { name: "description", value: article.description },
                { name: "articleAccessStatus", value: GlobalUtils.getValue(article, "accessStatus", "0").toString() },
                { name: "coverImageSource", value: article.coverImageSource },
                { name: "tags", value: article.tags }
            ]);
        }
    }, [article, form]);

    return (
        <>
        <Row className={className}>
            <Form style={{width: "100%"}} form={form} layout="horizontal" onFinish={handleSubmit}>
                <Form.Item name="title" label="Collection name" {...formItemCommon("Please enter collection name")}>
                    <Input placeholder="Enter name" />
                </Form.Item>
                <Form.Item name="description" label="Short description" {...formItemCommon("Please add description")} tooltip="Description will appear in search page">
                    <Input placeholder="Enter description" />
                </Form.Item>
                <Form.Item name="articleAccessStatus" label="Publication status" {...formItemCommon("Select status value")}>
                    <Select>
                        <Option value="0">Published</Option>
                        <Option value="1">Unlisted</Option>
                        <Option value="2">Private</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="sourceNoteId" label="Select article source note" {...formItemCommon("Select source note")}>
                    <Cascader {...cascaderProps} />
                </Form.Item>
                <Form.Item name="tags" label="Article tags (up to 8)" wrapperCol={{ span:12 }}>
                    <Select mode="tags" placeholder="Type to search..."></Select>
                </Form.Item>
                <Form.Item name="coverImageSource" wrapperCol={{ span:24 }}>
                    <CoverUpload imageSource={article.coverImageSource} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>Submit</Button>
                </Form.Item>
            </Form>
        </Row>
        </>
    );
};

export default ArticleDetailsForm;
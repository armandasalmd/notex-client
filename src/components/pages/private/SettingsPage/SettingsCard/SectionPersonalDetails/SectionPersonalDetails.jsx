import React from "react";

import "./SectionPersonalDetails.less";
import { AvatarForm, DetailsForm } from "./__components__";
import { Button, Col, Row } from "antd";

const SectionPersonalDetails = props => {
    return (
        <div className="section-personal-details">
            <Row gutter={[32, 18]}>
                <Col md={14} span={24}>
                    <DetailsForm />
                </Col>
                <Col md={10} span={24}>
                    <AvatarForm />
                </Col>
            </Row>
        </div>
    );
};

export default SectionPersonalDetails;

import React from "react";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { Issue } from "../generated/graphql";

const IssueCard = ({ issue }: { issue: Issue }) => {
  const { author, title, bodyText, publishedAt, labels } = issue;
  return (
    <Card>
      <Row>
        <Col sm="3">
          <CardImg top width="50%" src={author?.avatarUrl} alt="" />
          <CardText>Name: {author?.login}</CardText>
        </Col>
        <Col>
          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardText>
              Labels:{" "}
              {labels?.edges?.map((i) => (
                <>
                  <Badge key={i?.node?.id} color="primary">
                    {i?.node?.name}
                  </Badge>{" "}
                </>
              ))}
            </CardText>
            <CardText>
              Published: {new Date(publishedAt).toLocaleDateString()}
            </CardText>
            <CardText>{bodyText}</CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default IssueCard;

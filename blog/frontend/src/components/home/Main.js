import React, { Component } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegUserCircle } from 'react-icons/fa'
import { allArticles } from '../../actions/articles';
import ReactHtmlParser from 'react-html-parser';
export class Main extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
      };
    componentDidMount() {
        this.props.allArticles();
    }
    render() {
        return (
            <Container fluid>
            {this.props.articles.map((article) => (
            <Row key={article.id}>
                <Col xs={10} className="p-3">
                    <div className="d-flex justify-content-center mt-5">
                        <Image src={article.image} fluid alt="" height="300" width="300"  />
                    </div>
                    <br />
                    <h1>{article.title}</h1>
                    <h3>{article.category}</h3>
                    <div>
                    { ReactHtmlParser(article.post) }
                    </div>
                    <h6 className="d-flex justify-content-end">{article.created_at}</h6>
                </Col>
            </Row>
            ))}
        </Container>
        )
    }
}
const mapStateToProps = (state) => ({
    articles: state.articles.articles,
  });

export default connect(mapStateToProps,{allArticles})(Main);

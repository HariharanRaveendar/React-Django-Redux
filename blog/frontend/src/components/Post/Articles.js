import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {getArticles ,deleteArticle} from '../../actions/articles';
import ReactHtmlParser from 'react-html-parser';

export class Articles extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        deleteArticle: PropTypes.func.isRequired,
      };
    componentDidMount() {
      
        this.props.getArticles();
    }
    render() {
        return (
            <Fragment>
                <h2>Articles</h2>
                <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.articles.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>{article.category}</td>
                <td>{ ReactHtmlParser(article.post) }</td>
                <td>
                <Link to={`/edit/${article.id}`} className="btn btn-warning  btn-sm text-light">
              Update
            </Link>
                </td>
                <td>
                  <button
                  onClick={this.props.deleteArticle.bind(this, article.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.articles.articles,
  });
  
  export default connect(mapStateToProps, { getArticles,deleteArticle})(Articles);

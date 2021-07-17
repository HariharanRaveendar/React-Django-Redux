import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addArticle } from '../../actions/articles';
import { Container, Form, Button, Image } from 'react-bootstrap'

export class PostArticle extends Component {
    state = {
        title: '',
        category: '',
        post: '',
        image:null,
        viewimage:null,
    }
    static propTypes = {
        addArticle: PropTypes.func.isRequired,
      };
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    handleImageChange = (e) => {
      const reader = new FileReader()
      reader.onload = () => {
          if (reader.readyState === 2) {
              this.setState({
                viewimage: reader.result
              })
          }
      }
      reader.readAsDataURL(e.target.files[0])
      this.setState({
        image: e.target.files[0]
      })
    };
    onCkeditor = (e,editor)=>{
        const data = editor.getData();
        this.setState({
            post: data
          })
    }
     onSubmit = (e) => {
        e.preventDefault();
        const { title, category, post,image} = this.state;
        // const article = { title, category, post ,image};
        let article = new FormData();
        article.append('image', this.state.image, this.state.image.name);
        article.append('title', this.state.title);
        article.append('category', this.state.category);
        article.append('post', this.state.post);
        this.props.addArticle(article);
        this.setState({
          title: '',
          category: '',
          post: '',
          viewimage:null,
          image:null,
        })
      };
    render() {
        const { title, category, post,image,viewimage } = this.state;
        return (
          <Container>
          <h5>Post your Article</h5>
          <Container className="justify-content-center w-75 mt-5">
              <Form onSubmit={this.onSubmit}>
                  <Form.Group className="mb-3" controlId="formGroupTitle">
                      <Form.Label><b>Title</b></Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Enter title here"
                          value={title}
                          name="title"
                          onChange={this.onChange}
                          required
                      />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupCategory">
                      <Form.Label><b>Category</b></Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Enter Category here"
                          value={category}
                          name="category"
                          onChange={this.onChange}
                          required
                      />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupDescrition">
                      <Form.Label><b>Description</b></Form.Label>
                      <CKEditor   editor={ ClassicEditor }
                      data={post}
                        onChange={this.onCkeditor}
                        required
                      />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupTitle" accept="image/png, image/jpeg">
                      <Form.Control
                          type="file"
                          required
                          placeholder="Upload image"
                          onChange={this.handleImageChange}
                      />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                      {
                          viewimage !== "" &&
                          <Image fluid src={viewimage} alt="" height="300" width="300" />
                      }

                  </div>
                  <div className="d-flex justify-content-end">
                      <Button type="sumbit" variant="outline-success">Publish</Button>
                  </div>
              </Form>
          </Container>
      </Container>
        );
    }
}

export default connect(null,{addArticle}) (PostArticle);

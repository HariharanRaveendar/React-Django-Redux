# Blog 

> Full stack Django/React/Redux app that uses token based authentication with Knox.

## Quick Start

```bash
# Install dependencies
npm install

# Serve API on localhost:8000
python manage.py runserver

# Run webpack (from root)
npm run dev


```
### Description :
     This is a Blog web app developed by using reactjs and Python Django Rest Framework.
     Users can signup and login into the website.If they didn't signup they can see only the homepage.They should signin for Post the blog.Users can Post the Blogs,Edit and Delete the Posted their own Blogs.
     I used reactjs as a front with html and bootstrap components.In reactjs,I used class components.Api calls and services are accessing by using axios package.
     I used react redux for data ui binding.I would pass the props to redux reducer and the reducers has containing 2 states such as initial and action state.
     For Backend i used Django rest framework and knocs tokenization is added with it.Token generate after the login of the user and delete after that user logout.Viewset concept is implemented in the class components in django views.
     For storing purposes i used SQL Lite database.

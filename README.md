# Blog App

Blog App is web application that allows users to create, edit, delete blog posts with titles and description. It provides a simple interface for managing personal blogs.

## Features

**Create Blogs**: Users can add new blog posts with a title and description.
**Edit Blogs**: Existing blogs can updated to modify content.
**Delte Blogs**: Unwanted blogs can be removed.

## Installation

Clone the Repository:
git clone https://github.com/techbrothers3/BlogApp.git\

Install dependencies
npm install

Run the development Server
npm start

## API Documentation

### Base URL
The base URL for all API endpoints is:
http://localhost:5000/api

#### **Get All Blogs**
**Method**: `GET`
**Endpoint**: `/blogs`
**Description**: Retrieves a list of all blog posts.

#### 2. **Create a New Blog**
- **Method**: `POST`
- **Endpoint**: `/blogs`
- **Description**: Creates a new blog post.
- **Request Body**:
    ```json
    {
      "title": "Blog Title",
      "description": "Blog description content."
    }
    ```


#### 3. **Edit a Blog**
- **Method**: `PUT`
- **Endpoint**: `/blogs/:id`
- **Description**: Updates an existing blog post.
- **Request Parameters**:
    - `id` (string): The unique identifier of the blog to edit.
- **Request Body**:
    ```json
    {
      "title": "Updated Blog Title",
      "description": "Updated blog description content."
    }
    ```

#### 4. **Delete a Blog**
- **Method**: `DELETE`
- **Endpoint**: `/blogs/:id`
- **Description**: Deletes an existing blog post.
- **Request Parameters**:
    - `id` (string): The unique identifier of the blog to delete.
# Blog Post Management Module

The blog post management module is a platform for creating, viewing, editing, and interacting with blog posts.This is built with HTML, CSS, Bootstrap, JavaScript, and JSON, consisting of the following pages:

## Pages Overview

### 1. **index.html (Blog List Page)**
   - Displays a list of blogs.
   - Shows 8 blogs per page on laptop and bigger devices, and 6 blogs per page on tablet and mobile devices (pagination is implemented).
   - Each blog includes:
     - **Image**
     - **Title**
     - **Short Description**
     - **Author Name**
     - **Publish Date**
     - **Read More** button.
   - **Create Blog** button to allow the user to create a new blog.
   - When a user clicks the **Read More** button, they are taken to the `blog.html` page for more details of the blog.

### 2. **blog.html (Blog Detail Page)**
   - Displays the detailed information of a blog post:
     - **Title**
     - **Author Name**
     - **Publish Date**
     - **Image**
     - **Content**
     - **Tags**
     - **Comments Section**
   - **Like Button**: Clicking increases the like count, and clicking again resets it to the original value.
   - **Comment Button**: Opens a comment form to submit a name and comment. Comments are added once the form is submitted, with validation.
   - **Share Button**: Provides share options for WhatsApp, Facebook, LinkedIn, and Twitter.
   - **Back to Blog** button to return to the blog list page (`index.html`).

### 3. **create-blog.html (Create Blog Page)**
   - Provides a form to create a new blog post with the following fields:
     - **Title**
     - **Short Description**
     - **Content**
     - **Tags**
     - **Image**
   - **Create Blog** button that adds the blog post below the form once submitted.
   - Displays the newly created blog with its image, title, short description, content, and tags.
   - **Edit Button**: Allows the creator to edit the blog post.
   - **Delete Button**: Allows the creator to delete the blog post.
   - **Back to Blog** button that redirects to the `index.html` page.

## Technologies Used:
- **HTML** for structure and content.
- **CSS** for styling.
- **Bootstrap** for responsive design.
- **JavaScript** for dynamic functionality.
- **blogs.json** for storing blog data.

## Functionality

- **Pagination**: The `index.html` page implements pagination to show a fixed number of blogs per page (8 on desktop, 6 on mobile/tablets).
- **Create Blog**: This allows to create a new blog post through the `create-blog.html` page, with the option to edit or delete it.
- **Blog Detail**: Clicking the **Read More** button on any blog will show the detailed post on the `blog.html` page.
- **Like/Comment/Share**: Users can like the post, comment on it, and share it across social media platforms.
- **Commenting**: Comments are submitted with validation for the name and comment fields.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TejalPisal/blog-post-management-module.git
   cd blog-post-management-module

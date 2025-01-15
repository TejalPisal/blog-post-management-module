const blogListElement = document.getElementById("blog-list");
const paginationElement = document.getElementById("pagination");

let blogs = [];
let currentPage = 1;
let blogsPerPage = 8;

// Function to fetch the blog data from blogs.json
async function fetchBlogs() {
  try {
    const response = await fetch('blogs.json');
    const data = await response.json();
    
    // Check if the fetched data contains an array of blogs
    if (Array.isArray(data.blogs)) {
      blogs = data.blogs; 
    } else {
      console.error("Fetched data does not contain an array in 'blogs':", data);
    }

    // Display the blogs for the current page and create pagination controls
    displayBlogs();
    createPagination();
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }
}

// Function to display the current page of blogs
function displayBlogs() {
  blogListElement.innerHTML = "";
  // Calculate the starting and ending indices for blogs on the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;

  if (Array.isArray(blogs)) {
    const currentBlogs = blogs.slice(startIndex, endIndex);

    // Loop through each blog and generate the HTML structure
    currentBlogs.forEach(blog => {
      const blogCard = `
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card blog-card">
            <img src="${blog.image}" class="card-img-top" alt="${blog.title}">
            <div class="card-body blog-card-body">
              <h5 class="card-title">${blog.title}</h5>
              <p class="card-text">${blog.shortDescription}</p>
              <p class="author-date"><small class="text-muted">By ${blog.author} on ${blog.date}</small></p>
              <a href="blog.html?id=${blog.id}" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      `;
      blogListElement.innerHTML += blogCard;
    });
  } else {
    console.error("Blogs is not an array:", blogs);
  }
}

// Function to create pagination controls
function createPagination() {
  const totalBlogs = blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  paginationElement.innerHTML = "";

  // Loop through and create page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    const pageLink = document.createElement("a");
    pageLink.classList.add("page-link");
    pageLink.textContent = i;
    pageLink.href = "#";
    pageLink.addEventListener("click", function(event) {
      event.preventDefault();
      currentPage = i;
      sessionStorage.setItem('currentPage', i); 
      displayBlogs();
    });

    pageItem.appendChild(pageLink);
    paginationElement.appendChild(pageItem);
  }
}

// Fetch blogs data when the page loads
fetchBlogs();

// Dynamically adjust the number of blogs per page based on the screen size
function adjustBlogCountBasedOnScreenSize() {
  if (window.innerWidth >= 1200) {
    blogsPerPage = 8; // For large screens (laptop and bigger)
  } else if (window.innerWidth >= 768) {
    blogsPerPage = 6; // For tablets
  } else {
    blogsPerPage = 6; // For mobile devices
  }

  const storedPage = sessionStorage.getItem('currentPage');
  if (storedPage) {
    currentPage = parseInt(storedPage, 10); // Use stored page if available
  }
  displayBlogs();
}

// Adjust blog count when screen size changes
window.addEventListener("resize", adjustBlogCountBasedOnScreenSize);
adjustBlogCountBasedOnScreenSize();  // Initial check when page loads
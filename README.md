<h1>Blog Application</h1>

<p>A full-stack blog application built with <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>. This project allows users to read, write blog posts. It includes authentication and a simple yet efficient backend to handle CRUD operations for blog posts.</p>

<h2>Features</h2>
<ul>
  <li><strong>User Authentication</strong>: Login and signup functionality.</li>
  <li><strong>Operations</strong>: Users can create and read blog posts.</li>
  <li><strong>Responsive UI</strong>: Built with Next.js and CSS modules.</li>
  <li><strong>Backend API</strong>: Developed with Node.js and Express to handle all data operations.</li>
  <li><strong>MongoDB Database</strong>: Stores user data and blog posts in a MongoDB database.</li>
  <li><strong>JWT Token-based Authentication</strong>: Secures API endpoints and ensures only authenticated users can create posts.</li>
</ul>

<h2>Tech Stack</h2>
<h3>Frontend:</h3>
<ul>
  <li>Next.js</li>
  <li>TypeScript</li>
  <li>React</li>
  <li>CSS Modules</li>
</ul>

<h3>Backend:</h3>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>MongoDB</li>
  <li>JWT (JSON Web Token) for authentication</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/vivekadapa/Blogify.git</code></pre>

  <li>Install dependencies for both frontend and backend:</li>
  <ul>
    <li>Frontend:
      <pre><code>cd frontend
npm install</code></pre>
    </li>
    <li>Backend:
      <pre><code>cd backend
npm install</code></pre>
    </li>
  </ul>

  <li>Set up the environment variables:</li>
  <ul>
    <li>For the backend, create a <code>.env</code> file in the <code>backend</code> folder and add your MongoDB connection string and JWT secret:</li>
    <pre><code>PORT=
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=
CORS_ORIGIN = 
MONGO_URI = </code></pre>
  </ul>

  <li>For the frontend, create a <code>.env</code> file in the <code>frontend</code> directory with the following value:</li>
  <pre><code>NEXT_PUBLIC_BACKEND_BASE_URL=http://localhost:5000</code></pre>

  <li>Run the application:</li>
  <ul>
    <li>For the backend:
      <pre><code>cd backend
npm start</code></pre>
    </li>
    <li>For the frontend:
      <pre><code>cd frontend
npm run dev</code></pre>
    </li>
  </ul>

  <li>Open your browser and go to <code>http://localhost:3000</code> to see the application in action.</li>
</ol>

<h2>API Endpoints</h2>

<h3>Authentication</h3>
<ul>
  <li><strong>POST /api/auth/signup</strong>: Sign up a new user.</li>
  <li><strong>POST /api/auth/login</strong>: Login for existing users, if login valid then issues both access and refresh tokens as cookies</li>
  <li><strong>POST /api/auth/refresh</strong>: Returns a new access token if the refresh token is valid</li>
  <li><strong>POST /api/auth/logout</strong>: Logout the current user, invalidates the JWT token.</li>
  <li><strong>GET /api/auth/verify</strong>: Verify if the token is valid or not</li>
</ul>

<h3>Blog Posts</h3>
<ul>
  <li><strong>POST /api/posts</strong>: Create a new blog post (authenticated users only).</li>
  <li><strong>GET /api/posts</strong>: Get all blog posts.</li>
  <li><strong>GET /api/posts/author?authorId=</strong>: If authorId mentioned in the query then return posts by that particular author , if not mentioned returns the logged in author's posts.</li>
  <li><strong>GET /api/post/:id</strong>: Get a single blog post by ID.</li>
</ul>

<h3>Pages</h3>
<ul>
  <li><strong>HOME PAGE[/]</strong>: Lists all the blogs. It is a server side rendered page with no-cache</li>
  <li><strong>DASHBOARD PAGE[/dashboard]</strong>: List blogs published by the user and provides interface for creating a new one.</li>
  <li><strong>BLOG DETAIL[/post/:id]</strong>: Displays complete content of the blog</li>
  <li><strong>LOGIN AND SIGNUP</strong>: Allows users to signup and login.</li>
</ul>


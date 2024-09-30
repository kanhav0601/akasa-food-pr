# **Akasa - Food Ordering Web Application**
**Shreyans Jain**  
Roll No: 2347155  
Christ University, Bangalore  


---

## **Introduction**

**Akasa** is a dynamic and responsive food-ordering web application designed to deliver a seamless user experience. Built using a modern technology stack, Akasa offers high performance, scalability, and ease of content management.
---
Deployed : https://akasafood.vercel.app/
Backend : https://akasa-ad.onrender.com/
---

### **Tech Stack**
- **Next.js**: React-based framework for server-side rendering and static site generation, improving SEO and performance.
- **Strapi**: A headless CMS that powers the backend with APIs for flexible content management.
- **Render**: Deployment service for the Strapi backend, offering scalable infrastructure.
- **Vercel**: Deployment platform for the Next.js frontend with streamlined CI/CD integration.

### **Core Features**
- 🔐 **User Registration & Authentication**
- 📝 **Content Management**
- 📱 **Responsive Design** for various devices
- 🚀 **High Performance** with server-side rendering (SSR) and API integration

---

## **Getting Started**

### **Prerequisites**
Ensure that the following are installed on your local machine:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Local Setup**

#### **Backend Setup (Strapi)**
1. **Clone the Backend Repository**:
    ```bash
    git clone https://github.com/strapi/strapi.git
    cd strapi
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:  
   Create a `.env` file in the root directory with the following variables:
    ```env
    APP_NAME="Akasa"
    APP_URL="http://your-render-url.com"
    DATABASE_HOST="localhost"
    DATABASE_PORT=5432
    DATABASE_NAME="your-database-name"
    DATABASE_USERNAME="your-database-username"
    DATABASE_PASSWORD="your-database-password"
    ```

4. **Run the Strapi Server**:
    ```bash
    npm run develop
    ```

   Access the Strapi admin panel at `http://your-render-url.com/admin`.

#### **Frontend Setup (Next.js)**
1. **Clone the Frontend Repository**:
    ```bash
    git clone https://github.com/your-username/your-nextjs-repo.git
    cd your-nextjs-repo
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:  
   Create a `.env.local` file in the root directory with the following configuration:
    ```env
    NEXT_PUBLIC_API_URL=http://your-render-url.com/api
    ```

4. **Run the Next.js Development Server**:
    ```bash
    npm run dev
    ```
    The app will be live at `http://localhost:3000`.

5. **Production Build**:
    ```bash
    npm run build
    npm start
    ```

---

## **Deployment**

### **Frontend on Vercel**
1. Connect your GitHub repository to [Vercel](https://vercel.com/).
2. Set environment variables, including `NEXT_PUBLIC_API_URL`.
3. Deploy the app, and Vercel will provide a live URL.

### **Backend on Render**
1. Connect your GitHub repository to [Render](https://render.com/).
2. Set environment variables for database credentials.
3. Deploy the backend, and Render will provide a live URL for your Strapi instance.

---

## **Testing**

### **Frontend Testing**
- **Jest**: Unit testing for React components.
- **Cypress**: End-to-end testing for the user interface.

**Sample Frontend Test (Component Rendering)**:
```javascript
test('renders header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
```
Backend Testing
Supertest: For testing Strapi's API endpoints.
Sample Backend Test (API Response):

```
javascript
Copy code
const request = require('supertest');
const app = require('../app');

test('GET /api/posts returns 200', async () => {
  const response = await request(app).get('/api/posts');
  expect(response.statusCode).toBe(200);
});
```
Future Improvements
🎨 Enhanced UI/UX: Improve design consistency across devices.
🔍 Advanced Search Functionality: Implement filters for better user search experience.
⚙️ Payment Integration: Integrate secure payment options to streamline the order process.
Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a feature branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Feel free to reach out via Email if you have any questions or suggestions!

---

### **Key Highlights:**
- A visually appealing structure with headers, bullet points, and icons for better readability.
- Step-by-step instructions for setting up both the backend and frontend.
- Added sections for deployment and testing.
- Contribution guidelines and a license section for open-source collaboration.

Feel free to add your images, links, and actual URLs where necessary!








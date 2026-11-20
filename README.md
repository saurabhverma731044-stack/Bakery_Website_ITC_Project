# MITHAAS – Har Bite Mein Khushi 🍰

### A Little Sweetness, A Lot of Happiness!

**Developed By:**

| Team Member | Enrollment Number |
|:---|:---|
| Saurabh Verma | 202610101200040 |
| Ashish Kumar | 202610101200041 |
| Himani Dagar | 202610101200042 |

**Institution:** Shri Ramswaroop Memorial University (SRMU), Lucknow  
**Course:** Introduction to Computing (ITC)  
**Project Type:** Academic Group Project

---

## 🌿 About the Project

MITHAAS is a visually appealing bakery website developed as part of our Introduction to Computing (ITC) project.

We wanted to create something that feels like an actual small bakery's website rather than just a collection of HTML pages. From the colour palette to the product cards and pre-order section, every part of MITHAAS is designed to make browsing simple, pleasant, and enjoyable.

The website presents a modern bakery experience where visitors can explore different baked products, learn about the bakery, and place a sample pre-order through an interactive form.

MITHAAS is built using **HTML, CSS, and JavaScript**, focusing on the fundamentals of front-end web development.

---

## 🎯 Project Objectives

The main objectives behind developing MITHAAS are:

- To understand the fundamentals of HTML and webpage structure.
- To use CSS to create an attractive and well-organised website.
- To implement basic JavaScript functionality for user interaction.
- To design product cards that display product names, descriptions, images, and prices.
- To create a simple pre-order interface with quantity selection.
- To calculate the total product price dynamically.
- To make the website accessible across different screen sizes.
- To gain practical experience in collaborative development using Git and GitHub.

---

## ✨ Features

### 1. Home / Hero Section
- Introduces the MITHAAS bakery and its identity.
- Includes a welcoming headline, short description, and bakery image.
- Provides quick navigation to the menu and About Us sections.

### 2. Product Categories
- Organises the bakery collection into different categories.
- Includes Celebration Cakes, Fresh Pastries, and Cookies & Treats.
- Helps visitors explore the available product collections easily.

### 3. Product Showcase
- Displays individual bakery products in organised cards.
- Each card includes a product image, name, short description, and price.
- Uses a clean grid layout to keep the product collection easy to browse.

### 4. About Us Section
- Introduces the MITHAAS bakery.
- Shares the idea behind the brand and its focus on freshly prepared products.
- Combines descriptive content with a bakery-themed image.

### 5. Interactive Pre-order Form
- Allows visitors to enter their name.
- Provides a dropdown menu to select a bakery product.
- Includes quantity increment (+) and decrement (−) buttons.
- Maintains a minimum quantity of one.
- Automatically calculates the total amount based on the selected product and quantity.
- Displays a confirmation message when the form is submitted.

### 6. Responsive Design
- Uses CSS media queries to adapt the layout to smaller screens.
- Adjusts the navigation bar, hero section, product cards, About Us section, and footer.
- Provides a more convenient browsing experience on mobile devices and tablets.

### 7. Website Footer
- Displays the bakery's brand information.
- Provides quick navigation links.
- Includes contact information and copyright details.

---

## 🛠️ Technologies Used

We have used basic web technologies to keep the project lightweight, understandable, and easy to maintain.

| Technology | Purpose |
|:---|:---|
| HTML5 | Creating the structure and content of the website. |
| CSS3 | Styling the website, designing layouts, and making it responsive. |
| JavaScript | Adding quantity controls, price calculation, and form interaction. |
| Git | Tracking changes during development. |
| GitHub | Hosting the project repository and collaborating as a team. |
| Visual Studio Code | Writing and editing the project code. |
| Live Server | Running the website locally during development. |

**No frontend frameworks or external JavaScript libraries have been used.** The project is built using core HTML, CSS, and JavaScript concepts.

---

## 🎨 Design Approach

The visual identity of MITHAAS is based on a modern and minimal bakery theme.

We selected a combination of:

- **Sage Green:** Represents freshness and gives the website a calm appearance.
- **Warm Ivory:** Provides a soft and welcoming background.
- **Pastel Yellow:** Adds a subtle highlight to important elements.
- **Dark Green:** Improves readability and creates visual contrast.

Rounded product cards, soft shadows, carefully spaced sections, and bakery-themed images help maintain a consistent visual appearance throughout the website.

The tagline **"Har Bite Mein Khushi"** represents the idea behind the brand: bringing a little happiness through every baked treat.

---

## 📂 Project Structure

The project is organised into separate files so that the website's structure, styling, and functionality remain easy to understand.

```text
Bakery_Website_ITC_Project/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── hero.jpg
│   ├── chocolate-pastry.jpg
│   ├── red-velvet-pastry.jpg
│   ├── pineapple-pastry.jpg
│   ├── black-forest-pastry.jpg
│   ├── mango-pastry.jpg
│   ├── chocolate-chip-cookies.jpg
│   ├── butter-cookies.jpg
│   ├── chocolate-brownie.jpg
│   └── about-bakery.jpg
│
└── README.md
```

### File Description

- **index.html:** Contains the complete structure and content of the bakery website.
- **style.css:** Contains the visual styling, layout rules, colour palette, and responsive design.
- **script.js:** Handles quantity selection, automatic price calculation, and demo order confirmation.
- **images/:** Stores the images used in the hero section, product cards, and About Us section.
- **README.md:** Provides information about the project, its features, technologies, and setup instructions.

---

## 🚀 How to Run the Project

You do not need to install any framework or additional package to run MITHAAS.

Follow these steps:

### Step 1: Clone the Repository

```bash
git clone https://github.com/saurabhverma731044-stack/Bakery_Website_ITC_Project.git
```

### Step 2: Open the Project Folder

```bash
cd Bakery_Website_ITC_Project
```

### Step 3: Open the Project in VS Code

Open the downloaded project folder in Visual Studio Code.

### Step 4: Run the Website

- Open `index.html`.
- Right-click inside the editor.
- Select **Open with Live Server**.

Alternatively, you can open `index.html` directly in your web browser.

That's it! The MITHAAS website should now be running locally.

---

## 🧪 Testing

During development, we tested the main website sections and interactive features to check whether they behaved as expected.

| Test Case | Expected Result |
|:---|:---|
| Open the website | Homepage loads with its main sections. |
| Click navigation links | The corresponding website section opens. |
| Explore product cards | Product images, names, descriptions, and prices are displayed. |
| Select a product | The selected product is recognised by the pre-order form. |
| Increase quantity | Quantity increases by one and total price is recalculated. |
| Decrease quantity | Quantity decreases by one, without going below one. |
| Change selected product | Total amount updates according to the new product. |
| Submit the pre-order form | A demo order confirmation message is displayed. |
| Open on a smaller screen | Website layout adjusts to the screen size. |

---

## ⚠️ Project Limitations

MITHAAS is an academic front-end project developed to demonstrate the fundamentals of website development.

Some features are intentionally limited:

- The pre-order form is a front-end demonstration only.
- Orders are not stored in a database or sent to a bakery.
- No online payment facility is integrated.
- Product information and prices are sample data.
- Contact details displayed on the website are illustrative.
- User authentication and order tracking are not implemented.

These limitations keep the project within the intended scope of our introductory web development coursework.

---

## 🔮 Future Scope

There is plenty of room to expand MITHAAS beyond its current implementation.

Some possible improvements include:

- Integrating a backend to store customer orders.
- Adding a database for managing products and prices.
- Implementing customer registration and login.
- Adding online payment integration.
- Providing order tracking and order history.
- Creating an admin dashboard to manage products and orders.
- Adding product search and category-based filtering.
- Integrating customer reviews and ratings.

These improvements could help transform MITHAAS from a simple academic website into a more complete bakery ordering platform.

---

## 📚 Learning Outcomes

Working on MITHAAS helped us understand how the different parts of a website come together to create a complete user experience.

Through this project, we gained practical experience in:

- Writing structured HTML.
- Applying CSS layouts and styling techniques.
- Understanding Flexbox, CSS Grid, and media queries.
- Using JavaScript to interact with HTML elements.
- Handling button clicks and form submissions.
- Performing basic calculations using JavaScript.
- Organising project files and managing code changes with Git and GitHub.
- Working collaboratively on a shared project.

---

## 🙌 Acknowledgement

We would like to express our gratitude to our faculty members for providing us with the opportunity to work on this project as part of our Introduction to Computing coursework.

This project gave us an opportunity to apply the concepts learned in class to a practical website and improve our understanding of front-end development.

We would also like to thank everyone who supported and guided us during the development process.

---

## 📚 References

- [MDN Web Docs – HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs – CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs – JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [GitHub Documentation](https://docs.github.com/)

---

## 📄 License

This project has been developed for academic and educational purposes as part of our Introduction to Computing coursework.

---

### MITHAAS – Har Bite Mein Khushi. ❤️

*Made with creativity, teamwork, and a little sweetness.*

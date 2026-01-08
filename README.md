
# Project Description

This project is a responsive and modern Landing Page developed as part of a Frontend  on react.js. The website includes multiple sections such as Hero, About, Services, Portfolio, Testimonials, and Contact.

The Contact section is integrated with EmailJS, allowing users to send emails directly from the website without requiring a backend server. The main goal of this project is to demonstrate frontend development skills, clean UI design, and real-world form handling.

## Technologies used

- React.js – Component-based frontend development
- Tailwind CSS – Styling and responsive design
- React Slick – Testimonials carousel/slider
- Lucide React – Icons
- EmailJS – Contact form email integration
- Vite / Create React App – Project setup and bundling
- Git & GitHub – Version control

# ⚙️ Setup Instructions

Follow these steps to run the project locally:

Clone the repository

git clone https://github.com/your-username/landing-page.git

Navigate to the project folder

cd landing-page

Install dependencies

npm install

Start the development server

npm run dev

or (if using Create React App)

npm start

Open your browser and visit:

http://localhost:5173

or

http://localhost:3000


# 📧 EmailJS Setup Steps

To enable the contact form email functionality:

Visit https://www.emailjs.com and create an account.

Create a new Email Service and connect your email provider.

Create an Email Template with fields such as:

Name

Email

Message

From the EmailJS dashboard, copy:

Service ID

Template ID

Public Key

Add these values to your contact form code:

emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);

Run the project and submit the contact form.

Confirm the email is received successfully.

Take a screenshot of the test email for submission.
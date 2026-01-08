
# Project Description

This project is a responsive and modern Landing Page developed as part of a Frontend  on react.js. The website includes multiple sections such as Hero, About, Services, Portfolio, Testimonials, and Contact.

The Contact section is integrated with EmailJS, allowing users to send emails directly from the website without requiring a backend server. The main goal of this project is to demonstrate frontend development skills, clean UI design, and real-world form handling.

# Technologies used

- React.js – Component-based frontend development
- Tailwind CSS – Styling and responsive design
- React Slick – Testimonials carousel/slider
- Lucide React – Icons
- EmailJS – Contact form email integration
- Vite / Create React App – Project setup and bundling
- Git & GitHub – Version control

#  Setup Instructions

## Create React Project 

Follow the steps below to create and run this React.js project on your local.

Make sure the following are installed:

- Node.js 
- Git
- VS Code 

### Check installation:

- node -v
- npm -v
- git --version

## Create a New React Project

You can create the project using Vite :
```bash
npm create vite@latest landing-page
```

#### Then:
- Select React
- Select JavaScript 

## Navigate to Project Folder
- cd landing-page
#### Install Project Dependencies
``` bash
npm install
```
#### Install Required Libraries
``` bash
npm install tailwindcss postcss autoprefixer
```
``` bash
npm install react-slick slick-carousel
```
``` bash
npm install lucide-react
```
``` bash
npm install emailjs-com
```
#### Configure Tailwind CSS

##### Initialize Tailwind:
``` bash
npm install tailwindcss @tailwindcss/vite
```

#### Update tailwind.config.js:


- import tailwindcss from '@tailwindcss/vite'
  - tailwindcss()
 

#### Add Tailwind to src/index.css:
``` bash
@import "tailwindcss";
```
#### Start the Development Server
``` bash
npm run dev
```
####  Open in Browser

Open your browser and visit:
http://localhost:5173

#### Project Setup Completed

The React.js project is now running successfully and ready for development.

## Demo
https://landing-page-bice-eight-76.vercel.app/

#  EmailJS Setup Steps

To enable the contact form email functionality:

Visit https://www.emailjs.com and create an account.

Create a new Email Service and connect your email provider.

Create an Email Template with fields such as:

- Name
- Email
- Message

From the EmailJS dashboard, copy:
- Service ID
- Template ID
- Public Key

Add these values to your contact form code:
``` bash
emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);
```

Run the project and submit the contact form.



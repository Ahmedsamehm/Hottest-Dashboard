# Hotel Management Dashboard – My Fullstack Learning Project

![Dashboard Screenshot](https://github.com/user-attachments/assets/627da6bf-2bf3-438f-885a-e0f3b4292f0c)

**Summary:** Manage hotel bookings, track guest details, and streamline reservations all in one place.

---

## 🎯 Overview

**HottestDashboard** is a fullstack web application that helps hotel staff:

- View and manage room bookings
- Track guests’ check-in and check-out dates
- Mark guests as VIP or regular
- Record payment status and extra services like meals
- Switch easily between **light and dark themes**

The goal is to make hotel booking management **easier** and **more dynamic** for staff.

👉 **Live Demo:** [Hottest Dashboard](https://hottest-dashboard.vercel.app/dashBoard)

---

## 🧪 Why This Project?

I wanted to learn how to build a fullstack app with **Next.js**, **React**, **TailwindCSS**, and **Supabase**.
This dashboard became my playground to practice:

- Building APIs with Next.js (server-side)
- Storing and retrieving data from Supabase
- Managing relationships between database tables
- Handling bookings dynamically with real-time updates

---

## 🛠 Tech Stack

- **Next.js 15** for the frontend and server-side API routes
- **React 19** with the React Compiler for better performance
- **UI & Styling** TailwindCSS, Shadcn UI for fast, responsive UI styling
- **Supabase** for authentication, database, and real-time data
- **React Query** + **Axios** for API calls and state management
- **Context API** for shared global state

---

## 🧩 Challenges & Highlights

### 🗄️ Working with Supabase Relationships

One of the hardest parts was creating **relations between tables** and joining them to get complete booking details.
I used AI as my personal mentor to understand Supabase better and figure out the best way to design my schema.

### 📝 Code Reviews with AI

After each feature, I reviewed the code with AI to make sure I was following **best practices**.
This helped me improve performance and write cleaner, more maintainable code.

### ⚡ Smart Caching for Smooth Experience

I implemented caching to reduce requests and make navigation smoother.
For example, while the user is on page 1, page 2 is cached in the background.
When they move to page 2, page 3 gets cached, and so on.

---

## 🚀 Key Features

- **Room Management**

  - Add rooms with: room number, capacity, price, description, room type, floor, and status (available, occupied, maintenance)
  - Track last cleaned date
  - Assign amenities: WiFi, parking, breakfast

- **Search and Pagination**

  - Global search bar on all pages for quick access to data
  - Pagination to handle large datasets from the database

- **Guest Management**

  - Add guests with: full name, email, national ID, nationality, phone number, and VIP status

- **Booking Management**

  - Create, edit, and delete bookings
  - Set booking period and payment method
  - Track payment status (paid before arrival or on check-in)
  - Booking workflow: pending → confirmed → checked out → needs cleaning

- **Dashboard Analytics**

  - Room status overview
  - Monthly occupancy trends
  - Weekly revenue reports
  - Today's activities summary

- **Dark Theme Support**

  - Seamless switch between light and dark themes

- **🔒 Authentication & Route Protection**

  - I implemented **Next.js middleware** to protect routes and ensure that only authorized staff can access certain pages.

  - Role-based access control for admins and regular staff
  - Secured sensitive pages like analytics and booking management
  - Users without proper permissions are redirected to the login page


---
## 📂 Folder Structure
```
📁 Pages/
├── 📁 Bookings/
│ ├── 📁 _components/
│ ├── 📁 _hooks/
│ ├── 📁 _services/
│ ├── 📁 _types/
│ ├── layout.tsx
│ └── page.tsx
├── 📁 Guests/
├── 📁 Rooms/
└── 📁 dashBoard/

📁 Types/
📁 apis/
📁 components/
└── sharedComponent/
📁 context/
🎨 globals.css
📄 layout.tsx
📄 page.tsx
```
## 🔮 What’s Next?

- AI assistant for admins to manage bookings and generate more accurate analytics  
- Public booking website for users to reserve rooms, select stay dates, and choose additional services  
- Role-based access control for staff  

---

Thanks for reading!  
This project was a big step in my journey to mastering fullstack development and working on a real-world scenario while learning new tools.

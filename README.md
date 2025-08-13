<img width="1905" height="1299" alt="dashBoard" src="https://github.com/user-attachments/assets/627da6bf-2bf3-438f-885a-e0f3b4292f0c" />

---
title: "Introducing Hotel Management Dashboard – My Fullstack Learning Project"
summary: "Manage hotel bookings, track guest details, and streamline reservations all in one place."
publishedAt: "2025-08-13"
---

Hey there! I'm excited to share one of my recent side projects: **HottestDashboard**.  
It’s a fullstack web application that helps hotel staff:

- View and manage room bookings
- Track guests’ check-in and check-out dates
- Mark guests as VIP or regular
- Record payment status and extra services like meals

The goal is to make hotel booking management **easier** and **more dynamic** for both staff and guests.

👉 **Demo:** [Demo]((https://hottest-dashboard.vercel.app/dashBoard))

---

## 🧪 Why This Project?

I wanted to learn how to build a fullstack app with **Next.js**, **React**, **TailwindCSS**, and **Supabase**.  
This dashboard became my playground to practice:

- Building APIs with Next.js (server-side)
- Storing and retrieving data from Supabase
- Managing relationships between database tables
- Handling bookings dynamically with real-time updates

---

## 🛠️ The Tech Stack

This project uses:

- **Next.js 15** for the frontend and server-side API routes
- **React 19** with the React Compiler for better performance
- **UI & Styling** TailwindCSS,Shadcn Ui for fast, responsive UI styling
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

---

## 🚀 Key Features

- **Room Management**

  - Add rooms with: room number, capacity, price, description, room type, floor, and status (available, occupied, maintenance)
  - Track last cleaned date
  - Assign amenities: WiFi, parking, breakfast

- **Search Functionality**

  - Global search bar on all pages for quick access to data

- **Guest Management**

  - Add guests with: full name, email, national ID, nationality, phone number, and VIP status

- **Booking Management**

  - Create, edit, and delete bookings
  - Set booking period and payment method
  - Track payment status (paid before arrival or on check-in)

- **Dashboard Analytics**
  - Room status overview
  - Monthly occupancy trends
  - Weekly revenue reports
  - Today's activities summary

---

## 🔮 What’s Next?

Planned improvements:

- AI assistant for admins to manage bookings and generate more accurate analytics
- Public booking website for users to reserve rooms, select stay dates, and choose additional services
- Role-based access control for staff

---

Thanks for reading!  
This project was a big step in my journey to mastering fullstack development, and it gave me a real-world scenario to work on while learning new tools.

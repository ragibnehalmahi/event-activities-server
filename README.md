# 📚 Events & Activities Platform - Backend API

A robust backend service built with **Node.js**, **Express**, **TypeScript**, and **Prisma ORM** that powers a social platform where users can discover, create, and participate in local events, sports, and hobbies.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime Environment |
| **Express** | Web Framework |
| **TypeScript** | Type Safety |
| **Prisma** | ORM |
| **PostgreSQL** | Database |
| **JWT** | Authentication |
| **Stripe** | Payment Gateway |
| **Cloudinary** | Image Storage |

---

## 🚀 Features

- **User Authentication**: Secure JWT-based auth with Refresh Tokens and Email Verification.
- **Event Management**: Create, Read, Update, Delete (CRUD) events with filtering and search.
- **Participation**: Join, leave, and bookmark (save) events.
- **Payment Integration**: Secure event joining fees via Stripe integration.
- **Review System**: User reviews and ratings for event hosts.
- **Admin Dashboard**: Analytics, user management, and event approval workflows.
- **Security**: Rate limiting, XSS protection, and input validation using Zod.

---

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- Stripe Account & Cloudinary Account

### Steps

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/events-activities-server.git](https://github.com/your-username/events-activities-server.git)
   cd events-activities-server

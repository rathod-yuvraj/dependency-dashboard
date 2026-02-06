# Enterprise Dependency Management & Project Tracking System

## 📌 Project Overview

The **Enterprise Dependency Management & Project Tracking System** is a full-stack web application designed to manage organizational projects, modules, and task dependencies with **role-based dashboards**, **dependency graph visualization**, and **secure authentication**.

This system helps organizations:

* Track project progress in real time
* Visualize module and task dependencies
* Manage teams and technologies
* Monitor risks and blocked tasks
* Provide role-specific dashboards for Admin, Manager, and Developer

---

## 🏗️ Architecture

### Backend

* **ASP.NET Core Web API**
* **Entity Framework Core (MySQL)**
* **JWT Authentication + OTP Verification**
* **Role-based Authorization**
* **Dependency Graph Engine**
* **Audit Logging**

### Frontend

* **React (Vite + TypeScript)**
* **Tailwind CSS UI**
* **Recharts Dashboard Charts**
* **React Flow Dependency Graph**
* **Axios API Integration**

---

## 👥 User Roles

### Admin

* System-wide KPIs
* Company / Department / Project overview
* Risk & blocked task monitoring

### Manager

* Project progress tracking
* Module completion statistics
* Dependency graph visualization

### Developer

* Assigned task summary
* Pending vs completed tasks
* Blocked dependency alerts

---

## 🔗 Core Features

* Secure **JWT + OTP authentication**

* Hierarchical structure:

  **Company → Department → Project → Module → Task**

* **Task & Module dependency graph (DAG)**

* **Role-based dashboards**

* **Project progress analytics**

* **Audit logging**

* **Demo data seeding**

* **RESTful API architecture**

* **Interactive React visualization**

---

## 📊 Dependency Graph Concept

The system models dependencies as a **Directed Acyclic Graph (DAG)**:

* **Nodes**

  * Modules
  * Tasks

* **Edges**

  * Module → Module dependency
  * Task → Task dependency
  * Module → Task containment

Rendered using **React Flow** with:

* Zoom & pan
* Animated dependency edges
* Status-based node coloring

---

## 🗂️ Database Design (ER Summary)

### Main Entities

* Company
* Department
* Project
* Module
* Task
* Dependency
* TaskDependency
* ApplicationUser
* ProjectTeamMember
* Technology
* AuditLog

### Relationships

* Company **1-N** Department
* Department **1-N** Project
* Project **1-N** Module
* Module **1-N** Task
* Module **N-N** Module (Dependency graph)
* Task **N-N** Task (Task dependency graph)
* Project **N-N** User (with role)

---

## 🔐 Authentication Flow (Sequence Summary)

1. User registers
2. OTP sent to email
3. OTP verification activates account
4. User logs in with credentials
5. Backend returns **JWT + Refresh Token**
6. React stores token and redirects based on **role**
7. Protected APIs accessed using **Bearer token**

---

## 🚀 How to Run

### Backend

```bash
cd DependencySystem.API
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

```bash
cd dependency-system-dashboard
npm install
npm run dev
```

---

## 🧪 Demo Credentials

| Role      | Username | Password      |
| --------- | -------- | ------------- |
| Admin     | admin    | Admin@12345   |
| Manager   | manager  | Manager@12345 |
| Developer | dev1     | Dev@12345     |

---

## 📦 Future Enhancements

* Gantt chart timeline
* Real-time notifications (SignalR)
* CI/CD pipeline
* Docker & cloud deployment
* Advanced analytics dashboard

---

## 🎓 Academic Context

Developed as a **PG-DAC Final Project** demonstrating:

* Full-stack development
* Secure authentication design
* Database modeling
* Dependency graph algorithms
* Enterprise dashboard UI
* Production-ready architecture

---

## 👨‍💻 Author

**Yuvraj Rathod**
PG-DAC Student – CDAC
Specialization: Full-Stack .NET & React Development

---

## ⭐ Conclusion

This project showcases an **enterprise-grade dependency management platform** integrating:

* Secure backend architecture
* Scalable relational database design
* Interactive frontend visualization
* Role-based analytics dashboards

It demonstrates strong readiness for **software development roles in modern web applications**.

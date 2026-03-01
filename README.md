# EduCore SMS — Role-Based School Management

A comprehensive React-based School Management System with role-based dashboards for Indian schools.

## 🚀 Features

- **6 Role-Based Dashboards**: Admin, Principal, Teacher, Student, Parent, Accountant
- **Real-time Charts**: Revenue, Attendance, Performance analytics via Chart.js
- **CBSE / ICSE / State Board** compatible workflows
- **GST-compliant** fee management
- **Fully responsive** — mobile-friendly with bottom navigation
- **Collapsible sidebar** navigation

## 🔧 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/educore-sms.git
cd educore-sms

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

## 🎭 Demo Credentials

Select any role on the login screen and use password: **password123**

| Role | User | Default Page |
|------|------|-------------|
| 🏫 Admin | Admin User | Dashboard |
| 👔 Principal | Dr. K. Sharma | Principal Dashboard |
| 👩‍🏫 Teacher | Mrs. Priya Rajan | My Dashboard |
| 🎒 Student | Ananya Krishnamurthy | My Dashboard |
| 👨‍👩‍👧 Parent | Mr. Ravi Krishnamurthy | Parent Dashboard |
| 💰 Accountant | Smt. Leela Murthy | Finance Dashboard |

## 📁 Project Structure

```
src/
├── components/
│   ├── LoginScreen.jsx    # Login with role selector
│   ├── Sidebar.jsx        # Collapsible sidebar navigation
│   ├── Header.jsx         # Top header bar
│   ├── MobileNav.jsx      # Bottom mobile navigation
│   ├── PageContent.jsx    # Main page renderer with chart support
│   └── ChartWidget.jsx    # Reusable Chart.js wrapper
├── data/
│   ├── roles.js           # Role configs, nav items, page info
│   ├── charts.js          # Chart.js configurations
│   └── views.js           # HTML templates for each page view
├── App.jsx                # Root component with state management
├── index.js               # React entry point
└── index.css              # Global styles & CSS variables
```

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Chart.js 4 + react-chartjs-2** — Data visualizations
- **CSS Variables** — Design tokens & theming
- **Plus Jakarta Sans + DM Sans** — Typography (Google Fonts)

## 📱 Screenshots

The app includes dashboards for:
- **Admin**: School overview, student management, fees, payroll, reports
- **Principal**: Academic performance, staff management, analytics
- **Teacher**: Attendance marking, assignments, gradebook, timetable
- **Student**: My timetable, assignments, results, fee status
- **Parent**: Child's attendance, results, fee payment, notices
- **Accountant**: Fee collection, defaulters, receipts, payroll, expenses

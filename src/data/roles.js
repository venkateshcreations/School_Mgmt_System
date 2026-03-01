export const ROLES = {
  admin: {
    label: 'School Admin', icon: '🏫', initial: 'A', color: 'linear-gradient(135deg,#2563EB,#7C3AED)',
    school: 'Green Valley Public School',
    nav: [
      { s: 'Main', items: [{ id: 'dashboard', icon: '📊', label: 'Dashboard' }] },
      { s: 'Academics', items: [{ id: 'students', icon: '👨‍🎓', label: 'Students' }, { id: 'attendance', icon: '✅', label: 'Attendance' }, { id: 'results', icon: '📝', label: 'Examinations' }, { id: 'admissions', icon: '📋', label: 'Admissions', badge: '42' }] },
      { s: 'Administration', items: [{ id: 'staff', icon: '👩‍🏫', label: 'Staff' }, { id: 'fees', icon: '💰', label: 'Fees', badge: '73' }, { id: 'payroll', icon: '💼', label: 'Payroll' }, { id: 'communication', icon: '📢', label: 'Communication' }] },
      { s: 'Services', items: [{ id: 'library', icon: '📚', label: 'Library' }, { id: 'transport', icon: '🚌', label: 'Transport' }, { id: 'reports', icon: '📈', label: 'Reports' }] }
    ],
    defaultPage: 'dashboard',
    mobileNav: [{ id: 'dashboard', icon: '📊', label: 'Home' }, { id: 'students', icon: '👨‍🎓', label: 'Students' }, { id: 'attendance', icon: '✅', label: 'Attend.' }, { id: 'fees', icon: '💰', label: 'Fees' }, { id: 'reports', icon: '📈', label: 'Reports' }]
  },
  principal: {
    label: 'Principal', icon: '👔', initial: 'K', color: 'linear-gradient(135deg,#0891B2,#7C3AED)',
    school: 'Green Valley Public School',
    nav: [
      { s: 'Overview', items: [{ id: 'p-dashboard', icon: '📊', label: 'My Dashboard' }] },
      { s: 'Academics', items: [{ id: 'p-academics', icon: '📚', label: 'Academic Overview' }, { id: 'p-performance', icon: '📈', label: 'Performance Analytics' }, { id: 'p-timetable', icon: '📅', label: 'Timetable' }] },
      { s: 'People', items: [{ id: 'p-staff', icon: '👩‍🏫', label: 'Staff Management' }, { id: 'p-students', icon: '👨‍🎓', label: 'Student Overview' }] },
      { s: 'Administration', items: [{ id: 'p-communication', icon: '📢', label: 'Communication' }, { id: 'p-reports', icon: '🗂️', label: 'Reports' }] }
    ],
    defaultPage: 'p-dashboard',
    mobileNav: [{ id: 'p-dashboard', icon: '📊', label: 'Home' }, { id: 'p-academics', icon: '📚', label: 'Academics' }, { id: 'p-staff', icon: '👩‍🏫', label: 'Staff' }, { id: 'p-communication', icon: '📢', label: 'Comms' }, { id: 'p-reports', icon: '🗂️', label: 'Reports' }]
  },
  teacher: {
    label: 'Class Teacher', icon: '👩‍🏫', initial: 'P', color: 'linear-gradient(135deg,#16A34A,#0891B2)',
    school: 'Green Valley Public School · Class XII-A',
    nav: [
      { s: 'Overview', items: [{ id: 't-dashboard', icon: '📊', label: 'My Dashboard' }] },
      { s: 'Classroom', items: [{ id: 't-attendance', icon: '✅', label: 'Mark Attendance' }, { id: 't-assignments', icon: '📝', label: 'Assignments', badge: '3' }, { id: 't-marks', icon: '🏆', label: 'Marks & Grades' }, { id: 't-timetable', icon: '📅', label: 'Timetable' }] },
      { s: 'Students', items: [{ id: 't-students', icon: '👨‍🎓', label: 'My Students' }, { id: 't-performance', icon: '📈', label: 'Performance' }] },
      { s: 'Connect', items: [{ id: 't-communication', icon: '💬', label: 'Communication' }] }
    ],
    defaultPage: 't-dashboard',
    mobileNav: [{ id: 't-dashboard', icon: '📊', label: 'Home' }, { id: 't-attendance', icon: '✅', label: 'Attend.' }, { id: 't-assignments', icon: '📝', label: 'Tasks' }, { id: 't-marks', icon: '🏆', label: 'Marks' }, { id: 't-students', icon: '👨‍🎓', label: 'Students' }]
  },
  student: {
    label: 'Student · Class XII-A', icon: '🎒', initial: 'A', color: 'linear-gradient(135deg,#F59E0B,#DC2626)',
    school: 'Green Valley Public School',
    nav: [
      { s: 'Overview', items: [{ id: 's-dashboard', icon: '📊', label: 'My Dashboard' }] },
      { s: 'Academics', items: [{ id: 's-timetable', icon: '📅', label: 'My Timetable' }, { id: 's-assignments', icon: '📝', label: 'Assignments', badge: '2' }, { id: 's-results', icon: '🏆', label: 'Results & Marks' }, { id: 's-analytics', icon: '📈', label: 'My Performance' }] },
      { s: 'Finance', items: [{ id: 's-fees', icon: '💰', label: 'Fee Details' }] },
      { s: 'Connect', items: [{ id: 's-notices', icon: '📢', label: 'Notices' }] }
    ],
    defaultPage: 's-dashboard',
    mobileNav: [{ id: 's-dashboard', icon: '📊', label: 'Home' }, { id: 's-timetable', icon: '📅', label: 'Classes' }, { id: 's-assignments', icon: '📝', label: 'Work' }, { id: 's-results', icon: '🏆', label: 'Marks' }, { id: 's-fees', icon: '💰', label: 'Fees' }]
  },
  parent: {
    label: 'Parent', icon: '👨‍👩‍👧', initial: 'R', color: 'linear-gradient(135deg,#7C3AED,#2563EB)',
    school: 'Parent Portal — Ananya Krishnamurthy (XII-A)',
    nav: [
      { s: 'Overview', items: [{ id: 'par-dashboard', icon: '📊', label: 'Dashboard' }] },
      { s: 'My Child', items: [{ id: 'par-attendance', icon: '✅', label: 'Attendance' }, { id: 'par-results', icon: '📝', label: 'Results & Marks' }, { id: 'par-fees', icon: '💰', label: 'Fee Payment', badge: '1' }] },
      { s: 'Connect', items: [{ id: 'par-communication', icon: '💬', label: 'Messages' }, { id: 'par-notices', icon: '📢', label: 'Notices' }] }
    ],
    defaultPage: 'par-dashboard',
    mobileNav: [{ id: 'par-dashboard', icon: '📊', label: 'Home' }, { id: 'par-attendance', icon: '✅', label: 'Attend.' }, { id: 'par-results', icon: '📝', label: 'Results' }, { id: 'par-fees', icon: '💰', label: 'Fees' }, { id: 'par-communication', icon: '💬', label: 'Chat' }]
  },
  accountant: {
    label: 'Accountant', icon: '💰', initial: 'L', color: 'linear-gradient(135deg,#16A34A,#F59E0B)',
    school: 'Green Valley Public School · Finance Dept.',
    nav: [
      { s: 'Overview', items: [{ id: 'acc-dashboard', icon: '📊', label: 'Finance Dashboard' }] },
      { s: 'Fee Management', items: [{ id: 'acc-fees', icon: '💰', label: 'Fee Collection' }, { id: 'acc-defaulters', icon: '⚠️', label: 'Defaulters', badge: '73' }, { id: 'acc-receipts', icon: '🧾', label: 'Receipts' }] },
      { s: 'Payroll', items: [{ id: 'acc-payroll', icon: '💼', label: 'Staff Payroll' }, { id: 'acc-expenses', icon: '📉', label: 'Expenses' }] },
      { s: 'Reports', items: [{ id: 'acc-reports', icon: '📊', label: 'Financial Reports' }] }
    ],
    defaultPage: 'acc-dashboard',
    mobileNav: [{ id: 'acc-dashboard', icon: '📊', label: 'Home' }, { id: 'acc-fees', icon: '💰', label: 'Fees' }, { id: 'acc-defaulters', icon: '⚠️', label: 'Dues' }, { id: 'acc-payroll', icon: '💼', label: 'Payroll' }, { id: 'acc-reports', icon: '📊', label: 'Reports' }]
  }
};

export const USER_NAMES = {
  admin: 'Admin User',
  principal: 'Dr. K. Sharma',
  teacher: 'Mrs. Priya Rajan',
  student: 'Ananya Krishnamurthy',
  parent: 'Mr. Ravi Krishnamurthy',
  accountant: 'Smt. Leela Murthy'
};

export const PAGE_INFO = {
  'dashboard': { title: 'Admin Dashboard', sub: 'Green Valley Public School · 26 Feb 2025' },
  'students': { title: 'Student Management', sub: '1,847 students enrolled' },
  'attendance': { title: 'Attendance Management', sub: 'Daily & period-wise tracking' },
  'results': { title: 'Examinations & Results', sub: 'Marks, grades, report cards' },
  'admissions': { title: 'Admissions 2025-26', sub: 'Application & approval workflow' },
  'staff': { title: 'Staff Directory', sub: 'Teaching & non-teaching staff' },
  'fees': { title: 'Fee Management', sub: 'Collections, dues & receipts' },
  'payroll': { title: 'Payroll & HR', sub: 'Salary, leaves & payslips' },
  'communication': { title: 'Communication Center', sub: 'Announcements & notifications' },
  'library': { title: 'Library Management', sub: 'Books, issues & fines' },
  'transport': { title: 'Transport Management', sub: 'Routes, buses & drivers' },
  'reports': { title: 'Reports & Analytics', sub: 'Export PDF, Excel, CSV' },
  'p-dashboard': { title: 'Principal Dashboard', sub: 'School-wide overview' },
  'p-academics': { title: 'Academic Overview', sub: 'Class performance & analysis' },
  'p-performance': { title: 'Performance Analytics', sub: 'Student & teacher insights' },
  'p-timetable': { title: 'Timetable Overview', sub: 'School schedule management' },
  'p-staff': { title: 'Staff Management', sub: 'Leave approvals, attendance' },
  'p-students': { title: 'Student Overview', sub: 'Enrollment & performance' },
  'p-communication': { title: 'Communication', sub: 'Broadcast notices & alerts' },
  'p-reports': { title: 'Reports', sub: 'Academic & financial summaries' },
  't-dashboard': { title: 'My Dashboard', sub: "Today's schedule & tasks" },
  't-attendance': { title: 'Mark Attendance', sub: 'Class XII-A attendance' },
  't-assignments': { title: 'Assignments', sub: 'Upload, review & grade' },
  't-marks': { title: 'Marks & Grades', sub: 'Enter & manage marks' },
  't-timetable': { title: 'My Timetable', sub: 'Weekly schedule' },
  't-students': { title: 'My Students', sub: 'Class XII-A student list' },
  't-performance': { title: 'Student Performance', sub: 'Analytics & comparison' },
  't-communication': { title: 'Communication', sub: 'Message parents & students' },
  's-dashboard': { title: 'My Dashboard', sub: 'Ananya Krishnamurthy · XII-A' },
  's-timetable': { title: 'My Timetable', sub: "Today's class schedule" },
  's-assignments': { title: 'Assignments', sub: 'Pending & submitted tasks' },
  's-results': { title: 'My Results', sub: 'Marks & grade cards' },
  's-analytics': { title: 'My Performance', sub: 'Subject-wise analytics' },
  's-fees': { title: 'Fee Details', sub: 'Payment history & status' },
  's-notices': { title: 'Notices & Announcements', sub: 'School updates' },
  'par-dashboard': { title: 'Parent Dashboard', sub: 'Ananya Krishnamurthy (XII-A)' },
  'par-attendance': { title: 'Attendance Tracker', sub: "Ananya's attendance record" },
  'par-results': { title: 'Results & Marks', sub: 'Academic performance' },
  'par-fees': { title: 'Fee Payment', sub: 'View dues & pay online' },
  'par-communication': { title: 'Messages', sub: 'Chat with teachers' },
  'par-notices': { title: 'School Notices', sub: 'Announcements & updates' },
  'acc-dashboard': { title: 'Finance Dashboard', sub: 'Daily collections & summary' },
  'acc-fees': { title: 'Fee Collection', sub: 'Receive & track payments' },
  'acc-defaulters': { title: 'Fee Defaulters', sub: '73 pending students' },
  'acc-receipts': { title: 'Receipts', sub: 'Payment receipts & records' },
  'acc-payroll': { title: 'Staff Payroll', sub: 'Feb 2025 payroll' },
  'acc-expenses': { title: 'Expense Tracker', sub: 'School expenditure' },
  'acc-reports': { title: 'Financial Reports', sub: 'GST, P&L, exports' },
};

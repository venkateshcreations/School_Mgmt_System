// Views data extracted from original HTML
// Each view contains the HTML template for a page

// ── ADMIN VIEWS ──
function getAdminViews(){return[
{id:'dashboard',html:`
<div class="page-header"><div><div class="page-title">📊 Admin Dashboard</div><div class="page-sub">Green Valley Public School · Wednesday, 26 Feb 2025</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📥 Export PDF</button><button class="btn btn-primary btn-sm">+ Quick Add</button></div></div>
<div class="alert alert-info"><span>📢</span><span><strong>Announcement:</strong> Annual Sports Day on 15th March 2025. Entries due 5th March.</span></div>
<div class="stats-grid">
<div class="stat-card blue"><div class="stat-icon-wrap">👨‍🎓</div><div class="stat-value">1,847</div><div class="stat-label">Total Students</div><div class="stat-change up">↑ 4.2% vs last year</div></div>
<div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">92.4%</div><div class="stat-label">Attendance Today</div><div class="stat-change up">↑ 1.8% vs yesterday</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">💰</div><div class="stat-value">₹38.4L</div><div class="stat-label">Fee Collection (Month)</div><div class="stat-change down">↓ 2.1% vs last month</div></div>
<div class="stat-card red"><div class="stat-icon-wrap">⚠️</div><div class="stat-value">73</div><div class="stat-label">Fee Defaulters</div><div class="stat-change up">↓ 12 resolved</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">👩‍🏫</div><div class="stat-value">124</div><div class="stat-label">Active Staff</div><div class="stat-change up">↑ 3 new joins</div></div>
<div class="stat-card cyan"><div class="stat-icon-wrap">📋</div><div class="stat-value">42</div><div class="stat-label">Pending Admissions</div><div class="stat-change neu">Awaiting approval</div></div>
</div>
<div class="g21 mb16">
<div class="card"><div class="card-header"><span class="card-title">📈 Revenue vs Expense (2024-25)</span></div><div class="card-body"><div class="chart-container"><canvas id="c-admin-rev"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">🏫 Class-wise Strength</span></div><div class="card-body"><div class="chart-container"><canvas id="c-admin-class"></canvas></div></div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">📅 Monthly Admissions</span></div><div class="card-body"><div class="chart-container"><canvas id="c-admin-adm"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">📊 Attendance Trend</span></div><div class="card-body"><div class="chart-container"><canvas id="c-admin-att"></canvas></div></div></div>
</div>
<div class="card"><div class="card-header"><span class="card-title">⚡ Quick Actions</span></div><div class="card-body"><div style="display:flex;gap:8px;flex-wrap:wrap;">
<button class="btn btn-outline btn-sm" onclick="navigate('admissions')">📝 New Admission</button>
<button class="btn btn-outline btn-sm" onclick="navigate('attendance')">✅ Attendance</button>
<button class="btn btn-outline btn-sm" onclick="navigate('fees')">💳 Collect Fee</button>
<button class="btn btn-outline btn-sm" onclick="navigate('results')">📊 Enter Marks</button>
<button class="btn btn-outline btn-sm" onclick="navigate('communication')">📢 Announcement</button>
<button class="btn btn-outline btn-sm" onclick="navigate('staff')">👤 Add Staff</button>
<button class="btn btn-outline btn-sm" onclick="navigate('payroll')">💼 Run Payroll</button>
<button class="btn btn-outline btn-sm" onclick="navigate('reports')">📋 Reports</button>
</div></div></div>
`},
{id:'students',html:`<div class="page-header"><div><div class="page-title">👨‍🎓 Student Management</div><div class="page-sub">1,847 students enrolled</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📊 Export</button><button class="btn btn-primary btn-sm">+ Add Student</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
<div class="stat-card blue"><div class="stat-icon-wrap">👨‍🎓</div><div class="stat-value">1,847</div><div class="stat-label">Total Students</div></div>
<div class="stat-card green"><div class="stat-icon-wrap">🧒</div><div class="stat-value">934</div><div class="stat-label">Male</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">👧</div><div class="stat-value">913</div><div class="stat-label">Female</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">🆕</div><div class="stat-value">68</div><div class="stat-label">New This Year</div></div>
</div>
<div class="card"><div class="card-header"><span class="card-title">Student Directory</span><div style="display:flex;gap:8px;"><input class="filter-input" placeholder="🔍 Search..."><select class="filter-select"><option>All Classes</option><option>Class X</option><option>Class XI</option><option>Class XII</option></select></div></div>
<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Name</th><th>Class</th><th>Parent</th><th>Phone</th><th>Fee</th><th>Attendance</th><th>Actions</th></tr></thead><tbody>
<tr><td><strong>2401</strong></td><td><div style="display:flex;align-items:center;gap:8px;"><div class="avatar" style="background:linear-gradient(135deg,#2563EB,#7C3AED);width:28px;height:28px;font-size:11px;">A</div><div><div style="font-weight:600">Ananya Krishnamurthy</div></div></div></td><td><span class="badge badge-primary">XII-A</span></td><td>Ravi Krishnamurthy</td><td>98765-43210</td><td><span class="badge badge-success">Paid</span></td><td><span style="color:var(--success);font-weight:700">98%</span></td><td><div style="display:flex;gap:4px;"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">✏️</button></div></td></tr>
<tr><td><strong>2402</strong></td><td><div style="display:flex;align-items:center;gap:8px;"><div class="avatar" style="background:linear-gradient(135deg,#16A34A,#0891B2);width:28px;height:28px;font-size:11px;">R</div><div><div style="font-weight:600">Rohan Mehta</div></div></div></td><td><span class="badge badge-primary">XII-B</span></td><td>Suresh Mehta</td><td>87654-32109</td><td><span class="badge badge-success">Paid</span></td><td><span style="color:var(--success);font-weight:700">95%</span></td><td><div style="display:flex;gap:4px;"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">✏️</button></div></td></tr>
<tr><td><strong>2404</strong></td><td><div style="display:flex;align-items:center;gap:8px;"><div class="avatar" style="background:linear-gradient(135deg,#F59E0B,#DC2626);width:28px;height:28px;font-size:11px;">A</div><div><div style="font-weight:600">Arjun Patel</div></div></div></td><td><span class="badge badge-primary">X-C</span></td><td>Dinesh Patel</td><td>65432-10987</td><td><span class="badge badge-danger">Overdue</span></td><td><span style="color:var(--warning);font-weight:700">82%</span></td><td><div style="display:flex;gap:4px;"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">✏️</button></div></td></tr>
</tbody></table></div><div class="card-footer" style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--text-muted)">Showing 3 of 1,847</span><div style="display:flex;gap:4px;"><button class="btn btn-outline btn-sm">← Prev</button><button class="btn btn-primary btn-sm">1</button><button class="btn btn-outline btn-sm">Next →</button></div></div></div>`},
{id:'attendance',html:`<div class="page-header"><div><div class="page-title">✅ Attendance Management</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">📱 SMS Absentees</button></div></div>
<div class="g2 mb16"><div class="card"><div class="card-header"><span class="card-title">Mark Today's Attendance</span><select class="filter-select"><option>Class X-A</option><option>Class XII-A</option></select></div><div class="table-wrap"><table><thead><tr><th>Roll</th><th>Student</th><th>Status</th></tr></thead><tbody>
<tr><td>01</td><td>Aarav Sharma</td><td><div style="display:flex;gap:5px;"><button class="btn btn-success btn-sm" style="padding:4px 10px;font-size:11px;">P</button><button class="btn btn-danger btn-sm" style="padding:4px 10px;font-size:11px;">A</button><button class="btn btn-warning btn-sm" style="padding:4px 10px;font-size:11px;">L</button></div></td></tr>
<tr><td>02</td><td>Aditi Gupta</td><td><div style="display:flex;gap:5px;"><button class="btn btn-success btn-sm" style="padding:4px 10px;font-size:11px;">P</button><button class="btn btn-danger btn-sm" style="padding:4px 10px;font-size:11px;">A</button><button class="btn btn-warning btn-sm" style="padding:4px 10px;font-size:11px;">L</button></div></td></tr>
</tbody></table></div><div class="card-footer"><button class="btn btn-primary" style="width:100%">✅ Submit Attendance</button></div></div>
<div class="card"><div class="card-header"><span class="card-title">Class-wise Today</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div style="background:var(--surface2);border-radius:var(--radius);padding:12px;border:1px solid var(--border);"><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><strong>XII-A</strong><span style="color:var(--success);font-weight:700">95.7%</span></div><div class="progress-bar"><div class="progress-fill" style="width:95.7%;background:var(--success)"></div></div></div>
<div style="background:var(--surface2);border-radius:var(--radius);padding:12px;border:1px solid var(--border);"><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><strong>X-A</strong><span style="color:var(--primary);font-weight:700">90.5%</span></div><div class="progress-bar"><div class="progress-fill" style="width:90.5%;background:var(--primary)"></div></div></div>
<div style="background:var(--surface2);border-radius:var(--radius);padding:12px;border:1px solid var(--border);"><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><strong>XI-A</strong><span style="color:var(--warning);font-weight:700">83.3%</span></div><div class="progress-bar"><div class="progress-fill" style="width:83.3%;background:var(--warning)"></div></div></div>
</div></div></div>`,},
{id:'results',html:`<div class="page-header"><div><div class="page-title">📝 Examinations & Results</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Create Exam</button></div></div>
<div class="card"><div class="card-header"><span class="card-title">Exam Schedule 2024-25</span></div><div class="table-wrap"><table><thead><tr><th>Exam</th><th>Dates</th><th>Classes</th><th>Status</th><th>Action</th></tr></thead><tbody>
<tr><td><strong>Unit Test 1</strong></td><td>10–14 Jan</td><td>I–XII</td><td><span class="badge badge-success">Completed</span></td><td><button class="btn btn-outline btn-sm">View Results</button></td></tr>
<tr><td><strong>Mid-Term Exam</strong></td><td>10–20 Feb</td><td>I–XII</td><td><span class="badge badge-warning">In Progress</span></td><td><button class="btn btn-primary btn-sm">Enter Marks</button></td></tr>
<tr><td><strong>Annual Exam</strong></td><td>1–15 Apr</td><td>I–XII</td><td><span class="badge badge-gray">Upcoming</span></td><td><button class="btn btn-outline btn-sm">Schedule</button></td></tr>
</tbody></table></div></div>`,},
{id:'admissions',html:`<div class="page-header"><div><div class="page-title">📋 Admissions 2025-26</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ New Application</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
<div class="stat-card blue"><div class="stat-icon-wrap">📝</div><div class="stat-value">156</div><div class="stat-label">Applications</div></div>
<div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">89</div><div class="stat-label">Approved</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">⏳</div><div class="stat-value">42</div><div class="stat-label">Pending</div></div>
<div class="stat-card red"><div class="stat-icon-wrap">❌</div><div class="stat-value">25</div><div class="stat-label">Rejected</div></div>
</div>
<div class="card"><div class="card-header"><span class="card-title">Recent Applications</span><select class="filter-select"><option>All Status</option><option>Pending</option></select></div><div class="table-wrap"><table><thead><tr><th>App #</th><th>Student</th><th>Class</th><th>Date</th><th>Status</th><th>Action</th></tr></thead><tbody>
<tr><td>#A-156</td><td><strong>Ishaan Gupta</strong></td><td>Class VI</td><td>25 Feb</td><td><span class="badge badge-warning">Pending</span></td><td><div style="display:flex;gap:4px;"><button class="btn btn-success btn-sm">✓ Approve</button><button class="btn btn-danger btn-sm">✗</button></div></td></tr>
<tr><td>#A-155</td><td><strong>Diya Malhotra</strong></td><td>Class I</td><td>24 Feb</td><td><span class="badge badge-success">Approved</span></td><td><button class="btn btn-outline btn-sm">📋 View</button></td></tr>
<tr><td>#A-154</td><td><strong>Kabir Rawal</strong></td><td>Class IX</td><td>23 Feb</td><td><span class="badge badge-warning">Docs Pending</span></td><td><button class="btn btn-outline btn-sm">📋 View</button></td></tr>
</tbody></table></div></div>`,},
{id:'staff',html:`<div class="page-header"><div><div class="page-title">👩‍🏫 Staff Management</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Add Staff</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
<div class="stat-card blue"><div class="stat-icon-wrap">👩‍🏫</div><div class="stat-value">87</div><div class="stat-label">Teaching</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">👤</div><div class="stat-value">37</div><div class="stat-label">Non-Teaching</div></div>
<div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">118</div><div class="stat-label">Present</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">📋</div><div class="stat-value">6</div><div class="stat-label">On Leave</div></div>
</div>
<div class="card"><div class="card-header"><span class="card-title">Staff Directory</span><input class="filter-input" placeholder="🔍 Search staff..."></div><div class="table-wrap"><table><thead><tr><th>ID</th><th>Name</th><th>Dept.</th><th>Designation</th><th>Status</th><th>Actions</th></tr></thead><tbody>
<tr><td>S001</td><td><div style="display:flex;align-items:center;gap:8px;"><div class="avatar" style="background:linear-gradient(135deg,#2563EB,#0891B2);width:28px;height:28px;font-size:11px;">P</div><div><div style="font-weight:600">Dr. Priya Sharma</div><div style="font-size:11px;color:var(--text-muted)">priya.s@school.edu</div></div></div></td><td>Science</td><td>HOD Physics</td><td><span class="badge badge-success">Active</span></td><td><div style="display:flex;gap:4px;"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">✏️</button></div></td></tr>
<tr><td>S002</td><td><div style="display:flex;align-items:center;gap:8px;"><div class="avatar" style="background:linear-gradient(135deg,#16A34A,#F59E0B);width:28px;height:28px;font-size:11px;">R</div><div><div style="font-weight:600">Ramesh Kumar</div><div style="font-size:11px;color:var(--text-muted)">ramesh.k@school.edu</div></div></div></td><td>Mathematics</td><td>Senior Teacher</td><td><span class="badge badge-warning">On Leave</span></td><td><div style="display:flex;gap:4px;"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">✏️</button></div></td></tr>
</tbody></table></div></div>`,},
{id:'fees',html:`<div class="page-header"><div><div class="page-title">💰 Fee Management</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Collect Fee</button></div></div>
<div class="stats-grid"><div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">₹38.4L</div><div class="stat-label">Collected (Month)</div></div><div class="stat-card red"><div class="stat-icon-wrap">⚠️</div><div class="stat-value">₹12.8L</div><div class="stat-label">Outstanding</div></div><div class="stat-card amber"><div class="stat-icon-wrap">⏰</div><div class="stat-value">73</div><div class="stat-label">Defaulters</div></div><div class="stat-card blue"><div class="stat-icon-wrap">📊</div><div class="stat-value">75%</div><div class="stat-label">Collection Rate</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Fee Structure 2024-25</span></div><div class="table-wrap"><table><thead><tr><th>Class</th><th>Tuition/mo</th><th>Transport/mo</th><th>Annual Fee</th><th>Total Annual</th></tr></thead><tbody>
<tr><td>I–V</td><td>₹4,500</td><td>₹1,200</td><td>₹8,000</td><td><strong>₹1,30,000</strong></td></tr>
<tr><td>VI–VIII</td><td>₹5,500</td><td>₹1,500</td><td>₹10,000</td><td><strong>₹1,60,000</strong></td></tr>
<tr><td>IX–X</td><td>₹6,500</td><td>₹1,500</td><td>₹12,000</td><td><strong>₹1,92,000</strong></td></tr>
<tr><td>XI–XII</td><td>₹8,500</td><td>₹1,800</td><td>₹15,000</td><td><strong>₹2,53,200</strong></td></tr>
</tbody></table></div></div>`,},
{id:'payroll',html:`<div class="page-header"><div><div class="page-title">💼 Payroll & HR</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">▶ Run Payroll Feb 2025</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card blue"><div class="stat-icon-wrap">💵</div><div class="stat-value">₹28.4L</div><div class="stat-label">Total Payroll</div></div><div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">118</div><div class="stat-label">Processed</div></div><div class="stat-card amber"><div class="stat-icon-wrap">⏳</div><div class="stat-value">6</div><div class="stat-label">Pending</div></div><div class="stat-card purple"><div class="stat-icon-wrap">📋</div><div class="stat-value">14</div><div class="stat-label">Leave Requests</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Payroll — February 2025</span></div><div class="table-wrap"><table><thead><tr><th>Staff ID</th><th>Name</th><th>Basic</th><th>HRA</th><th>Deductions</th><th>Net Pay</th><th>Status</th><th>Action</th></tr></thead><tbody>
<tr><td>S001</td><td>Dr. Priya Sharma</td><td>₹62,000</td><td>₹18,600</td><td>₹8,240</td><td><strong>₹81,660</strong></td><td><span class="badge badge-success">Done</span></td><td><button class="btn btn-outline btn-sm">🖨</button></td></tr>
<tr><td>S002</td><td>Ramesh Kumar</td><td>₹55,000</td><td>₹16,500</td><td>₹7,120</td><td><strong>₹72,630</strong></td><td><span class="badge badge-warning">Pending</span></td><td><button class="btn btn-primary btn-sm">Process</button></td></tr>
</tbody></table></div></div>`,},
{id:'communication',html:`<div class="page-header"><div><div class="page-title">📢 Communication Center</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Announcement</button></div></div>
<div class="g2 mb16"><div class="card"><div class="card-header"><span class="card-title">Recent Announcements</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div class="notice-card blue-l"><div style="font-weight:700;margin-bottom:4px;">Sports Day — 15th March</div><div style="font-size:13px;color:var(--text-secondary)">Annual Sports Day scheduled. All teachers to submit student entries by 5th March.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px;">26 Feb · Admin · All</div></div>
<div class="notice-card amber-l"><div style="font-weight:700;margin-bottom:4px;">Mid-Term Results Published</div><div style="font-size:13px;color:var(--text-secondary)">Results now available on student portal.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px;">24 Feb · Exam Dept · Parents & Students</div></div>
<div class="notice-card green-l"><div style="font-weight:700;margin-bottom:4px;">Holiday — Holi (14th March)</div><div style="font-size:13px;color:var(--text-secondary)">School closed on 14th March 2025.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px;">22 Feb · Principal · All</div></div>
</div></div>
<div class="card"><div class="card-header"><span class="card-title">📱 Send Notification</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div class="form-group" style="margin-bottom:0;"><label class="form-label" style="font-size:11px;color:var(--text-muted);font-weight:700;display:block;margin-bottom:4px;">Target</label><select class="form-select"><option>All Students & Parents</option><option>Fee Defaulters</option><option>Class-wise</option><option>All Staff</option></select></div>
<div class="form-group" style="margin-bottom:0;"><label class="form-label" style="font-size:11px;color:var(--text-muted);font-weight:700;display:block;margin-bottom:4px;">Subject</label><input class="form-input" placeholder="Notification subject..."></div>
<div class="form-group" style="margin-bottom:0;"><label class="form-label" style="font-size:11px;color:var(--text-muted);font-weight:700;display:block;margin-bottom:4px;">Message</label><textarea class="form-input" rows="3" style="resize:vertical;" placeholder="Type message..."></textarea></div>
<div style="display:flex;gap:6px;flex-wrap:wrap;"><label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer;"><input type="checkbox" checked> SMS</label><label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer;"><input type="checkbox" checked> Email</label><label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer;"><input type="checkbox"> WhatsApp</label></div>
<button class="btn btn-primary" style="width:100%">📤 Send Now</button>
</div></div></div>`,},
{id:'library',html:`<div class="page-header"><div><div class="page-title">📚 Library Management</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">📖 Issue Book</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card blue"><div class="stat-icon-wrap">📚</div><div class="stat-value">8,420</div><div class="stat-label">Total Books</div></div><div class="stat-card amber"><div class="stat-icon-wrap">📖</div><div class="stat-value">341</div><div class="stat-label">Issued</div></div><div class="stat-card red"><div class="stat-icon-wrap">⚠️</div><div class="stat-value">27</div><div class="stat-label">Overdue</div></div><div class="stat-card green"><div class="stat-icon-wrap">💰</div><div class="stat-value">₹2,450</div><div class="stat-label">Fines Collected</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Recent Issues</span></div><div class="table-wrap"><table><thead><tr><th>Book</th><th>ISBN</th><th>Student</th><th>Due</th><th>Status</th></tr></thead><tbody>
<tr><td><strong>Wings of Fire</strong></td><td>978-81-237-3930-4</td><td>Ananya K.</td><td>5 Mar</td><td><span class="badge badge-success">On Time</span></td></tr>
<tr><td><strong>Discovery of India</strong></td><td>978-0-14-303335-8</td><td>Rohan M.</td><td>24 Feb</td><td><span class="badge badge-danger">Overdue +2d</span></td></tr>
</tbody></table></div></div>`,},
{id:'transport',html:`<div class="page-header"><div><div class="page-title">🚌 Transport Management</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Add Route</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card blue"><div class="stat-icon-wrap">🚌</div><div class="stat-value">12</div><div class="stat-label">Buses</div></div><div class="stat-card green"><div class="stat-icon-wrap">🛣️</div><div class="stat-value">8</div><div class="stat-label">Routes</div></div><div class="stat-card purple"><div class="stat-icon-wrap">👨‍🎓</div><div class="stat-value">624</div><div class="stat-label">Students</div></div><div class="stat-card amber"><div class="stat-icon-wrap">👨‍✈️</div><div class="stat-value">12</div><div class="stat-label">Drivers</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Route Overview</span></div><div class="table-wrap"><table><thead><tr><th>Route</th><th>Name</th><th>Bus</th><th>Driver</th><th>Students</th><th>Status</th><th>Action</th></tr></thead><tbody>
<tr><td><strong>RT-01</strong></td><td>Koramangala</td><td>KA-05-F-2341</td><td>Suresh D.</td><td>52</td><td><span class="badge badge-success">On Route</span></td><td><button class="btn btn-outline btn-sm">📍 Track</button></td></tr>
<tr><td><strong>RT-03</strong></td><td>BTM Layout</td><td>KA-05-H-4421</td><td>Murugan K.</td><td>48</td><td><span class="badge badge-danger">Delayed 15min</span></td><td><button class="btn btn-danger btn-sm">⚠ Alert</button></td></tr>
</tbody></table></div></div>`,},
{id:'reports',html:`<div class="page-header"><div><div class="page-title">📊 Reports & Analytics</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">⬇ Download All</button></div></div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;">
<div class="card" style="cursor:pointer;"><div class="card-body" style="text-align:center;padding:24px 16px;"><div style="font-size:32px;margin-bottom:10px;">📋</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px;margin-bottom:5px;">Student Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">Enrollment, demographics, class-wise</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card" style="cursor:pointer;"><div class="card-body" style="text-align:center;padding:24px 16px;"><div style="font-size:32px;margin-bottom:10px;">💰</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px;margin-bottom:5px;">Financial Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">Fee, payroll, expenses</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card" style="cursor:pointer;"><div class="card-body" style="text-align:center;padding:24px 16px;"><div style="font-size:32px;margin-bottom:10px;">✅</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px;margin-bottom:5px;">Attendance Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">Daily &amp; monthly tracking</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card" style="cursor:pointer;"><div class="card-body" style="text-align:center;padding:24px 16px;"><div style="font-size:32px;margin-bottom:10px;">📝</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px;margin-bottom:5px;">Exam Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">Marks, grades, toppers</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card" style="cursor:pointer;"><div class="card-body" style="text-align:center;padding:24px 16px;"><div style="font-size:32px;margin-bottom:10px;">📚</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px;margin-bottom:5px;">Library Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">Books, fines, inventory</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card" style="cursor:pointer;"><div class="card-body" style="text-align:center;padding:24px 16px;"><div style="font-size:32px;margin-bottom:10px;">🚌</div><div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:14px;margin-bottom:5px;">Transport Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">Routes, buses, fees</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div>
</div>`,}
];}

// ── PRINCIPAL VIEWS ──
function getPrincipalViews(){return[
{id:'p-dashboard',html:`
<div class="page-header"><div><div class="page-title">👔 Principal Dashboard</div><div class="page-sub">Green Valley Public School · 26 Feb 2025</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📄 Export Report</button><button class="btn btn-primary btn-sm">📢 Broadcast</button></div></div>
<div class="alert alert-warning"><span>⚠️</span><span><strong>Action Required:</strong> 8 leave applications pending approval. 3 exam result approvals waiting.</span></div>
<div class="stats-grid">
<div class="stat-card blue"><div class="stat-icon-wrap">👨‍🎓</div><div class="stat-value">1,847</div><div class="stat-label">Total Students</div><div class="stat-change up">↑ 4.2% YoY</div></div>
<div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">92.4%</div><div class="stat-label">Attendance Today</div><div class="stat-change up">↑ 1.8%</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">👩‍🏫</div><div class="stat-value">124</div><div class="stat-label">Total Staff</div><div class="stat-change neu">118 present today</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">💰</div><div class="stat-value">₹38.4L</div><div class="stat-label">Fee Collection (Month)</div><div class="stat-change up">75% rate</div></div>
<div class="stat-card red"><div class="stat-icon-wrap">📝</div><div class="stat-value">3</div><div class="stat-label">Pending Result Approvals</div><div class="stat-change neu">Exam dept</div></div>
<div class="stat-card cyan"><div class="stat-icon-wrap">📅</div><div class="stat-value">5</div><div class="stat-label">Upcoming Exams</div><div class="stat-change neu">Next: Mar 15</div></div>
</div>
<div class="g21 mb16">
<div class="card"><div class="card-header"><span class="card-title">📊 Attendance Trend (2024-25)</span></div><div class="card-body"><div class="chart-container"><canvas id="c-p-att"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">🏫 Class Strength</span></div><div class="card-body"><div class="chart-container"><canvas id="c-p-class"></canvas></div></div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">💰 Revenue vs Expense</span></div><div class="card-body"><div class="chart-container"><canvas id="c-p-rev"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">🕐 Recent Activity</span></div><div class="card-body" style="max-height:240px;overflow-y:auto;"><div class="timeline">
<div class="timeline-item"><div class="timeline-dot"></div><div style="margin-bottom:2px;"><div class="timeline-time">10:32 AM</div><div class="timeline-text">Fee payment: <strong>Aryan Sharma (X-A)</strong> — ₹12,500</div></div></div>
<div class="timeline-item"><div class="timeline-dot" style="background:var(--success)"></div><div><div class="timeline-time">10:15 AM</div><div class="timeline-text">New admission approved: <strong>Priya Nair</strong> — Class 6-B</div></div></div>
<div class="timeline-item"><div class="timeline-dot" style="background:var(--warning)"></div><div><div class="timeline-time">9:47 AM</div><div class="timeline-text">Leave application: <strong>Ramesh Kumar</strong> (Math Dept)</div></div></div>
<div class="timeline-item"><div class="timeline-dot" style="background:var(--danger)"></div><div><div class="timeline-time">9:20 AM</div><div class="timeline-text">Bus Route 3 delayed — 24 students affected</div></div></div>
</div></div></div>
</div>
<div class="card"><div class="card-header"><span class="card-title">📢 Quick Actions</span></div><div class="card-body"><div style="display:flex;gap:8px;flex-wrap:wrap;">
<button class="btn btn-outline btn-sm" onclick="navigate('p-staff')">✅ Approve Leaves (8)</button>
<button class="btn btn-outline btn-sm" onclick="navigate('p-performance')">📊 View Performance</button>
<button class="btn btn-outline btn-sm" onclick="navigate('p-communication')">📢 Send Notice</button>
<button class="btn btn-outline btn-sm" onclick="navigate('p-reports')">📋 Download Report</button>
</div></div></div>
`},
{id:'p-academics',html:`<div class="page-header"><div><div class="page-title">📚 Academic Overview</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">📊 Full Report</button></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">🏆 Class-wise Top Performers</span></div><div class="table-wrap"><table><thead><tr><th>Class</th><th>Topper</th><th>Score</th><th>Class Avg</th></tr></thead><tbody>
<tr><td><span class="badge badge-primary">XII-A</span></td><td>Ananya Krishnamurthy</td><td><strong>97.4%</strong></td><td>82.1%</td></tr>
<tr><td><span class="badge badge-primary">XII-B</span></td><td>Rohan Mehta</td><td><strong>96.8%</strong></td><td>79.4%</td></tr>
<tr><td><span class="badge badge-primary">X-A</span></td><td>Kavya Reddy</td><td><strong>94.2%</strong></td><td>76.8%</td></tr>
<tr><td><span class="badge badge-primary">XI-A</span></td><td>Sneha Venkataraman</td><td><strong>95.2%</strong></td><td>80.3%</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-header"><span class="card-title">📈 Subject Performance (XII)</span></div><div class="table-wrap"><table><thead><tr><th>Subject</th><th>Avg</th><th>Pass%</th></tr></thead><tbody>
<tr><td>Mathematics</td><td><strong>82.4</strong></td><td><span class="badge badge-success">96%</span></td></tr>
<tr><td>Physics</td><td><strong>78.2</strong></td><td><span class="badge badge-primary">94%</span></td></tr>
<tr><td>Chemistry</td><td><strong>75.8</strong></td><td><span class="badge badge-warning">91%</span></td></tr>
<tr><td>English</td><td><strong>88.6</strong></td><td><span class="badge badge-success">98%</span></td></tr>
<tr><td>Computer Sc</td><td><strong>90.2</strong></td><td><span class="badge badge-success">99%</span></td></tr>
</tbody></table></div></div>
</div>
<div class="card"><div class="card-header"><span class="card-title">📋 Exam Result Approvals</span></div><div class="table-wrap"><table><thead><tr><th>Exam</th><th>Class</th><th>Submitted By</th><th>Date</th><th>Action</th></tr></thead><tbody>
<tr><td>Mid-Term Math</td><td>XII-A</td><td>Mrs. Priya R.</td><td>25 Feb</td><td><div style="display:flex;gap:4px;"><button class="btn btn-success btn-sm">✓ Approve</button><button class="btn btn-outline btn-sm">📋 Review</button></div></td></tr>
<tr><td>Mid-Term Physics</td><td>XI-A</td><td>Dr. Rajan K.</td><td>24 Feb</td><td><div style="display:flex;gap:4px;"><button class="btn btn-success btn-sm">✓ Approve</button><button class="btn btn-outline btn-sm">📋 Review</button></div></td></tr>
</tbody></table></div></div>`,},
{id:'p-performance',html:`<div class="page-header"><div><div class="page-title">📈 Performance Analytics</div></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">🎯 Subject Radar — XII-A vs XII-B</span></div><div class="card-body"><div class="chart-container"><canvas id="c-p-radar"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">🏅 Teacher Performance Notes</span></div><div class="table-wrap"><table><thead><tr><th>Teacher</th><th>Class Avg</th><th>Pass %</th><th>Rating</th></tr></thead><tbody>
<tr><td>Mrs. Priya R.</td><td>88.4%</td><td>98%</td><td><span class="badge badge-success">⭐ Excellent</span></td></tr>
<tr><td>Dr. Rajan K.</td><td>82.1%</td><td>94%</td><td><span class="badge badge-primary">👍 Good</span></td></tr>
<tr><td>Mr. Ramesh K.</td><td>76.8%</td><td>91%</td><td><span class="badge badge-warning">📈 Improving</span></td></tr>
</tbody></table></div></div>
</div>`,},
{id:'p-timetable',html:`<div class="page-header"><div><div class="page-title">📅 Timetable Overview</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">✏️ Edit Timetable</button></div></div>
<div class="card"><div class="card-header"><span class="card-title">Class XII-A Weekly Timetable</span><select class="filter-select"><option>Class XII-A</option><option>Class XII-B</option><option>Class X-A</option></select></div><div class="card-body"><div class="week-timetable">
<div class="tt-header">Period</div><div class="tt-header">Mon</div><div class="tt-header">Tue</div><div class="tt-header">Wed</div><div class="tt-header">Thu</div><div class="tt-header">Fri</div><div class="tt-header">Sat</div>
<div class="tt-time">8–9</div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div><div class="tt-cell"><span class="tt-subject" style="background:#DC2626">Physics</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#0891B2">Comp</span></div><div class="tt-cell"><span class="tt-subject" style="background:#F59E0B">PE</span></div>
<div class="tt-time">9–10</div><div class="tt-cell"><span class="tt-subject" style="background:#DC2626">Physics</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#DC2626">Physics</span></div>
<div class="tt-time">10:30–11:30</div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#0891B2">Comp</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div>
</div></div></div>`,},
{id:'p-staff',html:`<div class="page-header"><div><div class="page-title">👩‍🏫 Staff Management</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">✅ Approve All Leaves</button></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">⏳ Pending Leave Approvals (8)</span></div><div class="table-wrap"><table><thead><tr><th>Staff Name</th><th>Type</th><th>Dates</th><th>Reason</th><th>Action</th></tr></thead><tbody>
<tr><td>Ramesh Kumar</td><td><span class="badge badge-warning">Casual</span></td><td>27–28 Feb</td><td>Personal</td><td><div style="display:flex;gap:4px;"><button class="btn btn-success btn-sm">✓</button><button class="btn btn-danger btn-sm">✗</button></div></td></tr>
<tr><td>Meera Nambiar</td><td><span class="badge badge-primary">Medical</span></td><td>3–5 Mar</td><td>Doctor visit</td><td><div style="display:flex;gap:4px;"><button class="btn btn-success btn-sm">✓</button><button class="btn btn-danger btn-sm">✗</button></div></td></tr>
<tr><td>Suresh Bhat</td><td><span class="badge badge-purple">Earned</span></td><td>10 Mar</td><td>Family event</td><td><div style="display:flex;gap:4px;"><button class="btn btn-success btn-sm">✓</button><button class="btn btn-danger btn-sm">✗</button></div></td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-header"><span class="card-title">Staff Attendance Today</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);"><span style="font-size:13px">Present</span><strong style="color:var(--success)">118 / 124</strong></div>
<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);"><span style="font-size:13px">On Leave</span><strong style="color:var(--warning)">6</strong></div>
<div style="display:flex;justify-content:space-between;padding:8px 0;"><span style="font-size:13px">Attendance Rate</span><strong style="color:var(--primary)">95.2%</strong></div>
<div class="progress-bar" style="margin-top:4px;"><div class="progress-fill" style="width:95.2%;background:var(--primary)"></div></div>
</div></div>
</div>`,},
{id:'p-students',html:`<div class="page-header"><div><div class="page-title">👨‍🎓 Student Overview</div></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card blue"><div class="stat-icon-wrap">👨‍🎓</div><div class="stat-value">1,847</div><div class="stat-label">Total Students</div></div><div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">92.4%</div><div class="stat-label">Present Today</div></div><div class="stat-card amber"><div class="stat-icon-wrap">📝</div><div class="stat-value">89%</div><div class="stat-label">Pass Rate (Mid-Term)</div></div><div class="stat-card red"><div class="stat-icon-wrap">⚠️</div><div class="stat-value">23</div><div class="stat-label">Needs Attention</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Students Needing Attention</span></div><div class="table-wrap"><table><thead><tr><th>Name</th><th>Class</th><th>Attendance</th><th>Avg Score</th><th>Fee</th><th>Action</th></tr></thead><tbody>
<tr><td>Arjun Patel</td><td>X-C</td><td><span style="color:var(--danger);font-weight:700">72%</span></td><td>61%</td><td><span class="badge badge-danger">Overdue</span></td><td><button class="btn btn-outline btn-sm">Counsel</button></td></tr>
<tr><td>Ritu Sharma</td><td>IX-B</td><td><span style="color:var(--warning);font-weight:700">79%</span></td><td>58%</td><td><span class="badge badge-success">Paid</span></td><td><button class="btn btn-outline btn-sm">Counsel</button></td></tr>
</tbody></table></div></div>`,},
{id:'p-communication',html:`<div class="page-header"><div><div class="page-title">📢 Communication</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">📢 Broadcast Now</button></div></div>
<div class="g2 mb16"><div class="card"><div class="card-header"><span class="card-title">Sent Notices</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div class="notice-card blue-l"><div style="font-weight:700">Sports Day Notice</div><div style="font-size:12px;color:var(--text-muted);margin-top:4px;">Sent to: All · 26 Feb 2025</div></div>
<div class="notice-card green-l"><div style="font-weight:700">Parent-Teacher Meeting — 12th March</div><div style="font-size:12px;color:var(--text-muted);margin-top:4px;">Sent to: Parents of IX–XII · 20 Feb 2025</div></div>
<div class="notice-card amber-l"><div style="font-weight:700">Holiday List 2025</div><div style="font-size:12px;color:var(--text-muted);margin-top:4px;">Sent to: All · 1 Jan 2025</div></div>
</div></div>
<div class="card"><div class="card-header"><span class="card-title">New Broadcast / Emergency Alert</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<select class="form-select"><option>All Students & Parents</option><option>All Teachers</option><option>Emergency Alert — All</option></select>
<input class="form-input" placeholder="Notice title...">
<textarea class="form-input" rows="4" style="resize:vertical;" placeholder="Notice content..."></textarea>
<div style="display:flex;gap:8px;"><button class="btn btn-primary" style="flex:1">📢 Broadcast</button><button class="btn btn-danger" style="flex:1">🚨 Emergency Alert</button></div>
</div></div></div>`,},
{id:'p-reports',html:`<div class="page-header"><div><div class="page-title">🗂️ Reports</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">⬇ Download All</button></div></div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
<div class="card"><div class="card-body" style="text-align:center;padding:22px 14px;"><div style="font-size:30px;margin-bottom:10px;">📊</div><div style="font-weight:700;font-size:14px;margin-bottom:4px;">Academic Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">Class performance, grades, analytics</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:22px 14px;"><div style="font-size:30px;margin-bottom:10px;">✅</div><div style="font-weight:700;font-size:14px;margin-bottom:4px;">Attendance Summary</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">Class &amp; student-wise report</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:22px 14px;"><div style="font-size:30px;margin-bottom:10px;">💰</div><div style="font-weight:700;font-size:14px;margin-bottom:4px;">Financial Overview</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">Revenue, fees, expenses</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:22px 14px;"><div style="font-size:30px;margin-bottom:10px;">👩‍🏫</div><div style="font-weight:700;font-size:14px;margin-bottom:4px;">Staff Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">Attendance, performance, leaves</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:22px 14px;"><div style="font-size:30px;margin-bottom:10px;">📈</div><div style="font-weight:700;font-size:14px;margin-bottom:4px;">Progress Report</div><div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;">Year-on-year comparison</div><div style="display:flex;gap:6px;justify-content:center;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button></div></div></div>
</div>`,}
];}

// ── TEACHER VIEWS ──
function getTeacherViews(){return[
{id:'t-dashboard',html:`
<div class="page-header"><div><div class="page-title">👩‍🏫 My Dashboard</div><div class="page-sub">Mrs. Priya Rajan · Class Teacher XII-A · 26 Feb 2025</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">📝 Mark Attendance</button></div></div>
<div class="alert alert-info"><span>📋</span><span>You have <strong>3 assignments</strong> pending review and <strong>1 pending attendance</strong> (Period 4 – Chemistry).</span></div>
<div class="stats-grid">
<div class="stat-card blue"><div class="stat-icon-wrap">🏫</div><div class="stat-value">3</div><div class="stat-label">Classes Today</div><div class="stat-change neu">Math, Chemistry, Free Period</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">✅</div><div class="stat-value">1</div><div class="stat-label">Pending Attendance</div><div class="stat-change down">Period 4 not marked</div></div>
<div class="stat-card red"><div class="stat-icon-wrap">📝</div><div class="stat-value">3</div><div class="stat-label">Assignments to Review</div><div class="stat-change neu">Due by Friday</div></div>
<div class="stat-card green"><div class="stat-icon-wrap">👨‍🎓</div><div class="stat-value">45</div><div class="stat-label">My Students (XII-A)</div><div class="stat-change up">44 present today</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">📅</div><div class="stat-value">2</div><div class="stat-label">Upcoming Exams</div><div class="stat-change neu">Unit Test 2: Mar 15</div></div>
<div class="stat-card cyan"><div class="stat-icon-wrap">📊</div><div class="stat-value">88.4%</div><div class="stat-label">Class Avg Score</div><div class="stat-change up">↑ 3.2% this term</div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">📅 Today's Schedule</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
${[['8:00','9:00','Math','XII-A','#2563EB','Completed'],['9:00','10:00','Chemistry Lab','XII-A','#7C3AED','Completed'],['10:30','11:30','Free Period','—','#94A3B8','—'],['11:30','12:30','Chemistry','XI-B','#7C3AED','Upcoming'],['2:00','3:00','Math','XI-A','#2563EB','Upcoming']].map(([s,e,sub,cls,c,st])=>`
<div style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:var(--radius);background:var(--surface2);border:1px solid var(--border);">
<div style="width:3px;height:36px;background:${c};border-radius:2px;flex-shrink:0;"></div>
<div style="flex:1;"><div style="font-weight:600;font-size:13px">${sub}</div><div style="font-size:11px;color:var(--text-muted)">${s} – ${e} · ${cls}</div></div>
<span class="badge ${st==='Completed'?'badge-success':st==='Upcoming'?'badge-primary':'badge-gray'}">${st}</span>
</div>`).join('')}
</div></div>
<div class="card"><div class="card-header"><span class="card-title">📈 Subject Performance</span></div><div class="card-body"><div class="chart-container"><canvas id="c-t-sub"></canvas></div></div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">🔔 Notifications</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
<div style="display:flex;align-items:flex-start;gap:10px;padding:10px;border-radius:var(--radius);background:var(--warning-light);border:1px solid #FDE68A;"><span>⚠️</span><div><div style="font-size:13px;font-weight:600">Attendance not marked for Period 4</div><div style="font-size:11px;color:var(--text-muted)">Class XII-A · Chemistry · Today</div></div></div>
<div style="display:flex;align-items:flex-start;gap:10px;padding:10px;border-radius:var(--radius);background:var(--primary-light);border:1px solid #BFDBFE;"><span>📝</span><div><div style="font-size:13px;font-weight:600">Assignment: Organic Chemistry submitted by 28 students</div><div style="font-size:11px;color:var(--text-muted)">Deadline: 28 Feb</div></div></div>
<div style="display:flex;align-items:flex-start;gap:10px;padding:10px;border-radius:var(--radius);background:var(--success-light);border:1px solid #BBF7D0;"><span>🏆</span><div><div style="font-size:13px;font-weight:600">Mid-term marks approved by Principal</div><div style="font-size:11px;color:var(--text-muted)">Results published on portal</div></div></div>
</div></div>
<div class="card"><div class="card-header"><span class="card-title">Pass/Fail Distribution</span></div><div class="card-body"><div class="chart-container"><canvas id="c-t-pf"></canvas></div></div></div>
</div>
`,},
{id:'t-attendance',html:`<div class="page-header"><div><div class="page-title">✅ Mark Attendance</div><div class="page-sub">Class XII-A · 26 Feb 2025</div></div><div class="page-actions"><button class="btn btn-success btn-sm">📱 SMS Absentees</button><button class="btn btn-primary btn-sm">💾 Submit</button></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">Daily Attendance · XII-A</span><select class="filter-select"><option>Morning Roll Call</option><option>Period 1 – Math</option><option>Period 2 – Chem</option></select></div>
<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Name</th><th>P/A/L</th><th>Remark</th></tr></thead><tbody>
${[['01','Ananya Krishnamurthy','P'],['02','Aarav Sharma','P'],['03','Aditi Gupta','A'],['04','Arjun Nair','P'],['05','Bhavya Reddy','L']].map(([r,n,s])=>`<tr><td>${r}</td><td style="font-weight:600">${n}</td><td><div style="display:flex;gap:4px;"><button class="btn btn-sm" style="padding:4px 9px;font-size:11px;background:${s==='P'?'var(--success)':'var(--surface2)'};color:${s==='P'?'white':'var(--text-secondary)'};border:1px solid var(--border)">P</button><button class="btn btn-sm" style="padding:4px 9px;font-size:11px;background:${s==='A'?'var(--danger)':'var(--surface2)'};color:${s==='A'?'white':'var(--text-secondary)'};border:1px solid var(--border)">A</button><button class="btn btn-sm" style="padding:4px 9px;font-size:11px;background:${s==='L'?'var(--warning)':'var(--surface2)'};color:${s==='L'?'white':'var(--text-secondary)'};border:1px solid var(--border)">L</button></div></td><td><input class="filter-input" style="padding:4px 8px;width:100px;font-size:11px;" placeholder="remark"></td></tr>`).join('')}
</tbody></table></div><div class="card-footer"><button class="btn btn-primary" style="width:100%">✅ Submit Attendance</button></div></div>
<div class="card"><div class="card-header"><span class="card-title">Monthly Summary (Feb)</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div style="background:var(--surface2);padding:12px;border-radius:var(--radius);border:1px solid var(--border)"><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px">Working Days</span><strong>22</strong></div><div style="display:flex;justify-content:space-between;margin-bottom:6px;"><span style="font-size:13px">Avg Attendance</span><strong style="color:var(--success)">97.2%</strong></div><div style="display:flex;justify-content:space-between;"><span style="font-size:13px">Students Below 75%</span><strong style="color:var(--danger)">2</strong></div></div>
<div class="progress-bar"><div class="progress-fill" style="width:97.2%;background:var(--success)"></div></div>
<div style="font-size:12px;color:var(--text-muted)">Absentees today: Aditi Gupta, Bhavya Reddy (Leave)</div>
</div></div>
</div>`,},
{id:'t-assignments',html:`<div class="page-header"><div><div class="page-title">📝 Assignments</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Upload Assignment</button></div></div>
<div class="tabs"><button class="tab-btn active" onclick="switchTab(this,'ta-active')">Active</button><button class="tab-btn" onclick="switchTab(this,'ta-submitted')">Submitted</button><button class="tab-btn" onclick="switchTab(this,'ta-graded')">Graded</button></div>
<div class="tab-content active" id="ta-active">
<div class="assignment-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;"><div><div style="font-weight:700;font-size:14px">Organic Chemistry — Chapter 5 Problems</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">Class XII-A · Chemistry · Due: 28 Feb 2025</div></div><span class="badge badge-warning">28/45 Submitted</span></div><div style="margin-top:10px;"><div class="progress-bar"><div class="progress-fill" style="width:62%;background:var(--warning)"></div></div><div style="font-size:11px;color:var(--text-muted);margin-top:3px">62% submitted</div></div><div style="margin-top:10px;display:flex;gap:6px;"><button class="btn btn-outline btn-sm">👁 View Submissions</button><button class="btn btn-primary btn-sm">✏️ Grade</button></div></div>
<div class="assignment-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;"><div><div style="font-weight:700;font-size:14px">Differentiation Practice Set</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">Class XII-A · Mathematics · Due: 2 Mar 2025</div></div><span class="badge badge-primary">12/45 Submitted</span></div><div style="margin-top:10px;"><div class="progress-bar"><div class="progress-fill" style="width:27%;background:var(--primary)"></div></div></div><div style="margin-top:10px;display:flex;gap:6px;"><button class="btn btn-outline btn-sm">👁 View</button></div></div>
</div>
<div class="tab-content" id="ta-submitted">
<div class="card"><div class="card-header"><span class="card-title">Submitted Assignments — Pending Review</span></div><div class="table-wrap"><table><thead><tr><th>Student</th><th>Assignment</th><th>Submitted</th><th>Action</th></tr></thead><tbody>
<tr><td>Ananya K.</td><td>Organic Chemistry Ch5</td><td>25 Feb 10:42 AM</td><td><button class="btn btn-primary btn-sm">✏️ Grade</button></td></tr>
<tr><td>Rohan M.</td><td>Organic Chemistry Ch5</td><td>25 Feb 11:14 AM</td><td><button class="btn btn-primary btn-sm">✏️ Grade</button></td></tr>
</tbody></table></div></div>
</div>
<div class="tab-content" id="ta-graded">
<div class="card"><div class="card-header"><span class="card-title">Graded Assignments</span></div><div class="table-wrap"><table><thead><tr><th>Student</th><th>Assignment</th><th>Score</th><th>Grade</th></tr></thead><tbody>
<tr><td>Ananya K.</td><td>Thermodynamics HW</td><td>19/20</td><td><span class="badge badge-success">A1</span></td></tr>
<tr><td>Arjun N.</td><td>Thermodynamics HW</td><td>15/20</td><td><span class="badge badge-primary">B1</span></td></tr>
</tbody></table></div></div>
</div>`,},
{id:'t-marks',html:`<div class="page-header"><div><div class="page-title">🏆 Marks & Grades</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">💾 Save Marks</button></div></div>
<div class="filter-bar"><select class="filter-select"><option>Class XII-A</option><option>Class XI-B</option></select><select class="filter-select"><option>Mid-Term Exam</option><option>Unit Test 1</option></select><select class="filter-select"><option>Mathematics</option><option>Chemistry</option><option>Physics</option></select></div>
<div class="card"><div class="card-header"><span class="card-title">Mark Entry — Mid-Term · Mathematics · XII-A</span><span class="badge badge-warning">Draft</span></div>
<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Student Name</th><th>Max</th><th>Obtained</th><th>%</th><th>Grade</th><th>Remarks</th></tr></thead><tbody>
<tr><td>01</td><td>Ananya Krishnamurthy</td><td>100</td><td><input class="filter-input" value="97" style="width:60px;padding:4px 8px;"></td><td style="color:var(--success);font-weight:700">97%</td><td><span class="badge badge-success">A1</span></td><td><input class="filter-input" placeholder="Remark" style="width:110px;padding:4px 8px;font-size:11px;"></td></tr>
<tr><td>02</td><td>Aarav Sharma</td><td>100</td><td><input class="filter-input" value="82" style="width:60px;padding:4px 8px;"></td><td style="color:var(--primary);font-weight:700">82%</td><td><span class="badge badge-primary">A2</span></td><td><input class="filter-input" placeholder="Remark" style="width:110px;padding:4px 8px;font-size:11px;"></td></tr>
<tr><td>03</td><td>Aditi Gupta</td><td>100</td><td><input class="filter-input" value="74" style="width:60px;padding:4px 8px;"></td><td style="color:var(--warning);font-weight:700">74%</td><td><span class="badge badge-warning">B1</span></td><td><input class="filter-input" placeholder="Remark" style="width:110px;padding:4px 8px;font-size:11px;"></td></tr>
</tbody></table></div><div class="card-footer" style="display:flex;justify-content:space-between;align-items:center;"><span style="font-size:12px;color:var(--text-muted)">Class Avg: 88.4 · Highest: 97 · Lowest: 62</span><div style="display:flex;gap:6px;"><button class="btn btn-outline">Save Draft</button><button class="btn btn-primary">Submit to Principal</button></div></div></div>`,},
{id:'t-timetable',html:`<div class="page-header"><div><div class="page-title">📅 My Timetable</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Weekly Schedule — Mrs. Priya Rajan</span></div><div class="card-body"><div class="week-timetable">
<div class="tt-header">Period</div><div class="tt-header">Mon</div><div class="tt-header">Tue</div><div class="tt-header">Wed</div><div class="tt-header">Thu</div><div class="tt-header">Fri</div><div class="tt-header">Sat</div>
<div class="tt-time">8–9</div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XII-A</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem XI-B</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XII-B</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XI-A</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem XII-A</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XII-A</span></div>
<div class="tt-time">9–10</div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem XII-A</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XII-A</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem XI-A</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem XII-B</span></div><div class="tt-cell"><span class="tt-subject" style="background:#94A3B8">Free</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem XI-A</span></div>
<div class="tt-time">10:30–11:30</div><div class="tt-cell"><span class="tt-subject" style="background:#94A3B8">Free</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XI-A</span></div><div class="tt-cell"><span class="tt-subject" style="background:#94A3B8">Free</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XI-B</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math XII-B</span></div><div class="tt-cell"><span class="tt-subject" style="background:#94A3B8">Free</span></div>
</div></div></div>`,},
{id:'t-students',html:`<div class="page-header"><div><div class="page-title">👨‍🎓 My Students — XII-A</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📊 Download Class List</button></div></div>
<div class="card"><div class="card-header"><span class="card-title">Class XII-A (45 Students)</span><input class="filter-input" placeholder="🔍 Search..."></div>
<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Name</th><th>Attendance</th><th>Avg Score</th><th>Last Remark</th><th>Action</th></tr></thead><tbody>
<tr><td>01</td><td><div style="font-weight:600">Ananya Krishnamurthy</div></td><td><span style="color:var(--success);font-weight:700">98%</span></td><td><strong>97.4</strong></td><td><span class="badge badge-success">Outstanding</span></td><td><button class="btn btn-outline btn-sm">📝 Remark</button></td></tr>
<tr><td>02</td><td><div style="font-weight:600">Aarav Sharma</div></td><td><span style="color:var(--success);font-weight:700">94%</span></td><td><strong>82.1</strong></td><td><span class="badge badge-primary">Good</span></td><td><button class="btn btn-outline btn-sm">📝 Remark</button></td></tr>
<tr><td>03</td><td><div style="font-weight:600">Aditi Gupta</div></td><td><span style="color:var(--warning);font-weight:700">78%</span></td><td><strong>71.4</strong></td><td><span class="badge badge-warning">Needs Focus</span></td><td><button class="btn btn-outline btn-sm">📝 Remark</button></td></tr>
</tbody></table></div></div>`,},
{id:'t-performance',html:`<div class="page-header"><div><div class="page-title">📈 Student Performance</div></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">Subject Performance Trend</span></div><div class="card-body"><div class="chart-container"><canvas id="c-t-sub"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Pass/Fail Analysis</span></div><div class="card-body"><div class="chart-container"><canvas id="c-t-pf"></canvas></div></div></div>
</div>`,},
{id:'t-communication',html:`<div class="page-header"><div><div class="page-title">💬 Communication</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ New Message</button></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">Messages</span></div><div class="card-body" style="max-height:350px;overflow-y:auto;">
<div class="msg-bubble"><div style="font-weight:600;margin-bottom:2px">Parent of Aditi Gupta</div><div>My daughter has been unwell since Monday. Please excuse her absence.</div><div class="msg-meta">25 Feb · 9:14 AM</div></div>
<div class="msg-bubble sent"><div style="font-weight:600;margin-bottom:2px">You → Parent of Aditi</div><div>Noted. Please submit a medical certificate when she returns.</div><div class="msg-meta">25 Feb · 10:02 AM</div></div>
<div class="msg-bubble"><div style="font-weight:600;margin-bottom:2px">Parent of Aarav Sharma</div><div>Can you share the syllabus for Unit Test 2?</div><div class="msg-meta">24 Feb · 5:30 PM</div></div>
</div><div style="padding:14px;border-top:1px solid var(--border);display:flex;gap:8px;"><input class="form-input" style="flex:1" placeholder="Type a reply..."><button class="btn btn-primary">Send</button></div></div>
<div class="card"><div class="card-header"><span class="card-title">Class Announcement</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<input class="form-input" placeholder="Announcement title...">
<textarea class="form-input" rows="3" style="resize:vertical;" placeholder="Message to class..."></textarea>
<select class="form-select"><option>Class XII-A Students</option><option>Class XII-A Parents</option><option>Both Students & Parents</option></select>
<button class="btn btn-primary" style="width:100%">📢 Send Announcement</button>
</div></div></div>`,}
];}

// ── STUDENT VIEWS ──
function getStudentViews(){return[
{id:'s-dashboard',html:`
<div class="page-header"><div><div class="page-title">🎒 My Dashboard</div><div class="page-sub">Ananya Krishnamurthy · Class XII-A · Roll No: 2401</div></div></div>
<div class="alert alert-warning"><span>📝</span><span>You have <strong>2 pending assignments</strong> and <strong>1 fee installment due</strong> by 5th March.</span></div>
<div class="stats-grid">
<div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">98.2%</div><div class="stat-label">My Attendance</div><div class="stat-change up">Excellent</div></div>
<div class="stat-card blue"><div class="stat-icon-wrap">📅</div><div class="stat-value">5</div><div class="stat-label">Classes Today</div><div class="stat-change neu">Math, Physics, Chem, Eng, Comp</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">📝</div><div class="stat-value">2</div><div class="stat-label">Pending Assignments</div><div class="stat-change down">Due this week</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">🏆</div><div class="stat-value">97.4%</div><div class="stat-label">Mid-Term Average</div><div class="stat-change up">Rank #1 in class</div></div>
<div class="stat-card red"><div class="stat-icon-wrap">💰</div><div class="stat-value">₹8,500</div><div class="stat-label">Fee Due</div><div class="stat-change down">Due: 5 Mar 2025</div></div>
<div class="stat-card cyan"><div class="stat-icon-wrap">📅</div><div class="stat-value">Mar 15</div><div class="stat-label">Next Exam</div><div class="stat-change neu">Unit Test 2</div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">📅 Today's Classes</span><span class="badge badge-primary">26 Feb 2025</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
${[['8–9 AM','Mathematics','Mrs. Priya R.','#2563EB','Completed'],['9–10 AM','Physics','Dr. Rajan K.','#DC2626','Completed'],['10:30–11:30','Chemistry','Mrs. Sunita M.','#7C3AED','In Progress'],['11:30–12:30','English','Mr. Arvind L.','#16A34A','Upcoming'],['2–3 PM','Computer Sc.','Ms. Deepa T.','#0891B2','Upcoming']].map(([t,s,teacher,c,st])=>`<div style="display:flex;align-items:center;gap:10px;padding:9px;border-radius:var(--radius);background:var(--surface2);border:1px solid var(--border);"><div style="width:3px;height:32px;background:${c};border-radius:2px;flex-shrink:0;"></div><div style="flex:1"><div style="font-weight:600;font-size:13px">${s}</div><div style="font-size:11px;color:var(--text-muted)">${t} · ${teacher}</div></div><span class="badge ${st==='Completed'?'badge-success':st==='In Progress'?'badge-warning':'badge-gray'}">${st}</span></div>`).join('')}
</div></div>
<div class="card"><div class="card-header"><span class="card-title">📊 Subject-wise Marks</span></div><div class="card-body"><div class="chart-container"><canvas id="c-s-marks"></canvas></div></div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">📝 Pending Assignments</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
<div class="assignment-card" style="margin-bottom:0;"><div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><div style="font-weight:700">Organic Chemistry — Ch5 Problems</div><div style="font-size:12px;color:var(--text-muted)">Chemistry · Mrs. Sunita · Due 28 Feb</div></div><span class="badge badge-danger">Pending</span></div></div>
<div class="assignment-card" style="margin-bottom:0;"><div style="display:flex;justify-content:space-between;align-items:flex-start;"><div><div style="font-weight:700">Differentiation Practice Set</div><div style="font-size:12px;color:var(--text-muted)">Mathematics · Mrs. Priya · Due 2 Mar</div></div><span class="badge badge-warning">Draft</span></div></div>
</div></div>
<div class="card"><div class="card-header"><span class="card-title">📅 Attendance Trend</span></div><div class="card-body"><div class="chart-container"><canvas id="c-s-att"></canvas></div></div></div>
</div>
`,},
{id:'s-timetable',html:`<div class="page-header"><div><div class="page-title">📅 My Timetable</div><div class="page-sub">Class XII-A Weekly Schedule</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Weekly Timetable — Class XII-A</span></div><div class="card-body"><div class="week-timetable">
<div class="tt-header">Period</div><div class="tt-header">Mon</div><div class="tt-header">Tue</div><div class="tt-header">Wed</div><div class="tt-header">Thu</div><div class="tt-header">Fri</div><div class="tt-header">Sat</div>
<div class="tt-time">8–9</div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div><div class="tt-cell"><span class="tt-subject" style="background:#DC2626">Physics</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#0891B2">Comp</span></div><div class="tt-cell"><span class="tt-subject" style="background:#F59E0B">PE</span></div>
<div class="tt-time">9–10</div><div class="tt-cell"><span class="tt-subject" style="background:#DC2626">Physics</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#DC2626">Physics</span></div>
<div class="tt-time">10:30–11:30</div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#0891B2">Comp</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div>
<div class="tt-time">11:30–12:30</div><div class="tt-cell"><span class="tt-subject" style="background:#16A34A">English</span></div><div class="tt-cell"><span class="tt-subject" style="background:#DC2626">Physics</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div><div class="tt-cell"><span class="tt-subject" style="background:#0891B2">Comp</span></div><div class="tt-cell"><span class="tt-subject" style="background:#7C3AED">Chem</span></div><div class="tt-cell"><span class="tt-subject" style="background:#2563EB">Math</span></div>
</div></div></div>`,},
{id:'s-assignments',html:`<div class="page-header"><div><div class="page-title">📝 Assignments</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">All Assignments</span><select class="filter-select"><option>All Subjects</option><option>Chemistry</option><option>Mathematics</option></select></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div class="assignment-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;"><div><div style="font-weight:700">Organic Chemistry — Chapter 5 Problems</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">Chemistry · Mrs. Sunita · Due: 28 Feb 2025</div></div><span class="badge badge-danger">Not Submitted</span></div><div style="margin-top:10px;display:flex;gap:6px;"><button class="btn btn-primary btn-sm">📤 Submit</button><button class="btn btn-outline btn-sm">📥 Download</button></div></div>
<div class="assignment-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;"><div><div style="font-weight:700">Differentiation Practice Set</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">Mathematics · Mrs. Priya · Due: 2 Mar 2025</div></div><span class="badge badge-warning">Draft Saved</span></div><div style="margin-top:10px;display:flex;gap:6px;"><button class="btn btn-primary btn-sm">📤 Submit</button><button class="btn btn-outline btn-sm">✏️ Edit Draft</button></div></div>
<div class="assignment-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;"><div><div style="font-weight:700">Thermodynamics — Problem Set 3</div><div style="font-size:12px;color:var(--text-muted);margin-top:2px">Chemistry · Due: 20 Feb · Submitted 19 Feb</div></div><span class="badge badge-success">Graded — 19/20 (A1)</span></div></div>
</div></div>`,},
{id:'s-results',html:`<div class="page-header"><div><div class="page-title">🏆 My Results</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">🖨 Download Report Card</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card green"><div class="stat-icon-wrap">🏆</div><div class="stat-value">97.4%</div><div class="stat-label">Mid-Term Average</div></div><div class="stat-card blue"><div class="stat-icon-wrap">🥇</div><div class="stat-value">#1</div><div class="stat-label">Class Rank</div></div><div class="stat-card purple"><div class="stat-icon-wrap">📊</div><div class="stat-value">10.0</div><div class="stat-label">CGPA</div></div><div class="stat-card amber"><div class="stat-icon-wrap">🎯</div><div class="stat-value">5/5</div><div class="stat-label">Subjects Passed</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Mid-Term Results 2024-25</span></div><div class="table-wrap"><table><thead><tr><th>Subject</th><th>Max</th><th>Scored</th><th>%</th><th>Grade</th><th>Teacher Remark</th></tr></thead><tbody>
<tr><td>Mathematics</td><td>100</td><td><strong>97</strong></td><td><span style="color:var(--success);font-weight:700">97%</span></td><td><span class="badge badge-success">A1</span></td><td>Outstanding work</td></tr>
<tr><td>Physics</td><td>100</td><td><strong>89</strong></td><td><span style="color:var(--primary);font-weight:700">89%</span></td><td><span class="badge badge-primary">A2</span></td><td>Excellent effort</td></tr>
<tr><td>Chemistry</td><td>100</td><td><strong>94</strong></td><td><span style="color:var(--success);font-weight:700">94%</span></td><td><span class="badge badge-success">A1</span></td><td>Keep it up</td></tr>
<tr><td>English</td><td>100</td><td><strong>98</strong></td><td><span style="color:var(--success);font-weight:700">98%</span></td><td><span class="badge badge-success">A1</span></td><td>Exceptional writing</td></tr>
<tr><td>Computer Sc.</td><td>100</td><td><strong>99</strong></td><td><span style="color:var(--success);font-weight:700">99%</span></td><td><span class="badge badge-success">A1</span></td><td>Best in class</td></tr>
</tbody></table></div><div class="card-footer" style="display:flex;justify-content:space-between;"><strong>Total: 477/500</strong><strong>Average: 95.4% — CGPA: 10.0</strong></div></div>`,},
{id:'s-analytics',html:`<div class="page-header"><div><div class="page-title">📈 My Performance</div></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">Subject-wise Marks (Terms)</span></div><div class="card-body"><div class="chart-container"><canvas id="c-s-marks"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Attendance Trend</span></div><div class="card-body"><div class="chart-container"><canvas id="c-s-att"></canvas></div></div></div>
</div>`,},
{id:'s-fees',html:`<div class="page-header"><div><div class="page-title">💰 Fee Details</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">💳 Pay Online</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(3,1fr)"><div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">₹1,95,000</div><div class="stat-label">Total Paid (2024-25)</div></div><div class="stat-card red"><div class="stat-icon-wrap">⏰</div><div class="stat-value">₹8,500</div><div class="stat-label">Amount Due</div></div><div class="stat-card blue"><div class="stat-icon-wrap">📅</div><div class="stat-value">5 Mar</div><div class="stat-label">Due Date</div></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">Fee Structure (Annual)</span></div><div class="card-body">
<div class="fee-item"><span>Tuition Fee (Annual)</span><strong>₹1,02,000</strong></div>
<div class="fee-item"><span>Transport Fee (Annual)</span><strong>₹21,600</strong></div>
<div class="fee-item"><span>Annual / Examination Fee</span><strong>₹15,000</strong></div>
<div class="fee-item"><span>Lab Fee</span><strong>₹8,000</strong></div>
<div class="fee-item" style="border-bottom:none;"><span style="font-weight:700">Total Annual</span><strong style="color:var(--primary);font-size:16px">₹2,53,200</strong></div>
</div></div>
<div class="card"><div class="card-header"><span class="card-title">Payment History</span></div><div class="table-wrap"><table><thead><tr><th>Receipt</th><th>Date</th><th>Amount</th><th>Mode</th><th>Status</th></tr></thead><tbody>
<tr><td>#R-0891</td><td>26 Feb</td><td>₹12,500</td><td>UPI</td><td><span class="badge badge-success">Paid</span></td></tr>
<tr><td>#R-0712</td><td>5 Jan</td><td>₹12,500</td><td>NEFT</td><td><span class="badge badge-success">Paid</span></td></tr>
<tr><td>#R-0554</td><td>5 Dec</td><td>₹12,500</td><td>Cash</td><td><span class="badge badge-success">Paid</span></td></tr>
<tr><td>—</td><td>5 Mar (Due)</td><td>₹8,500</td><td>—</td><td><span class="badge badge-danger">Due</span></td></tr>
</tbody></table></div></div>
</div>`,},
{id:'s-notices',html:`<div class="page-header"><div><div class="page-title">📢 Notices & Announcements</div></div></div>
<div class="card"><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div class="notice-card blue-l"><div style="font-weight:700">Sports Day — 15th March 2025</div><div style="font-size:13px;margin-top:4px;color:var(--text-secondary)">Annual Sports Day scheduled. Interested students contact your class teacher by 5th March.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px;">26 Feb 2025 · Admin</div></div>
<div class="notice-card green-l"><div style="font-weight:700">Mid-Term Results Published</div><div style="font-size:13px;margin-top:4px;color:var(--text-secondary)">Results are now available on the student portal under Results & Marks section.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px;">24 Feb 2025 · Exam Department</div></div>
<div class="notice-card amber-l"><div style="font-weight:700">Holiday — Holi (14th March)</div><div style="font-size:13px;margin-top:4px;color:var(--text-secondary)">School will remain closed on 14th March 2025 on account of Holi festival.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px;">22 Feb 2025 · Principal</div></div>
<div class="notice-card blue-l"><div style="font-weight:700">Unit Test 2 Syllabus</div><div style="font-size:13px;margin-top:4px;color:var(--text-secondary)">Syllabus for Unit Test 2 (15–19 March) has been uploaded. Check with respective subject teachers.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px;">20 Feb 2025 · Academic Dept.</div></div>
</div></div>`,}
];}

// ── PARENT VIEWS ──
function getParentViews(){return[
{id:'par-dashboard',html:`
<div class="page-header"><div><div class="page-title">👨‍👩‍👧 Parent Dashboard</div><div class="page-sub">Ananya Krishnamurthy — Class XII-A, Roll No: 2401</div></div></div>
<div class="alert alert-warning"><span>💰</span><span>Fee installment of <strong>₹8,500</strong> is due on <strong>5th March 2025</strong>. Pay online to avoid late fine.</span></div>
<div class="stats-grid">
<div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">98.2%</div><div class="stat-label">Attendance (Feb)</div><div class="stat-change up">Excellent</div></div>
<div class="stat-card blue"><div class="stat-icon-wrap">📅</div><div class="stat-value">5</div><div class="stat-label">Classes Today</div><div class="stat-change neu">Present today</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">🏆</div><div class="stat-value">#1</div><div class="stat-label">Class Rank (Mid-Term)</div><div class="stat-change up">Avg: 97.4%</div></div>
<div class="stat-card red"><div class="stat-icon-wrap">💰</div><div class="stat-value">₹8,500</div><div class="stat-label">Fee Due</div><div class="stat-change down">Due: 5 Mar</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">📝</div><div class="stat-value">2</div><div class="stat-label">Pending Assignments</div><div class="stat-change neu">Due this week</div></div>
<div class="stat-card cyan"><div class="stat-icon-wrap">🗓️</div><div class="stat-value">Mar 12</div><div class="stat-label">Parent-Teacher Meeting</div><div class="stat-change neu">Upcoming</div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">📊 Academic Performance</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
${[['Mathematics','97%','A1','#16A34A'],['Physics','89%','A2','#2563EB'],['Chemistry','94%','A1','#16A34A'],['English','98%','A1','#16A34A'],['Computer Sc.','99%','A1','#16A34A']].map(([sub,score,grade,c])=>`
<div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:var(--surface2);border-radius:var(--radius);border:1px solid var(--border);">
<div style="font-weight:600;font-size:13px;min-width:100px">${sub}</div>
<div class="score-bar" style="flex:1;margin:0 12px;"><div class="bar"><div class="fill" style="width:${score};background:${c}"></div></div><span style="font-size:12px;font-weight:700;color:${c};min-width:32px">${score}</span></div>
<span class="badge ${c==='#16A34A'?'badge-success':'badge-primary'}">${grade}</span>
</div>`).join('')}
</div></div>
<div class="card"><div class="card-header"><span class="card-title">📢 School Notices</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
<div class="notice-card blue-l"><div style="font-weight:700">Sports Day — 15th March</div><div style="font-size:12px;color:var(--text-muted);margin-top:3px">26 Feb · Admin</div></div>
<div class="notice-card amber-l"><div style="font-weight:700">Parent-Teacher Meeting — 12th March, 9 AM–1 PM</div><div style="font-size:12px;color:var(--text-muted);margin-top:3px">20 Feb · Principal</div></div>
<div class="notice-card green-l"><div style="font-weight:700">Mid-Term Results Published</div><div style="font-size:12px;color:var(--text-muted);margin-top:3px">24 Feb · Exam Dept.</div></div>
</div></div>
</div>
`,},
{id:'par-attendance',html:`<div class="page-header"><div><div class="page-title">✅ Attendance Tracker</div><div class="page-sub">Ananya Krishnamurthy — February 2025</div></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">22</div><div class="stat-label">Days Present</div></div><div class="stat-card red"><div class="stat-icon-wrap">❌</div><div class="stat-value">0</div><div class="stat-label">Days Absent</div></div><div class="stat-card amber"><div class="stat-icon-wrap">🏖️</div><div class="stat-value">3</div><div class="stat-label">Holidays</div></div><div class="stat-card blue"><div class="stat-icon-wrap">📊</div><div class="stat-value">98.2%</div><div class="stat-label">Overall %</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Monthly Calendar — February 2025</span></div><div class="card-body">
<div style="display:flex;gap:12px;margin-bottom:12px;"><span style="display:flex;align-items:center;gap:5px;font-size:12px;"><span style="width:12px;height:12px;border-radius:3px;background:var(--success-light);border:1px solid var(--success);display:inline-block;"></span>Present</span><span style="display:flex;align-items:center;gap:5px;font-size:12px;"><span style="width:12px;height:12px;border-radius:3px;background:var(--danger-light);border:1px solid var(--danger);display:inline-block;"></span>Absent</span><span style="display:flex;align-items:center;gap:5px;font-size:12px;"><span style="width:12px;height:12px;border-radius:3px;background:var(--warning-light);border:1px solid var(--warning);display:inline-block;"></span>Holiday</span></div>
<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;">
${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<div style="text-align:center;font-size:11px;font-weight:700;color:var(--text-muted);padding:4px">${d}</div>`).join('')}
${''.padStart(6,',').split(',').map(()=>`<div></div>`).join('')}
${Array.from({length:28},(_, i)=>{const day=i+1;const type=day===14?'holiday':day===1?'holiday':day%7===0?'holiday':'present';return`<div style="aspect-ratio:1;border-radius:7px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:12px;font-weight:600;background:${type==='present'?'var(--success-light)':type==='absent'?'var(--danger-light)':'var(--warning-light)'};color:${type==='present'?'var(--success)':type==='absent'?'var(--danger)':'#92400E'}">${day}</div>`;}).join('')}
</div>
</div></div>`,},
{id:'par-results',html:`<div class="page-header"><div><div class="page-title">📝 Results & Marks</div><div class="page-sub">Ananya Krishnamurthy · XII-A</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">🖨 Report Card</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card green"><div class="stat-icon-wrap">🏆</div><div class="stat-value">97.4%</div><div class="stat-label">Mid-Term Average</div></div><div class="stat-card blue"><div class="stat-icon-wrap">🥇</div><div class="stat-value">#1</div><div class="stat-label">Class Rank</div></div><div class="stat-card purple"><div class="stat-icon-wrap">📊</div><div class="stat-value">10.0</div><div class="stat-label">CGPA</div></div><div class="stat-card amber"><div class="stat-icon-wrap">✅</div><div class="stat-value">5/5</div><div class="stat-label">Subjects Passed</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Mid-Term 2024-25</span></div><div class="table-wrap"><table><thead><tr><th>Subject</th><th>Marks</th><th>%</th><th>Grade</th><th>Remark</th></tr></thead><tbody>
<tr><td>Mathematics</td><td><strong>97/100</strong></td><td><span style="color:var(--success);font-weight:700">97%</span></td><td><span class="badge badge-success">A1</span></td><td>Outstanding</td></tr>
<tr><td>Physics</td><td><strong>89/100</strong></td><td><span style="color:var(--primary);font-weight:700">89%</span></td><td><span class="badge badge-primary">A2</span></td><td>Excellent</td></tr>
<tr><td>Chemistry</td><td><strong>94/100</strong></td><td><span style="color:var(--success);font-weight:700">94%</span></td><td><span class="badge badge-success">A1</span></td><td>Keep it up</td></tr>
<tr><td>English</td><td><strong>98/100</strong></td><td><span style="color:var(--success);font-weight:700">98%</span></td><td><span class="badge badge-success">A1</span></td><td>Exceptional</td></tr>
<tr><td>Computer Sc.</td><td><strong>99/100</strong></td><td><span style="color:var(--success);font-weight:700">99%</span></td><td><span class="badge badge-success">A1</span></td><td>Best in class</td></tr>
</tbody></table></div></div>`,},
{id:'par-fees',html:`<div class="page-header"><div><div class="page-title">💰 Fee Payment</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">💳 Pay Now</button></div></div>
<div class="alert alert-danger"><span>⚠️</span><span>Installment of <strong>₹8,500</strong> due on <strong>5th March 2025</strong>. Late fine: ₹50/day after due date.</span></div>
<div class="stats-grid" style="grid-template-columns:repeat(3,1fr)"><div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">₹1,95,000</div><div class="stat-label">Paid (2024-25)</div></div><div class="stat-card red"><div class="stat-icon-wrap">⏰</div><div class="stat-value">₹8,500</div><div class="stat-label">Due Now</div></div><div class="stat-card blue"><div class="stat-icon-wrap">📊</div><div class="stat-value">95%</div><div class="stat-label">Paid</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Payment History</span></div><div class="table-wrap"><table><thead><tr><th>Receipt</th><th>Description</th><th>Date</th><th>Amount</th><th>Mode</th><th>Status</th><th>Download</th></tr></thead><tbody>
<tr><td>#R-0891</td><td>Q3 Tuition + Transport</td><td>26 Feb 2025</td><td>₹12,500</td><td>UPI</td><td><span class="badge badge-success">Paid</span></td><td><button class="btn btn-outline btn-sm">🖨</button></td></tr>
<tr><td>#R-0712</td><td>Q3 Tuition + Transport</td><td>5 Jan 2025</td><td>₹12,500</td><td>NEFT</td><td><span class="badge badge-success">Paid</span></td><td><button class="btn btn-outline btn-sm">🖨</button></td></tr>
<tr><td>—</td><td>Q4 Installment</td><td>Due: 5 Mar</td><td>₹8,500</td><td>—</td><td><span class="badge badge-danger">Pending</span></td><td><button class="btn btn-primary btn-sm">Pay Now</button></td></tr>
</tbody></table></div></div>`,},
{id:'par-communication',html:`<div class="page-header"><div><div class="page-title">💬 Messages</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ New Message</button></div></div>
<div class="g2 mb16"><div class="card"><div class="card-header"><span class="card-title">Conversation — Mrs. Priya Rajan (Class Teacher)</span></div>
<div style="max-height:320px;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:8px;">
<div class="msg-bubble"><div style="font-weight:600;margin-bottom:2px">Mrs. Priya Rajan</div><div>Ananya did exceptionally well in the mid-term. Her mathematics score is the highest in the school!</div><div class="msg-meta">24 Feb · 3:15 PM</div></div>
<div class="msg-bubble sent"><div style="font-weight:600;margin-bottom:2px">You</div><div>Thank you so much, Mrs. Rajan. We are very proud of her.</div><div class="msg-meta">24 Feb · 5:42 PM</div></div>
<div class="msg-bubble"><div style="font-weight:600;margin-bottom:2px">Mrs. Priya Rajan</div><div>Please remind Ananya to submit the chemistry assignment by 28th Feb.</div><div class="msg-meta">25 Feb · 9:30 AM</div></div>
</div>
<div style="padding:14px;border-top:1px solid var(--border);display:flex;gap:8px;"><input class="form-input" style="flex:1" placeholder="Type a message..."><button class="btn btn-primary">Send</button></div></div>
<div class="card"><div class="card-header"><span class="card-title">Contact Teachers</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:8px;">
${[['Mrs. Priya Rajan','Class Teacher · Math & Chem'],['Dr. Rajan Kumar','Physics'],['Mr. Arvind Lal','English'],['Ms. Deepa Tiwari','Computer Sc.']].map(([n,role])=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px;border-radius:var(--radius);background:var(--surface2);border:1px solid var(--border);"><div><div style="font-weight:600;font-size:13px">${n}</div><div style="font-size:11px;color:var(--text-muted)">${role}</div></div><button class="btn btn-outline btn-sm">💬 Message</button></div>`).join('')}
</div></div></div>`,},
{id:'par-notices',html:`<div class="page-header"><div><div class="page-title">📢 School Notices</div></div></div>
<div class="card"><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<div class="notice-card blue-l"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;"><div style="font-weight:700">Sports Day — 15th March 2025</div><span class="badge badge-primary">All</span></div><div style="font-size:13px;color:var(--text-secondary);margin-top:5px">Annual Sports Day on 15th March. Parents are cordially invited.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px">26 Feb 2025 · Admin</div></div>
<div class="notice-card amber-l"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:6px;"><div style="font-weight:700">Parent-Teacher Meeting — 12th March</div><span class="badge badge-warning">IX–XII Parents</span></div><div style="font-size:13px;color:var(--text-secondary);margin-top:5px">PT Meeting on 12th March, 9 AM–1 PM. No classes that day.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px">20 Feb 2025 · Principal</div></div>
<div class="notice-card green-l"><div style="font-weight:700">Mid-Term Results Available</div><div style="font-size:13px;color:var(--text-secondary);margin-top:5px">Results published. Log in to view your ward's performance.</div><div style="font-size:11px;color:var(--text-muted);margin-top:5px">24 Feb 2025 · Exam Dept.</div></div>
</div></div>`,}
];}

// ── ACCOUNTANT VIEWS ──
function getAccountantViews(){return[
{id:'acc-dashboard',html:`
<div class="page-header"><div><div class="page-title">💰 Finance Dashboard</div><div class="page-sub">Smt. Leela Murthy · Green Valley Public School · 26 Feb 2025</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📥 Export P&L</button><button class="btn btn-primary btn-sm">+ Collect Fee</button></div></div>
<div class="stats-grid">
<div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">₹38.4L</div><div class="stat-label">Collected (Feb)</div><div class="stat-change up">↑ vs ₹36.2L last month</div></div>
<div class="stat-card red"><div class="stat-icon-wrap">⚠️</div><div class="stat-value">₹12.8L</div><div class="stat-label">Outstanding Dues</div><div class="stat-change down">73 defaulters</div></div>
<div class="stat-card blue"><div class="stat-icon-wrap">📊</div><div class="stat-value">₹4.8L</div><div class="stat-label">Today's Collection</div><div class="stat-change up">↑ 12% vs yesterday</div></div>
<div class="stat-card purple"><div class="stat-icon-wrap">💵</div><div class="stat-value">₹28.4L</div><div class="stat-label">Payroll (Feb)</div><div class="stat-change neu">124 staff</div></div>
<div class="stat-card amber"><div class="stat-icon-wrap">📉</div><div class="stat-value">₹9.2L</div><div class="stat-label">Expenses (Feb)</div><div class="stat-change down">↑ 4.2% MoM</div></div>
<div class="stat-card cyan"><div class="stat-icon-wrap">📈</div><div class="stat-value">75%</div><div class="stat-label">Collection Rate</div><div class="stat-change up">↑ 3% this month</div></div>
</div>
<div class="g21 mb16">
<div class="card"><div class="card-header"><span class="card-title">📊 Monthly Collection vs Pending</span></div><div class="card-body"><div class="chart-container"><canvas id="c-acc-rev"></canvas></div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Class-wise Collection %</span></div><div class="card-body"><div class="chart-container"><canvas id="c-acc-class"></canvas></div></div></div>
</div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">🕐 Recent Transactions</span></div><div class="table-wrap"><table><thead><tr><th>Receipt</th><th>Student</th><th>Amount</th><th>Mode</th><th>Time</th></tr></thead><tbody>
<tr><td>#R-0891</td><td>Ananya Krishnamurthy (XII-A)</td><td><strong>₹12,500</strong></td><td><span class="badge badge-primary">UPI</span></td><td>10:32 AM</td></tr>
<tr><td>#R-0890</td><td>Rohan Mehta (XII-B)</td><td><strong>₹12,500</strong></td><td><span class="badge badge-gray">Cash</span></td><td>10:14 AM</td></tr>
<tr><td>#R-0889</td><td>Kavya Reddy (X-A)</td><td><strong>₹8,500</strong></td><td><span class="badge badge-cyan">NEFT</span></td><td>9:45 AM</td></tr>
</tbody></table></div></div>
<div class="card"><div class="card-header"><span class="card-title">⚡ Quick Actions</span></div><div class="card-body"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
<div class="quick-link" onclick="navigate('acc-fees')"><span class="ql-icon">💳</span><span class="ql-label">Collect Fee</span></div>
<div class="quick-link" onclick="navigate('acc-defaulters')"><span class="ql-icon">⚠️</span><span class="ql-label">View Defaulters</span></div>
<div class="quick-link" onclick="navigate('acc-payroll')"><span class="ql-icon">💼</span><span class="ql-label">Run Payroll</span></div>
<div class="quick-link" onclick="navigate('acc-reports')"><span class="ql-icon">📊</span><span class="ql-label">Generate Report</span></div>
</div></div></div>
</div>
`,},
{id:'acc-fees',html:`<div class="page-header"><div><div class="page-title">💰 Fee Collection</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Collect Fee</button></div></div>
<div class="g2 mb16">
<div class="card"><div class="card-header"><span class="card-title">Collect Fee</span></div><div class="card-body" style="display:flex;flex-direction:column;gap:10px;">
<input class="form-input" placeholder="Search student by name or roll no...">
<div style="background:var(--primary-light);border-radius:var(--radius);padding:14px;border:1px solid #BFDBFE;">
<div style="font-weight:700;font-size:14px;margin-bottom:8px;">Ananya Krishnamurthy (XII-A · Roll: 2401)</div>
<div style="display:flex;flex-direction:column;gap:6px;font-size:13px;">
<div style="display:flex;justify-content:space-between;"><span>Outstanding Due</span><strong style="color:var(--danger)">₹8,500</strong></div>
<div style="display:flex;justify-content:space-between;"><span>Due Date</span><span>5 Mar 2025</span></div>
</div>
</div>
<select class="form-select"><option>Q4 Installment — ₹8,500</option><option>Annual Fee Balance</option><option>Custom Amount</option></select>
<select class="form-select"><option>UPI / QR Code</option><option>Cash</option><option>NEFT / RTGS</option><option>Cheque</option></select>
<input class="form-input" placeholder="Transaction / Reference ID">
<button class="btn btn-primary" style="width:100%">💳 Collect & Generate Receipt</button>
</div></div>
<div class="card"><div class="card-header"><span class="card-title">Today's Collections (26 Feb)</span></div><div class="table-wrap"><table><thead><tr><th>Receipt</th><th>Student</th><th>Class</th><th>Amount</th><th>Mode</th><th>Action</th></tr></thead><tbody>
<tr><td>#R-0891</td><td>Ananya K.</td><td>XII-A</td><td>₹12,500</td><td>UPI</td><td><button class="btn btn-outline btn-sm">🖨 Print</button></td></tr>
<tr><td>#R-0890</td><td>Rohan M.</td><td>XII-B</td><td>₹12,500</td><td>Cash</td><td><button class="btn btn-outline btn-sm">🖨 Print</button></td></tr>
<tr><td>#R-0889</td><td>Kavya R.</td><td>X-A</td><td>₹8,500</td><td>NEFT</td><td><button class="btn btn-outline btn-sm">🖨 Print</button></td></tr>
</tbody></table></div></div>
</div>`,},
{id:'acc-defaulters',html:`<div class="page-header"><div><div class="page-title">⚠️ Fee Defaulters</div><div class="page-sub">73 students with outstanding fees</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📊 Export List</button><button class="btn btn-primary btn-sm">📱 Send Reminders</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card red"><div class="stat-icon-wrap">⚠️</div><div class="stat-value">73</div><div class="stat-label">Total Defaulters</div></div><div class="stat-card amber"><div class="stat-icon-wrap">💰</div><div class="stat-value">₹12.8L</div><div class="stat-label">Total Outstanding</div></div><div class="stat-card blue"><div class="stat-icon-wrap">📅</div><div class="stat-value">28</div><div class="stat-label">Overdue > 30 days</div></div><div class="stat-card purple"><div class="stat-icon-wrap">📱</div><div class="stat-value">45</div><div class="stat-label">SMS Sent Today</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Defaulter List</span><div style="display:flex;gap:8px;"><select class="filter-select"><option>All Classes</option><option>Class X</option><option>Class XI</option></select><select class="filter-select"><option>Sort: Amount ↓</option><option>Sort: Days Overdue ↓</option></select></div></div>
<div class="table-wrap"><table><thead><tr><th>Roll</th><th>Student</th><th>Class</th><th>Due Amount</th><th>Days Overdue</th><th>Last Paid</th><th>Actions</th></tr></thead><tbody>
<tr><td>2404</td><td><strong>Arjun Patel</strong></td><td>X-C</td><td><strong style="color:var(--danger)">₹25,000</strong></td><td><span class="badge badge-danger">62 days</span></td><td>Dec 2024</td><td><div style="display:flex;gap:4px;"><button class="btn btn-primary btn-sm">Collect</button><button class="btn btn-outline btn-sm">📱 SMS</button></div></td></tr>
<tr><td>1892</td><td><strong>Ritu Sharma</strong></td><td>IX-B</td><td><strong style="color:var(--danger)">₹18,500</strong></td><td><span class="badge badge-danger">45 days</span></td><td>Dec 2024</td><td><div style="display:flex;gap:4px;"><button class="btn btn-primary btn-sm">Collect</button><button class="btn btn-outline btn-sm">📱 SMS</button></div></td></tr>
<tr><td>2105</td><td><strong>Kiran Yadav</strong></td><td>XI-A</td><td><strong style="color:var(--warning)">₹12,500</strong></td><td><span class="badge badge-warning">15 days</span></td><td>Jan 2025</td><td><div style="display:flex;gap:4px;"><button class="btn btn-primary btn-sm">Collect</button><button class="btn btn-outline btn-sm">📱 SMS</button></div></td></tr>
</tbody></table></div></div>`,},
{id:'acc-receipts',html:`<div class="page-header"><div><div class="page-title">🧾 Receipts</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📊 Bulk Export</button></div></div>
<div class="filter-bar"><input class="filter-input" placeholder="Search receipt no / student..."><select class="filter-select"><option>All Months</option><option>Feb 2025</option><option>Jan 2025</option></select><select class="filter-select"><option>All Classes</option><option>XII</option><option>XI</option></select></div>
<div class="card"><div class="card-header"><span class="card-title">Receipt Register</span></div><div class="table-wrap"><table><thead><tr><th>Receipt</th><th>Date</th><th>Student</th><th>Class</th><th>Fee Head</th><th>Amount</th><th>Mode</th><th>Action</th></tr></thead><tbody>
<tr><td><strong>#R-0891</strong></td><td>26 Feb</td><td>Ananya K.</td><td>XII-A</td><td>Q3 Tuition</td><td>₹12,500</td><td>UPI</td><td><button class="btn btn-outline btn-sm">🖨 Print</button></td></tr>
<tr><td><strong>#R-0890</strong></td><td>26 Feb</td><td>Rohan M.</td><td>XII-B</td><td>Q3 Tuition</td><td>₹12,500</td><td>Cash</td><td><button class="btn btn-outline btn-sm">🖨 Print</button></td></tr>
<tr><td><strong>#R-0889</strong></td><td>26 Feb</td><td>Kavya R.</td><td>X-A</td><td>Q3 Tuition</td><td>₹8,500</td><td>NEFT</td><td><button class="btn btn-outline btn-sm">🖨 Print</button></td></tr>
</tbody></table></div></div>`,},
{id:'acc-payroll',html:`<div class="page-header"><div><div class="page-title">💼 Staff Payroll</div></div><div class="page-actions"><button class="btn btn-outline btn-sm">📊 Download Report</button><button class="btn btn-primary btn-sm">▶ Run Payroll Feb 2025</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(4,1fr)"><div class="stat-card blue"><div class="stat-icon-wrap">💵</div><div class="stat-value">₹28.4L</div><div class="stat-label">Total Payroll</div></div><div class="stat-card green"><div class="stat-icon-wrap">✅</div><div class="stat-value">118</div><div class="stat-label">Processed</div></div><div class="stat-card amber"><div class="stat-icon-wrap">⏳</div><div class="stat-value">6</div><div class="stat-label">Pending</div></div><div class="stat-card purple"><div class="stat-icon-wrap">📋</div><div class="stat-value">₹2.8L</div><div class="stat-label">PF/ESI Deductions</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Payroll Register — February 2025</span></div><div class="table-wrap"><table><thead><tr><th>ID</th><th>Name</th><th>Department</th><th>Basic</th><th>HRA</th><th>DA</th><th>PF</th><th>Net Pay</th><th>Status</th><th>Action</th></tr></thead><tbody>
<tr><td>S001</td><td>Dr. Priya Sharma</td><td>Science</td><td>₹62,000</td><td>₹18,600</td><td>₹9,300</td><td>₹7,440</td><td><strong>₹82,460</strong></td><td><span class="badge badge-success">Processed</span></td><td><button class="btn btn-outline btn-sm">🖨</button></td></tr>
<tr><td>S002</td><td>Ramesh Kumar</td><td>Math</td><td>₹55,000</td><td>₹16,500</td><td>₹8,250</td><td>₹6,600</td><td><strong>₹73,150</strong></td><td><span class="badge badge-success">Processed</span></td><td><button class="btn btn-outline btn-sm">🖨</button></td></tr>
<tr><td>S003</td><td>Meera Nambiar</td><td>English</td><td>₹42,000</td><td>₹12,600</td><td>₹6,300</td><td>₹5,040</td><td><strong>₹55,860</strong></td><td><span class="badge badge-warning">Pending</span></td><td><button class="btn btn-primary btn-sm">Process</button></td></tr>
</tbody></table></div></div>`,},
{id:'acc-expenses',html:`<div class="page-header"><div><div class="page-title">📉 Expense Tracker</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">+ Add Expense</button></div></div>
<div class="stats-grid" style="grid-template-columns:repeat(3,1fr)"><div class="stat-card red"><div class="stat-icon-wrap">📉</div><div class="stat-value">₹9.2L</div><div class="stat-label">Total Expenses (Feb)</div></div><div class="stat-card amber"><div class="stat-icon-wrap">📅</div><div class="stat-value">₹1.4L</div><div class="stat-label">This Week</div></div><div class="stat-card blue"><div class="stat-icon-wrap">📊</div><div class="stat-value">↑ 4.2%</div><div class="stat-label">vs Last Month</div></div></div>
<div class="card"><div class="card-header"><span class="card-title">Expense Register — February 2025</span></div><div class="table-wrap"><table><thead><tr><th>Date</th><th>Category</th><th>Description</th><th>Amount</th><th>Approved By</th><th>Status</th></tr></thead><tbody>
<tr><td>25 Feb</td><td><span class="badge badge-primary">Infrastructure</span></td><td>Lab equipment maintenance</td><td>₹45,000</td><td>Principal</td><td><span class="badge badge-success">Paid</span></td></tr>
<tr><td>24 Feb</td><td><span class="badge badge-warning">Stationery</span></td><td>Monthly stationery supply</td><td>₹12,500</td><td>Admin</td><td><span class="badge badge-success">Paid</span></td></tr>
<tr><td>23 Feb</td><td><span class="badge badge-purple">Events</span></td><td>Sports Day advance booking</td><td>₹80,000</td><td>Principal</td><td><span class="badge badge-warning">Pending</span></td></tr>
<tr><td>22 Feb</td><td><span class="badge badge-cyan">Utilities</span></td><td>Electricity bill — Feb</td><td>₹38,200</td><td>Admin</td><td><span class="badge badge-success">Paid</span></td></tr>
</tbody></table></div></div>`,},
{id:'acc-reports',html:`<div class="page-header"><div><div class="page-title">📊 Financial Reports</div></div><div class="page-actions"><button class="btn btn-primary btn-sm">⬇ Download All</button></div></div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px;">
<div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">💰</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">Fee Collection Report</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Class-wise &amp; month-wise</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">📉</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">Expense Report</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Category &amp; dept breakdown</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">💼</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">Payroll Report</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Staff salaries &amp; deductions</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">📊</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">P&amp;L Statement</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Income vs expense summary</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">🧾</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">GST Report</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Tax filing ready export</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">📋</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">Balance Sheet</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Annual financial overview</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">💸</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">Defaulters Report</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Pending dues &amp; aging</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div><div class="card"><div class="card-body" style="text-align:center;padding:20px 14px;"><div style="font-size:28px;margin-bottom:8px;">🏦</div><div style="font-weight:700;font-size:13px;margin-bottom:4px;">Bank Reconciliation</div><div style="font-size:11px;color:var(--text-secondary);margin-bottom:12px;">Cash vs bank statement</div><div style="display:flex;gap:4px;justify-content:center;flex-wrap:wrap;"><button class="btn btn-outline btn-sm">📄 PDF</button><button class="btn btn-outline btn-sm">📊 Excel</button><button class="btn btn-outline btn-sm">CSV</button></div></div></div>
</div>`,}
];}

export function getViewsForRole(role) {
  if (role === 'admin') return getAdminViews();
  if (role === 'principal') return getPrincipalViews();
  if (role === 'teacher') return getTeacherViews();
  if (role === 'student') return getStudentViews();
  if (role === 'parent') return getParentViews();
  if (role === 'accountant') return getAccountantViews();
  return [];
}

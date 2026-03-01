export const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 11 } } } }
};

function barOpts(stacked) {
  return {
    ...CHART_DEFAULTS,
    scales: {
      y: { beginAtZero: true, stacked: stacked || false, grid: { color: '#F1F5F9' }, ticks: { font: { size: 11 } } },
      x: { stacked: stacked || false, grid: { display: false }, ticks: { font: { size: 11 } } }
    }
  };
}

function lineOpts() {
  return {
    ...CHART_DEFAULTS,
    scales: {
      y: { beginAtZero: true, grid: { color: '#F1F5F9' }, ticks: { font: { size: 11 } } },
      x: { grid: { display: false }, ticks: { font: { size: 11 } } }
    }
  };
}

export const CHART_CONFIGS = {
  'c-admin-rev': {
    type: 'bar',
    data: { labels: months, datasets: [{ label: 'Revenue (₹L)', data: [42,38,45,40,36,48,52,46,44,39,38], backgroundColor: '#2563EB', borderRadius: 5 }, { label: 'Expense (₹L)', data: [30,28,32,35,29,33,38,31,30,28,31], backgroundColor: '#E2E8F0', borderRadius: 5 }] },
    options: barOpts()
  },
  'c-admin-class': {
    type: 'doughnut',
    data: { labels: ['I–V (Primary)', 'VI–VIII (Mid)', 'IX–X (Sec)', 'XI–XII (Sr)'], datasets: [{ data: [620,480,390,357], backgroundColor: ['#2563EB','#16A34A','#F59E0B','#7C3AED'], borderWidth: 0, hoverOffset: 8 }] },
    options: { ...CHART_DEFAULTS, cutout: '68%' }
  },
  'c-admin-adm': {
    type: 'line',
    data: { labels: months, datasets: [{ label: 'Admissions', data: [12,8,45,32,18,5,3,2,6,8,11], borderColor: '#7C3AED', backgroundColor: 'rgba(124,58,237,.08)', tension: .4, fill: true, pointBackgroundColor: '#7C3AED', pointRadius: 4 }] },
    options: lineOpts()
  },
  'c-admin-att': {
    type: 'line',
    data: { labels: months, datasets: [{ label: 'Attendance %', data: [91,92,89,94,88,95,93,91,90,92,92], borderColor: '#16A34A', backgroundColor: 'rgba(22,163,74,.08)', tension: .4, fill: true, pointBackgroundColor: '#16A34A', pointRadius: 4 }] },
    options: { ...lineOpts(), scales: { y: { min: 80, max: 100, grid: { color: '#F1F5F9' }, ticks: { font: { size: 11 } } }, x: { grid: { display: false }, ticks: { font: { size: 11 } } } } }
  },
  'c-p-att': {
    type: 'line',
    data: { labels: months, datasets: [{ label: 'Attendance %', data: [91,92,89,94,88,95,93,91,90,92,92], borderColor: '#0891B2', backgroundColor: 'rgba(8,145,178,.08)', tension: .4, fill: true, pointRadius: 4, pointBackgroundColor: '#0891B2' }] },
    options: { ...lineOpts(), scales: { y: { min: 80, max: 100, grid: { color: '#F1F5F9' }, ticks: { font: { size: 11 } } }, x: { grid: { display: false }, ticks: { font: { size: 11 } } } } }
  },
  'c-p-rev': {
    type: 'bar',
    data: { labels: months, datasets: [{ label: 'Revenue (₹L)', data: [42,38,45,40,36,48,52,46,44,39,38], backgroundColor: '#0891B2', borderRadius: 5 }, { label: 'Expense (₹L)', data: [30,28,32,35,29,33,38,31,30,28,31], backgroundColor: '#E2E8F0', borderRadius: 5 }] },
    options: barOpts()
  },
  'c-p-radar': {
    type: 'radar',
    data: { labels: ['Math','Physics','Chemistry','English','Bio','Comp Sc'], datasets: [{ label: 'Class XII-A', data: [85,78,75,90,80,92], borderColor: '#7C3AED', backgroundColor: 'rgba(124,58,237,.1)', pointBackgroundColor: '#7C3AED' }, { label: 'Class XII-B', data: [78,82,70,85,76,88], borderColor: '#0891B2', backgroundColor: 'rgba(8,145,178,.1)', pointBackgroundColor: '#0891B2' }] },
    options: { ...CHART_DEFAULTS, scales: { r: { beginAtZero: true, max: 100 } } }
  },
  'c-p-class': {
    type: 'doughnut',
    data: { labels: ['I–V','VI–VIII','IX–X','XI–XII'], datasets: [{ data: [620,480,390,357], backgroundColor: ['#2563EB','#16A34A','#F59E0B','#7C3AED'], borderWidth: 0 }] },
    options: { ...CHART_DEFAULTS, cutout: '65%' }
  },
  'c-t-sub': {
    type: 'bar',
    data: { labels: ['Unit 1','Unit 2','Mid-Term','Unit 3'], datasets: [{ label: 'Class Avg', data: [72,78,82,79], backgroundColor: '#16A34A', borderRadius: 6 }, { label: 'Highest', data: [95,97,99,98], backgroundColor: '#DCFCE7', borderRadius: 6 }] },
    options: barOpts()
  },
  'c-t-pf': {
    type: 'doughnut',
    data: { labels: ['Pass (A-B)','Pass (C-D)','Needs Work'], datasets: [{ data: [28,12,5], backgroundColor: ['#16A34A','#F59E0B','#DC2626'], borderWidth: 0 }] },
    options: { ...CHART_DEFAULTS, cutout: '65%' }
  },
  'c-s-marks': {
    type: 'bar',
    data: { labels: ['Math','Physics','Chemistry','English','Comp Sc'], datasets: [{ label: 'Mid-Term', data: [97,89,82,94,96], backgroundColor: '#F59E0B', borderRadius: 6 }, { label: 'Unit 1', data: [88,84,78,92,94], backgroundColor: '#FDE68A', borderRadius: 6 }] },
    options: barOpts()
  },
  'c-s-att': {
    type: 'line',
    data: { labels: months, datasets: [{ label: 'Attendance %', data: [100,98,100,96,100,98,97,100,99,100,98], borderColor: '#16A34A', backgroundColor: 'rgba(22,163,74,.08)', tension: .4, fill: true, pointRadius: 4, pointBackgroundColor: '#16A34A' }] },
    options: { ...lineOpts(), scales: { y: { min: 85, max: 100, grid: { color: '#F1F5F9' }, ticks: { font: { size: 11 } } }, x: { grid: { display: false }, ticks: { font: { size: 11 } } } } }
  },
  'c-acc-rev': {
    type: 'bar',
    data: { labels: months, datasets: [{ label: 'Collected (₹L)', data: [42,35,38,40,32,45,48,41,39,36,38], backgroundColor: '#16A34A', borderRadius: 5 }, { label: 'Pending (₹L)', data: [8,12,10,7,15,6,4,9,10,13,13], backgroundColor: '#FECACA', borderRadius: 5 }] },
    options: barOpts()
  },
  'c-acc-class': {
    type: 'bar',
    data: { labels: ['I–V','VI–VIII','IX–X','XI–XII'], datasets: [{ label: 'Collected %', data: [88,82,79,91], backgroundColor: ['#2563EB','#16A34A','#F59E0B','#7C3AED'], borderRadius: 6 }] },
    options: barOpts()
  },
};

// Map pages to their chart IDs
export const PAGE_CHARTS = {
  'dashboard': ['c-admin-rev', 'c-admin-class', 'c-admin-adm', 'c-admin-att'],
  'p-dashboard': ['c-p-att', 'c-p-rev', 'c-p-radar', 'c-p-class'],
  'p-performance': ['c-p-att', 'c-p-rev', 'c-p-radar', 'c-p-class'],
  't-dashboard': ['c-t-sub', 'c-t-pf'],
  't-performance': ['c-t-sub', 'c-t-pf'],
  's-dashboard': ['c-s-marks', 'c-s-att'],
  's-analytics': ['c-s-marks', 'c-s-att'],
  'acc-dashboard': ['c-acc-rev', 'c-acc-class'],
  'acc-fees': ['c-acc-rev', 'c-acc-class'],
};

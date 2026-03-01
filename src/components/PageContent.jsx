import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { CHART_CONFIGS, PAGE_CHARTS } from '../data/charts';
import { getViewsForRole } from '../data/views';

Chart.register(...registerables);

const chartInstances = {};

function initChartsForPage(page) {
  const chartIds = PAGE_CHARTS[page] || [];
  chartIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (chartInstances[id]) {
      chartInstances[id].destroy();
      delete chartInstances[id];
    }
    const config = CHART_CONFIGS[id];
    if (config) chartInstances[id] = new Chart(el, config);
  });
}

export default function PageContent({ role, currentPage, onNavigate }) {
  const views = getViewsForRole(role);
  const contentRef = useRef(null);

  useEffect(() => {
    // Init charts after render
    const timer = setTimeout(() => initChartsForPage(currentPage), 100);
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Handle tab switching in the DOM (called from inline onclick)
  useEffect(() => {
    window.__switchTab = (btn, tabId) => {
      const cont = btn.closest('.page-view');
      if (!cont) return;
      cont.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      cont.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const tab = document.getElementById(tabId);
      if (tab) tab.classList.add('active');
      setTimeout(() => initChartsForPage(currentPage), 50);
    };
    window.__navigate = (page) => onNavigate(page);

    return () => {
      delete window.__switchTab;
      delete window.__navigate;
    };
  }, [currentPage, onNavigate]);

  return (
    <main className="page-content" ref={contentRef}>
      {views.map(view => {
        // Patch onclick navigate calls
        const patchedHtml = view.html
          .replace(/onclick="navigate\('([^']+)'\)"/g, "onclick=\"window.__navigate('$1')\"")
          .replace(/onclick="switchTab\(this,'([^']+)'\)"/g, "onclick=\"window.__switchTab(this,'$1')\"");

        return (
          <div
            key={view.id}
            id={`view-${view.id}`}
            className={`page-view${currentPage === view.id ? ' active' : ''}`}
            dangerouslySetInnerHTML={{ __html: patchedHtml }}
          />
        );
      })}
    </main>
  );
}

const INDUSTRY_ICONS = {
  Retail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 01-8 0"/></svg>',
  Technology: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  Manufacturing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M5 20V8l7-4 7 4v12"/><path d="M9 20v-6h6v6"/></svg>',
  Healthcare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
};

const AVATAR_COLORS = ['#FF6C37', '#2563eb', '#10b981', '#8b5cf6', '#f59e0b'];

function avatarColor(id) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function initials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

async function loadAccounts() {
  const tbody = document.getElementById('accountRows');
  const statTotal = document.getElementById('statTotal');
  const statActive = document.getElementById('statActive');

  tbody.innerHTML = '<tr><td colspan="4" class="loading">Loading accounts…</td></tr>';

  try {
    const res = await fetch('/accounts');
    if (!res.ok) throw new Error('API error ' + res.status);
    const { data } = await res.json();

    statTotal.textContent = data.length;
    statActive.textContent = data.filter((a) => a.status === 'active').length;

    tbody.innerHTML = data
      .map(
        (a) => `
      <tr>
        <td>
          <span class="account-id">
            <span class="account-avatar" style="background:${avatarColor(a.id)}">${initials(a.name)}</span>
            ${escapeHtml(a.id)}
          </span>
        </td>
        <td>${escapeHtml(a.name)}</td>
        <td>
          <span class="industry-cell">
            ${INDUSTRY_ICONS[a.industry] || INDUSTRY_ICONS.Technology}
            ${escapeHtml(a.industry)}
          </span>
        </td>
        <td><span class="status-pill ${a.status}">${escapeHtml(a.status)}</span></td>
      </tr>`
      )
      .join('');
  } catch {
    tbody.innerHTML =
      '<tr><td colspan="4" class="error-msg">Could not load API. Run start-api.command first.</td></tr>';
    statTotal.textContent = '—';
    statActive.textContent = '—';
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.getElementById('refreshBtn').addEventListener('click', loadAccounts);
loadAccounts();

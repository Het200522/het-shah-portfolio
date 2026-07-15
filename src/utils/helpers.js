export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
}

export function scrollToId(id) {
  const el = document.getElementById(id.replace('#', ''));
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Converts **bold** markers in plain content strings to <b> tags.
// Intentionally minimal, this is just so content files can stay easy to
// edit as plain strings instead of raw HTML.
export function renderBold(str = '') {
  return str.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
}

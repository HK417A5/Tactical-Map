/* Optional display interactions.
   All page content lives in HTML. Deleting this file will not hide the pages. */

// Buttons that navigate to another page.
document.querySelectorAll('[data-href]').forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = button.dataset.href;
  });
});

// Mark the current page in the navigation.
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Filter game covers on the home page.
const search = document.querySelector('[aria-label="Search games"]');
search?.addEventListener('input', () => {
  const query = search.value.toLowerCase();
  document.querySelectorAll('.game-card').forEach((card) => {
    card.hidden = !card.dataset.game.toLowerCase().includes(query);
  });
});

// Highlight selected marker, tool, or color.
document.querySelectorAll('.icon, .swatches button').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('selected');
    const preview = document.querySelector('.preview-mark span');
    if (preview) preview.textContent = button.textContent;
  });
});

// Switch between Online and Solo display states.
document.querySelectorAll('[data-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.querySelectorAll('button').forEach((item) => {
      item.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});

// Update the timeline label. No map history is recorded.
const timeline = document.querySelector('[aria-label="Timeline"]');
timeline?.addEventListener('input', () => {
  const minutes = String(Math.floor(timeline.value / 60)).padStart(2, '0');
  const seconds = String(timeline.value % 60).padStart(2, '0');
  document.querySelector('#time').textContent = `${minutes}:${seconds}`;
});

// Copy the example room code when the browser permits clipboard access.
document.querySelector('#copy')?.addEventListener('click', async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText('C3-555-2333');
    button.textContent = 'Copied';
  } catch {
    alert('Room code: C3-555-2333');
  }
});

// Add or delete custom phrase fields for this page visit only.
document.querySelector('#add-phrase')?.addEventListener('click', () => {
  const row = document.createElement('div');
  row.className = 'phrase';
  const input = document.createElement('input');
  input.placeholder = 'New phrase';
  input.setAttribute('aria-label', 'New custom phrase');
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.dataset.remove = '';
  remove.textContent = '×';
  row.append(input, remove);
  document.querySelector('#phrases').append(row);
});

document.addEventListener('click', (event) => {
  const remove = event.target.closest('[data-remove]');
  if (remove) remove.closest('.phrase').remove();
});

// Placeholder action: connect your persistence logic here later.
document.querySelector('#save')?.addEventListener('click', () => {
  window.location.href = 'index.html';
});

const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (ev) => {
  generateTags(ev.target.value);
});

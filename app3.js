const tagsEl = document.getElementById('tags'); //Get all tags as nodearray
const textArea = document.getElementById('textarea'); //Get inputs from textarea

textArea.focus(); //put focus on textarea for direct input from keyboard at load

//Create eventlistener for every keyup-event
textArea.addEventListener('keyup', (ev) => {
  generateTags(ev.target.value); //send the written words into tag generator

  if (ev.key === 'Enter') {
    //check if the enter-button is pressed
    setTimeout(() => {
      //If enter is pushed then wait 10ms and clear textarea
      ev.target.value = '';
    }, 10);

    randomSelect(); //Run random selection function
  }
});

function generateTags(input) {
  //grab input from what is sent from textarea eventlistener
  const tags = input
    .split(',')//split into array elements when separated with a comma
    .filter((tag) => tag.trim() !== '')//filter out the tags with whitespaces
    .map((tag) => tag.trim());//put every trimmed tag back into the tag array

  tagsEl.innerHTML = ''; //clear the textarea when it has been sent

  tags.forEach((tag) => {//create tags with new spans in document
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);//place the created tags as children to the tags element 
  });
}

function randomSelect() { //random selector function
  const times = 30; //number of times to randomize

  const interval = setInterval(() => { //create an interval function that is run for 100ms
    const randomTag = pickRandomTag();//generate a constant with a random tag as a result

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag(); //forgot the () wich resulted in no selection!

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

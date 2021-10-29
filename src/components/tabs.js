import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicDiv = document.createElement('div')
  const jsDiv = document.createElement('div')
  const bsDiv = document.createElement('div')
  const techDiv = document.createElement('div')
  const jqDiv = document.createElement('div')
  const nodeDiv = document.createElement('div')

  topicDiv.classList.add('topics')
  jsDiv.classList.add('tab')
  bsDiv.classList.add('tab')
  techDiv.classList.add('tab')
  jqDiv.classList.add('tab')
  nodeDiv.classList.add('tab')

  topicDiv.appendChild(jsDiv)
  topicDiv.appendChild(bsDiv)
  topicDiv.appendChild(techDiv)
  topicDiv.appendChild(jqDiv)
  topicDiv.appendChild(nodeDiv)

  jsDiv.textContent = topics[0]
  bsDiv.textContent = topics[1]
  techDiv.textContent = topics[2]
  jqDiv.textContent = topics[3]
  nodeDiv.textContent = topics[4]

  return topicDiv
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

const tabsFile = document.querySelector(selector)
axios.get('http://localhost:5000/api/topics')
.then(res => {
const tabData = Tabs(res.data.topics)
tabsFile.appendChild(tabData)
})
.catch(err => {
  console.error('error');
})
return tabsFile;
}

export { Tabs, tabsAppender }

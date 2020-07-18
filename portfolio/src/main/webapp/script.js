// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello, I am Jill!', 'I am Wei-Shiang!', 'I am a 21-year-old college student:)'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

// week2-step2 practice js fetch function 
function getGreetingUsingArrowFunctions() {
  fetch('/data').then(response => response.text()).then((greeting) => {
    document.getElementById('greeting-container').innerText = greeting;
  });
}

// week2-step3 add json
function getServerStats() {
  fetch('/data').then(response => response.json()).then((stats) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content
    console.log(stats);

    const statsListElement = document.getElementById('greeting-container');
    statsListElement.innerHTML = '';
    statsListElement.appendChild(
        createListElement(stats[0]));
    statsListElement.appendChild(
        createListElement(stats[1]));
    statsListElement.appendChild(
        createListElement(stats[2]));
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

//week2-step4
function getAllMessages() {
  fetch('/data').then(response => response.json()).then((messageList) => {
    console.log(messageList)
    const messageListElement = document.getElementById('message-history');
    messageListElement.innerHTML = '';
    messageList.forEach((line) => {
      messageListElement.appendChild(createListElement(line));
    });
  });
}

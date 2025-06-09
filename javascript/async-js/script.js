"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const request = fetch("https://restcountries.com/v3.1/name/portugal");

// "then" method ALWAYS returns a promise no matter if we return anything or not.
// BUT if we do return a value, then that value will become the fulfillment (success) value of the returned promise.
const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0], "");
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // country 1
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"));
};

getCountryData("portugal");

// GOAL: Deal with long running tasks that run in the background. Common use, fetching data from remote servers in so called AJAX calls.

/** Async JS, AJAX & APIs

- most code is synchronous
- synchronous code is executed line by line
- each line of code waits for the previous line to finish
- long-running operations block code execution


- Async code is executed after a task that runs in the "background" finishes
- Async code is non-blocking
- Execution does NOT wait for async task to finish its work
- e.g. callback running after a timer
- executed after all other code 
- coordinating behaviour of a program over a period of time
- Async (not occuring at the same time)
- Callback functions ALONE do NOT make code async!
- e.g. img.src ---> this operation is async, essentially loading image in the background, while the rest of the code can keep running. Imagine if its a huge image. We wouldn't our code to wait for our image to load. Once loaded, a load event will automatically be emitted by JS, we can listen and act on it.
- addEventListener ALONE do NOT make code async!
- e.g. event listner listening for a click on a button is not doing any work in the background, simply waiting for a click to happen but its not doing anything. NO async behaviour involved.



- AJAX : Async JS and XML, allows us to communicate with remote web servers in an async way. 
    with AJAX calls, we can request data from web servers dynamically. So, without reloading the page, so that we can use that data in our app dynamically.

    How AJAX WORKS:
                                           HTTP REQUEST      (for data)
                                    ------------------------>
        JS APP (e.g. Browser)(CLIENT)                           WEB SERVER
                                    <------------------------
                      (requested data)      RESPONSE


- back n forth b/w client n server happens asynchronously in the background. there can even be different types of requests.

- when we are asking a server to send us some data, this server usually contains a web API (which has the data we asked for)



- API: Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other/ exchange information.

- There are many types of APIs in web development
- "online"/ WEB API or API: Application running on a server, that recieves requests for data, and sends data back as response.

- We can build our own APIs or use 3rd-party APIs.


- XML is a data format which used to be widely used to transmit data on the web, now a days no API uses XML data anymore.
- Most APIs now use the JSON data format (Javascript Obj, converted to a string, ez to send across web and use in JS once data arrives).


- Multiple way of doing AJAX calls:
        - old school: XMLHttpRequest function





- How AJAX WORKS: Request-Response Model OR Client Server Architecture

                                           HTTP REQUEST      (for data)
                                    ------------------------>
        JS APP (e.g. Browser)(CLIENT)                           WEB SERVER
                                    <------------------------
                      (requested data)      RESPONSE

e.g. https://restcountries.eu/rest/v2/alpha/PT              
- Every URL gets a HTTP or HTTPS, which is for the protocol that will be used on this connection 
- domain name
- and also after a slash we have a so-called resourse that we want to access

e.g. https://104.26.45.255:443 (protocol, IP Add, Port we access on the server)
1. DNS/ DNS Lookup: Domain name ----> Real Address of the Server (happenes through ISP) After the real IP address
    has been sent back to the browser, then we can call it. 

    - port number is just to identify a specific service that's running on a server. Has nothing to do with /rest/v2... resource that we want oaccess

2. A TCP/IP (Communication protocols that define exactly how data travels across the Web, set rules about how data moves on the internet) socket connection is established b/w the browser and server. They are now finally connected. Connection kept alive until all files of the website or data are transferred.



e.g. GET /rest/v2/alpha/PT HTTP/1.1 ----> start line: HTTP METHOD + REQUEST TARGET + HTTP VERSION
     Host: www.google.com           -
     User-Agent: Mozilla/5.0         |----> HTTP REQUEST HEADERS (Som info about request itself; many diff possibilities)
     Accept-Language: en-US          |   
                                    -
     <BODY> ---------> Request BODY (only when sending data to server e.g. POST)

3. HTTP (another communication protocol; system of rules that allows 2 or more parties to communicate; In case of HTTP its just a protocol that allows clients and web servers to communicate. Works by sending Requests & Response messages from client to server and back ) Request. Request is formed and hits the server, which will then be working on it until it has our data ready to send back.

        - HTTP METHODS: GET, PUT, POST, PATCH, DELETE....
       
- HTTP VS HTTPS : HTTPS is encrypted using TLS or SSL


e.g. HTTP/1.1 200 OK --------> Start Line: HTTP VERSION + STATUS CODE + STATUS MESSAGE
     
     Date: Fri, 18 Jan 2201         -
     Content-Type: text/html         |---------> HTTP RESPONSE HEADERS   
     Transfer-Encoding: chunked      |
                                    -
     <BODY> ----------------> RESPONSE BODY (most responses) --> usually contains the JSON data coming back from an API or the HTML of the Web page the was requested. 

4. Once ready, it will send it back using HTTP Response

5. In case of web page, initial/ first request we just get back the HTML file (index.html is first loaded), scanned for assets (JS, CSS, images), process is repeated for each file until all file have arrived,  build/ render the entire page. There can be multiple requests happening at the same time.


- TCP's role is to break requests and responses into small chunks called packets b4 they are sent. Once packets arrive at their final destination, TCP will reassemble all packets into the original request or response. This is necessary so that each packet can take a different route through the internet b/c this way the msg arrives at the destination ASAP not possible if entire data sent as big chunk.

- Job of IP protocol is to actually send and route these packets through the internet, ensures that they arrive at the destination they should go using IP addresses on each packet.


- Modern JS feature: Promises to excape CALLBACK HELL
    - replace old XMLHttpRequest function with the modern way of making AJAX calls; by using FETCH API.

    - Promise (ES6): an obj that is used as a placeholder for the future result of an async operation / a container for an asynchronously delivered value/ container for a future value e.g. Response from AJAX call

    - we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous resluts;
    - instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell

    - since Promises work with async operations, they are time sensitive, change over time, they can be in different states.
    - The Promise lifecycle:
        - Pending (b4 the future value is available, during this time the async task is still doing its work in BG)
        - Settled (async task has finished)
                - Fulfilled (success! the value is now avail)
                - Rejected (an error happened)
        
        - we are able to handle these different states in our code.
        - NOTE: Promise is only settled ONCE, from there state will remain unchanged 4ever; so the Promise id either Fulfilled or Rejected it is impossible to change that state.
        - these states are relevant and useful when use the Promise to get a result (CONSUME PROMISE)
        - we consume a promise when we already have a promise e.g. promise returned from Fetch API
        - in order to consume a promise it first must be created/ built e.g. in cases of the Fetch API, it is the fetch function that builds and returns the promise for us to consume.
        - promises don't get rid of callbacks, they get rid of callback hells
*/

/** VERSION 1 BASIC AJAX CALL


const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getContryData = function (country) {
  // call function and store it in a variable
  const request = new XMLHttpRequest();
  // open request
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  // send request, we can't simply store this result in a variable, as the result is not there yet, AJAX call is being done in the BG, while rest of the code keeps running. Here we are fetching data in the background, once done, it will emmit the load event
  request.send();
  // register a callback on the request obj for the load event
  request.addEventListener("load", function () {
    // JSON console.log(this.responseText);
    const data_arr = JSON.parse(this.responseText); // converting to JS obj
    console.log(data_arr); // array containing one obj
    const [data] = data_arr;
    const html = `
<article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

// 2 AJAX calls happening at the same time, whichever one arrives first will fire the load event and will be displayed on the page. We can also we can cereate a SEQUENCE of AJAX calls.
getContryData("portugal"); // send off this request then continues to the next line
getContryData("usa"); // fires of another AJAX call immediately way b4 the data for portugal has arrived
getContryData("germany");

*/

/** VERSION 2 CALLBACK HELL
 const renderCountry = function (data, className = "") {
  const html = `
<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getContryAndNeighbour = function (country) {
  // AJAX CALL COUNTRY 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const data_arr = JSON.parse(this.responseText);
    console.log(data_arr);
    const [data] = data_arr;

    // RENDER COUNTRY 1
    renderCountry(data);

    // GET NEIGHBOUR COUNTRY 2
    const [neighbour] = data.borders; // const neighbour = data.borders?.[0];

    if (!neighbour) return; // ISLANDS

    // AJAX CALL COUNTRY 2, ONE AJAX CALL THAT DEPENDS ON ANOTHER
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      // NESTED CALL BACKS, BUT THIS IS NOT SCALABLE (CALLBACK HELL --> LOTS OF NEXTED TASKS TO EXECUTE ASYNC TASKS IN SEQUENCE) THIS HAPPENS FOR ALL ASYNC TASKS WHICH ARE HANDLED BY CALLBACKS NOT JUS AJAX CALLS. MESSY AND HARD TO MAINTAIN. DIFF TO REASON AND UNDERSTAND.
      const data_arr = JSON.parse(this.responseText);
      console.log(data_arr);
      const [data] = data_arr;

      // RENDER COUNTRY 2
      renderCountry(data, "neighbour");
    });
  });
};

getContryAndNeighbour("mexico");
*/

/** VERSION 3 PROMISES

const request = fetch("https://restcountries.com/v3.1/name/portugal"); // Simple GET request, the there more options available in the fetch function.
console.log(request); // fetch function returns a Promise

*/

/** VERSION 4 CONSUMING PROMISES


const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");


const renderCountry = function (data) {
  const html = `
<article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const request = fetch("https://restcountries.com/v3.1/name/portugal");


const getCountryData = function (country) {
  // in the begining, the promise is still pending. async task still running in BG.
  // at some point the promise will be settled either fulfilled or rejected
  // assume that the promise will be fulfilled n that we have a value avail to work with
  // to handle this fulfilled state, use the "then" method avail on all promises
  // into then method pass callback func that we want to be executed as soon as promise is fulfilled/ result is avail, this func will recieve one argument once it is called by JS, the argument is the resulting value of the fulfilled promise.

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      // we are interested in the data itself which is found in the response body. body is a ReadableStream. We can't yet look at the data. To view/ read the data from the body we need to call the json methon on the response.
      // json is a method avail on all response objs that is coming from the fetch function. So all of the resolved values.

      // console.log(response);  Response obj type

      return response.json(); // this json metho is also an async func which returns a new promise
    }) // handle the above promise aswell
    .then(function (data) {
      console.log(data); // data we are looking for
      renderCountry(...data);
    });
};

getCountryData("portugal");


*/

/** VERSION 5 CHAINING PROMISES


const renderCountry = function (data, className = "") {
  const html = `
<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const request = fetch("https://restcountries.com/v3.1/name/portugal");

// "then" method ALWAYS returns a promise no matter if we return anything or not.
// BUT if we do return a value, then that value will become the fulfillment (success) value of the returned promise.

// FLAT CHAIN OF PROMISES
const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0], "");
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // country 1
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); ---> don't commit the mistake of chaining the then method right here instead of returning the promise. It will work but we are again creating callback hell.
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"));
};

getCountryData("portugal");

*/

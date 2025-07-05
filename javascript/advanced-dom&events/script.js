/** 

###########################################################
1. How the DOM really works and is Organized internally
###########################################################

- DOM is he interface b/w the JS code and the browser (HTML docs rendered in and by the browser).
- Allows JS to interact with the browser

- DOM tree (tree like structure made out of NODES) is generated from an HTML document, which we can then interact with.

- DOM is a very complex API that contains a lot of methods and properties to interact with the DOM tree.


                                                            EventTarget
                                                            /       \
                                                           /        Window (global obj)
                                                          /

- In the DOM there are different types of NODES, all DOM methods and properties are organized into these different types of Objects.                                            /

- Everything that is in the HTML has to go in the DOM aswell including comments
                                                    /
- Every single NODE in the DOM tree is of type NODE (represented by a JS obj)
                                                  /  
                                                NODE
                                   /     /               \         \
                                  /     /                 \         \
                             Element   Text             Comment   Document
                                |
                                |
                                |
                            HTMLElement
                            / / / \ \ \ 
     One different type of HTMLElement for each HTML element


- Each of these types of NODES has access to different types of methods and properties.
- All child types will get access to the methods and properties of all their parent NODE types. (Inheritance)


###########################################################
2. Selecting, Creating and Deleting Elements
###########################################################

SELECTING:

- document.documentElement ---> selecting entire document
- document.head
- document.body
- document.querySelector('<CSS selectors notation>') / .querySelectorAll('<CSS selectors notation>') --> returns NodeList

- querySelector and querySelectorAll are not only available on the document element but also on all the elements (useful to select child elements)

- .getElementById()
- .getElementsByTagName() ---> returns HTMLCollection (Live Collection; if DOM change the collection is updated automatically) NOT NodeList
- .getElementsByClassName() ---> returns HTMLCollection


CREATING, INSERTING & DELETING :

- insertAdjacentHTML(position, htmlText) 
- const newElement = document.createElement('<Tag Name>') ---> creates a DOM element/ Obj not yet visible on the page
        newElement.textContent = 
        newElement.classList.add()
        newElement.innerHtml --> can read or write with this property

- .prepend()
- .append()
- .before()
- .after()

- DOM element is unique, can only exist at one place at a time
- .cloneNode(true)

- .remove() ---> new method, previous methods invloved DOM traversal and removing child elements



###########################################################
3. Styles, Attributes & Classes
###########################################################

- styles set via JS are added as inline styles
- .style.propertyName ---> can use this to set styles vis JS and read only if the style was previously created vis JS
- getComputedStyle(Element) --> returns CSSStyleDeclaration, basicially an Object can access propertirs using the dot or bracket notation

- :root in CSS = document.documentElement in JS
- document.documentElement.style.setProperty('<customProperty>', 'value')
- .getPropertyValue('property')

- we can also access attributes of a given element, depending on the element JS will already create the STANDARD properties on the OBJ automatically and make them accessible, if we create non-standard properties then JS will not automatically create a property on the OBJ.

- .getAttribute()
- .setAttribute()



NOTE: 
     - though the attribute is class in HTML, in JS we need to use className ---> overrides existing classes DONT USE
     - the returned value may differ when using .attribute vs .getAttribute()

- data attributes are attributes which start with data-....-...
- we can access data attributes via .dataset.camelCase

- .classList.add('class-1', 'class-2')/.remove()/.toggle()/.constains()
*/

/**
###########################################################
4. Scrolling
###########################################################

 - Element.getBoundingClientRect() --> x/top, y/left  ---> top left corner as reference point ----> relative to current vp
 - e.target vs this vs e.currentTarget
 - window.scrollX, window.scrollY -----> current scroll coords
 - document.documentElement.clientHeight / .clientWidth ---> current vieport dimensions
 - window.scrollTo(left, top)
 - window.scrollTo({
     left:,
     top:,
     behavior:
 })

 - element.scrollIntoView({behavior:}) ---> works only in modern browsers


 */

/**
###########################################################
5. Events & Event Handlers
###########################################################

 - Event Reference MDN

 - Event is a signal generated by a DOM Node; signal means something has happened
 - Anything of importance that happens on the website generates an Event
 - We can listen to these events and act/ handle them.
 - No matter if me listen/ handle an certain event, the even still takes palce, handling/ listening is optional.

 - .addEventListener('<event>', function(e){}) / .addEventListener('<event>', handlerFunction)
 - addEventListener allows us to add multiple event listeners to the same events without overriding any previous ones.
 - .removeEventListener('<event>', functionName) ---> we need to export the event handler function into its own function

 - we can also use the "on event property" upon the element directly
     e.g. h1.onmouseenter = function(e){} ---> old school
- with the above method we cannout add multiple event listeners to the same event as the latest one will override previous ones.

- we could also handle event through HTML attributes 
     e.g. <h1 onclick="handlerFunction()"></h1>
 */

/**
###########################################################
6. Event Propagation
###########################################################

- JS Events has a very imp property, capturing phase and bubbling phase.

- When a certain event occurs, JS creats an event for it, BUT it is not generated at the target element where the event happened. It is instead generated at the root of the document (at the very top of the DOM tree).

- Then the CAPTURING PHASE happens. Where the event travels from the document root to the target element, as it travels down it will pass through every PARENT ELEMENTS of the target element.

- As soon as the event reaches the target element, the TARGET PHASE begins. Where events can be handeled right at the target.

- After reaching the target, the event then travels all the way up to the document root (BUBBLING PHASE). Event passes up through all its PARENT ELEMENTS.

- As the event BUBBLES through the PARENT ELEMENT, Its as if the event happened in each of the PARENT ELEMENTS also.

- If we add the same event listener to any of the PARENT ELEMENTS then the event will handeled multiple times.

- By Default, events can only be handeled in the TARGET and BUBBLING PHASE. But we can also set up event listeners in a way that it listens to events in the CAPTURING PHASE also.

- NOTE: NOT ALL types of events have a capturing and bubbling phase. some of them are created right on the target element, and we can only handle them there.

- we can also say event propagate (which is what capturing and bubbling is).

- e.target vs this vs e.currentTarget

- target is where the event originated NOT WHERE THE event handler is attached to (can be the same in certain situations).
- currentTarget is the element on which the event handler is attached.
- so e.currentTarget === this

- e.stopPropagation()

- .addEventListener() is only listening for events in the BUBBLING PHASE but NOT in the CAPTURING PHASE by default.
- capturing phase is usually irrelavant, not that useful. Bubbling phase can be very useful for something called event delegation.

- .addEventListener('<event>', handlerFunction,  false)

- EVENT DELEGATION involves adding event listener to common parent of all the elements we are interested in, and determine what/ which element originated the event.

- EVENT DELEGATION is better than attaching the same event handler to multiple elements.
- When we are working with elements which are not on the page on runtime (by the time the page loads), event delegation come in handy as we cannot add event handlers onto elements which do not exist.
*/

/**
###########################################################
7. DOM Traversing
###########################################################

- .querySelector() / .querySelectorAll() ---> selecting child elements regardless of depth
- .childNodes --> NodeList ----> Every single Node of every type
- .textContent
- .innerHTML
- .children ---> HTMLCollection ---> direct children
- .firstElementChild
- .lastElementChild


- .parentNode -----> Direct Parent
- .parentElement -----> Direct Parent
- .closest('<CSS selectors notation>') ---> Finds parent no matter how far up the DOM tree


- .previousElementSibling
- .nextElementSibling
- .previousSibling
- .nextSibling

- comparisons b/w elements work ===, !==
*/

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
2. Styles, Attributes & Classes
###########################################################

- styles set via JS are added as inline styles
- .style.propertyName ---> can use this to set styles vis JS and read only if the style was previously created vis JS
- getComputedStyle(Element) --> returns CSSStyleDeclaration, basicially an Object can access propertirs using the dot or bracket notation

- :root in CSS = document.documentElement in JS
- document.documentElement.style.setProperty('<customProperty>', 'value')
- .getPropertyValue('property')

- we can also access attributes of a given element, depending on the element JS will already create the STANDARD properties on the OBJ automatically and make them accessible, if we create non-standard properties then JS will not automatically create a property on the OBJ.

- .getAttributeValue()
- .setAttribute()



NOTE: 
     - though the attribute is class in HTML, in JS we need to use className ---> overrides existing classes DONT USE
     - the returned value may differ when using .attribute vs .getAttributeValue()

- data attributes are attributes which start with data-....-...
- we can access data attributes via .dataset.camelCase

- .classList.add('class-1', 'class-2')/.remove()/.toggle()/.constains()
*/

/**
 - Element.getBoundingClientRect() --> x/top, y/left  ---> top left corner as reference point ----> relative to current vp
 - e.target/ this
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

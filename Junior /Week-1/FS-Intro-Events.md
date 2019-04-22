FS-Intro-Events

Documentation: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

1.  What is it?

    -   click over, mouse over, pop-ups
        Syntax:
        `target.addEventListener(type, listener[, useCapture]);` - Type: case-sensitive string name of the the event type - Listener: Callback function? See The event listener callback for details on the callback itself.

2.  How - to have an event happen you have to set up a listener

    ```let parent = document.getElementbyId("parent")
     parent.addEverntListener("click", function(event){
        console.log(this)       //logs the div
     });

    ```

3.  Event Bubbling

    -   By default an event in a child triggers events in all parent levels
    -   `event.stopPropegation()` prevents this behavior

4.  Delegation

    -   Ex: parent is list; add event listener that will remove any list item under the parent

    `let list = document.getElementbyId("parent-list") list.addEventListener("click", function(event){ let target = event.target; this.removeChild(target); //this refers to list, ie the parent-list })` - also removes sub-children

Review Lecture (Dan)

classList - API

if ID.classList.contains()

    classList.remvoe
    classList.add
    classList.remove

    `
    const monkey = doc.getElementById('monkey')

    monkey.Add('mouseover', (e) => {

        if (monkey.ClassList.contains('left')){
            monkey.Class:ist.remove('left')
            monkey.ClassList.add('right')
        }

    }
    )
    `

    class list is array like object

CSS Properties: - transofrm: - transition: 1s; - cheaply style: rendered in GPU rather than in browser

    // if you invoke console.log( ) in jsfiddle; it logs in the dev tools console!

Misc - forms - can `event.preventDefault()` to NOT send it to another page - useful for js.react forms

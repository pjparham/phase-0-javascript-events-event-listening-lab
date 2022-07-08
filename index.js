//the below function needs the name of the event to listen for and a callback function
/*
const input = document.getElementById('button');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
first line of above grabs element we want to target and assigns it as a variable so we can manipulate it
second line has our variable tagged with addEventListener, followed by the input it is listening for then the function to execute

const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);

If there was a function you needed to use a lot, you could define the function seperately.
These are two ways to do event listener. The first uses anon function that is defined in the addEventListener action, while the second uses a predefined function called by name
*/
const input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I was clicked!');
    })
}
addingEventListener()
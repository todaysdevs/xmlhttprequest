// We're going to make a request using an Instance (Object) of XMLHttpRequest !

(function () {
// First of all we need a button that allows us to make the request 
let requestButton = document.querySelector('#requestButton').addEventListener('click', MakeXMLHttpRequest)
// Function for our request itself
function MakeXMLHttpRequest(){
  // This is an Instance (Object) of XMLHttpRequest
  let xhr = new XMLHttpRequest();
  // Debug it if needed console.log(xhr)
  if (!xhr) {
    alert("Oops wrong... can not create an Object (Instance) on XMLHttpRequest !")
    return false
  }
  // If there is not a problem, then do this
  xhr.onreadystatechange = responseOrProblem;
  xhr.open('GET', 'action.html');
  xhr.send();
 function responseOrProblem() {
   if (xhr.readyState === XMLHttpRequest.DONE) {
     if (xhr.status === 200) {
       alert(xhr.responseText)
     }else
     alert("Oops the is a problem with your request !")
   }
 }
  
}

})()
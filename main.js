// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.className = "hidden"

const hearts = document.querySelectorAll(".like-glyph")
hearts.forEach(heart => {
  heart.addEventListener("click", likeArticle)
})

function likeArticle(event) {
  const heart = event.target

  mimicServerCall()
  .then(() => {
    if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART
      heart.className = "activated-heart"
    } else {
      heart.innerHTML = EMPTY_HEART
      heart.className = "like-glyph"
    }
  })
  .catch(error => {
    modal.className = ""
    const modalMessage = document.querySelector("#modal-message")
    modalMessage.innerHTML = error
    setTimeout(() => {
      modal.className = "hidden"
    }, 4000)
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

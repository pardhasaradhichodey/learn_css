document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function(){
      document.getElementById('loading').remove();
      document.getElementById('main-content').classList.remove('d-none');
    }, 2000); // 2000 milliseconds = 2 seconds
  });
console.log("Hello");
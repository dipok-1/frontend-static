const urlparams = new URLSearchParams(window.location.search);
const productid = urlparams.get('productid');

// for passing the productid to review
document.querySelector('#review').addEventListener('click',()=>{
    window.location.href = `review.html?productid=${productid}`
})

// for passing the productid to  feedback
document.querySelector('#feed').addEventListener('click',()=>{
    window.location.href = `feedback.html?productid=${productid}`
})

//for passing productid to review and feedback section
document.querySelector('.display-btn').addEventListener('click',()=>{
    window.location.href =`displaycontent.html?productid=${productid}`
})
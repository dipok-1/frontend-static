document.querySelector('.r-btn').addEventListener('click',async()=>{
    const urlparams = new URLSearchParams(window.location.search)
    const productid = urlparams.get('productid')
    const res = await fetch(`https://cloud-backend-fnrd.onrender.com/api/get-review/${productid}`);
    const data = await res.json();
    const output = document.querySelector('#output');
    output.innerHTML = "<h2>Reviews</h2>";
    data.forEach(e => {
        output.innerHTML+=`<div class ="card"><h3>${e.name}:</h3> <p>${e.reviewtext}</p></div>`;
    });
})

document.querySelector('.f-btn').addEventListener('click',async()=>{
    const urlparams = new URLSearchParams(window.location.search)
    const productid = urlparams.get('productid')
    const res = await fetch(`https://cloud-backend-fnrd.onrender.com/api/get-feedback/${productid}`);
    const data = await res.json();
    const output = document.querySelector('#output');
    output.innerHTML = "<h2>Feedback</h2>";
    data.forEach(e => {
        output.innerHTML+=`<div class="card"><h3>${e.name}:</h3> <p>${e.feedbacktext}</p></div>`;
    });
})



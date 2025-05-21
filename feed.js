document.querySelector('#feedform').addEventListener('submit',async(e)=>{
e.preventDefault();
const name = document.querySelector('#name').value;
const feedtext = document.querySelector('#feedback').value
const urlparams = new URLSearchParams(window.location.search)
const productid = urlparams.get('productid')

const res = await fetch("https://cloud-backend-fnrd.onrender.com/api/feedback-submit/${productid}",{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    name,
    feedbacktext: feedtext,
    productid
})

});
if(res.ok){
    alert('feedback submitted succesfully')
}else{
    alert('eror submitting feedback')
}
})



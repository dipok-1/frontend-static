
document.querySelector('#reviewform').addEventListener('submit',async(e)=>{
e.preventDefault();

const urlparams = new URLSearchParams(window.location.search)
const productid = urlparams.get('productid')
const name = document.querySelector('#name').value;
const reviewtext = document.querySelector('#review').value;

const res =  await fetch('https://cloud-backend-fnrd.onrender.com/api/get-review/${productid}',{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({
        name,reviewtext,productid
    })
});
if(res.ok){
    alert('Review submitted succesfully')
}else{
    alert('error submitting review')
}
})

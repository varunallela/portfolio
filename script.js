console.log("running");
document.querySelector('.cross').style.display='none';
document.querySelector('.hambur').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').styledisplay='inline'        
        document.querySelector('.cross').styledisplay='none'        

    }
    else{
        document.querySelector('.cross').styledisplay='inline'        
        document.querySelector('.ham').styledisplay='none'        

    }
})
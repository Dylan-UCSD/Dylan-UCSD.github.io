setTimeout(()=>{
    const leftSide = document.querySelector('.loadingScreenLeft')
    const rightSide = document.querySelector('.loadingScreenRight')
    //const  
    leftSide.classList.add('loadedLeft')
    rightSide.classList.add('loadedRight')
    console.log(leftSide)
    console.log(rightSide)
    console.log("Loaded")
    setTimeout(() => {
        const imageHolder = document.querySelector(".imageHolder");
        if (imageHolder) {
            imageHolder.parentNode.removeChild(imageHolder);
        }
    }, 3500)




}, 100)
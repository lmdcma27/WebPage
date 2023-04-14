document.addEventListener('DOMContentLoaded',()=> {
    const copySuccess = document.getElementById('copy-success');
    const copyButtons = document.querySelectorAll("[id='copy-button']");
    const codeBlocks = document.querySelectorAll("[id='code']");
    console.log(copyButtons);
    const copyTextHandler = (text,idx) => {
        //const text  = codeBlock.innerText;
        navigator.clipboard.writeText(text).then(
            ()=>{
                
                copyButtons[idx].innerHTML = "Copied!";
                setTimeout(() => {
                    copyButtons[idx].innerHTML = "Copy";
                },1000);
            },
        () => {  
            console.log("Error writing to the clipboard");
        }
        );
    };
    //copyButton.addEventListener('click',copyTextHandler);
    for (let i = 0; i < copyButtons.length; i++) {
        const copyButton = copyButtons[i];
        const codeBlock = codeBlocks[i];
        copyButton.addEventListener('click', () => {
            const text = codeBlock.innerText;
            copyTextHandler(text,i);
        });
    }
    
});
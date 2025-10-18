

document.addEventListener("DOMContentLoaded", () => {
    
    const topTaps = document.querySelectorAll(".type-btn");
    const subTapGroups = document.querySelectorAll(".typebox-in");
    const subContent = document.querySelectorAll(".question-content")
    
    topTaps.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
    
            subTapGroups.forEach(s => 
                
                {if(s.classList.contains(target)){
    
                    s.classList.add('active')
    
                }else{
                    s.classList.remove('active')
                }
    
            })
                
            subContent.forEach(c => c.classList.remove('active'))
            
    
            console.log(subTapGroups)
            
            
            
        })
    })
    
    console.log(subContent)
    subTapGroups.forEach(con => {
    
        con.addEventListener("click", () =>{
    
            const content = con.dataset.con;
            
    
            console.log(subTapGroups)

            console.log(subContent)
    
            subContent.forEach(c => {
    
                if(c.classList.contains(content)){
    
                    console.log(subTapGroups)

                    console.log(subContent)
    
                    c.classList.toggle('active');
    
                }
    
            })
    
        })
    
    
    })
});
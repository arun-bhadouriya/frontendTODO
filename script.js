let inpNewTask=$('#inpNewTask')
const ulNewTask=$('#ulNewTask')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let btnCleanup=$('#cleanup')
let btnSort=$('#btnSort')

function toggleInpBtn(valIsEmpty,other){
    if(valIsEmpty){
        btnAdd.prop('disabled',false)
        btnClear.prop('disabled',false)
    }
    else{
        btnAdd.prop('disabled',true)
        btnClear.prop('disabled',true)
    }
}

inpNewTask.on('input',()=>{
    toggleInpBtn(inpNewTask.val()!="");
})



function toggleSortAndCleanup(e){
    if(e){
        btnSort.prop('disabled',false)
        btnCleanup.prop('disabled',false)
    }else{
        btnSort.prop('disabled',true)
        btnCleanup.prop('disabled',true)
    }
}

function addItem(){
    let listItem=$('<li>',{
        class:"list-group-item li",
        text:inpNewTask.val()
    })
    ulNewTask.append(listItem)
    
    listItem.click(()=>{
        // console.log('clicked',$(e.target))
        listItem.toggleClass('done')
    })
    inpNewTask.val("");
}



inpNewTask.keypress((e)=>{
    if(e.which=="13"){
        addItem()
        toggleInpBtn(false)
        $('ul li').click(()=>toggleSortAndCleanup(1))
        btnCleanup.click(()=>toggleSortAndCleanup(0))
    }
})

btnAdd.click(()=>{
    addItem()
    toggleInpBtn(false)
    $('ul li').click(()=>toggleSortAndCleanup(1))
    btnCleanup.click(()=>toggleSortAndCleanup(0))
})


btnClear.click( ()=>{
    inpNewTask.val("")
    toggleInpBtn(false)
    
} )

btnCleanup.click(()=>{
    $('.done').remove();
})

btnSort.click(()=>{
    $('.done').appendTo(ulNewTask)
})





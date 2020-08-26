let inpNewTask=$('#inpNewTask')
const ulNewTask=$('#ulNewTask')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')

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
    }
})

btnAdd.click(addItem)

btnClear.click( ()=>{inpNewTask.val("")} )



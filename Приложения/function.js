const node_for_click = document.getElementById("for_click")

function find_edit(){
    const item1  = document.getElementsByTagName('p')[5].childNodes[1]
    console.log(item1.innerText)
    item1.innerText = ' Kharitonova'

    const item2  = document.getElementsByTagName('p')[6].childNodes[1]
    console.log(item2.innerText)
    item2.innerText = ' Valeriia'

    const item3  = document.getElementsByTagName('p')[9].childNodes[1]
    console.log(item3.innerText)
    item3.innerText = ' 15. February 2002'
}

node_for_click.addEventListener("click",find_edit)
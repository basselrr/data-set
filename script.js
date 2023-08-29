

const $form = document.getElementById('form')
const $item = document.getElementById('item')
const $list = document.getElementById('list')

let items = [
    'buy milk',
    'feed cat',
    'clean room'
]

function buildList(){

    const html = []

    for ( let i = 0 ; i < items.length ; i++){

        html.push(/*HTML*/`
        <li class="list-group-item">${items[i]} </li>
        
        `)



    }

    $list.innerHTML = html.join('')

}

buildList()

$form.addEventListener('submit', function(e){

    e.preventDefault()
    const value = $item.value

    items.push(value)
 
    $item.value=""

    function save(){
        localStorage.setItem('items',JSON.stringify(items))
    }
    buildList()

})




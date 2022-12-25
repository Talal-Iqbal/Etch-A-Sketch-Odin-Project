document.addEventListener('DOMContentLoaded', () => {
    const gridSize = document.querySelector('#gridSize')
    const colour = document.querySelector('#inputColor')
    const containerRows = document.querySelector('#container-rows')

    console.log('why')
     function setGrid(gridSize){
        // let gridArea = gridSize
        function createRows() {
            for (let i=1; i <=gridSize; i++){
            const divrows = document.createElement('div')
            divrows.classList.add('divrows')
            // divrows.style.border = '1px solid white'
            for(let i=1; i <=gridSize; i++){
            const div = document.createElement('div')
            div.style.width = '100٪'
            div.style.height = 50 + 'vh' / gridSize
            div.style.transition = '0.2s 0s ease-in'
            // div.style.border = '1px solid white'
            div.style.flex = 'auto'
            div.classList.add('cell')
            divrows.appendChild(div)
            }
            containerRows.appendChild(divrows)
        }
        }
        createRows()
}

setGrid(16)




    let Cells = document.querySelectorAll('.cell')
    console.log(Cells)
    Cells.forEach(cell =>{
        cell.addEventListener('mouseenter', function color(){
            cell.style.backgroundColor = colour.value
        })
        })
        // gridtwentyFour.onclick = () => setGrid(24)
        // gridForty.onclick = () => setGrid(40)
        // sixtyFour.onclick = () => setGrid(64)
    })
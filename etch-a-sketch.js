document.addEventListener('DOMContentLoaded', () => {
    const gridsize = document.querySelector('#gridsize')
    const containerRows = document.querySelector('#container-rows')
    const containerColumns = document.querySelector('#container-columns')
    // const container = document.querySelector('#container')
    console.log('why')
    // function setGrid() {
    //     // let div;
    //     // for(i=1;i <=16;i++){
    //     const div = document.createElement('div')
    //     // }
    //     div.style.width = '100px'
    //     div.style.height = '100px'
    //     div.style.border = '1px solid black'
    //     container.appendChild(div)
    //     console.log('hello')
    // }
    gridsize.addEventListener('click', function setGrid(){
        for(let i=1; i <=16; i++){
            const divrows = document.createElement('div')
            divrows.classList.add('divrows')
            // divrows.style.width = '100px'
            // divrows.style.height = '100px'
            divrows.style.border = '1px solid black'
            containerRows.appendChild(divrows)
            console.log('hello')
        }
        for(let i=1; i <=16; i++){
            const divcolumns = document.createElement('div')
            divcolumns.classList.add('divcolumns')
            // divcolumns.style.width = '100px'
            // divcolumns.style.height = '100px'
            divcolumns.style.border = '1px solid black'
            containerColumns.appendChild(divcolumns)
            console.log('hello 2')
        }
    })
    })
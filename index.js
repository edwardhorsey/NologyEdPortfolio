//jquery




// arrow keys to navigate
console.log(
    document.URL
)

// document.addEventListener("keydown", e => {
//     if (e.keyCode === 39) { console.log('hi') }
// });



document.addEventListener("keydown", e => { goToPage(e) })


function goToPage(key) {
    let location = document.URL;
    let section = location.slice(location.indexOf('#'))

    let left = document.querySelector(`${section} > div > div.icons-bar > ul > li.left > a > img`)
    let right = document.querySelector(`${section} > div > div.icons-bar > ul > li.right > a > img`)

    // let left = document.querySelector(`${section} > div > div:nth-child(2) > div > ul > li.right > a`) // the ones for skills
    // let right = document.querySelector(`${section} > div > div:nth-child(2) > div > ul > li.right > a`)
    console.log(left, right)

    if (key.keyCode === 39) { return right.click() }

    if (key.keyCode === 37) { return left.click() }

}

goToPage(123)

// contact form thanks


function thanks() {
    let para = document.getElementById('thanks');
    if (!para.innerText.includes('thanks')) {
        para.innerText = 'Thanks!'
    }
}


// colours for error on form
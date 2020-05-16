//jquery


// arrow keys to navigate
console.log(
    document.URL
)

document.addEventListener("keydown", e => {
    if (e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
        goToPage(e);
    }
});

const goToPage = function(key) {
    let location = document.URL;
    let section;
    if (!location.includes('#')) { section = 'about-me' } else {
        section = location.slice(location.indexOf('#') + 1)
    }
    let left = document.querySelector(`.${section} .icons-bar .left a`)
    let right = document.querySelector(`.${section} .icons-bar .right a`)
    if (key.keyCode === 39) {

        return right.click()



    }
    if (key.keyCode === 37) { return left.click() }
}

// contact form thanks


function thanks() {
    let para = document.getElementById('thanks');
    if (!para.innerText.includes('thanks')) {
        para.innerText = 'Thanks!'
    }
}

// colours for error on form
//jquery

$('#checkbox').change(function() {
    if ($(this).is(':checked')) {
        $('#pages').toggleClass('pages')
    } else {
        $('#pages').toggleClass('pages');
    }
});

// arrow keys to navigate


document.addEventListener("keydown", e => {
    if (e.keyCode === 37 || e.keyCode === 39) {
        e.preventDefault();
        goToPage(e);
    }
});

document.addEventListener("click", e => {
    let path;
    if (String(e.path[0]).includes('#')) {
        path = String(e.path[0])
    }
    if (String(e.path[1]).includes('#')) {
        path = String(e.path[1])
    }
    // console.log(e)
    // console.log(path)
    if (path && path.includes('#')) {
        e.preventDefault();
        let hash = path.slice(path.indexOf('#'))
        document.querySelector(`${hash}`).scrollIntoView({
            behavior: 'smooth'
        });
        history.pushState({
                id: hash
            },
            hash,
            path
        );
    }
})

// :::: vanilla js for scroll into view ::::
// document.querySelector('#skills').scrollIntoView({
//     behavior: 'smooth'
// });

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

const thanks = () => {
    let para = document.getElementById('thanks');
    if (!para.innerText.includes('thanks')) {
        para.innerText = 'Thanks!'
    }
}
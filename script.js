function hello(event) {
    /* Find the element by id */
    const element = document.getElementById("pupil");
    /* Find the new "left" value*/
    const new = 3 * event.pageX / window.innerWidth;
    /* Update */
    element.style["left"] = new + "vmin";
}

document.addEventListener('click', hello(event));

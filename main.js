let project = document.querySelectorAll(".project");
console.log(project);

project.forEach(element => {
    console.log(element.id)
    var id = element.id
    if (id) {
        element.addEventListener("click", (e) => {
            window.location.href = `./${id}/${id}.html`
        })
    }
});

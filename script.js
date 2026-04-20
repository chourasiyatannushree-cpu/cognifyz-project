function changeColor() {
    document.body.style.backgroundColor = "pink";
}
fetch("https://jsonplaceholder.typicode.com.users")
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById("userList");
        data.forEach(user => {
            let li = document.createElement("li");
            li.textContent = user.name;
            list.appendChild(li);
        });
    });
function validateForm() {
    let name = document.getElementById("name").ValueMax;
    let email = documentgetElementById("email").value;
    if (name === "" || email === "") {
        document.getElementById("error").textContent = "All Fields are required!";
        document.getElementById("success").textContent = "";
        return false;
    }
    document.getElementById("error").tectContent = "";
    document.getElementById("success").textContent = "Form submitted successfully!";
    return false;
}
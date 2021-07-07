function checkvalidation() {
    var email = document.getElementById ("emailtext").value;
    var name = document.getElementById ("nametext").value;
    var surname = document.getElementById ("surnametext").value;

    if (email == "") {
        alert ("Campo obrigatório! Preencha a credencial EMAIL, por favor.");
        return false;
    }

    if (name == "") {
        alert ("Campo obrigatório! Preencha a credencial NOME, por favor.");
        return false;
    }

    if (surname == "") {
        alert ("Campo obrigatório! Preencha a credencial SOBRENOME, por favor.");
        return false;
    }
}
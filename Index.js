function checkvalidation() {
    var email = document.getElementById ("emailtext").value;
    var name = document.getElementById ("nametext").value;
    var surname = document.getElementById ("surnametext").value;

    if (email == "" && name == "" && surname == "") {
        alert ("Campos obrigatórios! Preencha as credenciais EMAIL, NOME e SOBRENOME, por favor.");
        return false;
    }

    if (email == "" && name == "") {
        alert ("Campos obrigatórios! Preencha as credenciais EMAIL e NOME, por favor.");
        return false;
    }

    if (email == "" && surname == "") {
        alert ("Campos obrigatórios! Preencha as credenciais EMAIL e SOBRENOME, por favor.");
        return false;
    }

    if (surname == "" && name == "") {
        alert ("Campos obrigatórios! Preencha as credenciais NOME e SOBRENOME, por favor.");
        return false;
    }

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
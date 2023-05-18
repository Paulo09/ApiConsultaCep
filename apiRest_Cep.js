function consultarCEP() {
    var cep = document.getElementById("cep").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var endereco = JSON.parse(this.responseText);
            document.getElementById("logradouro").innerHTML = endereco.logradouro;
            document.getElementById("bairro").innerHTML = endereco.bairro;
            document.getElementById("cidade").innerHTML = endereco.localidade;
            document.getElementById("estado").innerHTML = endereco.uf;
        }
    };
    xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/", true);
    xhr.send();
}
function consultarCEP() {
    var cep = document.getElementById("cep").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var endereco = JSON.parse(this.responseText);
            document.getElementById("logradouro").innerHTML = "Logradouro: " + endereco.logradouro;
            document.getElementById("bairro").innerHTML = "Bairro: " + endereco.bairro;
            document.getElementById("cidade").innerHTML = "Cidade: " + endereco.localidade;
            document.getElementById("estado").innerHTML = "Estado: " + endereco.uf;
        }
    };
    xhr.open("GET", "https://viacep.com.br/ws/" + cep + "/json/", true);
    xhr.send();
}
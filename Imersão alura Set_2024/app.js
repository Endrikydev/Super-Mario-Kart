function pesquisa() {
    let section = document.getElementById("resultado-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    
    // Verifica se o campo de pesquisa não está vazio
    if (campoPesquisa === "") {
        section.innerHTML = "<p>Por favor, insira um termo de pesquisa.</p>";
        return;
    }

    let resultado = '';
    let encontrouResultado = false;

    // Filtra os dados de forma insensível a maiúsculas e minúsculas
    for (let dado in characters) {
        if (characters[dado].nome.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            encontrouResultado = true;
            resultado += `
            <div class="item-resultado">
                <h2>${characters[dado].nome}</h2>
                <p class="descricao-meta">${characters[dado].descricao}</p>
                <a href="${characters[dado].link}" target="_blank">Mais informações sobre o personagem</a>
            </div>
            `;
        }
    }

    for (let dado in tracks) {
        if (tracks[dado].name.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            encontrouResultado = true;
            resultado += `
            <div class="item-resultado">
                <h2>${tracks[dado].name}</h2>
                <p class="descricao-meta">${tracks[dado].description}</p>
            </div>
            `;
        }
    }

    // Verifica se houve algum resultado
    if (!encontrouResultado) {
        resultado = "<p>Nenhum personagem encontrado.</p>";
    }

    section.innerHTML = resultado;
}


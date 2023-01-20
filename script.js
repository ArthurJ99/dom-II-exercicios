function adicionaItem(event) {
    const container = document.getElementById("container");
    const novoItem = document.createElement("article");
    const texto = document.createTextNode("NOVO ITEM");
    novoItem.appendChild(texto);
    container.insertAdjacentElement("beforeend", novoItem);
    novoItem.setAttribute("class", "item");
    novoItem.setAttribute("onclick", "removeItem(event)");
}

function removeItem(event) {
    event.target.remove();
}

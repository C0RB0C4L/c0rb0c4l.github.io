const startBtn = document.getElementById("url-decoder");
const urlInput = document.getElementById("url");
const parametersZone = document.getElementById("js-query-param");
const nodeToClone = parametersZone.querySelector("div.d-none");

let hostInput = document.getElementById("host");
let pathInput = document.getElementById("path");;
let searchInput = document.getElementById("search");

if (startBtn !== null
    && parametersZone !== null
    && urlInput !== null
    && hostInput !== null
    && pathInput !== null
    && searchInput !== null) {

    startBtn.addEventListener("click", function () {

        hostInput.value = "";
        pathInput.value = "";
        searchInput.value = "";
        let nodesToDelete = parametersZone.querySelectorAll("div.row:not(.d-none)");
        for (let node of nodesToDelete) {
            node.remove();
        }

        let urlText = urlInput.value;

        if (urlText !== "") {

            if (!urlText.includes("http")) {
                urlText = "http://" + urlText;
            }

            let url = new URL(urlText);
            hostInput.value = url.host;
            pathInput.value = url.pathname;
            searchInput.value = url.search;

            for (const param of url.searchParams) {
                let node = nodeToClone.cloneNode(true);
                node.classList.remove("d-none");
                let label = node.querySelector("label");
                label.innerText = param[0];
                let input = node.querySelector("input");
                input.value = param[1];
                parametersZone.insertAdjacentElement('beforeend', node);
            }
        }
    })
} else {
    console.warn("error");
}
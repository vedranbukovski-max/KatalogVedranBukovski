import { knjige } from "./data.js";

console.log(knjige);

const list = document.querySelector('#list');
const count = document.querySelector('#count');
const empty = document.querySelector('#empty');
const loading = document.querySelector('#loading');

const jeftino = ["ring-2", "ring-lime-400"];

function stvoriKarticu(knjiga){
    const card = document.createElement("article");
    card.className = "rounded-lg bg-amber-50 p-4 shadow";
    card.dataset.id = knjiga.id;

    const image = document.createElement("img");
    image.src = knjiga.image;
    image.alt = knjiga.name;
    image.className = "mb-3 w-full rounded";

    const name = document.createElement("h2");
    name.className = "font-semibold text-orange-700";
    name.textContent = knjiga.name;

    const author = document.createElement("h3");
    author.className = "text-orange-700/50";
    author.textContent = knjiga.author;

    const price = document.createElement("p");
    price.className = "font-semibold text-orange-700/75";
    price.textContent = `${knjiga.price} EUR`;

    const link = document.createElement("a");
    link.href = knjiga.url;
    link.className = "text-blue-700";
    link.textContent = "Više o knjizi";

    card.append(image, name, author, price, link);
    if (knjiga.price < 6) {
        card.classList.add(...jeftino);
    }
    return card;
}

function render(items) {
    list.innerHTML = "";
    const fragment = document.createDocumentFragment();
    for (const item of items) {
        fragment.append(stvoriKarticu(item));
    }
    count.textContent = `Prikazano je ${items.length} knjiga`;
    empty.classList.toggle("hidden", items.length > 0);
    list.append(fragment);
}

const mains = knjige
    //.filter(knjiga => knjiga.category === "dječji")
    //.filter(knjiga => knjiga.category === "ljubavni")
    //.filter(knjiga => knjiga.category === "povijesni")
    //.filter(knjiga => knjiga.category === "pustolovni")
    //.filter(knjiga => knjiga.category === "filozofski")
    //.sort((a, b) => a.name.localeCompare(b.name));
    //.sort((a, b) => b.name.localeCompare(a.name));

//render(knjige);
render(mains);

loading.remove();

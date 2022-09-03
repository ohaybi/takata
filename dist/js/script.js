document.addEventListener("DOMContentLoaded", function () {
  createCategoryButton();
  generateCard();

  const searchForm = document.getElementById("search-form");
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchKata();
  });
});

const copyAlert = document.getElementById("copy-alert");

function createCategoryButton() {
  let categoryList = ["semua", "header", "success", "error", "button", "form"];

  const categoryButtonWrap = document.querySelector(".category-button-wrap");

  for (let category of categoryList) {
    const btnCategory = document.createElement("button");
    btnCategory.setAttribute("id", `btn-${category}`);
    btnCategory.classList.add("category-button");
    btnCategory.innerText = `${category}`;
    categoryButtonWrap.appendChild(btnCategory);

    btnCategory.addEventListener("click", function () {
      filterByCategory(`${category}`);
    });
  }
}

function generateCard() {
  const cardContainer = document.querySelector(".card-container");

  for (let data of datas) {
    const textCategory = document.createElement("span");
    textCategory.classList.add("text-category");
    textCategory.innerText = `${data.category}`;

    const textKata = document.createElement("h1");
    textKata.classList.add("text-kata");
    textKata.innerText = `${data.kata}`;

    const authorLink = document.createElement("a");
    authorLink.classList.add("author-link");
    authorLink.setAttribute("href", `${data.authorLink}`);
    authorLink.innerText = `— ${data.author}`;

    /*
    const btnLike = document.createElement("button");
    const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7A7672" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>`;
    btnLike.classList.add("button-like");
    btnLike.innerHTML = heartIcon;

    btnLike.addEventListener("click", function () {
      likeKata(data.id);
    });
    */

    const btnCopy = document.createElement("button");
    const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
    </svg>`;
    btnCopy.classList.add("button-copy");
    btnCopy.innerHTML = copyIcon;

    btnCopy.addEventListener("click", function () {
      copyToClipboard(data.kata);
      popUpAlert();
    });

    const topCard = document.createElement("div");
    topCard.classList.add("top-card");
    topCard.append(textCategory, btnCopy);

    const bottomCard = document.createElement("div");
    bottomCard.classList.add("bottom-card");
    bottomCard.append(authorLink);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    cardContent.append(topCard, textKata, bottomCard);

    const cardItem = document.createElement("div");
    cardItem.classList.add("card-item");
    cardItem.setAttribute("id", `item-${data.id}`);
    cardItem.append(cardContent);

    cardContainer.append(cardItem);
  }

  return cardContainer;
}

function filterByCategory(selectedCategory) {
  for (const data of datas) {
    const hideCard = document.getElementById(`item-${data.id}`);
    const activeBtn = document.getElementById(`btn-${data.category}`);

    if (data.category != selectedCategory) {
      hideCard.classList.add("hide");
      activeBtn.classList.remove("category-active");
    } else {
      hideCard.classList.remove("hide");
      activeBtn.classList.add("category-active");
    }

    if (selectedCategory == "semua") {
      hideCard.classList.remove("hide");
      activeBtn.classList.remove("category-active");
    }
  }
}

function copyToClipboard(copiedKata) {
  for (let data of datas) {
    if (data.kata === copiedKata) {
      navigator.clipboard.writeText(copiedKata);
    }
  }
}

function popUpAlert() {
  const popUp = document.getElementById("copying-alert");

  const emoji = [
    "😀",
    "😁",
    "😃",
    "😎",
    "😊",
    "😉",
    "😍",
    "🥰",
    "🤩",
    "🤗",
    "😯",
    "😱",
    "🥺",
    "🦄",
    "🐸",
    "🐲",
    "🐷",
    "👀",
    "✌️",
    "🤞",
    "🤙",
    "👌",
    "👍",
    "💅",
    "✨",
    "🎉",
    "🎊",
    "👑",
    "📦",
    "📌",
    "📋",
    "🌻",
    "🚀",
    "🛸",
    "🌝",
    "🌞",
    "🌚",
    "🌟",
    "⚡",
    "🔥",
    "🌈",
    "🌠",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🤎",
    "✅",
  ];
  let randomIndex = Math.floor(Math.random() * emoji.length);

  popUp.innerText = `Kata disalin ${emoji[randomIndex]}`;
  popUp.classList.add("animation-pop");

  setTimeout(function () {
    popUp.classList.remove("animation-pop");
  }, 2000);
}

const btnDeleteSearch = document.getElementById("search-delete");

btnDeleteSearch.addEventListener("click", function () {
  document.getElementById("search-input").value = "";
});

const searchInput = document.getElementById("search-input");
searchInput.setAttribute("placeholder", `Cari kata..`);

function searchKata() {
  const searchInput = document.getElementById("search-input").value;
  const activeBtn = document.querySelector(".category-active");

  for (const data of datas) {
    const hideCard = document.getElementById(`item-${data.id}`);

    if (!data.kata.toLocaleLowerCase().includes(searchInput.toLowerCase())) {
      hideCard.classList.add("hide");
      if (activeBtn != null) {
        activeBtn.classList.remove("category-active");
      }
    } else {
      hideCard.classList.remove("hide");
    }

    if (searchInput.toLocaleLowerCase() == "") {
      hideCard.classList.remove("hide");
    }
  }
}

function copyToClipboard(copiedKata) {
  for (let data of datas) {
    if (data.kata === copiedKata) {
      navigator.clipboard.writeText(copiedKata);
    }
  }
}

let datas = [
  {
    id: "0005",
    kata: "Hello my name is abdillah mufti, this is example for long text paragraph!",
    category: "form",
    author: "tokopedia",
    authorLink: "https://tokopedia.com",
    isLiked: "false",
  },
  {
    id: "0004",
    kata: "hello!",
    category: "button",
    author: "tokopedia",
    authorLink: "https://tokopedia.com",
    isLiked: "false",
  },
  {
    id: "0003",
    kata: "everyone!",
    category: "error",
    author: "tokopedia",
    authorLink: "https://tokopedia.com",
    isLiked: "false",
  },
  {
    id: "0002",
    kata: "good morning!",
    category: "success",
    author: "tokopedia",
    authorLink: "https://tokopedia.com",
    isLiked: "false",
  },
  {
    id: "0001",
    kata: "welcome back!",
    category: "header",
    author: "tokopedia",
    authorLink: "https://tokopedia.com",
    isLiked: "false",
  },
];

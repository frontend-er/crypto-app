import { response } from "./api.js";

const app = document.getElementById('app');

app.innerHTML = response && response.map((item) => {
      return `<div>${item.CoinName}</div>`;
   }).join('');
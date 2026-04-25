function copiarPix() {
  navigator.clipboard.writeText("46991416144");

  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwkU9Osxe_u8Sx9JXdUY10AwqzTYGGw0E",
  authDomain: "links-k.firebaseapp.com",
  projectId: "links-k",
  storageBucket: "links-k.firebasestorage.app",
  messagingSenderId: "493242095486",
  appId: "1:493242095486:web:ac4a7d9b41a875d5c8052f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const contadorRef = doc(db, "contador", "visitas");

async function registrarVisita() {
  const snap = await getDoc(contadorRef);

  if (!snap.exists()) {
    await setDoc(contadorRef, { total: 1 });
  } else {
    await updateDoc(contadorRef, {
      total: increment(1)
    });
  }
}

let ultimoNumero = null;

onSnapshot(contadorRef, (snap) => {
  if (snap.exists()) {
    const contador = document.getElementById("contador");
    const novoNumero = snap.data().total;

    if (ultimoNumero !== null && novoNumero !== ultimoNumero) {
      contador.innerHTML = `
        <span class="numero antigo">${ultimoNumero}</span>
        <span class="numero novo">${novoNumero}</span>
      `;

      setTimeout(() => {
        contador.textContent = novoNumero;
      }, 500);
    } else {
      contador.textContent = novoNumero;
    }

    ultimoNumero = novoNumero;
  }
});

registrarVisita();

window.copiarPix = function () {
  navigator.clipboard.writeText("46991416144");

  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
};
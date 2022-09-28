if (navigator.serviceWorker) {
    console.log("El navegador soporta el Service Worker");
    navigator.serviceWorker.register("/sw.js");
}
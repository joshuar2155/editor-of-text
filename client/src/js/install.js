const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
});


butInstall.addEventListener('click', async () => {
    const download = window.deferredPrompt;

    if (!download) {
        return
    }

    download.prompt();

    window.deferredPrompt = null;
});


window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
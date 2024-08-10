// Clean form before unload
window.onbeforeunload = () => { 
    for (const form of document.getElementsByTagName("form")) { // iterate tiap form yang ada biar direset
        form.reset();
    }
}
const { hash } = window.location
const message = atob(hash.replace('#', ''))
if(message) {
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#message-show').classList.remove('hide')

    document.querySelector('h1').innerHTML = message
}

const messageInput = document.querySelector('#message-input');
window.onload = () => messageInput.focus()

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')
    const encrypted = btoa(messageInput.value);
    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
    linkInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
})
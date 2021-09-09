"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
window.addEventListener('load', main);
function main() {
    let titleInput = document.getElementById('title-input');
    titleInput.oninput = handleTitleInput;
    function handleTitleInput(event) {
        console.log(event.target.value);
    }
}
exports.main = main;
//# sourceMappingURL=main.js.map
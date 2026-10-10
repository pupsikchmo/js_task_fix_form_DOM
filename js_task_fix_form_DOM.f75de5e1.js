'use strict';
const inputs = document.querySelectorAll('form input');
inputs.forEach((input)=>{
    const label = document.createElement('label');
    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;
    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
    input.parentElement.append(label);
});

//# sourceMappingURL=js_task_fix_form_DOM.f75de5e1.js.map

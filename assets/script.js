const labels = document.querySelectorAll('.form-control label')

labels.forEach(
    label=> {
        label.innerHTML = label.innerText                //loops through the labels,
        .split('')                                       //splits them, i.e. separates each letter
        .map((letter, idx) =>`<span>${letter}</span>`)   //then wraps each letters with a span
        .join('')                                        //joins each letter, with a span around it, into a string
    }
)







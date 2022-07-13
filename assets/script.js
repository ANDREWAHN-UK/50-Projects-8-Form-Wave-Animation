const labels = document.querySelectorAll('.form-control label')

labels.forEach(
    label=> {
        label.innerHTML = label.innerText                //loops through the labels,
        .split('')                                       //splits them, i.e. separates each letter
        .map((letter, idx) =>`<span style="transition-delay:${idx * 100}ms">${letter}</span>`)   
        //then wraps each letters with a span, and goes through the span to apply the transition
        .join('')                                        //joins each letter, with a span around it, into a string
    }
)







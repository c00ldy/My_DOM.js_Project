const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const hight =parseInt(document.querySelector('#hight').value)
    const wight =parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.results')

    if (hight ==="" || hight <0 || isNaN(hight)) {
        results.innerHTML = `this Hight ${hight} Not velid`;
    }else if ( wight ==="" || wight <0 || isNaN(wight)) {
        results.innerHTML = `this wight ${wight} Not velid`;
    } else{
        const Cal = (wight /  ((hight*hight)/10000)).toFixed(2);
        results.innerHTML = `the answer is ${Cal}`
    }
});
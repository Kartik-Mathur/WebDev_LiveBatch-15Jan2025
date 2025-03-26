fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }).catch(errorMessage => {
        console.log(errorMessage);
    })



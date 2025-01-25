var niveau_eau = 0
haut = 202
//cas de la réponse fausse
document.querySelectorAll('.f').forEach(function (element) {
    element.addEventListener('click', function (e) {
        niveau_eau += 1
        console.log(haut - niveau_eau)
        document.querySelector('.mer').style.top = Math.min(202, haut - niveau_eau * 5) + 'px'
        e.target.parentElement.querySelectorAll('button').forEach(function (element) {
            element.style.display = 'none'
        })
    })
})
//cas de la réponse vraie
document.querySelectorAll('.v').forEach(function (element) {
    element.addEventListener('click', function (e) {
        niveau_eau -= 1
        console.log(haut - niveau_eau)
        document.querySelector('.mer').style.top = Math.min(202, haut - niveau_eau * 5) + 'px'
        e.target.parentElement.querySelectorAll('button').forEach(function (element) {
            element.style.display = 'none'
        })
    })
})
document.querySelectorAll('.q6-3 .v, .q6-3 .f').forEach(function (element) {
    element.addEventListener('click', function (e) {
        alert('Vous avez évité que la ville soit submergée')
        document.querySelector('.message').style.display = 'block'
    })
})


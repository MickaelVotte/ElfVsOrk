let person;
let ork;




function affichePersonnage() {
    affiche = document.getElementById('affiche');
    if (person.getPdv === 0) {
        affiche.innerHTML = `<p>${person.getName} est mort ! </p>`
    } else {
        affiche.innerHTML = `<p class="fw-bold">le personnage ${person.getName} à été créé</p>
    <p>caractéristiques: </p>
    <li>Point de vie:  ${person.getPdv} </li>
    <li>Classe: ${person.getClasse} </li>
    <li>Equipement: ${person.getEquipement}</li>
    <li>Bouclier: ${person.getBouclier}</li>`
    }


    afficheImageElf()
}





function createPersonage(name, pdv, classe, equipement, bouclier) {
    person = new Person(name, pdv, classe, equipement, bouclier)
    affichePersonnage()
}





function afficheOrk() {
    affiche2 = document.getElementById('affiche2');

    if (ork.getPdv === 0) {
        affiche2.innerHTML = `<p>${ork.getName} est mort</p>`
    } else {
        affiche2.innerHTML = `<p class="fw-bold">le personnage ${ork.getName} à été créé</p>
    <p>caractéristiques: </p>
    <li>Point de vie:  ${ork.getPdv} </li>
    <li>Classe: ${ork.getClasse} </li>
    <li>Equipement: ${ork.getEquipement}</li>
    <li>bouclier: ${ork.getBouclier}</li>`
    }





    afficheImageOrk()

}





function createOrk(name, pdv, classe, equipement, degats, bouclier) {
    ork = new Ork(name, pdv, classe, equipement, degats, bouclier)
    afficheOrk()

}


function affichePdvRestant() {
    let pdvRestant = document.getElementById('pdvRestant');
    pdvRestant.innerHTML = `<p>pdv restant: ${person.getPdv} </p>`
}



function launchFight() {
    nbrTour()
    let fight = document.getElementById('fight')
    if (ork.getPdv === 0 || person.getPdv === 0) {
        console.log("Fin du combat");
        fight.innerHTML = `Rejouer la partie`
        fight.onclick = startFight()

    } else {
        let degatSubitOrk = ork.attaque(15, 30)
        let degatSubitPerson = person.attaque(10, 20)
        AfficherDegats(degatSubitOrk, degatSubitPerson)
    }


    if (ork.getPdv === 0 || person.getPdv === 0) {
        console.log("Fin du combat");
        fight.innerHTML = `Rejouer la partie`
        fight.setAttribute('onclick', 'startFight()')
        compteur()
        resetDegatAffichage()
        resetSoinAffichage()
        reset()
    }
    affichePersonnage()
    afficheOrk()
}


function startFight() {
    let fight = document.getElementById('fight')
    createPersonage('Elf', 80, 'Mage', 'Baguette', 35)
    createOrk('Urukai', 100, 'ork', 'hache', 15, 50)
    fight.innerHTML = `lancer le combat`
    fight.setAttribute('onclick', 'launchFight()')

}


let result = 0
let compteurTour = 0;

function compteur() {

    let persoV = document.getElementById('persoV')
    let orkV = document.getElementById('orkV')
    let egality = document.getElementById('egality')
    let round = document.getElementById('round')

    compteurTour++
    round.innerHTML = `Nombre de partie: ${compteurTour}`

    if (person.getPdv > 0) {
        result++
        persoV.innerHTML = `Elf: ${result} victoire`
    } else if (ork.getPdv > 0) {
        result++
        orkV.innerHTML = `Ork: ${result} victoire`
    } else {
        result++
        egality.innerHTML = `Match nul:${result} `
    }
}


let nbrdeTour = 0;

function nbrTour() {
    let nbrafficheNbrTour = document.getElementById('afficheNbrTour')
    nbrdeTour++
    nbrafficheNbrTour.innerHTML = `${nbrdeTour}`

    if (nbrdeTour % 3 === 0) {
        let soinOrk = ork.soigner(20, 30)

        let soinElf = person.soigner(15, 20)
        afficherSoin(soinElf, soinOrk)
    }

}


function afficherSoin(elf, ork) {
    let historiqueSoinElf = document.getElementById('historiqueSoinElf')
    let historiqueSoinOrk = document.getElementById('historiqueSoinOrk')

    historiqueSoinElf.innerHTML = `Soin elf: ${elf}`
    historiqueSoinOrk.innerHTML = `Soin ork: ${ork}`
}

function AfficherDegats(elf, ork) {
    let historiqueDegatElf = document.getElementById('historiqueDegatElf')
    let historiqueDegatOrk = document.getElementById('historiqueDegatOrk')

    historiqueDegatElf.innerHTML = `Degats subit: ${elf}`
    historiqueDegatOrk.innerHTML = `Degats subit: ${ork}`
}


function resetDegatAffichage() {
    let historiqueDegatElf = document.getElementById('historiqueDegatElf')
    let historiqueDegatOrk = document.getElementById('historiqueDegatOrk')

    historiqueDegatElf.innerHTML = ``
    historiqueDegatOrk.innerHTML = ''

}

function resetSoinAffichage(){
    
    let historiqueSoinElf = document.getElementById('historiqueSoinElf')
    let historiqueSoinOrk = document.getElementById('historiqueSoinOrk')

    historiqueSoinElf.innerHTML = ``
    historiqueSoinOrk.innerHTML = ``
}



function reset() {
    let nbrafficheNbrTour = document.getElementById('afficheNbrTour')
    nbrdeTour = 0
    nbrafficheNbrTour.innerHTML = `${nbrdeTour}`
}


function afficheImageElf() {
    let profilElf = document.getElementById('profilElf')

    if (profilElf.style.display = "none") {
        profilElf.style.display = "block";

    }
}


function afficheImageOrk() {
    let profilOrk = document.getElementById('profilOrk')

    if (profilOrk.style.display = "none") {
        profilOrk.style.display = "block";
    }
}
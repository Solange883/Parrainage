
const parrainer= new Set();

function Envoyer() { 
    const nom= document.getElementById('nom').value;
    const cni= document.getElementById('cni').value;
    const selectedCandidate = document.getElementById('candidat').value;
    if(nom===''){
        alert("Le champ nom est obligatoire");
    }
    else if(!parrainer.has(cni)) {
        parrainer.add(cni);
        alert( `Merci,   ${nom}! Vous avez parrainé pour ${selectedCandidate}.`);
    } else {
        alert(`Désolé, ${nom}.Vous avez déjà parrainé.`);
}

  
}


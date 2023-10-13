function ReadDNA(){
    var text = "";
    var problemText = "";
    var n = document.getElementById("dna").value;
    var dna = n.toUpperCase();
    var highlight = document.getElementById("problemOutput");

    if(dna.length < 1){
        problemText += "Can't read an empty DNA strain!" + "<br>"
        highlight.style.color = "red";
    }


    for (let i = 0; i < dna.length; i++) {
        switch(dna[i]){
            case "M":
                text += "Methionine detected (ATG)" + "<br>"
                break;
            case "F":
                text += "Phenylalanine detected (TTY)" + "<br>"
                break;
            case "L":
                text += "Leucine detected (CTN)" + "<br>"
                break;
            case "I":
                text += "Isoleucine detected (ATH)" + "<br>"
                break;
            case "V":
                text += "Valine detected (GTN)" + "<br>"
                break;
            case "S":
                text += "Serine detected (TCN)" + "<br>"
                break;
            case "P":
                text += "Proline detected (CCN)" + "<br>"
                break;
            case "T":
                text += "Threonine detected (ACN)" + "<br>"
                break;
            case "A":
                text += "Alanine detected (GCN)" + "<br>"
                break;
            case "Y":
                text += "Tyrosine detected (TAY)" + "<br>"
                break;
            case "H":
                text += "Histidine detected (CAY)" + "<br>"
                break;
            case "Q":
                text += "Glutamine detected (CAR)" + "<br>"
                break;
            case "N":
                text += "Asparagine detected (AAY)" + "<br>"
                break;
            case "K":
                text += "Lysine detected (AAR)" + "<br>"
                break;
            case "D":
                text += "Aspartic Acid detected (GAY)" + "<br>"
                break;
            case "E":
                text += "Glutamic Acid detected (GAR)" + "<br>"
                break;
            case "C":
                text += "Cysteine detected (TGY)" + "<br>"
                break;
            case "W":
                text += "Tryptophan detected (TGG)" + "<br>"
                break;
            case "R":
                text += "Arginine detected (CGN)" + "<br>"
                break;
            case "G":
                text += "Glycine detected (GGN)" + "<br>"
                break;
            default:
                problemText += dna[i] + " is not an amino acid!" + "<br>"
                highlight.style.color = "red"; 
        }
    } 
   

    document.getElementById("output").innerHTML = text;
    document.getElementById("problemOutput").innerHTML = problemText;
}

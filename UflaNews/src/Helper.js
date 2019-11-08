export function formatarData(data, mostrarAno = true){
    let hora = "";
    if(data.length > 10){
        hora = data.slice(11, 16);
        data = data.slice(0, 10);
    }
    let listaData = data.split("-");
    data = listaData[2] + "/" + listaData[1];

    if(mostrarAno){
        data = data  + "/" + listaData[0];
    }
    return data + " " + hora;
}
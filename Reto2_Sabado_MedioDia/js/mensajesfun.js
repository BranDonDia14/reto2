function traerInformacionMj(){
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta3(respuesta.items);
        }
    });
}

function pintarRespuesta3(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElemento3("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion3(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacionMj();
            alert("se ha guardado el dato")
        }
    });

}

function editarInformacion3(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#message").val("");
            traerInformacionMj();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento3(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMj();
            alert("Se ha Eliminado.")
        }
    });
}
function traerInformacioncomputer(){
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta2(respuesta.items);
        }
    });
}

function pintarRespuesta2(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento2("+items[i].id+")'>Borrar</button>";
        myTable+="<td> <button onclick='obtenerComputador("+items[i].id+")'>cargar datos</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion2(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacioncomputer();
            alert("se ha guardado el dato")
        }
    });

}

function editarInformacion2(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacioncomputer();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento2(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacioncomputer();
            alert("Se ha Eliminado.")
        }
    });
}

function obtenerComputador(idElemento){
    $.ajax({
        url:"https://g211999c587c7a4-bdreto1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#id").val(idElemento);
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
        },
        error: function(jqXHR,textStatus,errorThrown){

        }
    });
}
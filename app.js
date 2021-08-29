
const showHeader=(headers) =>{
    const tableArr= headers;
    const tableMain= document.getElementById("main-table");
    let tableRowEle= '<tr id="table_row">';
    tableArr.forEach(tableRow=>{
        tableRowEle+= `<th class='${String(tableRow)}'>`+String(tableRow)+'</th>';

    });
    tableRowEle+= '</tr>';
    tableMain.innerHTML= tableRowEle;

}



const showTableOnLoad = (data,check=true) =>{
    if(check)
      showHeader(Object.keys(data[0]).map((headerString)=>headerString.toUpperCase()));
    const tableArr= data;
    const tableMain= document.getElementById("main-table");
    tableArr.forEach(tableRow=>{
        let tableRowEle= '<tr>';
        Object.entries(tableRow).forEach(entry =>{
            const [key,value]= entry;
            tableRowEle+= `<td class="${key}">`+ value+'</td>';

        });
        tableRowEle+= '</tr>'
        tableMain.innerHTML+= tableRowEle;
    });





}


(
    function(){
        fetch('http://localhost:8080/H2HBABBA1504/fetch')
    .then(response=>{
        return response.json()
    })
    .then(jsonResult =>{
        showTableOnLoad(jsonResult)
    })
    .catch(error =>{
        console.log(error)
    })
    }
)();



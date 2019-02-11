var db = firebase.database();

var btn = document.getElementById('submitbtn');
var tno = document.getElementById("tno");


btn.addEventListener("click",function(){
    var tno_text = tno.value;
    var trolley_ref_link = "Trolley/"+tno_text
var dataLogList = [];
var bill = document.getElementById("amt")
dataLogList.push("<th>Item NAME</th> <th> Time </th> <th> PRICE </th>");

    var trolley_ref = db.ref(trolley_ref_link);
    console.log(tno_text);
//    console.log(trolley_ref_link);   
    trolley_ref.on('value', function(snapshot){        console.log("inside")
    console.log(snapshot.val());
    var result = snapshot.val();
    var billamt =0;
                                               
    for (var property in result){
        console.log(property)
        var data = "<tr><td>"+property+"</td><td>"+result[property]["time"]+
                     "</td><td>"+result[property]["price"]+"</td></tr>"
            console.log(data)
            dataLogList.push(data);
            billamt+=result[property]["price"];
        }
            
        
    bill.innerHTML = `<h6> Bill payable: ${billamt} </h6>`;
    
                                               
    var clusterize = new Clusterize({
  rows: dataLogList,
  scrollId: 'scrollArea',
  contentId: 'contentArea'
});    
                                               
                                               
})

    
});



  
    




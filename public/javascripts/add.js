const { post } = require("../../app");

$('#add_button').click(function(){
    $.ajax({
        type:"POST",
        url:"/add",
        data:{"pname":$("#pname").val(),"ptitle":$("#ptitle").val(),"pid":$("#pid").val(),"pimg":$("#pimg").val(),"price":$("#price").val(),"pclassify":$("#pclassify").val()},
        success:function(data){
            if(data.status==1){
                alert("add success");
                window.location.href="/product"
            }


        }
    })
})





$('addc_button').click(function(){
    $.ajax({
        type:"POST",
        url:"/addc",

    })
})


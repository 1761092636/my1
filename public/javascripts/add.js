$('#add_button').click(function(){
    
    console.log(123);
    $.ajax({
        type:"POST",
        url:"/add",
        enctype:"multipart/form-data",
        data:{"pname":$("#pname").val(),"ptitle":$("#ptitle").val(),"pid":$("#pid").val(),"pimg":$("#pimg").val(),"price":$("#price").val(),"pclassify":$("#pclassify").val()},
        success:function(data){
            if(data.status==1){
                alert("add success");
                window.location.href="/product"
            }
        }
    })
})



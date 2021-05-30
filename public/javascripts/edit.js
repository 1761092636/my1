$("#product").delegate(".edit_button","click",function(){
    console.log($(this).data("name"))
    $.ajax({
        type:"POST",
        url:"/edit",
        data:{"name":$(this).data("name")},
        success:function(data){
            if(data.status==1){
                alert("edit success");
                window.location.href="/product"
            }


        }
        
        
    })

})
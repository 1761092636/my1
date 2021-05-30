$("#product").delegate(".delete_button","click",function(){
    console.log($(this).data("id"))
    $.ajax({
        type:"POST",
        url:"/delete",
        data:{"id":$(this).data("id")
        },
        success:function(data){
            if(data.status2==1){
                alert("delete success")
            }
        }
    })
})




$("#product").delegate(".update_button","click",function(){
    console.log($(this).data("id"))
    $.ajax({
        type:"POST",
        url:"/update",
        data:{"id":$(this).data("id")},
        success:function(data){
            alert("ok");
            window.location="/product_edit";
        } 
    })
})
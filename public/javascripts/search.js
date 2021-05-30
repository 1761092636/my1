$("#product").delegate(".search_button","click",function(){
    console.log($(this).data("name"))
    $.ajax({
        type:"POST",
        url:"/search",
        data:{"name":$(this).data("name")},
        success:function(data){
            if(data.status3==1){
                alert("success");
     
            }


        }
        
        
    })

})
$(".addc_button").click(function(){
    $.ajax({
        type:"POST",
        url:"/addc",
        data:{"psname":$("#psname").val(),"psrice":$("#psrice").val()},
        success:function(data){
                console.log(data)
              if(data.status==1){
                  alert("ok")
                    window.location="/cart";
         }
        
}
})
});
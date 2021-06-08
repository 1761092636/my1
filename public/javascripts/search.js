$(".search_button").click(function(){
    $.ajax({
        type:"POST",
        url:"/search",
        data:{"s1":$("#sear_content").val()},
        success:function(data){
            console.log(data)
            $("#product").empty();
            for(var i in data){
                $("#product").append(
                    `
                    <tr id="all">
                    <td id="pid0" name="pid0">${data[i].product_id+"."}</td>
                    <td id="pname0" name="pname0">${data[i].product_name}</td>
                    <td id="ptitle0" name="ptitle0">${data[i].product_title}</td>
                    <td id="pclassify" name="pclassify0">${data[i].product_classify}</td>
                    <td id="price0" name="price0">${data[i].product_price+"$"}</td>
                    <td>
                    <button class="badge bg-primary update_button" data-id=${data[i].product_id}>alter</button>
                    <button class="badge bg-danger delete_button" data-id=${data[i].product_id}>delete</button>
                    </td>
                    </tr>
                    
                    `
                )
            }
        }
    })

})
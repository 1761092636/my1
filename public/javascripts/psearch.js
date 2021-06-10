$(".psearch_button").click(function(){
    $.ajax({
        type:"POST",
        url:"/psearch",
        data:{"s2":$("#sear_content2").val()},
        success:function(data){
            console.log(data)
            $("#product").empty();
            for(var i in data){
                $("#shop").append(

                    `
                    <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                    <div class="block-4 text-center border">
                      <figure class="block-4-image">
                        <a href="shop-single/${data[i].product_id}"><img src="/images/cloth_2.jpg"  alt="Image placeholder" class="img-fluid"></a>
                      </figure>
                      <div class="block-4-text p-4" name = sname>
                        <h3><a href="shop-single/${data[i].product_id}">${data[i].product_name}</a></h3>
                        <p class="mb-0">${data[i].product_title}</p>
                        <p class="text-primary font-weight-bold">${data[i].product_price+"$"}</p>
                      </div>
                    </div>
                    
                    `
                )
            }
        }
    })

})
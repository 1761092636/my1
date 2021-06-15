const { json } = require('express');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var formidable=require('formidable');
// mysql
var mysql =require('mysql');
const { RSA_NO_PADDING } = require('constants');
var mysql_user ={host:"localhost",port:3306,user:'root',password:'root',database:'dz',insecureAuth : true};
var connection =mysql.createConnection(mysql_user);


let data = new Array();
fs.readFile(path.join(__dirname + "/bean/s.json"),{encoding:"utf-8"},(err,o) => {
  data = JSON.parse(o);
})

router.get('/',(req,res) => {
  res.render('shop');
});
// login
router.get('/login',(req,res) => {
    res.render('login');
});
router.post("/login",(req,res) => {
    user2='select user_password,user_name from tab_user where user_name = ? and user_password = ?';
    connection.query(user2,[req.body.Name,req.body.Password],function(err,results) {
        if(err) {
          console.log(err)
          return;

        }
      else if(results=='')
        {
            console.log("帐号密码错误");
            res.redirect("/error");
            res.end();
            
        }
        else 
        {
            console.log("OK");
            res.redirect("/");
            res.end();
      
        }

        });
 });
//register
 router.get('/register',(req,res) => {
    res.render('register');
});
router.post("/regist",(req,res) => {
    user3="insert into tab_user values(?,?)";
    connection.query(user3,[req.body.Name,req.body.Password],function (err,results) {
       if(err){
         console.log(err);
         return;
       }    
       res.redirect('/login')  
    });
});
// shop
router.get('/shopmery',(req,res) => {
  var query = "select * from tab_product"
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.json(rows)

  })
});

// cart
router.get('/cart',(req,res) => {
  res.render('cart');
});
// error
router.get('/error',(req,res) => {
  res.render('error');
});
// error1
router.get('/error1',(req,res) => {
  res.render('error1');
});


router.get('/cartmery',(req,res) => {
  var query = "select * from tab_cart_product"
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.json(rows)

  })
});

//command
router.post('/command',(req,res) => {
  res.render('command');
});
//command login
router.get('/commandlogin',(req,res) => {
  res.render('commandlogin');
});
router.post("/commandlogin",(req,res) => {
  commander1='select commander_password,commander_name from tab_commander where commander_name = ? and commander_password = ?';
  connection.query(commander1,[req.body.name,req.body.password],function(err,results) {
      if(err) {
        console.log(err)
        return;
      
      }
      else if(results=='')
      {
          console.log("帐号密码错误");
          res.redirect("/error1");
          res.end();
          
      }
      else 
      {
          console.log("OK");
          res.redirect("/product");
          res.end();
    
      }

      });
    });
// index
router.get('/index',(req,res) => {
  res.render('index');
});
// command product
router.get('/product',(req,res) => {
  res.render('product');
});
router.get('/pro',(req,res) => {
  var query = "select * from tab_product"
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.json(rows)

  })
});

// checkout
router.get('/checkout',(req,res) => {
  res.render('checkout');
});
// about
router.get('/about',(req,res) => {
  res.render('about');
});
// single product
var name = null;
router.get('/shop-single/:id',(req,res) => {
 name = req.params.id;
  res.render('shop-single');
});
router.get('/singlemery',(req,res) => {
  console.log(name);
  var query = "select * from tab_product where product_id = '"+name+"'"
  connection.query(query,function(err,rows){
    if(err){
      console.log(err);
      return;
    }
    res.json(rows)

  })
});
// contact
router.get('/contact',(req,res) => {
  res.render('contact');
});
// thankyou
router.get('/thankyou',(req,res) => {
  res.render('thankyou')
})





// product add
router.get('/product_add',(req,res) => {
  res.render('product_add');
});
router.post('/add',(req,res) => {
 var product2 = "insert into tab_product values(?,?,?,?,?,?)";
 connection.query(product2,[req.body.pid,req.body.pname,req.body.ptitle,req.body.pclassify,req.body.price,req.body.pimg],(err,results) => {
   if(err){
     console.log(err);
     return;
   }
   res.json({"status":1});
  
 })
});
// cart add 
router.post('/addc',(req,res) => {
  var product2 = "insert into tab_product values(?,?,?,?,?,?)";
  connection.query(product2,[req.body.psid,req.body.psname,req.body.pstitle,req.body.psclassify,req.body.psrice,req.body.psimg],(err,results) => {
    if(err){
      console.log(err);
      return;
    }
    res.json({"status":1});
  
  })
})
// addp
router.get('/addp',(req,res) => {
  res.render('addp');
});
router.post('/addp',(req,res) => {
  var form = formidable({
multiples:true,
uploadDir:path.join(__dirname,"../public/upload_img")
  });
  form.parse(req,(err,fields,files) => {
    console.log(err);
    console.log(fields);
    console.log(files);  
    let newname=Date.now()+path.extname(files.image.name);
    let newnewname=path.join(__dirname,'../public/upload_img',newname)
    
    fs.rename(files.image.path,newnewname,(err) => {
      console.log(err);
    })
    console.log(newname);
    var image = req.body.image;
 var product2 = "update tab_product set product_img =?";
 connection.query(product2,[newname],(err,results) => {
   if(err){
     console.log(err);
     return err;
   }
   res.json({"status":1});

   
 })
  })
  
});
//  product edit
router.get('/product_edit',(req,res) => {
  res.render('product_edit');
});
router.post('/edit',(req,res) => {
  var name =req.body.name;
  var product3 = "update tab_product set product_name = '"+name+"' where "
  connection.query(product3,(err,results,firelde) => {
    if(err){
      console.log(err);
      return;
    }
    res.json({"status1":1});
   
  })
});
// product delete
router.post('/delete',(req,res) => {
  var name = req.body.id
  console.log(name)
  var product4 = "delete from tab_product where product_id='"+name+"' "
  connection.query(product4,(err,results,firelde) => {
    if(err){
      console.log(err);
      return err;
    }
    res.json({"status2":1});
  })
});
// product edit
var arr = new Array()
router.post('/update',(req,res) => {
  var name = req.body.id
  var product5 = "select * from tab_product where product_id='"+name+"' "
  connection.query(product5,(err,results,firelde) => {
    if(err){
      console.log(err);
      return;
    }
    arr=results;
    res.json({"status2":1});
  })
});
router.get('/edit',(req,res) => {
  res.json(arr)
});
router.post('/s_edit',(req,res) => {
  var key = req.body.key
  var id = req.body.id
  var name = req.body.name
  var title = req.body.title
  var price = req.body.price
  var product4 = "update tab_product set product_id = '"+id+"', product_name = '"+name+"',product_title = '"+title+"',product_price = '"+price+"' where product_id = '"+key+"'"
  connection.query(product4,(err,results,firelde) => {
    if(err){
      console.log(err);
      return;
    }
    arr=results;
    res.json({"status2":1});
  })
});
// product search
router.post('/search',(req,res) => {
  var product5 = "select product_id,product_name,product_title,product_classify, product_price from tab_product where product_id like '%"+req.body.s1+"%' or product_name like '%"+req.body.s1+"%' or product_title like '%"+req.body.s1+"%' or product_classify like '%"+req.body.s1+"%' or product_price like '%"+req.body.s1+"%'"
  connection.query(product5,(err,results,firelde) => {
      if(err){
        console.log(err);
        return;
      }
      console.log(results);
      res.json(results);
    })
  });

  // shop search
  router.post('/psearch',(req,res) => {
    console.log(req.body);
    var product5 = "select product_name,product_title,product_price from tab_product where product_name like '%"+req.body.s2+"%' or product_title like '%"+req.body.s2+"%' or product_price like '%"+req.body.s2+"%'"
    connection.query(product5,(err,results,firelde) => {
        if(err){
          console.log(err);
          return;
        }
        console.log(results);
        res.json(results);
      })
    });





// page
// router.get('page',(req,res) =>{
//   var current_page = 1;
//   var num = 9 ;
//   if(req.query.page){
//     current_page = parseInt(req.query.page);
//   }
// } )
// var last_page = current_page - 1;
// if(current_page <= 1){
//   last_page = 1;
// } 
// var next_page = current_page + 1;
// var str = '' 






// router.get('/addpage',(req,res) =>{
//   res.render('add',{obj:{},id:""});
// });

// router.post('/add',(req,res) => {
//   let obj = {
//     name:req.body.user,
//     s1:req.body.s1,
//     s2:req.body.s3,
//     s3:req.body.s3,
//     amount:parseInt(req.body.s1)+parseInt(req.body.s2)+parseInt(req.body.s3)
//   };
//   if(req.body.id != undefined && req.body.id != ""){
//     data[req.body.id] = obj;
//   }else{
//     data.unshift(obj)
//   }
//   res.redirect('/')
// });

// router.get('/del/:id',(req,res) => {
//   delete data[req.params.id];
//   res.redirect('/');
// });

// router.get('/update/:id',(req,res) => {
//   res.render("add",{
//     obj:data[req.params.id],
//     id:req.params.id
//   })
// });
// //下一页
// router.post("/nextpage",(req,res) => {
//   res.json(data);
//  })
//  //上一页
//  router.post("/lastpage",(req,res) => {
//   res.json(data);
//  })

module.exports = router;
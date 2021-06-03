const { json } = require('express');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var formidable=require('formidable');
var form=formidable({
  multiples:true,
  uploadDir:path.join(__dirname,'../public/images')
})
// form.parse(res,(err,fields,files)=> {
//   let nawName = path.join(__dirname,"../public/images",Date.now()+path.extname(files.abc.name));
//   rs.rename(
//     files.abc.path,newName,
//    (err) => {
//      console.log(err);
//     }
//   )
// } )
// res.send(req.body);
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
    connection.query(user2,[req.body.name,req.body.password],function(err,results) {
        if(err) {
          console.log(err)
          return;
        }
        res.redirect("/")
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
      res.redirect('/command')
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
router.post('addc',(req,res) => {

})
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
  var product5 = "select * from tab_product where product_id like '%?%' or product_name like '%?%' or product_title like '%?%' or product_classify like '%?%' or product_price like '%?%'"
  connection.query(product5,[req.body.s1,req.body.s1,req.body.s1,req.body.s1,req.body.s1],(err,results,firelde) => {
      if(err){
        console.log(err);
        return;
      }
      arr=results;
      res.json({"status3":1});
    })
  });
  router.get('/search',(req,res) => {
    res.json(arr)
  });
// page
var pages=0;
var count=0;
var tpages=0;
var limit=3;
router.get('page',(req,res) =>{
  
} )







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
var express = require('express');
var router = express.Router();

/* GET blank page. */
router.get('/', function(req, res, next) {
  res.render('products-category', { title: 'products', test:'tam' });
});

router.get('/category/%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3', function(req, res, next) {
  res.render('products-category', { title: 'อาหาร', test:'tam' });
});

router.get('/category/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B9%88%E0%B8%A1', function(req, res, next) {
  res.render('products-category', { title: 'เครื่องนุ่งห่ม', test:'tam' });
});

router.get('/category/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%83%E0%B8%8A%E0%B9%89', function(req, res, next) {
  res.render('products-category', { title: 'เครื่องใช้', test:'tam' });
});

router.get('/category/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A', function(req, res, next) {
  res.render('products-category', { title: 'เครื่องประดับ', test:'tam' });
});

router.get('/category/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%99%E0%B9%84%E0%B8%9E%E0%B8%A3', function(req, res, next) {
  res.render('products-category', { title: 'ผลิตภัณฑ์สมุนไพร', test:'tam' });
});

router.get('/category/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1', function(req, res, next) {
  res.render('products-category', { title: 'เครื่องดื่ม', test:'tam' });
});

router.get('/category/%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A3%E0%B8%B0%E0%B8%A5%E0%B8%B6%E0%B8%81', function(req, res, next) {
  res.render('products-category', { title: 'ของที่ระลึก', test:'tam' });
});

router.get('/category/%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%86', function(req, res, next) {
  res.render('products-category', { title: 'อื่นๆ', test:'tam' });
});

router.get('/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9C%E0%B8%B6%E0%B9%89%E0%B8%87%E0%B8%AA%E0%B8%94', function(req, res, next) {
  res.render('products', { 
    title: 'น้ำผึ้งสด', 
    pPrice: '80',
    pPriceOriginal: '80',
    pDetail: "น้ำผึ้งแท้🐝 น้ำผึ้งสด🐝 "
            +"<br/> พร้อมทาน ไม่ผสมน้ำตาล หอมหวาน ราคาถูก "
            +"<br/> ประโยชน์จากสารอาหารครบถ้วน ⛅"
            +"<br/> 🌷 เพิ่มภูมิคุ้มกันร่างกาย"
            +"<br/> 🌷 แก้โรคกระเพาะ"
            +"<br/> 🌷 ช่วยต้านเชื้อแบคทีเรีย เชื้อรา" 
            +"<br/> 🌷 กำจัดเชื้อไวรัสที่ทำให้เกิดอาการไอ"
            +"<br/> 🌷 บรรเทาอาการนอนไม่หลับ"
            +"<br/> 🌷 บำรุงสุขภาพ"
            +"<br/> มีหลายขนาดให้เลือกซื้อกันอย่างจุใจ 🍯",
    imagesMain: '/assets/images/products/สวนผึ้ง-บ้านคลองหินขาว/images/04.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '/model3D/bee.glb',
    modelARIOS: '/model3D/bee.usdz',
    device: req.device.type.toUpperCase(),
  });
});

router.get('/poptoast', function(req, res, next) {
  res.render('products', { 
    title: 'Poptoast', 
    pPrice: '35',
    pPriceOriginal: '40',
    pDetail: "🍞 ขนมปังกรอบ Poptoast โฉมใหม่ สีสันสดใส"
            +"<br/> 🍞 ทรงสี่เหลี่ยมพอดีคำ รสชาติกลมกล่อม"
            +"<br/> 🍞 มี 4 รสชาติ 🟡 เนย 🔴 คาราเมล 🟠 ชีส 🟢 กระเทียม"
            +"<br/> ✅ มีจำหน่ายทั้งปลีกและส่ง"
            +"<br/> ✅ ขนมเก็บได้นาน 6 เดือน"
            +"<br/> ✅ ผ่านมาตรฐาน รับรอง อย." 
            +"<br/> ┏━━━━━━━┓"
            +"<br/> 💸 ราคาซองละ 35 บาท"
            +"<br/> 📌 น้ำหนักสุทธิ 50 กรัม"
            +"<br/> ┗━━━━━━━┛",
    imagesMain: '/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '/model3D/pop-toast.glb',
    modelARIOS: '/model3D/pop-toast.usdz',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%96%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%AE%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B9%80%E0%B8%A1%E0%B8%94', function(req, res, next) {
  res.render('products', { 
    title: 'กระถางแฮนด์เมด', 
    pPrice: '280',
    pPriceOriginal: '280',
    pDetail: "กระถางปลูกต้นไม้"
            +"<br/> ผลิตจาก​ ดินเผา"
            +"<br/> งานแฮนด์เมด"
            +"<br/> ขนาดปากกระถางกว้าง 11 นิ้ว"
            +"<br/> พร้อมจานรอง"
            +"<br/> สินค้ามีวางจำหน่ายที่ร้าน​ สวนน้ำสวย",
    imagesMain: '/assets/images/products/กระถางแฮนด์เมด/images/07.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B9%8B%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%82%E0%B8%9A%E0%B9%89', function(req, res, next) {
  res.render('products', { 
    title: 'กระเป๋าสานรุ่นเปโบ้', 
    pPrice: '280',
    pPriceOriginal: '300',
    pDetail: "รายละเอียดสินค้า",
    imagesMain: '/assets/images/products/กระเป๋าสานรุ่นเปโบ้ใส่ของจุใจ/images/01.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%AB%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87', function(req, res, next) {
  res.render('products', { 
    title: 'ไก่เชียงพริกกะเหรี่ยง', 
    pPrice: '60',
    pPriceOriginal: '65',
    pDetail: "รายละเอียดสินค้า",
    imagesMain: '/assets/images/products/ไก่เชียงพริกกะเหรี่ยง/images/03.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%9A%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B8%E0%B8%81', function(req, res, next) {
  res.render('products', { 
    title: 'ปลาร้าบองสุก', 
    pPrice: '20',
    pPriceOriginal: '20',
    pDetail: "รายละเอียดสินค้า",
    imagesMain: '/assets/images/products/ปลาร้าบองสุก/images/01.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B9%80%E0%B8%8B%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%A1', function(req, res, next) {
  res.render('products', { 
    title: 'เซรั่มเร่งผม', 
    pPrice: '350',
    pPriceOriginal: '350',
    pDetail: "รายละเอียดสินค้า",
    imagesMain: '/assets/images/products/รัญญาฟาร์ม/เซรั่มเร่งผม/images/05.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B0%E0%B8%82%E0%B8%B2%E0%B8%A1', function(req, res, next) {
  res.render('products', { 
    title: 'น้ำมะขาม', 
    pPrice: '20',
    pPriceOriginal: '25',
    pDetail: "รายละเอียดสินค้า",
    imagesMain: '/assets/images/products/รัญญาฟาร์ม/น้ำมะขาม/images/06.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%82%E0%B8%AD%E0%B8%97%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B4%E0%B8%A1%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1', function(req, res, next) {
  res.render('products', { 
    title: 'ส้มโอทับทิมสยาม', 
    pPrice: '200',
    pPriceOriginal: '220',
    pDetail: "รายละเอียดสินค้า",
    imagesMain: '/assets/images/products/สวนพืช-ส้มโอทับทิมสยาม/images/02.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});

router.get('/%E0%B8%AB%E0%B9%88%E0%B8%AD%E0%B8%AB%E0%B8%A1%E0%B8%81%E0%B9%81%E0%B8%8A%E0%B9%88%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%81%E0%B8%A1%E0%B9%88', function(req, res, next) {
  res.render('products', { 
    title: 'ห่อหมกแช่แข็ง', 
    pPrice: '60',
    pPriceOriginal: '65',
    pDetail: "รายละเอียดสินค้า",
    imagesMain: '/assets/images/products/ห่อหมกแช่แข็ง-รสมือแม่/images/01.jpg',
    images: [
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
      "/assets/images/products/poptoast/images/150744722_889117901704432_6504430215330954442_o.jpg",
    ],
    modelAR: '',
    modelARIOS: '',
    device: req.device.type.toUpperCase(),
  });  
});



module.exports = router;

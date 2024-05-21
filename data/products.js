const products = [
   { 
    //Id:'g4s2-e8hj-1l3m-4n',
    image:'images/products/Laptops&monitors/Apple MacBook.webp',
    name:' Apple MacBook',
    price: 22000,
    specs:{
      
      rom: 512,
      ram: 24,
      Osystem:'IOS',
      version:'MacOs',
      romType:'(SSD)',
      more: `
      13.6 inch Liquid  Retina Display
      1080p HD camera ;8-core CPU;10-Core GPU
      
      `
    },
   

  }
,

  { 
    //Id:'p9r8-d3f2-b1c4-e2',
    image:'images/products/Laptops&monitors/Dell Laptop.webp',
    name:' Dell Latitude 7490',
    price: 11986.6,
    specs:{
      
      rom: 256,
      ram: 16,
      Osystem:'Windows',
      version:'10+',
      processor:'corei7',
      romType:'(SSD)',
      more: `The Dell Latitude is a 14-inch bussiness laptop designed for productivity and reliability.The laptop has an Intel Core i7-8650U processor and provides  a 14"FHD LED display,Intel UHD Graphics 620,and a range of ports including USB 3.0,HDMI,and Type-C.Running 
      on Windows 10 proffesional.It's a solid choice for professionals and businesses seeking a dependable and efficient laptop
      
      `
    },
   
  }
,

  { 
    //Id:'a1b2-c3d4-e5f6-g3',
    image:'images/products/Laptops&monitors/Asus Laptop.webp',
    name:' Asus VivoBook',
    price: 9699.9,
    specs:{
      
      rom: 256,
      ram: 8,
      Osystem:'Linux ',
      version:'5',
      romType:'',
      more: `The ASUS VivoBook is a 14-inch bussiness laptop designed for productivity and reliability.The laptop has an Intel Core i7-8650U processor and provides  a 14"FHD LED display,Intel UHD Graphics 620,and a range of ports including USB 3.0,HDMI,and Type-C.Running 
      on Windows 10 proffesional.It's a solid choice for professionals and businesses seeking a dependable and efficient laptop
      
      `
    }

  }
  /*
,
  { 
   // Id: 'k7m3-n9p8-r2t1-y4',
    image:'images/products/Laptops&monitors/dell-desktop-computer.png',
    name:'Dell Desktop Computer',
    price: 17659.9,
    specs:{
      
      rom: 256,
      ram: 12,
      Osystem:'Windows',
      version:'11',
      romType:'(SSD)'
    }

  }

,
  { 
    //Id: 'e5f6-g7h8-i1j2-k5',
    image:'images/products/Laptops&monitors/Lenovo Laptop.webp',
    name:'Lenovo Thinkpad',
    price: 10000,
    specs:{
      
      rom: 256,
      ram: 6,
      Osystem:'Windows ',
      version:'10',
      romType:'(SSD)'
    }

  }

,
  { 
    //Id:'2c3d-4e5f-6g7h-8i',
    image:'images/products/Laptops&monitors/HP Notebook.webp',
    name:'HP NoteBook',
    price: 22000,
    specs:{
      
      rom: 256,
      ram: 12,
      Osystem:'Windows ',
      version:'10',
      romType:'(SSD)'
    }

  }

,
  { 
   // Id:g4s2-e8hj-le3m-4n,
    image:'images/products/Laptops&monitors/Dell-monitor.png',
    name:' Dell Monitor',
    price: 6500,
    specs:{
      
      rom: ' ',
      ram: ' ',
      Osystem:'Windows',
      romType:' '
    }

  }

,
  { 
   // Id:'2c3d-4e5f-6g7h-8i',
    image:'images/products/Laptops&monitors/Qled-Samsung-laptop.jpeg',
    name:'Samsung Galaxy  Book4s',
    price: 22000,
    specs:{
      
      rom: 256,
      ram: 16,
      Osystem:'Windows',
      version:'10pro',
      romType:'(SSD)'
    }

  },

  { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Dell-all-in-one.jpeg',
     name:'Dell pc',
     price: 22000,
     specs:{
       
       rom: 256,
       ram: 16,
       Osystem:'Windows',
       version:'10pro',
       romType:'(SSD)'
     }
 
   },
 
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Dell-desktop-all-in-one.jpeg',
     name:'Dell Personal Computer',
     price: 22000,
     specs:{
       
       rom: 256,
       ram: 16,
       Osystem:'Windows',
       version:'10pro',
       romType:'(SSD)'
     }
 
   },
 
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Lenovo-desktop-pc-black.jpeg',
     name:'Samsung Galaxy  Book4s',
     price: 22000,
     specs:{
       
       rom: 256,
       ram: 16,
       Osystem:'Windows',
       version:'10pro',
       romType:'(SSD)'
     }
 
   },
 
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Lenovo-Thinkcentre-gray.jpeg',
     name:'Lenovo Ideapad',
     price: 4999.9,
     specs:{
       
       rom: 128,
       ram: 4,
       Osystem:'Windows',
       version:'11pro',
       romType:' '
     }
 
   },
 
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Nokia-235-4g-black.jpg',
     name:'Nokia 235 4G',
     price: 1499.9,
     specs:{
       
       rom: 8,
       ram: 1,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },


   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/huawei-nova-y90-2.jpg',
     name:'Huawei NovaY90',
     price: 5499.9,
     specs:{
       
       rom: 128,
       ram: 4,
       Osystem:'Android',
       version:'EMUI 11',
       romType:' '
     }
 
   },
 
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/huawei-p30-pro-3.jpg',
     name:'Huawei P30 pro',
     price: 9599.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:'Android',
       version:'EMUI 12',
       romType:'(No SD)'
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/huawei-y6p.jpg',
     name:'Huawei Y6p 2020',
     price: 4000,
     specs:{
       
       rom: 64,
       ram: 3,
       Osystem:'Android',
       version:'EMUI 10.1.0',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Nokia-C12.jpg',
     name:'Nokia C12',
     price: 2499.99,
     specs:{
       
       rom: 32,
       ram: 2,
       Osystem:'Android',
       version:'9',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Nokia-c32.jpg',
     name:' Nokia C32 4G',
     price: 3999.9,
     specs:{
       
       rom: 64,
       ram: 3,
       Osystem:'Android',
       version:'9',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Nokia-G42.jpg',
     name:'NokiaG42 5G',
     price: 6499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'10',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Nokia-G45-red.jpg',
     name:' Nokia G45',
     price: 6699.9,
     specs:{
       
       rom: 128,
       ram: 4,
       Osystem:'Android',
       version:'11',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Samsung-A03-core.jpg',
     name:'Samsung Galaxy A03 Core',
     price: 2499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'12',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Samsung-A15-Lte.jpg',
     name:'Samsung Galaxy A15 LTE',
     price: 4450,
     specs:{
       
       rom: 128,
       ram: 3,
       Osystem:'Android',
       version:'11',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-a03-2.jpg',
     name:'Samsung Galaxy A03',
     price: 5499.9,
     specs:{
       
       rom: 128,
       ram: 4,
       Osystem:'Android',
       version:'11',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/Samsung-galaxy-A32-4G.jpg',
     name:'Samsung Galaxy A32',
     price: 5000.,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'12',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-m34-5g-4.jpg',
     name:'Samsung Galaxy M34 5G',
     price:5999.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:' Android',
       version:'10',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-M34.jpg',
     name:'Samsung Galaxy M34+',
     price: 7000.,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:' Android',
       version:'11',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s6-edge-black.jpg',
     name:'Samsung Galaxy Series',
     price: 2999.9,
     specs:{
       
       rom: 64,
       ram: 3,
       Osystem:'W Android',
       version:'7.1',
       romType:'(No SD) '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-z-fold5-.jpg',
     name:'Samsung Galaxy  Z Fold 5',
     price: 4499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:' Android',
       version:'10',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s8-edge.jpg',
     name:'Samsung Galaxy S8 edge',
     price: 5499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'9',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s9-edge-blue.jpg',
     name:'Samsung Galaxy  S9',
     price: 5499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'12',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s9-edge-plus.jpg',
     name:'Samsung Galaxy S9+',
     price: 6499.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:' Android',
       version:'12',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s10-edge.jpg',
     name:'Samsung Galaxy S10',
     price: 8499.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:' Android',
       version:'11',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s20-5g-blue.jpg',
     name:'Samsung Galaxy S20 ultra',
     price: 12999.9,
     specs:{
       
       rom: 256,
       ram: 8,
       Osystem:' Android',
       version:'13',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s20-black.jpg',
     name:'Samsung Galaxy  S20',
     price: 9999.9,
     specs:{
       
       rom: 256,
       ram: 6,
       Osystem:'Android',
       version:'12',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/cellphones/samsung-galaxy-s21-ultra5g.jpg',
     name:'Samsung Galaxy S21 Ultra',
     price: 14999.9,
     specs:{
       
       rom: 256,
       ram: 8,
       Osystem:' Android',
       version:'13',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
   { 
    // Id:'2c3d-4e5f-6g7h-8i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Series',
     price: 4499.9,
     specs:{
       
       rom: 256,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:' '
     }
 
   },
 
 */
 
    
] 
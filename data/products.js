const products = [
   { 
    Id:'g4s2-e8hj-1l3m-4n',
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
    Id:'p9r8-d3f2-b1c4-e2',
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
      more: `The Dell Latitude is a 14-inch bussiness laptop designed for productivity and reliability.The laptop has an Intel Core i7-8650U processor and provides  a 14 FHD LED display,Intel UHD Graphics 620,and a range of ports including USB 3.0,HDMI,and Type-C.Running 
      on Windows 10 proffesional.It's a solid choice for professionals and businesses seeking a dependable and efficient laptop
      
      `
    },
   
  }
,

  { 
    Id:'a1b2-c3d4-e5f6-g3',
    image:'images/products/Laptops&monitors/Asus Laptop.webp',
    name:' Asus VivoBook 15',
    price: 9699.9,
    specs:{
      
      rom: 256,
      ram: 8,
      Osystem:'Linux ',
      version:'5',
      romType:'',
      more: `The ASUS VivoBook 15 is a versatile laptop that features a 12th Gen Intel Core i5 processor,8Gb of RAM and a 256 GB SSD.Its 15.6 FHD display provides crisp and vibrant visuals,while the Intel Iris Xe graphics card handle graphics and video playback with ease.With a range of ports and a long-lasting battery,this laptop is ideal for everyday use and productivity.
      `
    }

  }

,
  { 
    Id: 'k7m3-n9p8-r2t1-y4',
    image:'images/products/Laptops&monitors/dell-desktop-computer.png',
    name:'Dell Inspiron Desktop ',
    price: 17659.9,
    specs:{
      
      rom: 1000,
      ram: 12,
      Osystem:'Windows',
      version:'11',
      romType:'(HHD)',
      more:`The Dell Inspiron 24 000 is an all in one desktop that featureswith a 12th Gen Intel Corei5 processor,<strong>8 GB of RAM and a 1TB HDD</strong>.It's 24 FHD display provides a crisp and vibrant visuals,while the Intel lris Xe graphics card handles graphics and video playback with ease.With a range of ports and a sleek design,this desktop is perfect for everyday and productivity 
      
      
      `
    }

  }

,
  { 
    Id: 'e5f6-g7h8-i1j2-k5',
    image:'images/products/Laptops&monitors/Lenovo Laptop.webp',
    name:'Lenovo Thinkpad X1 Carbon',
    price: 10000,
    specs:{
      
      rom: 512,
      ram: 16,
      Osystem:'Windows ',
      version:'10',
      romType:'(SSD)',
      more:`The Lenovo ThinkPad X1 Carbon is a high-perfomance laptop that features a 12th Gen Intel Core i7 processor,16GB of RAM,and a 512 GB SSD.It's 14 FHD display provides crisp abnd vibrant visuals,while the intel Iris Xe graphics card handles graphics and video playback smoothly.With a long-lasting, this laptop is perfect for proffessionals and power uses
      
      `
    }

  }

,
  { 
    Id:'2c3d-4e5f-6g7h-8i',
    image:'images/products/Laptops&monitors/HP Notebook.webp',
    name:'HP Envy 13',
    price: 22000,
    specs:{
      
      rom: 512,
      ram: 16,
      Osystem:'Windows ',
      version:'10',
      romType:'(SSD)',
      more:`The HP Envy 13 is a powerful and sleek laptop that features a 12th Gen Intel Core i7 processor,16 GB of RAM,and a 512 GB SSD.It's '13.3 FHD display provides crisp and vibrant visuals,while the Intel Iris Xe graphics card handles graphics and video playback with ease.With a compact and lightweight design,this laptop is perfect forstudents and professionals on the go.
      
      
       `
    }

  }

,
  { 
    Id:'g4s2-e8hj-le3m-4n',
    image:'images/products/Laptops&monitors/Dell-monitor.png',
    name:' Dell SE2722H Monitor',
    price: 6500,
    specs:{
      
      rom: ' ',
      ram: ' ',
      Osystem:'Windows',
      romType:' ',
      more:`The Dell SE2722H is a 27-inch FHD flat monitor with sleek and slim design, offering crystal-clear visuals and vibrant colors.It features a 1920x1080p resolution,60Hz refresh rate,and 5ms response time,providing crisp and clear visuals for work and play
      
      `
    }

  }

 ,
  { 
    Id:'2b3d-4e5f-6g7h-8d',
    image:'images/products/Laptops&monitors/Qled-Samsung-laptop.jpeg',
    name:'Samsung Galaxy Book flex 15',
    price: 22000,
    specs:{
      
      rom: 256,
      ram: 16,
      Osystem:'Windows',
      version:'10pro',
      romType:'(SSD)',
      more:`The Samsung Galaxy Book Flex 15 laptop features a 15.6-incch 1080p QLED display,powered by an Intel Core i7-1065g7 CPU and NVIDIA GeForce MX250 GPU.It comes with 12GB of RAM and 512GB of storage,providing a seamless perfomance for demanding tasks.This laptop offers a great balance of perfomance,portability and affordability
      
      `
    }

  },
 
  { 
     Id:'7c8d-9e1f-0i1h-2f',
     image:'images/products/Laptops&monitors/Dell-all-in-one.jpeg',
     name:'Dell XPS 8930',
     price: 22000,
     specs:{
       
       rom: 1000,
       ram: 16,
       Osystem:'Windows',
       version:'10pro',
       romType:'(SSD)',
       more:`The Dell XPS 8930 is a high-perfomance desktop that offers a 12th Gen Intel Core i9 processor,16GB of RAM,and a 1TB SSD.It's compact design and range of ports make it perfect for power users and gamers.The NVIDIA GeForce GTX 1660 Super Graphics card delivers smooth perfomance for gaming and graphics-intensive tasks
       
       
       
       
       
       `
     }
 
   },
  
 
   { 
     Id:'2c3d-4e5f-6g7h-8j',
     image:'images/products/Laptops&monitors/Dell-desktop-all-in-one.jpeg',
     name:'Dell Inspiron 27 Desktop',
     price: 22000,
     specs:{
       
       rom: 256,
       ram: 16,
       Osystem:'Windows',
       version:'10pro',
       romType:'(SSD)',
       more:`
      The Dell Inspiron 27 All-In-One is a great option for those on a budget,with a 27-inch FHD screen that is touch-enabled,an Intel Core i7-1355U processor,and 16 GB of RAM.This all-in-one desktop is perfect for everyday tasks,streaming and working from home.It also features a sleek and compact design,making it ideal for small spaces.Additionally,it comes with a range of ports,including USBA,USB-C and HDMI making it easy to connect to external libraries 
       
       
       
       `
     }
 
   },
 
   { 
     Id:'3c4d-5e6f-6g7h-9i',
     image:'images/products/Laptops&monitors/Lenovo-desktop-pc-black.jpeg',
     name:'Lenovo Legion Tower ',
     price: 22000,
     specs:{
       
       rom: 256,
       ram: 16,
       Osystem:'Windows',
       version:'10pro',
       romType:'(SSD)',
       more:`This traditional tower desktop offers a more affodable and customizable gaming experience.It features a sturdy metal chasis,plastic trims and vents,and a glass side panel,giving users easy access to upgrade their components.With options for up to 13th Gen Intel Core i7 processor, and up to 64 GB of DDR4 RAM,this desktop is ideal for casual gamers and content creators who want a reliable and upgradable machine.
       
       
       
       `
     }
 
   },
   
   { 
     Id:'1c3d-2e5f-5g7h-2i',
     image:'images/products/Laptops&monitors/Samsung - galaxy-laptop-4.jpeg',
     name:'Samsung Galaxy Book 3',
     price: 4499.9,
     specs:{
       
       rom: 216,
       ram: 3,
       Osystem:'Windows',
       version:'7',
       romType:'SSD ',
       more:`The Samsung Galaxy Book3 360 is a laptop that features a 13.3 inch FHD touchscreen display,Intel Core i7 processor,16GB of RAM and a 512 GB SSD.It also has a long lasting batttery and support S Pen and S Pen Pro.It is capable for both gaming and studying purposes`
     }
 
   },
   { 
  Id:'9c8d-7e6f-5g4h-3i',
     image:'images/products/Laptops&monitors/Lenovo-Thinkcentre-gray.jpeg',
     name:'Lenovo Ideapad 330S',
     price: 4999.9,
     specs:{
       
       rom: 128,
       ram: 4,
       Osystem:'Windows',
       version:'11pro',
       romType:'SSD ',
       more:`The Lenovo IdeaPad is a slim and lightweightlaptop that offers  a 12th Gen Intel Core i5 processor,8 GB of RAM and a 256 GB SSD.It's 15.6 FHD display provides crisp and vibrant visuals,while the intel Iris Xe graphics card handles graphics and video playback with ease.With arange of ports and long-lasting battery,this laptop is perfect for everyday activity
       
       `

     }
 
   },
 
   { 
    Id:'9c0d-1e3f-2g1h-0i',
     image:'images/products/cellphones/Nokia-235-4g-black.jpg',
     name:'Nokia 235 4G',
     price: 1499.9,
     specs:{
       
       rom: 0.128,
       ram: 0.064,
       Osystem:' KaIOS',
       version:'3.2.1',
       romType:' MB',
       more:`The Nokia 235 4G(2024) is an entry-level phone that offers a 2.8 inch TFT LCD Display with a resolution of 240 x 320 pixels.It has a 22nm Unisoc T107 chipset and 64 MB of RAM with 128 MB storage support.The phone supports 4G network and also equips a 2MP rear camera and has  a removable 1450 mAh Li-ion battery and is available in black and purple colors`
     }
 
   },


   {
    Id:'8i-4e5f-2c3d-6g7h',
     image:'images/products/cellphones/huawei-nova-y90-2.jpg',
     name:'Huawei NovaY90',
     price: 5499.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:'Android',
       version:'EMUI 11',
       romType:' ',
       more:`The Huawei Nova Y90 features a 6.7 inch displaay with a resolution of 1080 x 2388 pixels,a Qualcomm SM6225 Snapdragon 680 4g chipset,6 GB RAM ,128 GB atorage,a tripple camera setup with a 50MP primary sensor,and a 5000 mAh battery with 40W fast charging.`
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
       romType:'(No SD)',
       more:`The Huawei P30 Pro features a 6.47 inch display with a resolution of1080 x 2340 pixels and runs on Android 9.0(Pie),upgradable to Android 10.It is powered by a Kirin 980(7nm)chipset with an octa-core processor and Mali G-76MMP10 GPU.The phone has a triple camera setup,consisting of a 40MP primary sensor with a wide-angle and OIS, a20 MP ultra-wide-angle lens and an 8MP telephoto lens with OIS.The phonecomes with 6GB RAM and 128 GB ROM.It has a 4200 mAh battery with fast charging up to 40W and wireless charging up to 15W
       `
     }
 
   },
   { 
    Id:'2a3z-4b5y-6c7x-7d',
     image:'images/products/cellphones/huawei-y6p.jpg',
     name:'Huawei Y6p 2020',
     price: 4000,
     specs:{
       
       rom: 64,
       ram: 3,
       Osystem:'Android',
       version:'EMUI 10.1.0',
       romType:' ',
       more:`The Huawei Y6p,released on May 5,2020,features a 6.3-inch IPS LCD display with a resolution of 720 x 1600 pixels and a 20 :9 aspect ratio.Powered by a Mediatek MT6762R Helio P22 chipset,the phone comes with an octa-core processor and PowerVR GE8320 GPU.It has 32GB or 64 GB of internal storage,paired with 3GB or 4GB of RAM.The triple rear camera setup includes a 13MP primary sensor,while the front camera is 8MP.The phone runs on Android 10 with EMUI 10.1,but lacks Google Play Services.it has a lage 500mAh non-removable battery.`
     }
 
   },
   { 
    Id:'2y3d-4z5f-6v7x-2a',
     image:'images/products/cellphones/Nokia-C12.jpg',
     name:'Nokia C12',
     price: 2499.99,
     specs:{  
       
       rom: 64,
       ram: 2,
       Osystem:'Android',
       version:'9',
       romType:'(Go Edition)',
       more:`The Nokia C12 features a 6.3-inch IPS LCD display,Unisoc SC9863A1 chipset,octa-core processor,2 GB/3GB RAM,64 GB storage,single 8MP rear camera,5MP front camera, Android 12(Go Edition),3000 mAh removable battery,micro-USB and measures 160.6 x 74.3 x 8.8mm,weighing 177.4 grams
       `
     }
 
   },
   
   { 
    Id:'2c3d-2e4f-2g3h-1i',
     image:'images/products/cellphones/Nokia-c32.jpg',
     name:' Nokia C32 4G',
     price: 3999.9,
     specs:{
       
       rom: 64,
       ram: 3,
       Osystem:'Android',
       version:'9',
       romType:' ',
       more:`The Nokia C32 4G features a 6.5-inch HD+ display,Android 12 (Go edition),Unisoc SC9863A1 chipset,2GB/3GB RAM,64 GB storage,microSD card slot,8MP dual rear camera,5MP front camera,5000mAh battery,micro-USB,3.5mm audio jack,and supports 4G LTE connectivity.It measures 164.6 x 75.9 x 8.5mm and weighs 199.4 grams.The phone comes Charcoal,Mint and Purple colors and has a sleek design with a textured back.It's a budget-friendly option for those seeking a reliable and efficient smartphone with modern features`
     }
 
   },
   { 
    Id:'9c3d-4e5f-9g7h-9i',
     image:'images/products/cellphones/Nokia-G42.jpg',
     name:'NokiaG42 5G',
     price: 6499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'10',
       romType:' ',
       more:`The NOkia G 42 features a 6.5-inch HD + display with a 90HZ refresh rate,a 50MP camera with AI algorithms,and aSnapdragon 480+ 5G chipset.It boasts a long-lasting 3-day battery life,5GB of storage and runs on Android 13,with apromise of 3 years of monthly security updates and 2 yrs of OS upgrades.The rear tripple camera is equiped with AI algorithms,and it also features OZO 3D audio capture.Additionally,the phone is designed with Quickfix repairability in mind,making it a great option for those looking for a reliable and efficient smartphone with modern features`
     }
 
   },
   { 
     Id:'2c2d-3e3f-6g6h-7i',
     image:'images/products/cellphones/Nokia-G45-red.jpg',
     name:' Nokia G45',
     price: 6999.9,
     specs:{
       
       rom: 128,
       ram: 4,
       Osystem:'Android',
       version:'13',
       romType:' ',
       more:`The Nokia G45 5G features a 6.56-inch HD+ display with a 120Hz refresh rate, a 50Mp quad-camera setup with AI algoriths, and a powerful Snapdragon 695 5G chipset.It boasts a long -lasting 500mAh battery with fast charging capabilities,6GB of RAM and 128 GB of storage.The phone runs on android 13,with a promise of 3 years monthly security updates and 2 years of OS upgrades.Adiitionally,it features OZO 3D audio capture ,IP68 water and dust resistance,and QuickFix repairability,making it a great option for those looking for a reliable and and efficient smartphone with modern features and a sleek design`
     }

   },
  
   { 
     Id:'2a3d-4z5e-6z7b-3i',
     image:'images/products/cellphones/Samsung-A03-core.jpg',
     name:'Samsung Galaxy A03 Core',
     price: 2499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'12',
       romType:' ',
       more:`The Samsung Galaxy A03 features a 6.5-inch HD+ Infinity-V display,a quad-camera setup with a 48MP main camera,2MP macro camera and 2MP depth sensor,and a powerful octa-core processor...It comes with 3GB/4GB of RAM and 32GB/64GB of internal storage,expandable up to 1TB via microSD card.The phone runs on Android 11 and is powered by a large 5000mAh battery with 15W fast charging support.Additionaly,it features a sleek design,Dolby Atmos audio,and a range of security features likefingerprint recognition and face unlock,making it a great budget-friendly option for those looking for a reliable and feature-packed smartphone`
     }
 
   },
   { 
     Id:'6a3d-4z5f-6t7h-8n',
     image:'images/products/cellphones/Samsung-A15-LTE.jpg',
     name:'Samsung Galaxy A15 LTE',
     price: 4450,
     specs:{
       
       rom: 32,
       ram: 3,
       Osystem:'Android',
       version:'11',
       romType:' ',
       more:`The Samsung Galaxy A15 LTE has a 6.5-inch HD+ Infinity-V display,a quad-camera setup with a 50 MP main camera ,2 MP macro camera,2MP depth sensor , and a 5MP ultra-wide-angle lens,and a powerful octa-core processor.It comes with 4GB/6GB of RAM and 64GB/128GB of internal storage,expandable up to 1TBvia microSD card.The phone  runs on Android 12 and is powered by a large 5000mAh battery with 15W fast charging support.Additionally,it has a range of security features like fingerprint recognition,face unlock and samsung knox security making it a great mobile`
     }
 
   },
   { 
    Id:'2c3d-4eef-6g7d-3b',
     image:'images/products/cellphones/samsung-galaxy-a03-2.jpg',
     name:'Samsung Galaxy A03',
     price: 5499.9,
     specs:{
       
       rom: 128,
       ram: 4,
       Osystem:'Android',
       version:'11',
       romType:' ',
       more:`The Samsung Galaxy A03 Core is an entry-level smartphone that features a 6.5-inch HD+ Infinity-V display, a single 8MP rear camera, and a 5MP front camera. It is powered by a quad-core processor, comes with 3GB of RAM and 32GB of internal storage, expandable up to 1TB via microSD card. The phone runs on Android 11 (Go edition) and is powered by a large 5000mAh battery with 15W fast charging support. It also features a sleek design, Dolby Atmos audio, and basic security features like fingerprint recognition, making it a great option for those looking for a budget-friendly and easy-to-use smartphone for basic tasks like calling, texting, and browsing.`
     }
 
   },
   { 
     Id:'2c3d-4c5f-6c7h- 2c',
     image:'images/products/cellphones/Samsung-galaxy-A32-4G.jpg',
     name:'Samsung Galaxy A32',
     price: 5000.,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'12',
       romType:' ',
       more:`The Samsung Galaxy A32 features a 6.5-inch FHD+ Infinity-V display, a quad-camera setup with a 64MP main camera, 8MP ultra-wide-angle lens, 5MP macro camera, and 5MP depth sensor, and a powerful octa-core processor. It comes with 4GB/6GB/8GB of RAM and 64GB/128GB of internal storage, expandable up to 1TB via microSD card. The phone runs on Android 11 and is powered by a large 5000mAh battery with 15W fast charging support. Additionally, it features a sleek design, Dolby Atmos audio, and advanced security features like fingerprint recognition, face unlock, and Samsung Knox security, making it a great option for those looking for a feature-packed and reliable smartphone with a large display and long-lasting battery life.`
     }
 
   },
   { 
    Id:'2c9d-4e7f-6e8h-8e',
     image:'images/products/cellphones/samsung-galaxy-m34-5g-4.jpg',
     name:'Samsung Galaxy M34 5G',
     price:5999.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:' Android',
       version:'12',
       romType:' ',
       more:`The Samsung Galaxy M34 5G is a budget-friendly 5G smartphone that features a 6.5-inch FHD+ Infinity-V display, a triple-camera setup with a 48MP main camera, 8MP ultra-wide-angle lens, and 5MP depth sensor, and a powerful Dimensity 700 5G processor. It comes with 4GB/6GB of RAM and 64GB/128GB of internal storage, expandable up to 1TB via microSD card. The phone runs on Android 12 and is powered by a large 6000mAh battery with 15W fast charging support. Additionally, it features a sleek design, Dolby Atmos audio, and advanced security features like fingerprint recognition, face unlock, and Samsung Knox security, making it a great option for those looking for a reliable and affordable 5G smartphone with a long-lasting battery and decent camera capabilities.`
     }
 
   },
   { 
     Id:'2a3d-4a5f-6a7h-8k',
     image:'images/products/cellphones/samsung-galaxy-M34.jpg',
     name:'Samsung Galaxy M34',
     price: 5000.,
     specs:{
       
       rom: 64,
       ram: 3,
       Osystem:' Android',
       version:'11',
       romType:' ',
       more:`The Samsung Galaxy M34 (non-5G variant) features a 6.5-inch FHD+ Infinity-V display, a triple-camera setup with a 48MP main camera, 8MP ultra-wide-angle lens, and 5MP depth sensor, and a powerful octa-core processor. It comes with 4GB/6GB of RAM and 64GB/128GB of internal storage, expandable up to 1TB via microSD card. The phone runs on Android 12 and is powered by a large 6000mAh battery with 15W fast charging support. Additionally, it features a sleek design, Dolby Atmos audio, and basic security features like fingerprint recognition, making it a great option for those looking for a reliable and affordable smartphone with a long-lasting battery and decent camera capabilities, without the need for 5G connectivity.`
     }
 
   },
   { 
    Id:'2a3d-4e5f-6y7z-8a',
     image:'images/products/cellphones/samsung-galaxy-s6-edge-black.jpg',
     name:'Samsung Galaxy S6',
     price: 2999.9,
     specs:{
       
       rom: 64,
       ram: 3,
       Osystem:'Android',
       version:'5.0.2',
       romType:'(No SD) ',
       more:`The Samsung Galaxy S6 Edge is a premium smartphone that features a 5.7-inch Quad HD Super AMOLED display with a curved edge screen, a 16MP rear camera, and a 5MP front camera. It is powered by a powerful Exynos 7420 octa-core processor, comes with 3GB of RAM and 32GB/64GB/128GB of internal storage, and runs on Android 5.0.2 (Lollipop) out of the box. The phone also features a sleek and durable design, wireless charging capabilities, and advanced security features like fingerprint recognition, making it a great option for those looking for a high-end smartphone with a unique design and top-notch features. Note that this phone is an older model, released in 2015, and may not receive the latest software updates or security patches.`
     }
 
   },
   { 
    Id:'2b3d-4e1f-3g4h-2i',
     image:'images/products/cellphones/samsung-galaxy-z-fold5-.jpg',
     name:'Samsung Galaxy  Z Fold 5',
     price: 4499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:' Android',
       version:'10',
       romType:' ',
       more:`The Samsung Galaxy Z Fold5 has a 7.6-inch screen and weighs 253 grams, making it the lightest and most compact Galaxy Z Fold yet ¹. The phone has a 4400mAh battery and an advanced processor that makes one charge last longer than ever before ¹. The phone also has a 50MP wide-angle camera, 12MP ultra-wide camera and 10MP telephoto camera ¹.`
     }
 
   },
   { 
     Id:'2c3a-6e9f-1g2h-5i',
     image:'images/products/cellphones/samsung-galaxy-s8-edge.jpg',
     name:'Samsung Galaxy S8 edge',
     price: 5499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'7',
       romType:' ',
       more:`The Samsung Galaxy S8 Edge is a flagship smartphone that features a 5.8-inch Quad HD+ Super AMOLED display with a curved edge screen, a 12MP rear camera, and an 8MP front camera. It is powered by a powerful Exynos 8895 octa-core processor, comes with 4GB of RAM and 64GB of internal storage, and runs on Android 7.0 (Nougat) out of the box. The phone also features a sleek and durable design, IP68 water and dust resistance, wireless charging capabilities, and advanced security features like iris scanning and fingerprint recognition, making it a great option for those looking for a high-end smartphone with a unique design and top-notch features. Note that this phone is an older model, released in 2017, and may not receive the latest software updates or security patches.`
     }
 
   },
   { 
     Id:'3b3d-4e4f-6g6h-7i',
     image:'images/products/cellphones/samsung-galaxy-s9-edge-blue.jpg',
     name:'Samsung Galaxy  S9',
     price: 5499.9,
     specs:{
       
       rom: 64,
       ram: 4,
       Osystem:'Android',
       version:'12(Oreo)',
       romType:' ',
       more:`There is no Samsung Galaxy S9 Edge. Samsung released the Galaxy S9 and S9+ in 2018, but not an Edge variant. The S9+ has a 6.2-inch screen, while the S9 has a 5.8-inch screen, both with Super AMOLED technology and Quad HD+ resolution. Both phones feature a 12MP rear camera, 8MP front camera, Exynos 9810 octa-core processor, 4GB/6GB RAM, and Android 8.0 (Oreo) out of the box. They also have IP68 water and dust resistance, wireless charging, and advanced security features like iris scanning and fingerprint recognition. If you're looking for a phone with a curved edge screen, consider the Galaxy S8 Edge or later models like the Galaxy S10, S20, or S21 series, which feature the "Edge" design.`
     }
 
   },
   { 
      Id:'2z3d-4e5f-5g4h-2i',
     image:'images/products/cellphones/samsung-galaxy-s9-edge-plus.jpg',
     name:'Samsung Galaxy S9+',
     price: 6499.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:' Android',
       version:'8.0(Oreo)',
       romType:' ',
       more:`The Samsung Galaxy S9+ (not officially called Edge) features a 6.2-inch Quad HD+ Super AMOLED display, a dual 12MP rear camera setup, and an 8MP front camera. It is powered by a powerful Exynos 9810 octa-core processor, comes with 6GB of RAM and 64GB/128GB/256GB of internal storage, and runs on Android 8.0 (Oreo) out of the box. The phone also features a sleek and durable design, IP68 water and dust resistance, wireless charging capabilities, and advanced security features like iris scanning and fingerprint recognition. While not officially called Edge, the S9+ has a curved screen design similar to the previous  Edge models, making it a great option for those looking for a high-end smartphone with a large, curved display and top-notch features.`
     }
 
   },
   { 
     Id:'2c3d-4e5l-6g7t-8y',
     image:'images/products/cellphones/samsung-galaxy-s10-edge.jpg',
     name:'Samsung Galaxy S10',
     price: 8499.9,
     specs:{
       
       rom: 128,
       ram: 6,
       Osystem:' Android',
       version:'11',
       romType:' ',
       more:`The Samsung Galaxy S10e is a compact and affordable variant of the S10 series, featuring a 5.8-inch Flat Dynamic AMOLED display with Full HD+ resolution. It is powered by a powerful Exynos 9820 octa-core processor, comes with 6GB/8GB of RAM and 128GB/256GB of internal storage, and runs on Android 9.0 (Pie) out of the box. The phone has a dual 12MP rear camera setup, a 10MP front camera, and advanced security features like fingerprint recognition and facial recognition. With its compact design, flat screen, and lower price point, the S10e is a great option for those looking for a high-end smartphone with a smaller form factor and top-notch features.`
     }
 
   },
   { 
     Id:'2c2d-4e9f-6g7h-9i',
     image:'images/products/cellphones/samsung-galaxy-s20-5g-blue.jpg',
     name:'Samsung Galaxy S20 ultra',
     price: 12999.9,
     specs:{
       
       rom: 512,
       ram: 16,
       Osystem:' Android',
       version:'13',
       romType:' ',
       more:`The Samsung Galaxy S20 Ultra is a flagship smartphone that features a large 6.8-inch Dynamic AMOLED display with Quad HD+ resolution, a long-lasting 5000mAh battery, and a powerful Exynos 990 octa-core processor. It comes with up to 16GB of RAM and 512GB of internal storage, and features a quad-camera setup with a 108MP primary sensor, a 40MP front camera, and support for 8K video recording. The phone also features advanced security features like fingerprint recognition and facial recognition, and supports 5G connectivity. With its large screen, powerful performance, and advanced camera capabilities, the S20 Ultra is ideal for those who want a top-of-the-line smartphone with the latest features and technology.`
     }
 
   },
   { 
    Id:'9c3d-4e5g-6h7j-8i',
     image:'images/products/cellphones/samsung-galaxy-s20-black.jpg',
     name:'Samsung Galaxy  S20',
     price: 9999.9,
     specs:{
       
       rom: 512,
       ram: 12,
       Osystem:'Android',
       version:'12',
       romType:' ',
       more:`The Samsung Galaxy S20 Ultra is a flagship smartphone that features a large 6.8-inch Dynamic AMOLED display with Quad HD+ resolution, a long-lasting 5000mAh battery, and a powerful Exynos 990 octa-core processor. It comes with up to 16GB of RAM and 512GB of internal storage, and features a quad-camera setup with a 108MP primary sensor, a 40MP front camera, and support for 8K video recording. The phone also features advanced security features like fingerprint recognition and facial recognition, and supports 5G connectivity. With its large screen, powerful performance, and advanced camera capabilities, the S20 Ultra is ideal for those who want a top-of-the-line smartphone with the latest features and technology.`
     }
 
   },
   { 
    // Id:'2e3d-4x5f-6d7h-3i',
     image:'images/products/cellphones/samsung-galaxy-s21-ultra5g.jpg',
     name:'Samsung Galaxy S21 Ultra',
     price: 14999.9,
     specs:{
       
       rom: 512,
       ram: 16,
       Osystem:' Android',
       version:'13',
       romType:' ',
       more:`The Samsung Galaxy S21 Ultra is a flagship smartphone that features a large 6.8-inch Dynamic AMOLED display with Quad HD+ resolution, a long-lasting 5000mAh battery, and a powerful Exynos 2100 octa-core processor. It comes with up to 16GB of RAM and 512GB of internal storage, and features a quad-camera setup with a 108MP primary sensor, a 40MP front camera, and support for 8K video recording. The phone also features advanced security features like fingerprint recognition and facial recognition, and supports 5G connectivity. Additionally, it is compatible with the S Pen stylus, making it a great option for those who want a top-of-the-line smartphone with the latest features and technology, as well as the flexibility of a stylus for note-taking and creativity. With its large screen, powerful performance, and advanced camera capabilities, the S21 Ultra is ideal for those who want the best of the best.`
     }
 
   },

    
    
] 
let mensData = [
    {
      id: 1,
      image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M176013_1/the-row-black-ferro-coat.jpg",
      name: "THE ROW",
      price: 2890,
      type: "Black Ferro Coat",
    },
    {
      id: 2,
      image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222729M176004_1/homme-plisse-issey-miyake-navy-kersey-pleats-coat.jpg",
      name: "Homme Plissé Issey Miyake",
      price: 730,
      type: " Navy Kersey Pleats Coat",
    },
    {
      id: 3,
      image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_2.0/222729M180015_1/homme-plisse-issey-miyake-black-monthly-color-september-coat.jpg",
      name: "Homme Plissé Issey Miyake",
      price: 720,
      type: "Black Monthly Color September Coat",
    },
    {
      id: 4,
      image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_2.0/222729M176010_1/homme-plisse-issey-miyake-black-basics-coat.jpg",
      name: "Homme Plissé Issey Miyake",
      price: 610,
      type: "Black Basics Caot",
    },
    {
        id: 1,
        image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222359M176013_1/the-row-black-ferro-coat.jpg",
        name: "THE ROW",
        price: 2890,
        type: "Black Ferro Coat",
      },
      {
        id: 2,
        image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222729M176004_1/homme-plisse-issey-miyake-navy-kersey-pleats-coat.jpg",
        name: "Homme Plissé Issey Miyake",
        price: 730,
        type: " Navy Kersey Pleats Coat",
      },
      {
        id: 3,
        image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_2.0/222729M180015_1/homme-plisse-issey-miyake-black-monthly-color-september-coat.jpg",
        name: "Homme Plissé Issey Miyake",
        price: 720,
        type: "Black Monthly Color September Coat",
      },
      {
        id: 4,
        image_url: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_2.0/222729M176010_1/homme-plisse-issey-miyake-black-basics-coat.jpg",
        name: "Homme Plissé Issey Miyake",
        price: 610,
        type: "Black Basics Caot",
      },
  ];

  displayMens(mensData);

  function displayMens(mensData){

    mensData.forEach(function(el){

        let card = document.createElement("div");

        let proImg = document.createElement("img");
        proImg.src = el.image_url;

        let proName = document.createElement("p");
        proName.innerText = el.name;

        let proType = document.createElement("p");
        proType.innerText = el.type;

        let proPrc = document.createElement("p");
        proPrc.innerText ="$"+el.price;

        let proATC = document.createElement("button");
        proATC.innerText = "Add to Bag";
        proATC.addEventListener("click",function(){
            addToBag(el);
        })

        card.append(proImg,proName,proType,proPrc,proATC);

        document.querySelector("#mid").append(card);


    })

    let bagArr = JSON.parse(localStorage.getItem("bag")) || [];

    function addToBag(el){
        bagArr.push(el);

        localStorage.setItem("bag",JSON.stringify(bagArr));
    }
  }

  let leftData = [
    '032c',
'1017 ALYX 9SM',
'11 by Boris Bidjan Saberi',
'132 5. ISSEY MIYAKE',
'3.1 Phillip Lim',
'3MAN',
'424',
'44 Label Group',
'4SDESIGNS',
'99% IS',
'A BETTER FEELING',
'A PERSONAL NOTE 73',
'A-COLD-WALL*',
'A. A. Spectrum',
'A.P.C.',
'AAPE by A Bathing Ape',
'AARON ESH',
'Acne Studios',
'ACRONYM',
'ADER error',
'adidas Originals',
'adidas x Human Made',
'adidas x Humanrace by Williams',
'adidas x IVY PARK',
  ];

  leftData.forEach(function(el){

    let ptag = document.createElement("p");
    ptag.innerText = el;

    document.querySelector("#Designers").append(ptag);
  })

  let colorData = [
   'ALL COLORS',
    'Black',
    'Blue',
    'Brown',
    'Burgundy',
    'Gray',
    'Green',
    'Navy',
    'Orange',
    'Pink',
    'Purple',
    'Red',
    'Tan',
    'White',
    'Yellow'
  ];

  colorData.forEach(function(el){

    let ptag = document.createElement("p");
    ptag.innerText = el;

    document.querySelector("#colors").append(ptag);
  })
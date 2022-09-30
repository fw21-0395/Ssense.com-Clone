let bagData = JSON.parse(localStorage.getItem("Wishlist"));

let bagTotalCount = JSON.parse(localStorage.getItem("ItemsCount")) || 0;
let WishlistTotalCount = JSON.parse(localStorage.getItem("wishlistCount")) || 0;


DisplayBag(bagData);

function DisplayBag(bagData){

    bagData.forEach(function(el,ind){

        let card = document.createElement("div");
        card.setAttribute("class","card");

          let item_Detail = document.createElement("div");
          item_Detail.setAttribute("class","item_Detail");

            let img_div = document.createElement("div");
            img_div.setAttribute("class","img_div");
            
                let img_src = document.createElement("img");
                img_src.src = el.image_url;

                img_div.append(img_src);
            
            let detail_div = document.createElement("div");
            detail_div.setAttribute("class","detail_div");

                let details_top = document.createElement("div");
                details_top.setAttribute("class","details_top");

                    let detail_name = document.createElement("p");
                    detail_name.innerText = el.name;
                    detail_name.setAttribute("class","detail_name");

                    let detail_type = document.createElement("p");
                    detail_type.innerText = el.type;
                    detail_name.setAttribute("class","detail_name");

                    let detail_Size = document.createElement("select");
                    detail_Size.setAttribute("class","detail_Size");


                        let size_option1 = document.createElement("option");
                        size_option1.innerText = "SIZE:S";

                        let size_option2 = document.createElement("option");
                        size_option2.innerText = "SIZE:M";

                        let size_option3 = document.createElement("option");
                        size_option3.innerText = "SIZE:L";

                        detail_Size.append(size_option1,size_option2,size_option3);

                    let detail_remain = document.createElement("span");
                    detail_remain.innerText = "Only 1 Remaining";
                    detail_remain.setAttribute("class","detail_remain");
                    
                    details_top.append(detail_name,detail_type,detail_Size,detail_remain);

                    

                let details_bottom = document.createElement("div");
                details_bottom.setAttribute("class","details_bottom");

                    let detail_wishlist = document.createElement("p");
                    detail_wishlist.innerText = "Move to Bag";
                    detail_wishlist.setAttribute("class","detail_wishlist");
                    detail_wishlist.addEventListener("click",function(){
                        addToBag(el,ind);
                    })

                    details_bottom.append(detail_wishlist);

                detail_div.append(details_top,details_bottom);


            item_Detail.append(img_div,detail_div);

          let item_Price = document.createElement("div");
          item_Price.setAttribute("class","item_Price");

            let price = document.createElement("p");
            price.innerText = "$" + el.price + " USD";
            price.setAttribute("class","price");

            let remove = document.createElement("p");
            remove.innerText = "Remove";
            remove.setAttribute("class","remove");
            remove.addEventListener("click",function(){
                removeFun(el,ind);
            })

            item_Price.append(price,remove);

        let hrRow = document.createElement("hr");

        card.append(item_Detail,item_Price);


        document.querySelector("#items").append(card,hrRow);
        
    })


    document.querySelector("#bagCount").innerText = bagTotalCount;
    document.querySelector("#wishlistCount").innerText = WishlistTotalCount;

    

}

function removeFun(el,ind){

    WishlistTotalCount--;

    localStorage.setItem("wishlistCount",JSON.stringify(WishlistTotalCount));
    
    bagData.splice(ind,1);

    localStorage.setItem("Wishlist",JSON.stringify(bagData));
    
    DisplayBag(bagData);

    window.location.reload();
}

let bagArr = JSON.parse(localStorage.getItem("bag")) || [];

    function addToBag(el,ind){

        WishlistTotalCount--;

    localStorage.setItem("wishlistCount",JSON.stringify(WishlistTotalCount));

        bagArr.push(el);

        bagTotalCount++;

        localStorage.setItem("ItemsCount",JSON.stringify(bagTotalCount));

        localStorage.setItem("bag",JSON.stringify(bagArr));

        bagData.splice(ind,1);

        localStorage.setItem("Wishlist",JSON.stringify(bagData));

        DisplayBag(bagData);

        window.location.reload();
    }


function showProductsList(array) { 

    let htmlContentToAppend = "";
        for (let i = 0; i < array.length; i++) {
        let products = array[i]


        htmlContentToAppend += ` 
        <a href="product-info.html?producto=` + products.name + `" class="list-group-item list-group-item-action">
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.image+ `" alt="` + products.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        
                        <h4 class="mb-1">`+ products.name + `</h4>
                        <small class="text-muted">` + products.cost + `USD </small>
                    </div>
                    <div>` + products.description + `</div>
                    <br>
                    <br>
                    <br>
                    <div>Se han vendido ` + products.soldCount + ` hasta el momento </div>
                </div>
            </div>
        </div>
        </a>
        `


    };
    document.getElementById("productos").innerHTML = htmlContentToAppend;
};
document.addEventListener("DOMContentLoaded",function(e){
    getJSONData(PRODUCTS_URL).then(function(resultsObj) {
        if (resultsObj.status === "ok"){
            productList=resultsObj.data; 
            product=productList.products                                     
              
            showProductsList(product);
        }
       
    }) 
})
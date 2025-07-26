
let productList= [];

function addProduct(callback){
    setTimeout(()=>{
        productList= productListFromServer
        callback();
    }, 2000);
}

function loadData(){
    function renderProductList(){
        if(productList.length===0){
            document.getElementById("data").innerHTML="loading...";
            return;
        }
        document.getElementById("data").innerHTML = `<table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${productList.map((product, index)=>{
                        return `
                        <tr>
                            <td>${index + 1}</td>                  
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.description}</td>
                        </tr>
                        `;
                    }).join("")}
                </tbody>
                
            </table>`;
    }
    addProduct(renderProductList);
    renderProductList();


}
loadData();


var Pname=document.getElementById('Pname')
var Pprice=document.getElementById('Pprice')
var Pcategory=document.getElementById('Pcategory')
var Pdesc=document.getElementById('Pdesc')
var UbDate=0

var ProductList=[]
if(localStorage.getItem('products')!=null)
{
    ProductList=JSON.parse(localStorage.getItem('products'))
    Display(ProductList)
}
function AddProduct()
{
    if(vallidate()==true)
    {
        if(document.getElementById('btn1').innerHTML=='Add Product')
    {
        var Product={
            Name:Pname.value,
            Price:Pprice.value,
            Category:Pcategory.value,
            Description:Pdesc.value
        }
        ProductList.push(Product)
        localStorage.setItem('products',JSON.stringify(ProductList))
        Display(ProductList)
        Clear()
    }
        else
        {
            UbdatedProduct(UbDate)
            document.getElementById('btn1').innerHTML='Add Product'
            Clear()
        }

    }
    else{
        alert('invallid name')
    }
   
}

function Display(ProductList)
{

    var cartona=``
    for(var i=0;i<ProductList.length;i++)
    {
        cartona+=`   <tr>
     <td>${ProductList[i].Name}</td>
    <td>${ProductList[i].Price}</td>
    <td>${ProductList[i].Category}</td>
    <td>${ProductList[i].Description}</td>
    <td><button class="btn btn-danger" onclick="Delete(${i})">Delete</button></td>
    <td><button class="btn btn-warning" onclick="retrive(${i})">UpDate</button></td>
    </tr>`
    }
    document.getElementById('tablebody').innerHTML=cartona

}
function Clear()
{
       Pname.value=''
       Pprice.value=''
       Pcategory.value=''
       Pdesc.value=''
}
function Delete(index)
{
    ProductList.splice(index,1)
    localStorage.setItem('products',JSON.stringify(ProductList))
    Display(ProductList)
}
function retrive(index)
{
    UbDate=index
    Pname.value=ProductList[index].Name
    Pprice.value=ProductList[index].Price
    Pcategory.value=ProductList[index].Category
    Pdesc.value=ProductList[index].Description
    document.getElementById('btn1').innerHTML='UbDate Product'

}
function UbdatedProduct(UbDate)
{
    var UProduct={
        Name:Pname.value,
        Price:Pprice.value,
        Category:Pcategory.value,
        Description:Pdesc.value
    }
    ProductList.splice(UbDate,1,UProduct)
    localStorage.setItem('products',JSON.stringify(ProductList))
    Display(ProductList)
}


function search1(term)
{ 
    var matched1=[]

    for(var i=0;i<ProductList.length;i++)
    {
       
        if(ProductList[i].Name.toLowerCase().includes(term.toLowerCase())===true)
        {
            matched1.push(ProductList[i])
        }
    }
    Display(matched1)
 }

 function vallidate()
 {
    var regex=/^[a-zA-Z\s]{1,15}$/
    return regex.test(Pname.value)

 }

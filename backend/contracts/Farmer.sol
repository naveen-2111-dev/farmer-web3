// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Farmer {
    struct Product {
        uint256 id;
        string Image;
        string Description;
        uint256 Stock;
        string Title;
        uint256 Price;
        address payable Farmer;
        string TypeOfProduct;
        uint256 StockLeft;
    }

    mapping (uint256 => Product) public products;
    mapping (address => uint256[]) public MyProducts;
    uint256 public productCount = 0;
    uint256 public buyerCount = 0;

    event ProductAdded(uint256 productId, address farmer);
    event ProductBought(uint256 productId, uint256 amount, address buyer);

    function AddProduct(
        string memory _image,
        string memory _Desc,
        uint256 _stock,
        string memory _title,
        uint256 _price,
        string memory _typeofprod
    ) public returns (uint256) {
        productCount++;
        products[productCount] = Product({
            id: productCount,
            Image: _image,
            Description: _Desc,
            Stock: _stock,
            Title: _title,
            Price: _price,
            Farmer: payable(msg.sender),
            TypeOfProduct: _typeofprod,
            StockLeft: _stock
        });
        MyProducts[msg.sender].push(productCount);

        emit ProductAdded(productCount, msg.sender);
        return productCount;
    }

    function Buyer(uint256 _id, uint256 kg) public payable returns (uint256, uint256) {
        Product storage product = products[_id];
        require(_id > 0 && _id <= productCount, "Invalid product ID");
        require(product.StockLeft >= kg, "Not enough stock available");
        uint256 totalPrice = product.Price * kg;
        require(msg.value == totalPrice, "Incorrect amount sent");

        (bool Pay,) = product.Farmer.call{value: msg.value}("");
        require(Pay, "Payment failed");

        product.StockLeft -= kg;
        buyerCount++;

        emit ProductBought(_id, kg, msg.sender);
        return (product.StockLeft, buyerCount);
    }

    function GetAllProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](productCount);
        for (uint256 i = 1; i <= productCount; i++) {
            allProducts[i - 1] = products[i];
        }
        return allProducts;
    }
}

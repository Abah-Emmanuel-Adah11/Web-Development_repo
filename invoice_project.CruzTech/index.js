  function getValue() {

    // initials
      let Issued_number = document.getElementById("Issued-number").value
      console.log(Issued_number)

      let Issued_date = document.getElementById("Issued-date").value
      console.log(Issued_date)

      let customers_id = document.getElementById("customers-id").value
      console.log(customers_id)

        // Summation
      let sub_total = document.getElementById("subtotal").value
      console.log(sub_total)
      
      let discount = document.getElementById("discount").value
      console.log(discount)

      let vat  = document.getElementById("vat").value
      console.log(vat)

      let service_charge = document.getElementById("service-charge").value
      console.log(service_charge)

      let grand_total = document.getElementById("grand-total").value
      console.log(grand_total)

        // product listing
      for(let i = 0; i < 11; i++){
        let product_description = document.querySelectorAll("#product-description")[i].value
        console.log(product_description)

        let unit_price = document.querySelectorAll("#unitClass")[i].value
        console.log(unit_price)

        let qty = document.querySelectorAll("#qty")[i].value
        console.log(qty)

        let total = document.querySelectorAll("#total")[i].value
        console.log(total)
      };
      
  };

  function sendRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", " ", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
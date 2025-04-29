  function getValue() {
    const invoice = {}
    // initials
      let issued_number = document.getElementById("issued-number").value
      invoice.issued_number = issued_number

      let issued_date = document.getElementById("issued-date").value
      invoice.issued_date = issued_date

      let customers_id = document.getElementById("customers-id").value
      invoice.customers_id = customers_id

        // Summation
      let sub_total = document.getElementById("subtotal").value
      invoice.sub_total = sub_total
      
      let discount = document.getElementById("discount").value
      invoice.discount = discount

      let vat  = document.getElementById("vat").value
      invoice.vat = vat

      let service_charge = document.getElementById("service-charge").value
      invoice.service_charge = service_charge

      let grand_total = document.getElementById("grand-total").value
      invoice.grand_total = grand_total

        // product listing(table)
        const items = []
        for(let i = 0; i < 10; i++){
            let invoice_item = document.querySelectorAll(".invoice_item")[i]
            if(invoice_item.children[1].lastChild.value.length < 1){
              continue
            }
            
            const item = {}
            item.product_description = invoice_item.children[1].lastChild.value
            item.unit_price = invoice_item.children[2].lastChild.value
            item.quantity = invoice_item.children[3].lastChild.value
            item.total = invoice_item.children[4].lastChild.value

            items.push(item)
        };
      
        invoice.items = items
      
        const outputHTML = generateOutput(invoice);
        console.log(outputHTML)
        const outputWidow = window.open('', '_blank');
        if(outputWidow){
          console.log(outputWidow)
          outputWidow.document.open()
          outputWidow.document.write(outputHTML)
          outputWidow.document.close()

          outputWidow.history.replaceState(null, '','./output.html')
          outputWidow.onload = function(){
          }
        } else {
          document.write(outputHTML)
          outputWidow.history.replaceState(null, '','./output.html')
        }
  };

function generateOutput(invoice) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>invoice_output</title>

    <!-- Bootstrap style sheet CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <!-- link to the icon to be displayed on the browser tab -->
    <link rel="icon" href="images/Cruz_logo.jpg">

    <!-- link to the stylesheet -->
    <link rel="stylesheet" type="text/css" href="output.css">
</head>
<body>

        <!-- heading section -->
    <section id="heading" class="container-fluid">
        <div class="row">
            <div class="top-heading col-lg-12 col-md-12 col-sm-12">
                <span>
                    <img src="images/Cruz_logo.jpg" alt="Cruz_logo">
                </span>
                <ul class="heading-list">
                    <li><h1>INVOICE</h1></li>
                    <li>Issued Number: INV202504${invoice.issued_number}</li>
                    <li>Issued Date: ${invoice.issued_date}</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- stakeholders section -->
    <section id="stakeholders">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="sender">
                    <p>Invoice To:<br>${invoice.customers_id}</p> 
                </div>
                <div class="reciever">
                    <p>Invoice From:</p>
                    <h2>Cruz tech,</h2>
                    <p> Suit G10, Pathfied Mall, <br> 4th Avenue, Gwarinpa <br> Abuja, Nigeria.</p>
                </div>
            </div>
        </div>
        
    </section>

    <!-- Product listing section -->
    <section id="product-list">
        <div class="table-container">
            <table class="table-class">
                <thead>
                    <tr>
                        <th class="table-head"> No</th>
                        <th>PRODUCT DESCRIPTION</th>
                        <th>UNIT PRICE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                ${
                  invoice.items ? invoice.items.map((item,i) => `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${item.product_description}</td>
                        <td>${item.unit_price}</td>
                        <td>${item.quantity}</td>
                        <td class="last-column">${item.total}</td>
                    </tr>
                  `) : `
                    <tr>
                        <td></td>
                    </tr>
                  `
                }
                </tbody>
            </table> 
        </div>
          <ul class="total total-heading">
              <li><b>SUBTOTAL:</b><br>${invoice.sub_total}</li>
              <li><b>DISCOUNT:</b><br>${invoice.discount}</li>
              <li><b>VAT:</b><br>${invoice.vat}</li>
              <li><b>SERVICE CHARGE:</b><br>${invoice.service_charge}</li>
              <li><b>TOTAL DUE:</b>${invoice.grand_total}</li>
          </ul>
    </section>

    <!-- Payment section -->
    <section id="payment">
        <div class="row">
            <div class="payment-div col-lg-12 col-md-12 offset-md-0">
                <h3>Payment Method:</h3>
                <ul class="recipient">
                    <li><b>Account No:</b> 0602285440</li>
                    <li><b>Account Name:</b> Cruiztopia integrated services Ltd</li>
                    <li><b>Bank:</b> GTB</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Terms and conditions -->
    <section id="terms">
            <div>
                <h3><b>Terms & Conditions</b></h3>
                <p>Please settle the invoice by paying into the account number provided. Kindly share<br>the payment reciept with us upon completion</p>  
            </div>
    </section>

    <section id="appreciation">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h2><spam class="break-after">Thanks For Your</spam> <spam class="break-after">Partronage</spam></h2>
                <p class="signature">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;<br>
                    Authorised Signature</p>
            </div>
        </div>
    </section>

    <!-- footer section -->
    <section id="footer">
        <div class="row">
            <div class="col-lg-12 col-md-5 col-sm-5 clip1">
                <h3>Contact US:</h3>
                <p>+2349065465539</p>
                <p>www.cruztech.com.ng</p>
                <p>Cruztechnologies1@gmail.com</p>
                <p>Suit G10, Pathfied Mall, 4th Avenue, Gwarinpa Abuja, Nigeria</p>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-12 clip2">
            </div>
        </div>    
    </section>
    <!-- <hr>
    <section id="button">
        <button onclick="getValue()" class="btn btn-custom">Generate Invoice</button>
    </section> -->
    
    <!-- Bootstrap javaScript CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="./index.js" charset="UTF-8"></script>
</body>
</html>
    `
};
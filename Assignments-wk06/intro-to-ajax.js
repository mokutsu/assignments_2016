


<pre id='products'></pre>
<script type = 'text/javascript'>
  function display_products(response) {
    $('#products').text(response);
  }
  $.get('http://www.lcboapi.com/products.json', display_products);
  </script> 

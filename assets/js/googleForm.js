function postToGoogle() {
    var field1 = $("input[type='text'][name='nama']").val();
    var field2 = $("input[type='email'][name='alamatEmail']").val();
    var field3 = $("input[type='text'][name='alamat']").val();
    var field4 = $("[name='pesan']").val();
    
    
    $.ajax({
      url: "https://docs.google.com/forms/d/1uTRWX5ebgeQ3EqfY0wI2RaIg5_ftw8Djy9XbqGe0THk/formResponse",
      data: {
        "entry.1675978668": field1,
        "entry.1136059681": field2,
        "entry.278847121": field3,
        "entry.975311369": field4,
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function() {
          //Success message
          alert("Data anda sudah diterima. Terima Kasih !");
          $("input[type='text'][name='nama']").val('');
          $("input[type='email'][name='alamatEmail']").val('');
          $("input[type='text'][name='alamat']").val('');
          $("[name='pesan']").val('');
         
         
        },
        200: function() {
          //Success Message
          alert("Data anda sudah diterima. Terima Kasih !");
          
        }
      }
    });
  }
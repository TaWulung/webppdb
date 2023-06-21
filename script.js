$(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault(); // Mencegah pengiriman formulir
  
      var formData = $(this).serialize(); // Mengambil data formulir
  
      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbznrBfXiQBGuKomAaWoCpBTaX7hOwiygXqUVblhDzfyQsoHfvSdL3EKc9ytmUVFvxHR/exec',
        method: 'POST',
        data: formData,
        success: function(response) {
          console.log('Formulir berhasil dikirim');
          // Handle respons sukses jika diperlukan
  
          // Menghapus nilai-nilai dalam elemen formulir
          $('#myForm')[0].reset();
        },
        error: function(xhr, status, error) {
          console.error('Error mengirim formulir:', error);
          // Handle respons error jika diperlukan
        }
      });
    });
  });
  
$(document).ready(function() {
    $('#myForm').submit(function(e) {
      e.preventDefault(); // Mencegah pengiriman formulir
  
      var formData = $(this).serialize(); // Mengambil data formulir
  
      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbx2PXqKL11N5X0XorN6F1nk2IBVSbT8UpnpnFxzWH33AGhcilIXWEW0_uPTR4DjROIh/exec',
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

// Menggunakan window.location.href untuk mengalihkan halaman
function redirectPage(url) {
    window.location.href = url;
  }
  
  // Contoh penggunaan:
  // Mengalihkan pengguna ke halaman yang sama setelah menerima respon dari skrip
  var response = '{"result": "success", "row": 1}'; // Contoh respon dari skrip (dalam format JSON)
  var jsonResponse = JSON.parse(response);
  
  if (jsonResponse.result === 'success') {
    // Mengalihkan ke halaman yang sama atau halaman tujuan lain
    redirectPage('form.html');
  } else {
    // Mengalihkan ke halaman error atau halaman tujuan lain
    redirectPage('form.html');
  }
  
  
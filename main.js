// ===== تبديل القائمة في الجوال =====
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var headerInner = document.querySelector('.header-inner');
  if (toggle && headerInner) {
    toggle.addEventListener('click', function () {
      headerInner.classList.toggle('open');
    });
  }

  // ===== نموذج طلب عرض السعر: يرسل عبر واتساب =====
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var city = form.querySelector('#city').value;
      var service = form.querySelector('#service').value;
      var details = form.querySelector('#details').value.trim();

      if (!name || !phone) {
        alert('الرجاء تعبئة الاسم ورقم الجوال على الأقل.');
        return;
      }

      var lines = [
        'طلب عرض سعر جديد من موقع الرهوان السريع',
        'الاسم: ' + name,
        'الجوال: ' + phone,
        city ? 'المدينة/المنطقة: ' + city : '',
        service ? 'الخدمة المطلوبة: ' + service : '',
        details ? 'تفاصيل إضافية: ' + details : ''
      ].filter(Boolean).join('\n');

      var waNumber = '966552466534';
      var url = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(lines);
      window.open(url, '_blank');
    });
  }
});

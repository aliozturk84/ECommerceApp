# ECommerceApp
E-Commerce App - Radore Full-Stack Bootcamp

Geliştirilen kısımlar

1-Projenin orjinalinde .Web MVC tarafında Product'a tıklandığında sayfa açılmıyordu, hata veriyordu. 
+ _Layout.cshtml'de IsInRole vererek ve Radore.Web.Areas.Customer.Controllers içine CustomerProductController adında Controller yazarak hatayı önlemiş oldum şu an sorunsuz çalışıyor.
![Genel Görünüm](images/1_genelgorunum.JPG)
![Product](images/2_product.JPG)

2-react.js tarafında login olurken bazı validasyon eksikleri vardı, yeni validasyonlar yazdım. Artık ibr@ibr.com adlı kullanıcın 'Password123!' ile giriş yapması gerek.
![Geçersiz Email](images/3_gecersizemail.JPG)
![Geçersiz Şifre](images/4_gecersizsifre.JPG)

3-Radore.Services.ChatAPI adında yeni bir mikroservis yazdım daha sonra react.js tarafında bu servisi çektim ve bu sayede signalR ile anlık mesajlaşmayı sağlayan bir Canlı Destek hizmetim oldu.
![Chat App Invalid](images/5_chatappinvalid.JPG)
![Chat App Valid](images/6_chatappvalid.JPG)
![Canlı Sohbet](images/7_canlısohbet.JPG)


4-Mikroservis tarafında olan ürünleri çekerek react.js anasayfasının YENİ ÜRÜNLER adı altında ki 5'e ayrılmış ürün alanlarının hepsine giydirdim.
![Yeni Ürünler](images/8_yeniurunler.JPG)
![Trend](images/9_trend.JPG)
![En Çok Satan](images/10_encoksatan.JPG)
![Öne Çıkanlar](images/11_onecikanlar.JPG)
![Satışta](images/12_satısta.JPG)

5-Aynı zamanda YENİ ÜRÜNLER'de ki tüm ürünlerin detay sayfaları da mikroservisten çekiyor. Detay sayfasındaki tüm ürünlerede detay ve açıklama gibi düzenlemeler yaptım.
![Samose Detay](images/13_samosadetay.JPG)
![Paneer Detay](images/14_paneerdetay.JPG)
![Pav Bhaji Detay](images/15_pavbhajidetay.JPG)
![Sweet Pie Detay](images/16_sweetpiedetay.JPG)

6-Unit test yazmaya çalıştım fakat bir yerde ufak bir hata aldım.
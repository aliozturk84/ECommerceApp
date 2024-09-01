# ECommerceApp
E-Commerce App - Radore Full-Stack Bootcamp

Geliştirilen kısımlar

1-Projenin orjinalinde .Web MVC tarafında Product'a tıklandığında sayfa açılmıyordu, hata veriyordu. 
+ _Layout.cshtml'de IsInRole vererek ve Radore.Web.Areas.Customer.Controllers içine CustomerProductController adında Controller yazarak hatayı önlemiş oldum şu an sorunsuz çalışıyor.
![Genel Görünüm](/images/1_genelgorunum.jpg)
![Product](/images/2_product.jpg)

2-react.js tarafında login olurken bazı validasyon eksikleri vardı, yeni validasyonlar yazdım. Artık ibr@ibr.com adlı kullanıcın 'Password123!' ile giriş yapması gerek.
![Geçersiz Email](/images/3_gecersizemail.jpg)
![Geçersiz Şifre](/images/4_gecersizsifre.jpg)

3-Radore.Services.ChatAPI adında yeni bir mikroservis yazdım daha sonra react.js tarafında bu servisi çektim ve bu sayede signalR ile anlık mesajlaşmayı sağlayan bir Canlı Destek hizmetim oldu.
![Chat App Invalid](/images/5_chatappinvalid.jpg)
![Chat App Valid](/images/6_chatappvalid.jpg)
![Canlı Sohbet](/images/7_canlısohbet.jpg)


4-Mikroservis tarafında olan ürünleri çekerek react.js anasayfasının YENİ ÜRÜNLER adı altında ki 5'e ayrılmış ürün alanlarının hepsine giydirdim.
![Yeni Ürünler](/images/8_yeniurunler.jpg)
![Trend](/images/9_trend.jpg)
![En Çok Satan](/images/10_encoksatan.jpg)
![Öne Çıkanlar](/images/11_onecikanlar.jpg)
![Satışta](/images/12_satısta.jpg)

5-Aynı zamanda YENİ ÜRÜNLER'de ki tüm ürünlerin detay sayfaları da mikroservisten çekiyor. Detay sayfasındaki tüm ürünlerede detay ve açıklama gibi düzenlemeler yaptım.
![Samose Detay](/images/13_samosadetay.jpg)
![Paneer Detay](/images/14_paneerdetay.jpg)
![Pav Bhaji Detay](/images/15_pavbhajidetay.jpg)
![Sweet Pie Detay](/images/16_sweetpiedetay.jpg)

6-Unit test yazmaya çalıştım fakat bir yerde ufak bir hata aldım.
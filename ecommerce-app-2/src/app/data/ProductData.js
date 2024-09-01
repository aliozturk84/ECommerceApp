// fashion img 
import img1 from '../../assets/img/product-image/product1.png'
import img2 from '../../assets/img/product-image/product2.png'
import img3 from '../../assets/img/product-image/product3.png'
import img4 from '../../assets/img/product-image/product4.png'
import img5 from '../../assets/img/product-image/product5.png'
import img6 from '../../assets/img/product-image/product6.png'
import img7 from '../../assets/img/product-image/product7.png'
import img8 from '../../assets/img/product-image/product8.png'
import img9 from '../../assets/img/product-image/product9.png'
import img10 from '../../assets/img/product-image/product10.png'

export const ProductData = [
    {
        id: 1,
        labels: "Trending",
        category: "fashion",
        img: img1,
        hover_img: img10,
        title: "Samosa",
        price: 38,
        description: `Magnolia tatlısı, hafif ve kremamsı bir dokuya sahip, pratik ve lezzetli bir tatlıdır. Genellikle vanilya pudingi, bisküvi ve taze meyvelerle hazırlanır. Vanilya pudingi kreması, taze meyvelerle buluşturulduğunda tatlıya zengin bir aroma katar. Üzerine genellikle çikolata rendesi veya meyve dilimleri ile süslenir. Magnolia tatlısı, soğuk servis edildiğinde en lezzetli halini alır ve çeşitli tatlı menülerinde popüler bir tercihtir. Hem pratik hazırlanışı hem de hafifliği sayesinde tatlı krizlerinde ideal bir seçenektir.`,
        rating: {
            rate: 3.9,
            count: 30
        },
        color: [
            {
                color: "green",
                img: img8,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img7,
                quantity: 1,
            },
        ]
    },
    {
        id: 2,
        labels: "45% OFF",
        category: "fashion",
        img: img2,
        hover_img: img9,
        title: "Paneer Tikka",
        price: 72,
        description: `Paneer Tikka, Hindistan mutfağının popüler ve lezzetli bir aperatifidir. Küp şeklinde kesilmiş paneer (Hint peyniri), yoğurt ve baharatlarla marine edildikten sonra ızgara veya fırında pişirilir. Marinasyon, genellikle yoğurt, zerdeçal, kırmızı biber, garam masala, kimyon ve kişniş gibi baharatları içerir. Bu baharat karışımı, paneere zengin ve aromatik bir tat kazandırır. Pişirme sürecinde paneer, dışı çıtır, içi ise yumuşak ve sulu bir dokuya sahip olur. Genellikle yeşil chutney (koriander veya nane sosu) ve limon dilimleri ile birlikte servis edilir. Paneer Tikka, hem başlangıç olarak hem de ana yemek olarak tüketilebilecek mükemmel bir seçenektir.`,
        rating: {
            rate: 3.3,
            count: 80
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img10,
                quantity: 1,
            },
            {
                color: "blue",
                img: img5,
                quantity: 1,
            },
        ]
    },
    {
        id: 3,
        labels: "50% OFF",
        category: "fashion",
        img: img3,
        hover_img: img7,
        title: "Sweet Pie",
        price: 34,
        description: `Sweet Pie, çeşitli tatlı malzemeleriyle hazırlanan, genellikle hamur tabanı ve üstüyle kaplanmış bir tatlı çeşididir. İç harcı, meyveler, şeker, baharatlar ve bazen kremalı veya sütlü karışımlarla hazırlanır. Popüler çeşitleri arasında elma, kiraz, böğürtlen ve tatlı patates gibi meyveler bulunur. Hamur tabanı, çıtır çıtır bir doku sağlayarak tatlının lezzetini tamamlar. Üzerine genellikle streusel (şeker ve tereyağı karışımı) veya hafif bir şeker tabakası eklenir. Sweet Pie, genellikle sıcak servis edilir ve yanında bir top vanilyalı dondurma veya hafif bir krema ile mükemmel bir uyum sağlar. Hem özel günlerde hem de günlük tatlı ihtiyacını karşılamak için ideal bir tercihtir.`,
        rating: {
            rate: 4.9,
            count: 156
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img7,
                quantity: 1,
            },
            {
                color: "blue",
                img: img8,
                quantity: 1,
            },
        ]
    },
    {
        id: 4,
        labels: "Hot",
        category: "fashion",
        img: img4,
        hover_img: img6,
        title: "Pav Bhaji",
        price: 43,
        description: `Ne kadar manzaraya benzese de güneşin batışını konu alan özel bir tatlıdır.`,
        rating: {
            rate: 1.9,
            count: 190
        },
        color: [
            {
                color: "green",
                img: img3,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img5,
                quantity: 1,
            },
        ]
    }
]
export const carParts = [
  {
    id: "1",
    name: "Motor Bloğu",
    price: 25000,
    image: "https://www.webtekno.com/images/editor/default/0003/09/5ab868281a6587e178b34fb3afc345013594aaf6.jpeg",
    category: "Motor",
    description: "Motor bloğu, arabanın motorunun ana gövdesidir ve genellikle dökme demir ya da alüminyumdan yapılır. Silindirler, pistonlar ve krank mili gibi motorun önemli parçalarını barındırır.",
    specifications: [
      "Silindir Sayısı: 4",
      "Hacim: 2.0L",
      "Malzeme: Alüminyum alaşım",
      "Maksimum Güç: 245 HP",
      "Maksimum Tork: 370 Nm"
    ],
    location: "Motor bölmesinin merkezinde bulunur",
    function: "Motorun temel yapısını oluşturur ve içinde pistonların hareket ettiği silindirleri barındırır",
    maintenance: "Her 100.000 km'de kontrol edilmeli, yağ kaçağı ve çatlak kontrolü yapılmalıdır"
  },
  {
    id: "2",
    name: "Fren Diski",
    price: 2250,
    image: "https://www.okuhaber.com/wp-content/uploads/2022/06/fren-diski-260x160.jpg",
    category: "Fren Sistemi",
    description: "Fren diski, araçların tekerleklerine bağlı olarak dönen ve frenleme sırasında sürtünme yoluyla aracı yavaşlatan veya durduran metal parçalardır.",
    specifications: [
      "Çap: 320mm",
      "Kalınlık: 28mm",
      "Havalandırmalı yapı",
      "Karbon içerikli",
      "Yüksek ısı direnci"
    ],
    location: "Ön ve arka tekerleklerin arkasında bulunur",
    function: "Fren balataları ile temas ederek sürtünme yoluyla aracın yavaşlamasını veya durmasını sağlar",
    maintenance: "Her 30.000 km'de kontrol edilmeli, aşınma durumuna göre değiştirilmelidir"
  },
  {
    id: "3",
    name: "Alternatör",
    price: 3500,
    image: "https://www.garajsepeti.com/Data/Blog/1000/1000-alternatoru-taniyin-alternatorde-meydana-gelen-arizalar__7256918.Jpeg",
    category: "Elektrik Sistemi",
    description: "Alternatör, motorun mekanik enerjisini elektrik enerjisine çeviren ve aracın elektrik sistemini besleyen önemli bir parçadır.",
    specifications: [
      "Voltaj: 12V",
      "Amper: 120A",
      "Devir: 2000-5000 rpm",
      "Verimlilik: %75",
      "Soğutma: Hava soğutmalı"
    ],
    location: "Motor bloğunun yan tarafında, kayış sistemi ile bağlantılı",
    function: "Aracın elektrik ihtiyacını karşılar ve aküyü şarj eder",
    maintenance: "Her 60.000 km'de kayış ve rulman kontrolü yapılmalıdır"
  },
  {
    id: "4",
    name: "Şanzıman",
    price: 15000,
    image: "https://www.garajsepeti.com/Data/Blog/1000/1000-sanziman-nedir-sanziman-cesitleri-nelerdir__7256919.Jpeg",
    category: "Güç Aktarma",
    description: "Şanzıman, motordan gelen gücü tekerleklere ileten ve vites değişimini sağlayan kompleks bir sistemdir.",
    specifications: [
      "Vites Sayısı: 6 ileri, 1 geri",
      "Tip: Manuel/Otomatik",
      "Yağ Kapasitesi: 4.5L",
      "Maksimum Tork Kapasitesi: 450 Nm",
      "Senkromeç Sistemi: Var"
    ],
    location: "Motor bloğunun arkasında, güç aktarma sisteminin başlangıcında",
    function: "Motor gücünü tekerleklere iletir ve farklı hız/güç oranları sağlar",
    maintenance: "Her 50.000 km'de yağ değişimi, her 100.000 km'de genel kontrol"
  },
  {
    id: "5",
    name: "Süspansiyon",
    price: 4500,
    image: "https://www.garajsepeti.com/Data/Blog/1000/1000-suspensiyon-sistemi-nedir-suspensiyon-cesitleri-nelerdir__7256920.Jpeg",
    category: "Şasi",
    description: "Süspansiyon sistemi, aracın yol tutuşunu ve sürüş konforunu sağlayan yay ve amortisör sistemlerinin bütünüdür.",
    specifications: [
      "Tip: MacPherson",
      "Yay Sertliği: 35 N/mm",
      "Amortisör Tipi: Gaz basınçlı",
      "Hareket Mesafesi: 180mm",
      "Ağırlık Kapasitesi: 1200 kg"
    ],
    location: "Aracın dört köşesinde, tekerlekler ile şasi arasında",
    function: "Yol düzensizliklerini absorbe eder ve sürüş konforunu artırır",
    maintenance: "Her 60.000 km'de amortisör kontrolü, gerektiğinde değişim"
  },
  {
    id: "6",
    name: "Turbo",
    price: 12000,
    image: "https://st3.myideasoft.com/idea/en/22/myassets/products/580/whatsapp-image-2023-03-16-at-15-01-02.jpeg",
    category: "Motor",
    description: "Turbo, egzoz gazlarının enerjisini kullanarak motora daha fazla hava göndererek performansı artıran sistemdir.",
    specifications: [
      "Maksimum Boost: 1.5 bar",
      "Türbin Çapı: 52mm",
      "Kompresör Çapı: 48mm",
      "Wastegate: Elektronik kontrollü",
      "Maksimum Devir: 150.000 rpm"
    ],
    location: "Motor bloğunun yanında, egzoz manifoldu yakınında",
    function: "Motor performansını ve verimliliğini artırır",
    maintenance: "Her 50.000 km'de yağ kaçağı ve şaft kontrolü"
  },
  {
    id: "7",
    name: "Radyatör",
    price: 2800,
    image: "https://www.garajsepeti.com/Data/Blog/1000/1000-radyator-nedir-radyator-cesitleri-nelerdir__7256921.Jpeg",
    category: "Soğutma Sistemi",
    description: "Radyatör, motor soğutma sıvısını soğutan ve motorun optimum sıcaklıkta çalışmasını sağlayan ısı eşanjörüdür.",
    specifications: [
      "Boyutlar: 650x400x32mm",
      "Malzeme: Alüminyum",
      "Soğutma Kapasitesi: 35 kW",
      "Fan Sayısı: 2",
      "Sıvı Kapasitesi: 7L"
    ],
    location: "Motor bölmesinin ön kısmında",
    function: "Motor soğutma sıvısını soğutarak motorun aşırı ısınmasını önler",
    maintenance: "Her 2 yılda bir soğutma sıvısı değişimi, sızıntı kontrolü"
  },
  {
    id: "8",
    name: "Yakıt Enjektörü",
    price: 1800,
    image: "https://www.garajsepeti.com/Data/Blog/1000/1000-enjektorler-nedir-enjektorlerin-gorevi-nedir__7256922.Jpeg",
    category: "Yakıt Sistemi",
    description: "Yakıt enjektörleri, motora hassas miktarda yakıt püskürten elektronik kontrollü valflerdir.",
    specifications: [
      "Püskürtme Basıncı: 200 bar",
      "Delik Sayısı: 6",
      "Püskürtme Açısı: 15°",
      "Tepki Süresi: 0.1ms",
      "Akış Oranı: 250cc/min"
    ],
    location: "Silindir kafasında, her silindirin yanında",
    function: "Motora hassas miktarda yakıt püskürterek verimli yanma sağlar",
    maintenance: "Her 60.000 km'de temizlik, gerektiğinde değişim"
  },
  {
    id: "9",
    name: "Katalitik Konvertör",
    price: 5500,
    image: "https://www.garajsepeti.com/Data/Blog/1000/1000-katalitik-konvertor-nedir-katalitik-konvertor-ne-ise-yarar__7256923.Jpeg",
    category: "Egzoz Sistemi",
    description: "Katalitik konvertör, egzoz gazlarındaki zararlı emisyonları daha az zararlı bileşenlere dönüştüren emisyon kontrol cihazıdır.",
    specifications: [
      "Tip: 3 yollu katalizör",
      "Malzeme: Seramik/Metal",
      "Dönüşüm Verimi: %95",
      "Çalışma Sıcaklığı: 300-600°C",
      "Euro Standardı: Euro 6"
    ],
    location: "Egzoz sisteminde, motor çıkışından sonra",
    function: "Zararlı egzoz emisyonlarını azaltır ve çevre kirliliğini önler",
    maintenance: "Her 100.000 km'de verimlilik kontrolü"
  },
  {
    id: "10",
    name: "ABS Sensörü",
    price: 750,
    image: "https://www.garajsepeti.com/Data/Blog/1000/1000-abs-sensoru-nedir-abs-sensorunun-gorevi-nedir__7256924.Jpeg",
    category: "Fren Sistemi",
    description: "ABS sensörleri, tekerleklerin dönüş hızını ölçerek kilitlenmeyi önleyen fren sistemine bilgi sağlar.",
    specifications: [
      "Tip: Manyetik",
      "Voltaj: 12V",
      "Hassasiyet: 0.1 km/s",
      "Tepki Süresi: 1ms",
      "Çalışma Sıcaklığı: -40 to 150°C"
    ],
    location: "Her tekerleğin yakınında, fren diski ile entegre",
    function: "Tekerlek hızını ölçerek ABS sisteminin çalışmasını sağlar",
    maintenance: "Her 50.000 km'de sensör temizliği ve kalibrasyon kontrolü"
  }
];
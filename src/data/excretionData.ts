export interface OrganPart {
  name: string;
  role: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface ExcretionMechanismStep {
  stepNumber: number;
  title: string;
  location: string;
  input: string;
  process: string;
  output: string;
  analogy: string; // Analogi mudah dipahami anak SMP
  keyDetails: string[];
  hotspotCoords?: { xPercent: number; yPercent: number }; // For nephron image
}

export interface Disease {
  name: string;
  alias?: string;
  category: 'Infeksi' | 'Gaya Hidup' | 'Degeneratif' | 'Struktural/Bawaan';
  cause: string;
  symptoms: string[];
  prevention: string;
  severity: 'Ringan' | 'Sedang' | 'Serius/Kritis';
}

export interface ExcretionOrgan {
  id: 'ginjal' | 'kulit' | 'paru_paru' | 'hati';
  name: string;
  latinName: string;
  roleSummary: string;
  image: string;
  accentColor: string;
  badgeBg: string;
  mainWaste: string;
  wasteExplanation: {
    title: string;
    description: string;
    composition: string[];
    origin: string;
    dangerIfRetained: string;
  };
  parts: OrganPart[];
  functions: {
    primaryExcretory: string[];
    secondaryPhysiological: string[];
  };
  mechanism: {
    summary: string;
    smpConcept: string; // Penjelasan bahasa sederhana anak SMP
    diagramImage?: string; // Khusus ginjal ada diagram proses nefron
    steps: ExcretionMechanismStep[];
  };
  diseases: Disease[];
  funFacts: string[];
  healthyTips: string[];
}

export const EXCRETION_ORGANS: ExcretionOrgan[] = [
  {
    id: 'ginjal',
    name: 'Ginjal',
    latinName: 'Ren',
    roleSummary: 'Organ ekskresi utama yang bertugas menyaring darah dan membuang sisa metabolisme dalam bentuk urine untuk menjaga keseimbangan cairan tubuh.',
    image: '/src/assets/images/ginjal_anatomi_bersih_1792292296466.jpg',
    accentColor: '#0284c7',
    badgeBg: '#e0f2fe',
    mainWaste: 'Urine',
    wasteExplanation: {
      title: 'Zat Sisa: Urine',
      description: 'Cairan sisa metabolisme yang dihasilkan melalui proses penyaringan darah oleh nefron ginjal.',
      composition: [
        'Air (sekitar 95% volume urine)',
        'Urea (sisa perombakan protein tubuh)',
        'Garam-garam mineral (terutama garam NaCl)',
        'Asam urat dan kreatinin (limbah otot)',
        'Zat warna empedu (urobilin yang memberi warna kuning khas urine)',
      ],
      origin: 'Berasal dari plasma darah yang disaring oleh jutaan nefron ginjal secara terus-menerus.',
      dangerIfRetained: 'Jika urine tidak dikeluarkan, zat racun seperti urea akan menumpuk dalam darah (kondisi Uremia), menyebabkan keracunan tubuh, mual hebat, kejang, dan gagal ginjal.',
    },
    parts: [
      {
        name: 'Korteks Ginjal (Kulit Ginjal)',
        role: 'Lapisan luar tempat jutaan badan Malpighi (Glomerulus dan Kapsul Bowman) berada.',
        description: 'Merupakan lapisan terluar ginjal tempat terjadinya tahap pertama pembentukan urine, yaitu filtrasi (penyaringan) darah.',
        xPercent: 34,
        yPercent: 28,
      },
      {
        name: 'Medula Ginjal (Sumsum Ginjal)',
        role: 'Lapisan tengah yang tersusun atas piramida renalis dan saluran tubulus.',
        description: 'Memuat lengkung Henle dan tubulus kolektivus. Berperan penting dalam penyerapan kembali air (reabsorpsi) serta pemekatan urine.',
        xPercent: 42,
        yPercent: 46,
      },
      {
        name: 'Pelvis Renalis (Rongga Ginjal)',
        role: 'Rongga penampung urine sementara sebelum disalurkan ke ureter.',
        description: 'Berbentuk seperti corong yang mengumpulkan urine sesungguhnya yang dialirkan dari seluruh saluran tubulus kolektivus.',
        xPercent: 50,
        yPercent: 48,
      },
      {
        name: 'Arteri dan Vena Renalis',
        role: 'Pembuluh pembawa darah masuk ke ginjal (arteri) dan pembawa darah bersih keluar (vena).',
        description: 'Arteri renalis membawa darah kotor dari tubuh menuju ginjal, sedangkan vena renalis mengalirkan darah yang telah bersih kembali ke jantung.',
        xPercent: 65,
        yPercent: 47,
      },
      {
        name: 'Ureter',
        role: 'Saluran yang mengalirkan urine dari rongga ginjal menuju kandung kemih.',
        description: 'Pipa berotot yang mendorong urine dengan gerakan peristaltik menuju vesika urinaria (kandung kemih).',
        xPercent: 62,
        yPercent: 82,
      },
    ],
    functions: {
      primaryExcretory: [
        'Mengekskresikan urine sebagai media pembuangan sisa metabolisme tubuh.',
        'Menyaring zat-zat racun, urea, kelebihan mineral, dan sisa obat-obatan dari dalam darah.',
      ],
      secondaryPhysiological: [
        'Osmoregulasi: Menjaga keseimbangan kadar air dan kepekatan cairan tubuh.',
        'Mengatur keseimbangan derajat keasaman (pH) darah agar tetap stabil.',
        'Menghasilkan hormon eritropoietin untuk merangsang pembuatan sel darah merah.',
        'Menghasilkan enzim renin untuk mengontrol tekanan darah.',
      ],
    },
    mechanism: {
      summary: 'Proses pembentukan urine pada ginjal berlangsung melalui 3 tahapan berurutan pada Nefron: Filtrasi → Reabsorpsi → Augmentasi.',
      smpConcept: 'Bayangkan nefron ginjal seperti pabrik pengolah air: Mula-mula disaring kasar (Filtrasi), lalu barang-barang berharga yang ikut lolos diambil kembali (Reabsorpsi), dan terakhir sampah-sampah sisa tambahan dimasukkan ke saluran pembuangan (Augmentasi) hingga menjadi urine siap dikeluarkan.',
      diagramImage: '/src/assets/images/tahap_pembentukan_urine_1792293180334.jpg',
      steps: [
        {
          stepNumber: 1,
          title: 'Filtrasi (Penyaringan)',
          location: 'Glomerulus & Kapsul Bowman (Badan Malpighi di Korteks)',
          input: 'Darah dari pembuluh arteri yang membawa sel darah, protein, air, glukosa, asam amino, garam, dan urea.',
          process: 'Darah disaring bertekanan tinggi di anyaman kapiler Glomerulus. Sel-sel darah dan protein berukuran besar tidak bisa lolos saringan dan tetap tinggal di darah. Zat-zat kecil lainnya lolos masuk ke Kapsul Bowman.',
          output: 'Urine Primer (Filtrat Glomerulus) yang berisi: air, glukosa, asam amino, garam mineral, dan urea (tidak ada sel darah & protein).',
          analogy: 'Ibarat menyaring teh seduh menggunakan saringan halus: air teh lolos ke gelas (urine primer), sedangkan daun ampas teh tertahan di atas saringan (sel darah & protein).',
          keyDetails: [
            'Jika pada tes urine ditemukan protein, berarti Glomerulus mengalami kerusakan (Penyakit Albuminuria).',
            'Volume urine primer mencapai sekitar 180 liter per hari, tetapi hampir seluruhnya diserap kembali!',
          ],
          hotspotCoords: { xPercent: 27, yPercent: 24 },
        },
        {
          stepNumber: 2,
          title: 'Reabsorpsi (Penyerapan Kembali)',
          location: 'Tubulus Kontortus Proksimal (TKP) & Lengkung Henle di Medula',
          input: 'Urine primer yang masih banyak mengandung zat berguna bagi tubuh.',
          process: 'Tubuh kita sangat hemat! Di saluran TKP, seluruh zat berharga (100% glukosa dan asam amino) serta sebagian besar air dan ion garam diserap kembali masuk ke pembuluh darah di sekitarnya.',
          output: 'Urine Sekunder (Filtrat Tubulus) yang berisi: air, garam mineral, urea, dan zat warna empedu (sudah TIDAK ada glukosa dan asam amino).',
          analogy: 'Ibarat merapikan barang yang mau dibuang: sebelum dibuang ke tong sampah, barang berharga yang masih bisa dipakai (glukosa & asam amino) diambil kembali.',
          keyDetails: [
            'Jika di urine akhir seseorang ditemukan glukosa, berarti tahap reabsorpsi di TKP terganggu atau gula darahnya terlalu tinggi (Penyakit Diabetes Melitus / Kencing Manis).',
          ],
          hotspotCoords: { xPercent: 41, yPercent: 32 },
        },
        {
          stepNumber: 3,
          title: 'Augmentasi (Pengeluaran / Penambahan Zat Sisa)',
          location: 'Tubulus Kontortus Distal (TKD) hingga Tubulus Kolektivus',
          input: 'Urine sekunder dari lengkung Henle.',
          process: 'Darah membuang sisa-sisa racun tambahan yang tidak dibutuhkan tubuh lagi (seperti sisa obat, amonia, dan kelebihan ion hidrogen) ke dalam saluran tubulus. Di sini juga terjadi pengaturan kadar air terakhir oleh hormon ADH.',
          output: 'Urine Sebenarnya (Urine Final) yang siap dialirkan ke rongga ginjal (pelvis renalis), lalu menuju kantung kemih untuk dikeluarkan saat buang air kecil.',
          analogy: 'Ibarat melemparkan sampah sisa terakhir ke dalam kantong sampah sebelum diikat dan dibawa keluar rumah.',
          keyDetails: [
            'Hormon Antidiuretik (ADH) mengatur seberapa banyak air yang diserap kembali. Jika kita kurang minum, ADH tinggi sehingga urine yang keluar sedikit dan berwarna pekat.',
          ],
          hotspotCoords: { xPercent: 57, yPercent: 25 },
        },
      ],
    },
    diseases: [
      {
        name: 'Batu Ginjal (Nefrolitiasis)',
        alias: 'Kencing Batu',
        category: 'Gaya Hidup',
        cause: 'Pengendapan garam kalsium atau asam urat akibat kurang minum air putih dan kebiasaan sering menahan buang air kecil.',
        symptoms: ['Nyeri hebat di pinggang', 'Rasa perih menyengat saat buang air kecil', 'Urine keruh atau berdarah'],
        prevention: 'Rutin minum air putih minimal 2 liter per hari, batasi makanan tinggi garam, dan jangan pernah menahan kencing.',
        severity: 'Sedang',
      },
      {
        name: 'Gagal Ginjal',
        alias: 'Kerusakan Fungsi Ginjal',
        category: 'Degeneratif',
        cause: 'Kerusakan nefron bertahap akibat tekanan darah tinggi menahun atau diabetes yang tidak terkontrol.',
        symptoms: ['Pembengkakan kaki dan kelopak mata (edema)', 'Jumlah urine menurun drastis', 'Tubuh lemas karena racun urea menumpuk di darah'],
        prevention: 'Kontrol tekanan darah dan gula darah, jaga pola makan sehat, dan hindari konsumsi obat tanpa petunjuk dokter.',
        severity: 'Serius/Kritis',
      },
      {
        name: 'Albuminuria',
        alias: 'Kebocoran Protein',
        category: 'Struktural/Bawaan',
        cause: 'Kerusakan pada saringan Glomerulus sehingga protein darah (albumin) bocor masuk ke urine.',
        symptoms: ['Urine berbusa atau berbuih tebal secara terus-menerus', 'Pembengkakan pada tubuh'],
        prevention: 'Jaga pola makan seimbang dan kurangi asupan garam berlebih.',
        severity: 'Sedang',
      },
      {
        name: 'Diabetes Insipidus',
        alias: 'Penyakit Kencing Berlebih',
        category: 'Struktural/Bawaan',
        cause: 'Kekurangan hormon Antidiuretik (ADH) dari otak sehingga ginjal tidak bisa menyerap kembali air.',
        symptoms: ['Sangat sering kencing dalam jumlah luar biasa banyak (10 - 20 liter per hari)', 'Urine sangat bening', 'Rasa haus yang sangat hebat'],
        prevention: 'Pemeriksaan ke dokter spesialis untuk terapi hormon pengganti ADH.',
        severity: 'Sedang',
      },
    ],
    funFacts: [
      'Setiap hari ginjal kita menyaring sekitar 1.500 liter darah yang melewatinya secara berulang-ulang!',
      'Dari 180 liter cairan yang disaring nefron tiap hari, 99% diserap kembali, sehingga urine yang kita keluarkan hanya sekitar 1,5 liter per hari.',
      'Seseorang dapat tetap hidup sehat dan beraktivitas normal hanya dengan satu buah ginjal.',
    ],
    healthyTips: [
      'Biasakan minum air putih minimal 8 gelas per hari.',
      'Jangan membiasakan diri menahan buang air kecil.',
      'Kurangi makanan yang terlalu asin dan minuman berpengawet.',
      'Rutin berolahraga agar aliran darah ke ginjal tetap optimal.',
    ],
  },
  {
    id: 'kulit',
    name: 'Kulit',
    latinName: 'Cutis / Integumen',
    roleSummary: 'Organ terluar tubuh yang berfungsi mengekskresikan keringat (terdiri dari urea dan air) sekaligus berperan sebagai pengatur suhu tubuh (termoregulasi).',
    image: '/src/assets/images/kulit_tanpa_teks_1792292313812.jpg',
    accentColor: '#d97706',
    badgeBg: '#fef3c7',
    mainWaste: 'Keringat (terdiri dari urea dan air)',
    wasteExplanation: {
      title: 'Zat Sisa: Keringat (Terdiri dari Urea dan Air)',
      description: 'Cairan yang disekresikan oleh kelenjar keringat (glandula sudorifera) melalui pori-pori kulit.',
      composition: [
        'Air (sekitar 99% dari total keringat)',
        'Urea (sisa metabolisme protein yang dibuang dalam konsentrasi encer)',
        'Garam mineral (terutama NaCl yang membuat keringat terasa asin)',
        'Sedikit asam laktat sisa aktivitas otot',
      ],
      origin: 'Kelenjar keringat di lapisan dermis menyerap air dan urea dari kapiler darah di sekitarnya.',
      dangerIfRetained: 'Jika tubuh tidak bisa berkeringat, suhu tubuh akan melonjak tinggi secara berbahaya (Heat stroke) karena panas tubuh terperangkap di dalam.',
    },
    parts: [
      {
        name: 'Epidermis (Lapisan Kulit Ari)',
        role: 'Lapisan pelindung terluar tanpa pembuluh darah.',
        description: 'Tersusun atas stratum korneum (lapisan tanduk mati yang selalu mengelupas) dan stratum basal yang memuat pigmen melanin penangkal sinar UV.',
        xPercent: 32,
        yPercent: 32,
      },
      {
        name: 'Dermis (Lapisan Kulit Jangat)',
        role: 'Lapisan tengah yang memuat kelenjar keringat, kelenjar minyak, pembuluh darah, dan ujung saraf.',
        description: 'Lapisan utama tempat kelenjar keringat memproduksi keringat dan menyerap sisa metabolisme dari kapiler darah.',
        xPercent: 34,
        yPercent: 50,
      },
      {
        name: 'Kelenjar Keringat (Glandula Sudorifera)',
        role: 'Pipa bergulung di dermis yang memproduksi keringat.',
        description: 'Menyerap air, sedikit urea, dan garam dari pembuluh darah kapiler untuk disalurkan ke permukaan kulit.',
        xPercent: 49,
        yPercent: 60,
      },
      {
        name: 'Pori-Pori Kulit (Muara Keringat)',
        role: 'Lubang keluarnya tetesan keringat di permukaan kulit.',
        description: 'Tempat keluarnya keringat ke udara luar untuk mengalami penguapan (evaporasi).',
        xPercent: 48,
        yPercent: 31,
      },
      {
        name: 'Folikel dan Batang Rambut',
        role: 'Kantung tempat tumbuhnya helai rambut.',
        description: 'Dilengkapi otot penegak rambut (arrector pili) yang berkontraksi saat dingin sehingga bulu berdiri tegak (merinding).',
        xPercent: 61,
        yPercent: 50,
      },
      {
        name: 'Hipodermis (Jaringan Lemak Bawah Kulit)',
        role: 'Lapisan terdalam yang kaya akan sel-sel lemak.',
        description: 'Berfungsi sebagai cadangan makanan dan isolator penahan panas alami tubuh.',
        xPercent: 45,
        yPercent: 78,
      },
    ],
    functions: {
      primaryExcretory: [
        'Mengekskresikan keringat yang terdiri dari urea dan air.',
        'Membantu mengeluarkan sedikit sisa metabolisme protein bersama cairan keringat.',
      ],
      secondaryPhysiological: [
        'Termoregulasi: Menjaga suhu tubuh tetap stabil di kisaran 37°C melalui penguapan keringat.',
        'Pelindung tubuh (Proteksi): Melindungi dari luka gesekan, kuman bakteri, dan sengatan sinar ultraviolet.',
        'Indra Peraba: Merasakan sentuhan, tekanan, suhu panas/dingin, dan nyeri.',
        'Membantu pembentukan vitamin D dengan bantuan sinar matahari pagi.',
      ],
    },
    mechanism: {
      summary: 'Pengeluaran keringat diatur oleh pusat pengatur suhu di otak (Hipotalamus) sebagai respon saat tubuh merasa kepanasan.',
      smpConcept: 'Bayangkan kulit kita seperti radiator mobil ber-AC: Saat mesin tubuh kepanasan karena lari atau cuaca terik, "sensor AC" di otak (Hipotalamus) langsung menyiramkan air radiator (keringat) ke permukaan kulit. Ketika keringat menguap terkena angin, kulit kita pun langsung terasa dingin dan sejuk!',
      steps: [
        {
          stepNumber: 1,
          title: 'Deteksi Suhu Panas oleh Hipotalamus',
          location: 'Hipotalamus (Pusat Pengatur Suhu di Otak)',
          input: 'Kenaikan suhu darah saat cuaca panas, berolahraga, atau saat demam.',
          process: 'Hipotalamus mendeteksi darah yang mengalir lebih panas dari normal (lebih dari 37°C). Hipotalamus langsung mengirimkan sinyal perintah melalui saraf ke pembuluh darah dan kelenjar keringat di kulit.',
          output: 'Perintah saraf untuk membuang panas tubuh.',
          analogy: 'Seperti sensor termostat AC di ruangan yang menyala otomatis saat ruangan mulai terasa gerah.',
          keyDetails: [
            'Jika suhu dingin, hipotalamus justru memerintahkan pembuluh darah menyempit agar panas tidak terbuang.',
          ],
        },
        {
          stepNumber: 2,
          title: 'Pelebaran Pembuluh Darah & Sekresi Keringat',
          location: 'Dermis (Lapisan Kulit Jangat)',
          input: 'Perintah saraf dari hipotalamus dan aliran darah hangat.',
          process: 'Pembuluh darah kapiler di lapisan dermis melebar (vasodilatasi) sehingga kulit terlihat agak kemerahan. Kelenjar keringat menyerap air, garam, dan sedikit urea dari darah kapiler di dekatnya.',
          output: 'Keringat terkumpul di saluran kelenjar keringat.',
          analogy: 'Seperti membuka keran air: pembuluh darah melebar sehingga air dan urea mengalir deras ke kelenjar keringat.',
          keyDetails: [
            'Inilah mengapa saat berolahraga wajah kita tampak memerah karena pembuluh darah dermis melebar.',
          ],
        },
        {
          stepNumber: 3,
          title: 'Penguapan (Evaporasi) di Permukaan Pori Kulit',
          location: 'Epidermis dan Udara Luar',
          input: 'Tetesan keringat yang keluar menembus pori-pori kulit.',
          process: 'Keringat yang berada di permukaan kulit menguap (evaporasi) ke udara. Saat air menguap, ia menyerap energi panas dari permukaan kulit. Akibatnya, suhu tubuh turun kembali ke normal (37°C).',
          output: 'Suhu tubuh kembali adem normal dan zat urea serta air berhasil dibuang.',
          analogy: 'Sama seperti saat tangan kita basah lalu ditiup angin, seketika tangan terasa dingin karena air menguap membawa panas.',
          keyDetails: [
            'Keringat mendinginkan tubuh hanya jika ia MENGUAP. Jika udara sangat lembap, keringat sulit menguap dan kita terasa gerah.',
          ],
        },
      ],
    },
    diseases: [
      {
        name: 'Biang Keringat (Miliaria)',
        alias: 'Keringat Buntet',
        category: 'Gaya Hidup',
        cause: 'Saluran kelenjar keringat tersumbat oleh debu, kotoran, atau sel kulit mati pada cuaca panas yang lembap.',
        symptoms: ['Bintik-bintik merah kecil yang gatal dan perih', 'Muncul di area lipatan leher, dada, atau punggung'],
        prevention: 'Gunakan pakaian katun yang longgar, jaga sirkulasi udara, dan segera mandi jika berkeringat.',
        severity: 'Ringan',
      },
      {
        name: 'Jerawat (Acne Vulgaris)',
        alias: 'Jerawat dan Komedo',
        category: 'Infeksi',
        cause: 'Kelenjar minyak tersumbat oleh kotoran dan minyak berlebih lalu terinfeksi bakteri.',
        symptoms: ['Bintil merah meradang di wajah', 'Bintil bernanah atau komedo'],
        prevention: 'Cuci muka rutin 2 kali sehari dan hindari memencet jerawat dengan tangan kotor.',
        severity: 'Ringan',
      },
      {
        name: 'Kudis (Skabies)',
        alias: 'Scabies',
        category: 'Infeksi',
        cause: 'Infeksi tungau parasit mikroskopis Sarcoptes scabiei yang bersarang di bawah lapisan kulit.',
        symptoms: ['Gatal luar biasa terutama di malam hari', 'Bintil berair di sela jari tangan dan pergelangan'],
        prevention: 'Jaga kebersihan tempat tidur, jemur sprei, dan jangan bertukar pakaian dengan orang lain.',
        severity: 'Sedang',
      },
    ],
    funFacts: [
      'Keringat manusia saat baru keluar sebenarnya sama sekali tidak berbau busuk! Bau timbul karena bakteri di kulit memecah zat di dalamnya.',
      'Kulit melepaskan sekitar 30.000 hingga 40.000 sel kulit mati setiap menitnya tanpa kita sadari.',
    ],
    healthyTips: [
      'Mandi secara teratur minimal 2 kali sehari dengan sabun.',
      'Gunakan pakaian yang mudah menyerap keringat.',
      'Gunakan tabir surya saat berada di bawah terik matahari siang.',
    ],
  },
  {
    id: 'paru_paru',
    name: 'Paru-Paru',
    latinName: 'Pulmo',
    roleSummary: 'Organ pernapasan sekaligus ekskresi yang berfungsi mengeluarkan gas Karbon Dioksida dan Uap Air hasil respirasi seluler tubuh.',
    image: '/src/assets/images/paruparu_anatomi_bersih_1792292297308.jpg',
    accentColor: '#e11d48',
    badgeBg: '#ffe4e6',
    mainWaste: 'Karbon dioksida & uap air',
    wasteExplanation: {
      title: 'Zat Sisa: Karbon Dioksida & Uap Air',
      description: 'Dua zat sampingan yang dihasilkan secara bersamaan dari proses pembakaran makanan (respirasi sel) di dalam tubuh.',
      composition: [
        'Gas Karbon Dioksida (CO2)',
        'Uap Air (H2O)',
      ],
      origin: 'Berasal dari reaksi pembakaran zat gula (glukosa) menggunakan oksigen di dalam mitokondria sel untuk menghasilkan energi: Glukosa + O2 → CO2 + H2O + Energi.',
      dangerIfRetained: 'Jika Karbon Dioksida tidak segera dibuang, gas ini akan menumpuk dalam darah dan membuat darah menjadi asam (Asidosis Respiratorik), yang dapat memicu sesak napas berat dan kerusakan organ.',
    },
    parts: [
      {
        name: 'Trakea (Batang Tenggorokan)',
        role: 'Pipa saluran napas utama yang diperkuat cincin tulang rawan.',
        description: 'Dinding dalamnya memiliki rambut getar (silia) yang menyapu debu dan kotoran ke arah luar saluran napas.',
        xPercent: 36,
        yPercent: 16,
      },
      {
        name: 'Bronkus (Cabang Tenggorokan)',
        role: 'Percabangan trakea menuju paru-paru kanan dan paru-paru kiri.',
        description: 'Jalur utama keluar-masuknya udara pernapasan antara tenggorokan dan paru-paru.',
        xPercent: 34,
        yPercent: 36,
      },
      {
        name: 'Bronkiolus (Anak Cabang Tenggorokan)',
        role: 'Percabangan halus dari bronkus yang bermuara ke alveolus.',
        description: 'Saluran udara kecil tanpa tulang rawan yang berujung pada gugusan kantung alveolus.',
        xPercent: 24,
        yPercent: 48,
      },
      {
        name: 'Alveolus (Kantung Udara)',
        role: 'Tempat terjadinya difusi pertukaran gas O2 dengan CO2 dan uap air.',
        description: 'Kantung kecil berdinding sangat tipis satu lapis sel yang dikelilingi jaring kapiler darah. Tempat zat sisa CO2 berpindah ke udara.',
        xPercent: 73,
        yPercent: 57,
      },
      {
        name: 'Kapiler Darah Alveolus',
        role: 'Pembuluh darah kecil yang membawa darah kaya CO2 untuk dibuang ke alveolus.',
        description: 'Tempat darah melepaskan gas CO2 dan mengambil oksigen bersih yang baru dihirup.',
        xPercent: 82,
        yPercent: 68,
      },
    ],
    functions: {
      primaryExcretory: [
        'Mengekskresikan gas Karbon Dioksida (CO2) sisa respirasi sel tubuh.',
        'Mengekskresikan uap air (H2O) yang ikut terbawa dalam hembusan napas.',
      ],
      secondaryPhysiological: [
        'Organ pernapasan utama untuk menyerap oksigen (O2) bagi seluruh sel tubuh.',
        'Membantu mengatur keseimbangan pH darah.',
      ],
    },
    mechanism: {
      summary: 'Ekskresi paru-paru terjadi melalui pertukaran gas secara difusi sederhana di dinding Alveolus, lalu dihembuskan keluar saat ekspirasi.',
      smpConcept: 'Bayangkan sel tubuh kita seperti kompor: Nasi yang kita makan dibakar dengan oksigen untuk menghasilkan tenaga. Asap sisa pembakarannya adalah Karbon Dioksida dan Uap Air. Darah bertindak sebagai mobil pengangkut asap menuju cerobong paru-paru (Alveolus), lalu kita tiupkan asap itu keluar saat menghembuskan napas!',
      steps: [
        {
          stepNumber: 1,
          title: 'Respirasi Sel Menghasilkan CO2 dan Uap Air',
          location: 'Mitokondria di Seluruh Sel Tubuh',
          input: 'Glukosa (zat makanan) dan Oksigen (O2).',
          process: 'Sel-sel tubuh membakar glukosa menggunakan oksigen untuk menghasilkan energi hidup. Dari reaksi kimia ini, timbul produk sampingan berupa gas CO2 dan molekul H2O (air).',
          output: 'CO2 dan air dilepaskan ke dalam cairan tubuh lalu diserap pembuluh darah.',
          analogy: 'Seperti kayu bakar yang dibakar api: menghasilkan energi panas, tetapi juga mengeluarkan asap (CO2) dan uap (H2O).',
          keyDetails: [
            'Reaksi: Glukosa + 6 Oksigen → 6 Karbon Dioksida + 6 Uap Air + Energi.',
          ],
        },
        {
          stepNumber: 2,
          title: 'Darah Mengangkut CO2 Menuju Paru-Paru',
          location: 'Pembuluh Darah Balik (Vena) menuju Jantung dan Paru-Paru',
          input: 'Darah kaya CO2 dari seluruh jaringan tubuh.',
          process: 'Sebagian besar CO2 larut di plasma darah dalam bentuk ion bikarbonat (HCO3-). Darah dipompa jantung kanan menuju jaring kapiler yang membungkus alveolus paru-paru.',
          output: 'Darah kaya CO2 tiba di depan dinding tipis alveolus.',
          analogy: 'Darah bertindak seperti mobil truk pengangkut sampah yang mengumpulkan gas CO2 dari seluruh sel tubuh menuju tempat pembuangan akhir.',
          keyDetails: [
            'Di dekat alveolus, ion bikarbonat kembali diubah menjadi gas CO2 bebas yang siap dilepas.',
          ],
        },
        {
          stepNumber: 3,
          title: 'Difusi Gas di Alveolus & Dihembuskan Keluar',
          location: 'Membran Alveolus-Kapiler dan Saluran Pernapasan',
          input: 'Tekanan gas CO2 di dalam darah lebih tinggi daripada di dalam kantung udara alveolus.',
          process: 'Gas CO2 berpindah secara spontan (difusi) menembus dinding kapiler dan dinding alveolus. Saat kita menghembuskan napas (ekspirasi), gas CO2 dan uap air didorong keluar melalui hidung atau mulut.',
          output: 'Hembusan napas yang membawa Karbon Dioksida dan Uap Air ke udara bebas.',
          analogy: 'Seperti membuka pintu ruangan yang penuh asap ke udara terbuka: asap otomatis keluar ke tempat yang lebih lapang.',
          keyDetails: [
            'Keberadaan uap air dapat dibuktikan jika kita menghembuskan napas ke kaca cermin dingin (akan mengembun buram).',
            'Keberadaan gas CO2 dapat dibuktikan dengan meniup air kapur jernih Ca(OH)2 yang akan berubah menjadi keruh putih.',
          ],
        },
      ],
    },
    diseases: [
      {
        name: 'Tuberkulosis (TBC)',
        alias: 'TBC Paru',
        category: 'Infeksi',
        cause: 'Infeksi bakteri Mycobacterium tuberculosis yang merusak dinding alveolus.',
        symptoms: ['Batuk berdahak lebih dari 2 minggu (bisa berdarah)', 'Demam di malam hari', 'Badan semakin kurus'],
        prevention: 'Vaksinasi BCG saat bayi, sirkulasi udara rumah yang baik, dan menutup mulut saat batuk.',
        severity: 'Serius/Kritis',
      },
      {
        name: 'Pneumonia',
        alias: 'Paru-paru Basah',
        category: 'Infeksi',
        cause: 'Infeksi bakteri atau virus yang menyebabkan alveolus terisi cairan lendir atau nanah.',
        symptoms: ['Sesak napas hebat', 'Dada sakit saat bernapas dalam', 'Demam menggigil dan batuk kental'],
        prevention: 'Vaksinasi pneumonia, cuci tangan dengan sabun, dan hindari asap rokok.',
        severity: 'Serius/Kritis',
      },
      {
        name: 'Asma',
        alias: 'Sesak Napas Alergi',
        category: 'Struktural/Bawaan',
        cause: 'Penyempitan saluran bronkus akibat reaksi alergi terhadap debu, bulu hewan, atau udara dingin.',
        symptoms: ['Napas berbunyi mengi ("ngik-ngik")', 'Dada terasa berat dan sesak napas'],
        prevention: 'Hindari faktor penyebab alergi dan gunakan masker saat udara dingin/berdebu.',
        severity: 'Sedang',
      },
    ],
    funFacts: [
      'Jika seluruh kantung alveolus di kedua paru-paru dibentangkan, luasnya mencapai seukuran lapangan tenis!',
      'Paru-paru adalah satu-satunya organ tubuh manusia yang bisa mengapung di atas air karena menyimpan cadangan udara.',
    ],
    healthyTips: [
      'Jangan pernah merokok dan jauhi asap rokok dari orang lain.',
      'Gunakan masker saat berada di jalan raya yang banyak polusi kendaraan.',
      'Rutin berolahraga jalan santai, lari, atau renang untuk melatih kapasitas paru-paru.',
    ],
  },
  {
    id: 'hati',
    name: 'Hati',
    latinName: 'Hepar',
    roleSummary: 'Kelenjar terbesar tubuh yang berperan penting dalam sistem ekskresi dengan mengubah amonia beracun menjadi urea melalui Siklus Ornitin, serta merombak eritrosit tua.',
    image: '/src/assets/images/hati_anatomi_bersih_1792292296827.jpg',
    accentColor: '#16a34a',
    badgeBg: '#dcfce7',
    mainWaste: 'Urea',
    wasteExplanation: {
      title: 'Zat Sisa: Urea',
      description: 'Senyawa sisa metabolisme protein yang dibentuk oleh hati untuk menetralkan amonia beracun.',
      composition: [
        'Urea (CO(NH2)2)',
      ],
      origin: 'Berasal dari perombakan asam amino (protein) yang menghasilkan zat sisa gas Amonia (NH3) yang sangat beracun. Hati mengubah amonia tersebut bersama karbon dioksida menjadi Urea yang aman melalui reaksi Siklus Ornitin.',
      dangerIfRetained: 'Jika hati gagal mengubah amonia menjadi urea, gas amonia beracun akan beredar di darah dan menyerang otak (Ensefalopati), memicu kebingungan mental, tremor, hingga koma.',
    },
    parts: [
      {
        name: 'Lobus Kanan (Bagian Kanan Hati)',
        role: 'Belahan hati bagian kanan yang berukuran paling besar.',
        description: 'Tersusun atas jutaan sel hati yang sangat giat melakukan penetralan racun dan pembentukan urea.',
        xPercent: 34,
        yPercent: 38,
      },
      {
        name: 'Lobus Kiri (Bagian Kiri Hati)',
        role: 'Belahan hati bagian kiri yang berukuran lebih kecil.',
        description: 'Menutupi sebagian lambung dan bekerja sama menjalankan fungsi metabolisme tubuh.',
        xPercent: 72,
        yPercent: 36,
      },
      {
        name: 'Kantung Empedu (Vesika Felea)',
        role: 'Kantung penampung cairan empedu.',
        description: 'Menyimpan getah empedu hasil pembongkaran sel darah merah tua sebelum dialirkan ke usus untuk mencerna lemak.',
        xPercent: 33,
        yPercent: 67,
      },
      {
        name: 'Saluran Empedu (Duktus Biliaris)',
        role: 'Pipa penyalur cairan empedu dari hati dan kantung empedu ke usus dua belas jari.',
        description: 'Jika tersumbat batu empedu, zat warna empedu akan merembes ke darah dan memicu penyakit kuning.',
        xPercent: 48,
        yPercent: 72,
      },
      {
        name: 'Vena Porta Hepatika & Arteri Hati',
        role: 'Pembuluh pembawa darah dari usus (vena porta) dan darah beroksigen (arteri).',
        description: 'Memastikan semua makanan dari usus diperiksa dan disaring dari racun terlebih dahulu oleh sel hati.',
        xPercent: 52,
        yPercent: 62,
      },
    ],
    functions: {
      primaryExcretory: [
        'Mengekskresikan urea sebagai hasil detoksifikasi amonia beracun melalui Siklus Ornitin.',
        'Merombak sel darah merah yang sudah tua (120 hari) menjadi zat warna empedu (bilirubin & biliverdin).',
        'Menetralkan racun (detoksifikasi) dari obat-obatan, zat kimia berbahaya, dan makanan.',
      ],
      secondaryPhysiological: [
        'Menghasilkan getah empedu untuk membantu mencerna dan mengemulsikan lemak makanan.',
        'Menyimpan cadangan gula otot (glikogen) untuk energi tubuh.',
        'Menyimpan vitamin larut lemak (A, D, E, K) serta zat besi.',
      ],
    },
    mechanism: {
      summary: 'Mekanisme ekskresi hati yang paling utama dalam memproduksi urea berlangsung melalui reaksi biokimia yang disebut Siklus Ornitin.',
      smpConcept: 'Bayangkan hati seperti pabrik pengolah limbah beracun: Saat tubuh mencerna daging/telur (protein), ada sisa berupa gas Amonia yang baunya menyengat dan 1.000 kali lebih beracun dari urea. Hati dengan cepat "membungkus" amonia itu bersama karbon dioksida lewat Siklus Ornitin menjadi Urea yang aman, lalu dikirim ke ginjal untuk dibuang bersama urine!',
      steps: [
        {
          stepNumber: 1,
          title: 'Pencernaan Protein Menghasilkan Amonia Beracun',
          location: 'Seluruh Jaringan Tubuh & Hati',
          input: 'Kelebihan asam amino dari makanan berprotein.',
          process: 'Saat tubuh menggunakan asam amino, gugus amina dilepas melalui proses deaminasi. Proses ini menghasilkan senyawa Amonia (NH3). Amonia ini sangat berbahaya dan beracun bagi sel tubuh jika dibiarkan beredar.',
          output: 'Gas Amonia (NH3) yang harus segera dinetralkan.',
          analogy: 'Seperti asap beracun di pabrik yang tidak boleh langsung dibuang ke udara sebelum disaring terlebih dahulu.',
          keyDetails: [
            'Amonia bersifat racun keras. Sedikit saja menumpuk di otak bisa menyebabkan pusing hingga koma.',
          ],
        },
        {
          stepNumber: 2,
          title: 'Siklus Ornitin Mengubah Amonia Menjadi Urea',
          location: 'Sel-Sel Hepatosit Hati',
          input: 'Amonia (NH3) beracun, Karbon Dioksida (CO2), dan asam amino Ornitin.',
          process: 'Di dalam sel hati, amonia direaksikan dengan CO2 dan ornitin membentuk zat sitrulin. Sitrulin kemudian bereaksi lagi dengan amonia membentuk arginin. Enzim arginase lalu memecah arginin menjadi UREA yang larut air dan aman!',
          output: 'Urea (CO(NH2)2) yang sifatnya tidak beracun dan aman dialirkan dalam darah.',
          analogy: 'Seperti membungkus kaca tajam dengan kardus tebal: Amonia yang berbahaya "dibungkus" menjadi urea sehingga aman dibawa oleh aliran darah.',
          keyDetails: [
            'Reaksi ini dinamakan Siklus Ornitin atau Siklus Urea karena zat ornitin dipakai dan dihasilkan kembali secara berputar.',
          ],
        },
        {
          stepNumber: 3,
          title: 'Pengiriman Urea ke Ginjal untuk Dibuang',
          location: 'Aliran Darah menuju Nefron Ginjal',
          input: 'Urea yang telah aman dialirkan keluar dari hati ke pembuluh darah.',
          process: 'Urea dialirkan melalui pembuluh darah melewati jantung menuju ginjal. Di nefron ginjal, urea disaring pada tahap filtrasi dan dibuang keluar tubuh bersama urine.',
          output: 'Urea berhasil keluar dari tubuh bersama urine.',
          analogy: 'Seperti paket barang siap kirim: Hati adalah pabrik yang membuat paket urea, dan Ginjal adalah kurir yang membuangnya ke luar rumah.',
          keyDetails: [
            'Inilah kerjasama hebat dua organ ekskresi: Hati yang MEMBUAT urea, dan Ginjal yang MENGELUARKANNYA!',
          ],
        },
      ],
    },
    diseases: [
      {
        name: 'Hepatitis (A, B, C)',
        alias: 'Radang Hati',
        category: 'Infeksi',
        cause: 'Infeksi virus Hepatitis melalui makanan tercemar (Hep A) atau jarum suntik/cairan tubuh (Hep B & C).',
        symptoms: ['Badan sangat lemas dan demam', 'Nyeri perut kanan atas', 'Mata dan kulit menguning serta urine berwarna gelap seperti teh'],
        prevention: 'Vaksinasi Hepatitis B, menjaga kebersihan makanan, dan tidak memakai jarum suntik bersama.',
        severity: 'Serius/Kritis',
      },
      {
        name: 'Penyakit Kuning (Ikterus / Jaundice)',
        alias: 'Ikterus',
        category: 'Struktural/Bawaan',
        cause: 'Saluran empedu tersumbat batu empedu sehingga zat warna empedu bilirubin meluap ke aliran darah.',
        symptoms: ['Sklera putih mata dan kulit berubah menjadi kuning pucat', 'Kulit terasa gatal-gatal', 'Warna tinja pucat seperti dempul'],
        prevention: 'Batasi makanan terlalu berlemak, hindari alkohol, dan obati radang hati sejak dini.',
        severity: 'Sedang',
      },
      {
        name: 'Sirosis Hati',
        alias: 'Pengerasan Jaringan Hati',
        category: 'Gaya Hidup',
        cause: 'Kerusakan sel hati berkepanjangan akibat kebiasaan minum minuman keras beralkohol atau hepatitis menahun.',
        symptoms: ['Perut membesar terisi cairan (asites)', 'Muntah darah', 'Fungsi hati menurun permanen'],
        prevention: 'JANGAN PERNAH MINUM MINUMAN BERALKOHOL sama sekali.',
        severity: 'Serius/Kritis',
      },
    ],
    funFacts: [
      'Hati adalah organ internal terbesar di dalam tubuh manusia dengan berat sekitar 1,5 kg!',
      'Hati memiliki kemampuan menakjubkan: bila sebagian jaringan hati rusak atau terpotong, ia mampu tumbuh kembali (regenerasi) ke ukuran semula!',
    ],
    healthyTips: [
      'Jauhi sama sekali minuman keras beralkohol.',
      'Kurangi makanan cepat saji yang banyak minyak dan pengawet.',
      'Lakukan vaksinasi Hepatitis B sejak dini.',
      'Jangan sembarangan minum obat tanpa resep dokter.',
    ],
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  organTag: 'Ginjal' | 'Kulit' | 'Paru-Paru' | 'Hati';
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Zat sisa metabolisme utama yang diekskresikan oleh organ ginjal adalah...',
    options: ['Urine', 'Keringat', 'Karbon dioksida', 'Cairan empedu'],
    correctIndex: 0,
    explanation: 'Ginjal merupakan organ ekskresi utama yang membuang sisa metabolisme darah dalam bentuk urine yang terdiri dari air, garam, dan urea.',
    organTag: 'Ginjal',
  },
  {
    id: 2,
    question: 'Kulit mengekskresikan zat sisa berupa keringat. Komposisi utama dari keringat adalah...',
    options: [
      'Karbon dioksida dan uap air',
      'Urea dan air',
      'Asam urat dan glukosa',
      'Empedu dan getah pencernaan',
    ],
    correctIndex: 1,
    explanation: 'Zat yang diekskresikan oleh kulit adalah keringat, yang komposisi utamanya terdiri dari urea dan air (beserta sedikit garam mineral).',
    organTag: 'Kulit',
  },
  {
    id: 3,
    question: 'Organ paru-paru berfungsi mengekskresikan zat sisa hasil respirasi seluler berupa...',
    options: [
      'Oksigen dan nitrogen',
      'Karbon dioksida & uap air',
      'Urea dan urine',
      'Asam laktat dan bilirubin',
    ],
    correctIndex: 1,
    explanation: 'Paru-paru mengekskresikan Karbon dioksida & uap air yang merupakan produk sampingan respirasi pembakaran glukosa di mitokondria sel.',
    organTag: 'Paru-Paru',
  },
  {
    id: 4,
    question: 'Melalui Siklus Ornitin, organ hati mengubah amonia yang beracun menjadi zat sisa yang lebih aman untuk dikeluarkan, yaitu...',
    options: ['Glukosa', 'Urea', 'Asam amino', 'Bilirubin'],
    correctIndex: 1,
    explanation: 'Zat sisa yang diekskresikan dan dihasilkan oleh hati dari penetralan amonia beracun adalah Urea.',
    organTag: 'Hati',
  },
  {
    id: 5,
    question: 'Urutan 3 tahapan pembentukan urine pada nefron ginjal yang benar adalah...',
    options: [
      'Reabsorpsi → Filtrasi → Augmentasi',
      'Filtrasi → Reabsorpsi → Augmentasi',
      'Augmentasi → Filtrasi → Reabsorpsi',
      'Filtrasi → Augmentasi → Reabsorpsi',
    ],
    correctIndex: 1,
    explanation: 'Tahap 1: Filtrasi (di Glomerulus menghasilkan urine primer) → Tahap 2: Reabsorpsi (di TKP menyerap zat berguna menghasilkan urine sekunder) → Tahap 3: Augmentasi (di TKD menambahkan zat sisa menghasilkan urine sebenarnya).',
    organTag: 'Ginjal',
  },
  {
    id: 6,
    question: 'Kelenjar pada lapisan dermis kulit yang memproduksi dan mengeluarkan keringat dinamakan...',
    options: [
      'Glandula sebasea (kelenjar minyak)',
      'Glandula sudorifera (kelenjar keringat)',
      'Kelenjar tiroid',
      'Kelenjar ludah',
    ],
    correctIndex: 1,
    explanation: 'Glandula sudorifera adalah kelenjar keringat berbentuk tabung bergulung di dermis yang menyerap air dan urea untuk dikeluarkan melalui pori kulit.',
    organTag: 'Kulit',
  },
  {
    id: 7,
    question: 'Pertukaran gas karbon dioksida dari kapiler darah ke dalam rongga alveolus paru-paru terjadi melalui proses...',
    options: [
      'Osmosis cairan',
      'Difusi sederhana menuruni perbedaan tekanan',
      'Transpor aktif protein',
      'Fagositosis sel',
    ],
    correctIndex: 1,
    explanation: 'Gas karbon dioksida berpindah menembus dinding kapiler dan alveolus secara difusi sederhana karena tekanan gas CO2 di kapiler darah lebih tinggi daripada di alveolus.',
    organTag: 'Paru-Paru',
  },
  {
    id: 8,
    question: 'Penyakit berupa pembentukan kristal tajam akibat kurang minum air putih dan kebiasaan sering menahan buang air kecil adalah...',
    options: ['Batu Ginjal', 'Albuminuria', 'Diabetes Insipidus', 'Nefritis'],
    correctIndex: 0,
    explanation: 'Batu ginjal terbentuk dari endapan garam kalsium oksalat atau asam urat yang mengkristal akibat urine terlalu pekat karena kurang minum.',
    organTag: 'Ginjal',
  },
];

export interface GlossaryItem {
  term: string;
  organ: 'Ginjal' | 'Kulit' | 'Paru-Paru' | 'Hati' | 'Umum';
  definition: string;
}

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: 'Ekskresi',
    organ: 'Umum',
    definition: 'Proses pengeluaran zat sisa metabolisme yang sudah tidak berguna lagi dan beracun bagi tubuh jika tertimbun.',
  },
  {
    term: 'Urine',
    organ: 'Ginjal',
    definition: 'Zat sisa cair hasil penyaringan darah oleh nefron ginjal yang mengandung air, urea, garam, dan sisa metabolit lainnya.',
  },
  {
    term: 'Filtrasi',
    organ: 'Ginjal',
    definition: 'Tahap pertama penyaringan sel darah dan protein di glomerulus yang menghasilkan urine primer.',
  },
  {
    term: 'Reabsorpsi',
    organ: 'Ginjal',
    definition: 'Tahap penyerapan kembali zat berguna (100% glukosa, asam amino, air) di tubulus kontortus proksimal.',
  },
  {
    term: 'Augmentasi',
    organ: 'Ginjal',
    definition: 'Tahap penambahan zat-zat sisa metabolisme aktif ke dalam urine sekunder di tubulus kontortus distal menghasilkan urine sebenarnya.',
  },
  {
    term: 'Keringat',
    organ: 'Kulit',
    definition: 'Zat sisa ekskresi kulit yang terdiri dari urea dan air serta sedikit garam yang dikeluarkan untuk mengatur suhu tubuh.',
  },
  {
    term: 'Glandula Sudorifera',
    organ: 'Kulit',
    definition: 'Kelenjar keringat yang berada di lapisan dermis kulit.',
  },
  {
    term: 'Termoregulasi',
    organ: 'Kulit',
    definition: 'Mekanisme biologis pengaturan dan pemeliharaan suhu tubuh agar tetap stabil pada kisaran normal 37°C.',
  },
  {
    term: 'Karbon Dioksida (CO2)',
    organ: 'Paru-Paru',
    definition: 'Gas sisa pembakaran glukosa pada respirasi seluler yang diekskresikan keluar tubuh melalui alveolus paru-paru.',
  },
  {
    term: 'Alveolus',
    organ: 'Paru-Paru',
    definition: 'Kantung udara berdinding tipis di ujung bronkiolus tempat berlangsungnya difusi O2 dan CO2.',
  },
  {
    term: 'Urea',
    organ: 'Hati',
    definition: 'Senyawa sisa deaminasi protein yang disintesis oleh hati dari amonia beracun melalui Siklus Ornitin untuk dibuang lewat urine.',
  },
  {
    term: 'Siklus Ornitin',
    organ: 'Hati',
    definition: 'Jalur biokimia di sel hati yang merombak amonia beracun bersama CO2 menjadi urea yang aman.',
  },
];

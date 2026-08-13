import { TeamMember, ServiceItem, ProjectItem, BlogPost, Architect } from './types';

// Architect accounts for the Architect Portal
// Each architect has a unique password — lightweight access control (frontend-only)
export const ARCHITECTS: Architect[] = [
  {
    id: 'adrian-sanjaya',
    name: 'Adrian Sanjaya',
    specialty: 'Arsitektur Komersial & Kinetik',
    role: 'Lead Architect — Komersial',
    email: 'adrian@aether.id',
    password: 'adrian2026',
  },
  {
    id: 'maya-lestari',
    name: 'Maya Lestari',
    specialty: 'Residensial Bioklimatik',
    role: 'Lead Architect — Residensial',
    email: 'maya@aether.id',
    password: 'maya2026',
  },
  {
    id: 'budi-pratama',
    name: 'Budi Pratama',
    specialty: 'Perencanaan Urban & Ekologi',
    role: 'Lead Architect — Urban',
    email: 'budi@aether.id',
    password: 'budi2026',
  },
  {
    id: 'dina-wijaya',
    name: 'Dina Wijaya',
    specialty: 'Struktur & Desain Berkelanjutan',
    role: 'Lead Architect — Struktur',
    email: 'dina@aether.id',
    password: 'dina2026',
  },
];


export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'adrian-wijaya',
    name: 'Adrian Wijaya',
    role: 'Principal Architect & Founder',
    roleId: 'Arsitek Utama & Pendiri',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyutdWxO0xpYkftSWpyVITRA6cb1F-biCWlRrSujbeIgSdW8rILIj0bQsPpkgFGI_HVIes0RVn7OACbeKBNofQl790iqS2ttZI8JW-W5dQ7iC5YPI5YjMaIk0JKR3iVb-9Jc5D4jHwNqT55RNk2Uz2yIYL5mhbGKo808ivM6BKmHUT9FMH5TiW4VvpVMV_XQKc6osKYJjYGUahX-G8ieh-_3PBlb1C8UkHzHJp4d-ljnBcHC9F4yZ5',
    bio: 'Adrian memiliki lebih dari 15 tahun pengalaman mendesain struktur ikonik di Asia Tenggara. Berfokus pada perpaduan antara brutalitas fungsional dan keindahan material mentah, ia percaya arsitektur adalah dialog abadi antara manusia dan alam.',
    specialty: 'Brutalist & Sustainable High-Rise Design',
    experience: '15+ Tahun'
  },
  {
    id: 'maya-santoso',
    name: 'Maya Santoso',
    role: 'Lead Interior Architect',
    roleId: 'Arsitek Interior Utama',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIW3RDH_K9krQvqW-k_QTuzTtH5AGHy-AoYp-nMJS3yF6X-Wv-ISnauRz5E_9UFNHM-mSbPjnsl9LfS5Cj2NTg5RJvZj7Yc4hQ9HFD37CwGJwUAXljkAp1SE1CGVJn8eNT-GV4mfXnLLHEG1XTd_MAl-OUhJog9y4gC0-7GsTeW8v7ZNqHx648VqIOPJYSkOLqVJ6CGJTSd7cv41K6ISZon2p40hn9lnmpy2YsvpdYD-JSwYostzOc',
    bio: 'Maya mengkhususkan diri dalam penciptaan ruang dalam yang tenang dan harmonis. Pendekatannya memprioritaskan pencahayaan alami, material taktil, dan tata letak spasial yang mengalir tanpa hambatan.',
    specialty: 'Minimalist Interior Systems & Lighting Design',
    experience: '10 Tahun'
  },
  {
    id: 'budi-pratama',
    name: 'Budi Pratama',
    role: 'Senior Structural Engineer',
    roleId: 'Insinyur Struktur Senior',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6nsphQhcFJPolj52NuVqz5ZkFuwFZDpx7KMsIq4NLM8tSluaFtCFZ_QtBFeC1qHschZy8EUA21hjqlzOwfSZean3-ShPXKAl9-WUEyWu6ibGEXhHHAkW_xS_09Bi8j5HZcMSt3h9mtzg7DqNhkc1Gvfb-_NmFYhexVqgEvkujod59-AyMnlGfZ91eaJaICmS6PNcj24m5uQzYBQFO1b0My3inbrqqcpKuW6yydOk039zPf937W2ew',
    bio: 'Budi mengubah visi arsitektural yang paling berani menjadi realitas struktural yang aman dan efisien. Keahliannya dalam rekayasa beton bertulang dan struktur baja bentang lebar diakui secara luas.',
    specialty: 'Advanced Seismic Engineering & Steel Systems',
    experience: '12 Tahun'
  },
  {
    id: 'dina-lestari',
    name: 'Dina Lestari',
    role: 'Landscape Design Specialist',
    roleId: 'Spesialis Arsitektur Lanskap',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlZXRWcE3blyYHNVTTBBYc3xzQAX84vb6CgtuUzfxeO12SFvjLTeM_gfypvCHcFBbV4ij8lHzOcTA6cQHDiqh9J8zjXQDDg2qRSffUX6d5L9Yk51Yz6afHyjKbzqfoXvxCHIQRoNpHiNVmikqHfViMDv5UEmdZZ8fFqk98C-7S4VCfvAT9InRYD4lHDkHFxkKKp8jms97rXD4lKiDDxsU0HzVDFDAueQncRgeQAq5f7Bgewxt6r3hy',
    bio: 'Dina percaya lanskap bukan sekadar pelengkap, melainkan bagian integral dari ekosistem bangunan. Karya-karyanya memadukan vegetasi endemik dengan elemen air dan batu dalam harmoni arsitektur ekologis.',
    specialty: 'Ecological Urban Landscapes & Water Elements',
    experience: '8 Tahun'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'arsitektur',
    title: 'Architectural Design',
    titleIndo: 'Desain Arsitektur',
    description: 'Konseptualisasi dan perancangan detail untuk bangunan residensial, komersial, dan institusional dengan fokus pada karakter struktural yang kuat dan keberlanjutan energi.',
    details: [
      'Perencanaan Master & Studi Kelayakan Spasial',
      'Desain Skematik & Pengembangan Konseptual',
      'Dokumentasi Konstruksi & Spesifikasi Detail (DED)',
      'Konsultasi Perizinan & Koordinasi Teknis Lapangan'
    ],
    iconName: 'Building2'
  },
  {
    id: 'interior',
    title: 'Interior Architecture',
    titleIndo: 'Arsitektur Interior',
    description: 'Penciptaan ruang dalam yang menyatu secara struktural dengan arsitektur luar, mengedepankan fungsionalitas murni, materialitas taktil, dan kontrol pencahayaan alami.',
    details: [
      'Tata Letak Ergonomis & Aliran Sirkulasi Spasial',
      'Desain Furnitur Kustom (Cabinetry & Loose Furniture)',
      'Rencana Spesifikasi Material & Pencahayaan Buatan',
      'Kurasi Karya Seni, Tekstil, & Sentuhan Akhir'
    ],
    iconName: 'Compass'
  },
  {
    id: 'perencanaan-urban',
    title: 'Urban Planning',
    titleIndo: 'Perencanaan Urban',
    description: 'Skala makro dari arsitektur. Kami merancang kawasan perkotaan yang tangguh, terintegrasi transportasi massal, berorientasi pedestrian, dan mengutamakan ruang publik inklusif.',
    details: [
      'Masterplan Kawasan Terpadu (Mixed-use Development)',
      'Analisis Dampak Lingkungan & Sirkulasi Transportasi',
      'Panduan Desain Urban (Urban Design Guidelines)',
      'Desain Infrastruktur Hijau & Strategi Drainase Kota'
    ],
    iconName: 'Map'
  },
  {
    id: 'arsitektur-lanskap',
    title: 'Landscape Architecture',
    titleIndo: 'Arsitektur Lanskap',
    description: 'Menjembatani batas antara buatan manusia dan alam liar. Lanskap kami dirancang untuk mendukung keanekaragaman hayati, mengelola air hujan, dan memberikan ketenangan psikologis.',
    details: [
      'Desain Taman Urban & Ruang Terbuka Hijau (RTH)',
      'Kurasi Vegetasi Lokal Rendah Perawatan',
      'Elemen Air Mengalir & Desain Lanskap Keras (Hardscape)',
      'Integrasi Ekosistem Mikro dalam Desain Tapak'
    ],
    iconName: 'Leaf',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrYGBNE0_zWNyqElsaLZCMS1WLke5fph2QtKLzbkikB_fjQ_nToxE0E6VIUIjdv3TtCMPFV7DG_jjAziHs9KsVJ2MSI-twUHuM9cSDCtYO2f9qCNvabIK1GreHXIN6OGF4kKGa6KRvopv9VreXPrkCvrtHeVl_24g6bwxKXZLs8g-KU9SX9I3rSxrUjH9KOtvPgrRZgNYudpVVW4T33QNhhNZ6yGgitH4WByZkYttUEtrGN9s84D6H'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'zenith-data-center',
    title: 'Pusat Data Zenith',
    category: 'Komersial',
    location: 'Banten, Indonesia',
    year: '2025',
    client: 'Zenith Systems Corp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE0SKHPLOF1QrtVbE-Q3hDO4R4Dh9b7pihhBLeqOkFeSASlW0NY0-u9_cxkeHxQ62dwEVVY2MuTAXQLBRJ0jZ3jeQZRUuzCoL-Pq-O5H6DfKyIo6aTNfs0HJGMi3EhdPg_4gczelQubqQJc-ZuZWO0z1Q4b8NiJkT4rJuADVmfwUR3T7JMuuo5HeoJ-OnbLe2FanxKzsfHDOw8gO_0bm3BZUhvjr1YR4kdpCEaLLYx5DV2rPRP-f99',
    description: 'Sebuah monumen rekayasa modern yang menggabungkan fungsi teknis tingkat tinggi dengan ekspresi eksterior beton monolitik yang dramatis.',
    challenge: 'Mendesain fasilitas komputasi berdensitas tinggi yang membutuhkan sirkulasi pendinginan udara masif tanpa mengorbankan keamanan fisik dan penampilan estetika eksterior.',
    solution: 'Menggunakan panel beton pracetak bertekstur kasar dengan celah geometris presisi yang berfungsi sebagai ventilasi intake udara tersembunyi sekaligus menciptakan bayangan dinamis sepanjang hari.',
    stats: [
      { label: 'Area Bangunan', value: '14.500 m²' },
      { label: 'Efisiensi Energi', value: 'PUE 1.15' },
      { label: 'Material Dominan', value: 'Beton Pracetak' }
    ]
  },
  {
    id: 'lumina-headquarters',
    title: 'Kantor Pusat Lumina',
    category: 'Komersial',
    location: 'Jakarta, Indonesia',
    year: '2024',
    client: 'Lumina Group International',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqcdIbnWmIPDwjuz22LMjfUTFcoK-FVwiJ22aODQ06AD_CoR5kHesNCljV0FfuZN9uz2Yr79fExD-Uo-My4BZdGxOL-spCgvyRAsno8wD9UuQB48cs13eDnE0Xtv3JHdFKzzxZncpX-dhrgVemf70rmx3aG--DSK-7DxgJKc1CKuSM0olKcMIsXU9y81le-iaerwHM3tzuoIMM_8bpzPY2SOyEZeaEcA8ExUJ-Mme_Zm66caabiJfT',
    description: 'Pencakar langit berlapis ganda yang mengeksplorasi transparansi cahaya, bayangan struktural, dan integrasi taman gantung bertingkat.',
    challenge: 'Menciptakan lingkungan kerja korporat yang sehat dan kaya oksigen di tengah padatnya distrik bisnis Jakarta yang penuh polusi udara dan kebisingan.',
    solution: 'Fasad kulit ganda (double-skin facade) dengan rongga udara selebar 1 meter yang dipenuhi vegetasi hidroponik. Sistem ini meredam kebisingan jalanan hingga 60% dan menyaring debu perkotaan.',
    stats: [
      { label: 'Jumlah Lantai', value: '28 Lantai' },
      { label: 'Sertifikasi', value: 'Platinum GBCI' },
      { label: 'Kapasitas Karyawan', value: '2.200 Orang' }
    ]
  },
  {
    id: 'identitas-monolith',
    title: 'Identitas Monolith',
    category: 'Urban',
    location: 'Yogyakarta, Indonesia',
    year: '2024',
    client: 'Dinas Kebudayaan Regional',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaiVjxyccrqiWqgX3ebm5JhxAy9vZNMz7zjqlQCpZgtbxYTCObr4utckHxpdYuTWpfEgpqarjc5XQ44qNSZ1xUb_NLGE7If6w9aAGJWrBccAgk6RB5IV9ZLnzBj_d6QA2JyPgcNunRTeMcXDrbbfdDarLKLcLkVc1odoowLZEjWEkufPSJgutBvcpVxenJ2g7C96EuNp3cSeVbROlSQBXMBWURxRnSy0hMAmmJMdAj4vi0wlWKxNHD',
    description: 'Pusat galeri seni luar ruangan dan amfiteater publik yang merayakan materialitas bumi lokal dalam bentuk lempengan batu vulkanik monolitik.',
    challenge: 'Menciptakan ruang publik yang monumental namun ramah bagi interaksi komunitas lokal, serta tahan terhadap paparan cuaca tropis Yogyakarta.',
    solution: 'Susunan batu vulkanik abu-abu gelap dengan pilar-pilar kantilever yang masif. Tata letak spasial merujuk pada poros kosmologi lokal, mengundang angin mengalir ke dalam amfiteater.',
    stats: [
      { label: 'Kapasitas Publik', value: '800 Pengunjung' },
      { label: 'Material Utama', value: 'Batu Merapi & Andesit' },
      { label: 'Luas Area', value: '4.200 m²' }
    ]
  },
  {
    id: 'residensi-vertikal',
    title: 'Residensi Vertikal',
    category: 'Residensial',
    location: 'Bandung, Indonesia',
    year: '2023',
    client: ' Bandung Urban Living',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhQzUJfWvtzhBT6HAR3ZNjjKvD-RAZWgPHvMfI5N8DuQZe3v7n8RP9VkWNZ-V1Uw5rD2h-P1-5KnkO_ZCRNwZ1vfhXOpEkJf8jKm7wV91rKRNE3_4iPfcx7ymlcZXPEAm01vBIB_8n-PRlI-274FPZbfwPbRpLWn_z8niyPOOqxJ_iZsOzIEFMgQXGGHR2dcFpCnyY4pgzzfEP2nojB3BrydcYlfeMC3cqKaYRG2-KQdxpMREqmObL',
    description: 'Kompleks apartemen mikro-lofi yang mengekspos estetika baja struktural hitam dan kisi-kisi kayu daur ulang untuk menciptakan hunian hangat namun urban.',
    challenge: 'Mendesain hunian terjangkau pada lahan Bandung yang sempit dengan sirkulasi udara alami optimal tanpa pendingin udara (AC).',
    solution: 'Arsitektur koridor terbuka melingkar (central lightwell) yang menarik udara sejuk pegunungan dari bawah dan melepas udara panas lewat atap skylight yang berventilasi.',
    stats: [
      { label: 'Unit Hunian', value: '120 Unit' },
      { label: 'Konsumsi Energi AC', value: 'Hemat 85%' },
      { label: 'Suhu Rata-rata Dalam', value: '23.5°C Alami' }
    ]
  },
  {
    id: 'revitalisasi-urban',
    title: 'Studi Kasus: Revitalisasi Urban',
    category: 'Urban',
    location: 'Semarang, Indonesia',
    year: '2025',
    client: 'Pemerintah Kota Semarang',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwubgUEPLHOi85V9D-NnRI1dXs0iR2NtvYU96S6bXNNCjI40zo8ehOlnnohsTEute0eVwI9sHYDd3TspO9LHen-T1Kqw1lu9LpTTzdHqI-rANP0eDovVe-n_dNbeZrHL6GTHOveSTFPOTLxqTjBHfXMDYUbiput4dVj0ZmxLkoH1-ZPjEybn-3-s4zWzDFjuV9E3Do3fEsOXFC2dGU8wQmwxYS3062IJgDotRBzBvzUITOCC38Ka5d',
    description: 'Sebuah proyek restorasi bantaran sungai kumuh dan perbaikan jalur pedestrian terintegrasi guna menghidupkan kembali denyut ekonomi kawasan bersejarah.',
    challenge: 'Mencegah banjir rob musiman di Semarang sekaligus menciptakan ruang sosial publik yang bernilai komersil bagi UMKM lokal.',
    solution: 'Mengembangkan tanggul bioswale berpori yang dilapisi vegetasi penahan air dan amfiteater batu bertingkat yang dapat berfungsi sebagai bak penampung air sementara saat pasang laut tinggi.',
    stats: [
      { label: 'Panjang Revitalisasi', value: '2.4 km' },
      { label: 'Penurunan Banjir', value: 'Reduksi 90%' },
      { label: 'Kios UMKM Terfasilitasi', value: '45 Kios' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'masa-depan-arsitektur-berkelanjutan',
    title: 'Masa Depan Arsitektur Berkelanjutan',
    excerpt: 'Bagaimana material sirkular, beton ramah lingkungan, dan teknologi pendinginan pasif mengubah lanskap perkotaan masa kini.',
    date: '15 Mei 2026',
    readTime: '6 menit baca',
    category: 'Teknologi',
    author: 'Adrian Wijaya',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgI5oWtAyTXkAhnh_gMgbjwpIO4U2_dz-3SHK97RiFfpN55UUFnNdxvuAiOaMgI8yG80knhnB2A9e9GSFz_MD1hTOsknisaW1kRAjtu-dnZXW1GETLMLNf0XDZEoxLiQyYqYA_d3nd8xmBKCqasNCK8wjwCiM_2YApmIEiPSfjAG3WCjVELqSZTKTDlA2NvaxTk25kuv3Gx643WLNYhNj_hp9KlC1PELpv3sWzfGmvm8ZZ_gHLYArT',
    content: `Dunia arsitektur sedang mengalami revolusi diam-diam. Perubahan iklim bukan lagi ancaman teoritis melainkan realitas harian yang harus dijawab secara struktural oleh para arsitek. Desain berkelanjutan modern tidak lagi sekadar menaruh tanaman di balkon atau memasang panel surya di atap. Ia adalah tentang transformasi total materialitas dan metabolisme bangunan.

Di AETHER, kami mengeksplorasi penggunaan bahan sirkular, termasuk beton geopolimer abu terbang (fly-ash) yang memiliki jejak karbon 70% lebih rendah dibanding semen Portland biasa. Penggunaan kayu laminasi silang (cross-laminated timber/CLT) juga menjadi alternatif pengganti struktur baja struktural untuk beban menengah, menyimpan karbon secara permanen di dalam struktur bangunan.

Selain material, kunci keberlanjutan terletak pada sirkulasi mikrotermal pasif. Melalui pemodelan komputer termodinamika udara, kita dapat mendesain bentuk luar bangunan yang mengarahkan angin sejuk pegunungan atau laut untuk melintasi rongga-rongga koridor, meminimalkan kebutuhan pengkondisian udara (AC) buatan secara drastis.`
  },
  {
    id: 'minimalisme-dalam-desain-modern',
    title: 'Minimalisme dalam Desain Modern',
    excerpt: 'Mengeksplorasi estetika fungsional murni. Menolak dekorasi berlebih demi menonjolkan esensi material mentah dan interaksi cahaya alami.',
    date: '28 April 2026',
    readTime: '4 menit baca',
    category: 'Filosofi',
    author: 'Maya Santoso',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8hrLAHARTx3Nk4AiKlxRZarI0qnOegNcOv1VIolM8TjGSyA8O16dIIa6YyTFx2Aj_Xh9LqARz5ioPO6Y4rjhBcDvkpcoEX9LoHnEDiwmRt2A8S2bg1keoQmnLCfIPAFEY6tGJjEjXeras1oHNZix7hxIM_8Q4oT0s5Ro_UT5y7eXNR2k7h8sl63izBg26kloRzXRSe84tcS93P7uTDTc-oe2GiVb3l0f5wM0PmwiYz18FK63RMc-i',
    content: `Seringkali orang salah mengartikan minimalisme sebagai ruang kosong yang steril, dingin, dan tidak ramah dihuni. Minimalisme yang sejati adalah penghapusan elemen sekunder guna menonjolkan esensi dari sebuah ruang: bentuk, proporsi, tekstur material, dan cahaya.

Ketika dinding dibebaskan dari ornamentasi yang mengalihkan perhatian, mata kita dipaksa mengapresiasi kejujuran material. Tekstur kasar dari beton cast-in-place, pola urat alami pada kayu jati daur ulang, atau kelembutan batu kapur lokal menjadi ornamen itu sendiri.

Bagi saya, arsitektur interior adalah kanvas bagi cahaya matahari. Pola bayangan yang terbentuk dari kisi-kisi atau bukaan geometris tipis berganti seiring pergeseran matahari, bertindak sebagai elemen dekoratif alami yang dinamis tanpa pernah mengacaukan visual ketenangan jiwa.`
  },
  {
    id: 'integrasi-teknologi-ruang-publik',
    title: 'Integrasi Teknologi dalam Ruang Publik',
    excerpt: 'Bagaimana sensor lingkungan pintar, manajemen air cerdas, dan desain inklusif dapat melahirkan ruang kota yang bernyawa.',
    date: '12 April 2026',
    readTime: '5 menit baca',
    category: 'Urban',
    author: 'Budi Pratama',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdVYPPkxIiaMAWyhejSpH-Nl008UIebdl7IYvPvGdZ8c0aOUYQDaaYaO30omlh1HQ29KuZRC9Gcf6Nsyj9eiv8GS-romNqP89a_a1XpHdIhkuYmq00jxcyaxDMcNTRdQXPWh-7duGxHIbO-H0oMcDhnQYFSslZNV0DUw5-6Ktb4rvcaTK95GBc9NF8vyOqlZrp59XSbkv-YgJBeE71RHIJN9fyCaO6v58rKfjZNufGFNffYc-NXCvO',
    content: `Ruang publik masa kini harus mampu merespon kebutuhan manusia dan tantangan lingkungan secara real-time. Melalui integrasi sensor IoT (Internet of Things) yang dipasang menyatu dalam furnitur perkotaan (street furniture) dan infrastruktur drainase, kita dapat menciptakan 'sistem saraf kota' yang responsif.

Dalam proyek amfiteater dan bioswale modern, sensor pendeteksi kelembaban tanah dapat otomatis memicu katup drainase sekunder saat curah hujan tinggi, mencegah banjir lokal. Lampu jalan LED berdaya pancar adaptif meredup saat tidak ada pejalan kaki, menghemat konsumsi energi kota hingga 40%.

Namun, teknologi bukan sekadar soal efisiensi. Integrasi layar informasi taktil interaktif dan transmisi audio nirkabel membantu kaum disabilitas sensorik bernavigasi dengan mandiri di ruang publik, mewujudkan demokrasi spasial yang inklusif.`
  }
];

export const TESTIMONIAL = {
  quote: "Bekerja bersama AETHER memberikan kami perspektif baru tentang fungsionalitas murni. Struktur beton monolitik dan kulit ganda vegetasi di kantor pusat kami tidak hanya ikonik secara estetika, melainkan juga menekan biaya operasional gedung hingga 35%. Ini adalah presisi tanpa kompromi.",
  author: "Budi Santoso",
  role: "CEO Lumina Group",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ07xFsawZfVyw3vVaiy6BCzq0a8jJv801H3yj2ZtOQHfSS4qqpHY_6dWRd7e12JFcAugEVh5x6PtG6Gwe16o3RdVMBJc32GDvz8gBmqy3xSWLHYcu0uWeBcfNrDPZxfiIH-tfJFA16URlCR5Wx6VPoa6aKKaUzPwJNxwiTlCRN8YHDS8XftvJeK0XK8VSLgcuT14gQv3nugBeVfAUdOAoVMJHUmzw0fZNxEtROyGA8sd_JU-Cd4hT"
};

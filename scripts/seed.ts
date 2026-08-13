import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { PROJECTS, BLOG_POSTS, ARCHITECTS } from '../src/data';

const firebaseConfig = {
  apiKey: "AIzaSyCIH8qE_1Q-vAJTX-S51Tb4_KVwcIVDdzo",
  authDomain: "aether-arch-mvp-2026.firebaseapp.com",
  projectId: "aether-arch-mvp-2026",
  storageBucket: "aether-arch-mvp-2026.firebasestorage.app",
  messagingSenderId: "592702011567",
  appId: "1:592702011567:web:ab38c4eff6bfcf22a9bc5a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DEFAULT_INQUIRIES = [
  {
    id: "AETH-482019",
    name: "PT Nusantara Land (Bpk. Bambang)",
    email: "bambang@nusantaraland.co.id",
    projectType: "Komersial",
    budget: "2 Miliar - 10 Miliar",
    details: "Pembangunan kompleks perkantoran hijau berkonsep low-emission 4 lantai di Bandung Utara. Kami memerlukan analisis tapak komparatif, konsep fasad kinetik, dan sertifikasi bangunan hijau madya.",
    date: "25 Juni 2026",
    status: "reviewing",
    assignedTo: "Adrian Sanjaya",
    priority: "high",
    timelineEstimate: "6 - 12 Bulan",
    adminNotes: "Sudah dilakukan tinjauan awal zonasi wilayah Bandung Utara. Koefisien Dasar Bangunan (KDB) maksimal adalah 40%. Desain fasad kinetik sangat memungkinkan dengan mengoptimalkan paparan angin lembah."
  },
  {
    id: "AETH-910283",
    name: "Dr. Farah Anindita",
    email: "farah.anindita@health.id",
    projectType: "Residensial",
    budget: "500 Juta - 2 Miliar",
    details: "Desain rumah tinggal peristirahatan (villa) berkonsep bioclimatic di lereng bukit Dago Pakar. Memaksimalkan sirkulasi udara alami dan pemanfaatan material bambu/batu alam lokal.",
    date: "28 Juni 2026",
    status: "approved",
    assignedTo: "Maya Lestari",
    priority: "medium",
    timelineEstimate: "3 - 6 Bulan",
    adminNotes: "Konsep bioclimatic disetujui. Tim telah menjadwalkan kunjungan tapak untuk mengukur kontur tanah minggu depan. Rencana struktur menggunakan pondasi bor pile karena kemiringan lereng."
  },
  {
    id: "AETH-118274",
    name: "Dinas Pekerjaan Umum Kota Jakarta",
    email: "perencanaan.pu@jakarta.go.id",
    projectType: "Urban",
    budget: "> 10 Miliar",
    details: "Sayembara masterplan revitalisasi ruang publik koridor bantaran sungai Ciliwung sebagai mitigasi banjir dan kawasan rekreasi ramah lingkungan (sponge city concept).",
    date: "1 Juli 2026",
    status: "pending",
    assignedTo: "Budi Pratama",
    priority: "high",
    timelineEstimate: "> 12 Bulan",
    adminNotes: "Proyek skala makro yang menantang. Perlu kolaborasi dengan ahli hidrologi. Konsep sponge city sangat sesuai dengan kompetensi riset ekologi AETHER."
  }
];

async function seed() {
  console.log('Seeding projects...');
  for (const project of PROJECTS) {
    await setDoc(doc(db, 'projects', project.id), project);
  }

  console.log('Seeding blog posts...');
  for (const post of BLOG_POSTS) {
    await setDoc(doc(db, 'blogPosts', post.id), post);
  }

  console.log('Seeding inquiries...');
  for (const inquiry of DEFAULT_INQUIRIES) {
    await setDoc(doc(db, 'inquiries', inquiry.id), inquiry);
  }

  console.log('Seeding architects auth data for reference...');
  for (const arch of ARCHITECTS) {
    await setDoc(doc(db, 'architects', arch.id), arch);
  }

  console.log('Done!');
  process.exit(0);
}

seed().catch(console.error);

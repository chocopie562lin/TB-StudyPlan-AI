# TB StudyPlan AI v18

Asisten akademik untuk membantu menyusun rekomendasi mata kuliah berdasarkan IPS, semester, riwayat mata kuliah, prerequisite, dan bidang spesialisasi untuk mahasiswa S1 Teknik Biomedis UGM (kurikulum 2026).

## Struktur rekomendasi
- **Mata kuliah yang direkomendasikan (Wajib semester & spesialisasi)**
- **Sisa kapasitas** ditampilkan tepat setelah daftar rekomendasi wajib & spesialisasi.
- **Mata kuliah tambahan yang direkomendasikan** ditampilkan dalam satu bagian terpisah tanpa pembagian alternatif tambahan menjadi banyak kategori.

## Aturan spesialisasi
- Mata kuliah spesialisasi berasal dari Spesialisasi 1–4 dan dapat digabung.
- Target kelulusan: minimal **15 SKS total mata kuliah spesialisasi**.
- Syarat Proyek Individu: minimal **4 mata kuliah spesialisasi**, terpisah dari target 15 SKS.
- Mata kuliah spesialisasi dapat diambil pada semester yang sama dengan Proyek Individu jika constraint lainnya terpenuhi.

## Fitur
- Pilih semua mata kuliah per semester pada riwayat.
- Pilih bidang spesialisasi yang pernah diambil, lalu centang mata kuliah spesialisasi yang sudah diambil/lulus.
- Ringkasan otomatis jumlah mata kuliah dan SKS spesialisasi/non-spesialisasi.
- Rekomendasi tambahan menggunakan sisa kapasitas SKS tanpa mengulang mata kuliah pada rekomendasi utama.


## Struktur file
- `index.html` — struktur halaman
- `style.css` — styling/UI
- `script.js` — knowledge base dan logika rekomendasi

# TB StudyPlan AI v18

Asisten akademik untuk membantu menyusun rekomendasi mata kuliah berdasarkan IPS, semester, riwayat mata kuliah, prerequisite, dan bidang spesialisasi untuk mahasiswa S1 Teknik Biomedis UGM (kurikulum 2026).

Website ini memberikan rekomendasi mata kuliah berdasarkan IPS, semester, riwayat mata kuliah yang telah ditempuh, ketersediaan matakuliah, prasyarat dan aturan kurikulum. Sistem akan memperoses data tersebut untuk menentukan mata kuliah yang diambil dan memberikan rekomendasi sesuai dengan batas SKS mahasiswa.

## Fitur Utama
* Rekomendasi mata kuliah berdasarkan kondisi akademik mahasiswa.
* Perhitungan batas SKS berdasarkan IPS
* Pengecekan ketersediaan mata kuliah berdasarkan semester untuk mata kuliah ganjil, genap, atau setiap semester.
* Rekomendasi mata kuliah tambahan jika ada sisa kuota SKS
* Informasi mata kuliah terblokir beserta alasan mengapa mata kuliah belum dapat diambil.
* Pemilihan mata kuliah spesialisasi sesuai dengan bidang peminatan mahasiswa.

## Algoritma
Sistem menggunakan Knowledge-Based System untuk menyimpan dan menerapkan aturan kurikulum, seperti prasyarat, batas SKS, dan ketersediaan mata kuliah. Setelah mendapatkan mata kuliah yang memenuhi aturan, sistem menggunakan DFS (Depth-First Search) dengan Bactracking untuk mencari kombinasi mata kuliah yang sesuai dengan batas SKS dan prioritas.

## Cara Menggunakan
1. Buka Live Demo TB StudyPlan AI.
2. Masukkan IPS sebelumnya.
3. Pilih semester yang sedang ditempuh.
4. Pilih mata kuliah yang sudah ditempuh dan sudah lulus.
5. Pilih spesialisasi jika diperlukan.
6. Jalankan proses rekomendasi.
7. Sistem menampilkan mata kuliah yang direkomendasikan, mata kuliah tambahan, serta mata kuliah yang belum dapat diambil beserta alasannya.

### Live Demo
https://chocopie562lin.github.io/TB-StudyPlan-AI/

const KNOWLEDGE_BASE = {
  "general": [
    {
      "id": 1,
      "semester": 1,
      "name": "Anatomi Manusia (Human Anatomy)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 2,
      "semester": 1,
      "name": "Pengantar Keilmuan Teknik Biomedis (Introduction to Biomedical Engineering Science)",
      "sks": 1,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 3,
      "semester": 1,
      "name": "Aljabar (Algebra)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 4,
      "semester": 1,
      "name": "Fisika Dasar (Basic Physics)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 5,
      "semester": 1,
      "name": "Kalkulus (Calculus)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 6,
      "semester": 1,
      "name": "Kimia Dasar (Basic Chemistry)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 7,
      "semester": 1,
      "name": "Pemrograman Dasar (Fundamental of Programming)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 8,
      "semester": 1,
      "name": "Probabilitas dan Variabel Acak (Probability and Random Variables)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 9,
      "semester": 2,
      "name": "Analisis Variabel Kompleks (Complex Variable Analysis)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 10,
      "semester": 2,
      "name": "Biologi Sel dan Genetika (Cell Biology and Genetics)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 11,
      "semester": 2,
      "name": "Fenomena Biotransport (Biotransport Phenomenon)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 12,
      "semester": 2,
      "name": "Fisika Listrik Magnet Gelombang (Electricity, Magnetism and Waves)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 13,
      "semester": 2,
      "name": "Fisiologi Manusia (Human Physiology)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 14,
      "semester": 2,
      "name": "Konsep Keteknikan untuk Peradaban / Sustainable Future Skill (Engineering and Civilization)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 15,
      "semester": 2,
      "name": "Prakt. Pemrograman Dasar (Fundamentals of Programming Lab Work)",
      "sks": 1,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 16,
      "semester": 2,
      "name": "Kalkulus Variabel Jamak (Multi-Variable Calculus)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 17,
      "semester": 2,
      "name": "Statistika (Statistics)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 18,
      "semester": 3,
      "name": "Analisis Untai Elektrik DC (DC Circuits Analysis)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Fisika Listrik Magnet Gelombang",
        "Aljabar"
      ],
      "type": "Wajib"
    },
    {
      "id": 19,
      "semester": 3,
      "name": "Elektronika Dasar (Fundamentals of Electronics)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Fisika Listrik Magnet Gelombang"
      ],
      "type": "Wajib"
    },
    {
      "id": 20,
      "semester": 3,
      "name": "Teknik Biomagnetika (Biomagnetics Engineering)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Kalkulus Variabel Jamak"
      ],
      "type": "Wajib"
    },
    {
      "id": 21,
      "semester": 3,
      "name": "Bahasa Indonesia dan Komunikasi Profesional (Bahasa Indonesia and Professional Communication)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0, 1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 22,
      "semester": 3,
      "name": "Prakt. Sains Dasar (Basic Science Lab Work)",
      "sks": 1,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Praktikum Pemrograman Dasar"
      ],
      "type": "Wajib"
    },
    {
      "id": 23,
      "semester": 3,
      "name": "Persamaan Diferensial (Differential Equations)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Kalkulus Variabel Jamak"
      ],
      "type": "Wajib"
    },
    {
      "id": 24,
      "semester": 3,
      "name": "Matematika Diskrit (Discrete Mathematics)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Kalkulus Variabel Jamak"
      ],
      "type": "Wajib"
    },
    {
      "id": 25,
      "semester": 3,
      "name": "Metode Numeris (Numerical Methods)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Aljabar",
        "Pemrograman Dasar"
      ],
      "type": "Wajib"
    },
    {
      "id": 26,
      "semester": 4,
      "name": "Algoritma Struktur Data (Data Structure Algorithms)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Matematika Diskrit",
        "Statistika",
        "Pemrograman Dasar"
      ],
      "type": "Wajib"
    },
    {
      "id": 27,
      "semester": 4,
      "name": "Elektronika Biomedis (Biomedical Electronics)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Elektronika Dasar"
      ],
      "type": "Wajib"
    },
    {
      "id": 28,
      "semester": 4,
      "name": "Pengukuran dan Instrumentasi Biomedis (Biomedical Measurement and Instrumentation)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Elektronika Dasar",
        "Statistika",
        "Fisiologi Manusia"
      ],
      "type": "Wajib"
    },
    {
      "id": 29,
      "semester": 4,
      "name": "Proyek Junior Teknik Biomedis (Biomedical Engineering Junior Projects)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Prakt. Sains Dasar"
      ],
      "type": "Wajib"
    },
    {
      "id": 30,
      "semester": 4,
      "name": "Sensor, Aktuator, dan Antarmuka (Sensors, Actuators, and Interfaces)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Analisis Untai Elektrik DC",
        "Elektronika Dasar",
        "Kimia Dasar"
      ],
      "type": "Wajib"
    },
    {
      "id": 31,
      "semester": 4,
      "name": "Teknik Biomaterial (Biomaterial Engineering)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Anatomi Manusia",
        "Kimia Dasar",
        "Fenomena Biotransport"
      ],
      "type": "Wajib"
    },
    {
      "id": 32,
      "semester": 4,
      "name": "Teknik Digital dan Mikroprosesor (Digital Systems and Microprocessor)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Matematika Diskrit"
      ],
      "type": "Wajib"
    },
    {
      "id": 33,
      "semester": 4,
      "name": "Pancasila (Pancasila)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0, 1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 34,
      "semester": 4,
      "name": "Isyarat dan Sistem (Signals and Systems)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Persamaan Diferensial",
        "Analisis Variabel Kompleks",
        "Aljabar"
      ],
      "type": "Wajib"
    },
    {
      "id": 35,
      "semester": 5,
      "name": "Pengolahan Isyarat dan Citra Biomedis (Biomedical Signal and Image Processing)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Isyarat dan Sistem",
        "Biologi Sel dan Genetika"
      ],
      "type": "Wajib"
    },
    {
      "id": 36,
      "semester": 5,
      "name": "Proyek Senior Teknik Biomedis (Biomedical Engineering Senior Projects)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Proyek Junior Teknik Biomedis"
      ],
      "type": "Wajib"
    },
    {
      "id": 37,
      "semester": 5,
      "name": "Regulasi dan Standar Alat Kesehatan (Medical Device Regulations and Standards)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Pengukuran dan Instrumentasi Biomedis",
        "Elektronika Biomedis",
        "Sensor, Aktuator, dan Antarmuka"
      ],
      "type": "Wajib"
    },
    {
      "id": 38,
      "semester": 5,
      "name": "Teknik Biomekanika (Biomechanical Engineering)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Fisiologi Manusia",
        "Sensor, Aktuator, dan Antarmuka"
      ],
      "type": "Wajib"
    },
    {
      "id": 39,
      "semester": 5,
      "name": "Teknik Kendali Biomedis (Biomedical Control Systems)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Sensor, Aktuator, dan Antarmuka",
        "Teknik Digital dan Mikroprosesor",
        "Isyarat dan Sistem"
      ],
      "type": "Wajib"
    },
    {
      "id": 40,
      "semester": 5,
      "name": "Teknik Pencitraan Biomedis (Biomedical Imaging)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Teknik Biomagnetika",
        "Metode Numeris",
        "Fenomena Biotransport"
      ],
      "type": "Wajib"
    },
    {
      "id": 41,
      "semester": 5,
      "name": "Humaniora Digital (Digital Humanities)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0, 1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 42,
      "semester": 5,
      "name": "Kewarganegaraan (Civics)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0, 1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 43,
      "semester": 5,
      "name": "Kecerdasan Artifisial (Artificial Intelligence)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Kalkulus Variabel Jamak",
        "Algoritma Struktur Data"
      ],
      "type": "Wajib"
    },
    {
      "id": 44,
      "semester": 6,
      "name": "Etika Teknik Biomedis (Biomedical Engineering Ethics)",
      "sks": 1,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Kecerdasan Artifisial",
        "Regulasi dan Standar Alat Kesehatan",
        "Teknik Biomekanika"
      ],
      "type": "Wajib"
    },
    {
      "id": 45,
      "semester": 6,
      "name": "Spesialisasi 1 (Specialization 1)",
      "sks": 15,
      "minSks": 0,
      "semesterRule": "0,1",
      "prerequisites": [
        "Pengantar Keilmuan Teknik Biomedis",
        "Prerequisite Matkul"
      ],
      "type": "Wajib"
    },
    {
      "id": 48,
      "semester": 6,
      "name": "Proyek Individu (Individual Projects)",
      "sks": 3,
      "minSks": 0,
      "semesterRule": "0,1",
      "prerequisites": [
        "Proyek Senior Teknik Biomedis"
      ],
      "type": "Wajib"
    },
    {
      "id": 49,
      "semester": 7,
      "name": "Proyek Perancangan Teknik Biomedis 1 (Capstone Project 1)",
      "sks": 2,
      "minSks": 80,
      "semesterRule": "1",
      "prerequisites": [
        "Proyek Senior Teknik Biomedis"
      ],
      "type": "Wajib"
    },
    {
      "id": 50,
      "semester": 7,
      "name": "Spesialisasi Industri (Industry Specialization)",
      "sks": 4,
      "minSks": 0,
      "semesterRule": "1",
      "prerequisites": [
        "Pengantar Keilmuan Teknik Biomedis"
      ],
      "type": "Wajib"
    },
    {
      "id": 51,
      "semester": 7,
      "name": "Magang Industri (Industrial Internship)",
      "sks": 2,
      "minSks": 60,
      "semesterRule": "0,1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 52,
      "semester": 7,
      "name": "Agama (Religion)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0, 1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 53,
      "semester": 7,
      "name": "KKN-PPM (Community Service and Public Empowerment Learning)",
      "sks": 8,
      "minSks": 100,
      "semesterRule": "0,1",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 54,
      "semester": 8,
      "name": "Kewirausahaan Biomedis (Biomedical Entrepreneurship)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 55,
      "semester": 8,
      "name": "Proyek Perancangan Teknik Biomedis 2 (Capstone Project 2)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [
        "Proyek Perancangan Teknik Biomedis 1"
      ],
      "type": "Wajib"
    },
    {
      "id": 56,
      "semester": 8,
      "name": "Literasi Kesehatan / K5L (Health Literacy)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    },
    {
      "id": 57,
      "semester": 8,
      "name": "Kuliah Umum (Studium Generale)",
      "sks": 2,
      "minSks": 0,
      "semesterRule": "0",
      "prerequisites": [],
      "type": "Wajib"
    }
  ],
  "specialization": [
    {
      "id": 1,
      "specialization": "1 (Diagnostik Pencitraan Biomedis Cerdas)",
      "name": "Analisis Citra Biomedis (Biomedical Image Analysis)",
      "sks": 3,
      "prerequisites": [
        "Pengolahan Isyarat dan Citra Biomedis"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 2,
      "specialization": "1 (Diagnostik Pencitraan Biomedis Cerdas)",
      "name": "Analisis Sinyal Biomedis Multimodal (Multimodal Biomedical Signal Analysis)",
      "sks": 3,
      "prerequisites": [
        "Pengolahan Isyarat dan Citra Biomedis"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 3,
      "specialization": "1 (Diagnostik Pencitraan Biomedis Cerdas)",
      "name": "Bioinformatika, Genomik dan Proteomik (Bioinformatics, Genomics and Proteomics)",
      "sks": 3,
      "prerequisites": [
        "Pengolahan Isyarat dan Citra Biomedis, Biologi Sel dan Genetika"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 4,
      "specialization": "1 (Diagnostik Pencitraan Biomedis Cerdas)",
      "name": "Clinical Procedure, Safety, & Diagnostics (Clinical Procedures, Patient Safety, and Diagnostic Systems)",
      "sks": 2,
      "prerequisites": [
        "Regulasi dan Standar Alat Kesehatan"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 5,
      "specialization": "1 (Diagnostik Pencitraan Biomedis Cerdas)",
      "name": "Komputasi Biologi (Computational Biology)",
      "sks": 2,
      "prerequisites": [
        "Pengolahan Isyarat dan Citra Biomedis, Biologi Sel dan Genetika"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 6,
      "specialization": "1 (Diagnostik Pencitraan Biomedis Cerdas)",
      "name": "Tomografi Biomedis (Biomedical Tomography)",
      "sks": 2,
      "prerequisites": [
        "Teknik Pencitraan Biomedis"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 7,
      "specialization": "2 (Telemedicine)",
      "name": "Internet of Medical Things (Internet of Medical Things)",
      "sks": 2,
      "prerequisites": [
        "Teknik Digital dan Mikroprosesor"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 8,
      "specialization": "2 (Telemedicine)",
      "name": "Jaringan Komunikasi Data (Data Communication Networks)",
      "sks": 3,
      "prerequisites": [
        "Teknik Digital dan Mikroprosesor, Pengukuran dan Instrumentasi Biomedis"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 9,
      "specialization": "2 (Telemedicine)",
      "name": "Keamanan Biosiber (Cybersecurity)",
      "sks": 3,
      "prerequisites": [],
      "type": "Spesialisasi"
    },
    {
      "id": 10,
      "specialization": "2 (Telemedicine)",
      "name": "Komputasi Awan (Cloud Computing)",
      "sks": 2,
      "prerequisites": [],
      "type": "Spesialisasi"
    },
    {
      "id": 11,
      "specialization": "2 (Telemedicine)",
      "name": "Sistem Komunikasi (Communication Systems)",
      "sks": 2,
      "prerequisites": [
        "Isyarat dan Sistem"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 12,
      "specialization": "2 (Telemedicine)",
      "name": "Teknik Telekomunikasi (Telecommunication Engineering)",
      "sks": 3,
      "prerequisites": [],
      "type": "Spesialisasi"
    },
    {
      "id": 13,
      "specialization": "3 (Sistem Biomedis Terintegrasi Manusia)",
      "name": "Antarmuka dan Pengalaman Pengguna (Human Interface and User Experience)",
      "sks": 2,
      "prerequisites": [
        "Sensor, Aktuator, dan Antarmuka",
        "Algoritma Struktur Data"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 14,
      "specialization": "3 (Sistem Biomedis Terintegrasi Manusia)",
      "name": "Manajemen Informasi Biomedis (Biomedical Information Management)",
      "sks": 2,
      "prerequisites": [
        "Algoritma Struktur Data"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 15,
      "specialization": "3 (Sistem Biomedis Terintegrasi Manusia)",
      "name": "Sibernetika Biomedis (Biomedical Cybernetics)",
      "sks": 2,
      "prerequisites": [
        "Teknik Kendali Biomedis",
        "Kecerdasan Artifisial"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 16,
      "specialization": "3 (Sistem Biomedis Terintegrasi Manusia)",
      "name": "Sistem Instrumentasi Biomedis Cerdas (Intelligent Biomedical Instrumentation Systems)",
      "sks": 3,
      "prerequisites": [
        "Pengukuran & Instrumentasi Biomedis",
        "Kecerdasan Artifisial"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 17,
      "specialization": "3 (Sistem Biomedis Terintegrasi Manusia)",
      "name": "Sistem Manusia-Mesin (Human–Machine Systems)",
      "sks": 3,
      "prerequisites": [
        "Sensor, Aktuator, dan Antarmuka",
        "Pengolahan Isyarat dan Citra Biomedis"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 18,
      "specialization": "3 (Sistem Biomedis Terintegrasi Manusia)",
      "name": "Teknologi Asistif dan Rehabilitasi (Assistive and Rehabilitation Technology)",
      "sks": 3,
      "prerequisites": [
        "Teknik Biomekanika"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 19,
      "specialization": "4 (Manufaktur Biomedis Tingkat Lanjut)",
      "name": "Bioelectrochemistry (Bioelectrochemistry)",
      "sks": 2,
      "prerequisites": [
        "Elektronika Biomedis, Sensor, Aktuator, dan Antarmuka"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 20,
      "specialization": "4 (Manufaktur Biomedis Tingkat Lanjut)",
      "name": "Biomedical IC Design (Biomedical Integrated Circuit Design)",
      "sks": 3,
      "prerequisites": [
        "Elektronika Biomedis, Teknik Digital dan Mikroprosesor"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 21,
      "specialization": "4 (Manufaktur Biomedis Tingkat Lanjut)",
      "name": "Microelectronics (Microelectronics)",
      "sks": 3,
      "prerequisites": [
        "Teknik Biomaterial, Elektronika Biomedis"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 22,
      "specialization": "4 (Manufaktur Biomedis Tingkat Lanjut)",
      "name": "Microfluidic Lab-on-Chip (Microfluidic Lab-on-Chip)",
      "sks": 2,
      "prerequisites": [
        "Teknik Biomaterial, Elektronika Biomedis"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 23,
      "specialization": "4 (Manufaktur Biomedis Tingkat Lanjut)",
      "name": "Robotika Biomedis (Biomedical Robotics)",
      "sks": 2,
      "prerequisites": [
        "Teknik Kendali Biomedis, Sensor, Aktuator, dan Antarmuka"
      ],
      "type": "Spesialisasi"
    },
    {
      "id": 24,
      "specialization": "4 (Manufaktur Biomedis Tingkat Lanjut)",
      "name": "Sistem Otomasi Biomedis (Biomedical Automation Systems)",
      "sks": 3,
      "prerequisites": [
        "Kecerdasan Artifisial, Teknik Kendali Biomedis"
      ],
      "type": "Spesialisasi"
    }
  ],
  "ipsRules": [
    {
      "min": 3,
      "max": 4,
      "maxSks": 24
    },
    {
      "min": 2.5,
      "max": 2.99,
      "maxSks": 20
    },
    {
      "min": 2,
      "max": 2.49,
      "maxSks": 15
    },
    {
      "min": 0,
      "max": 1.99,
      "maxSks": 12
    }
  ],
  "targetSks": 144
};;

// Baris "Spesialisasi 1–4" pada sheet umum adalah penanda kelompok, bukan mata kuliah.
// Mata kuliah spesialisasi yang sebenarnya berasal dari sheet Matkul spesialisasi.
KNOWLEDGE_BASE.general = KNOWLEDGE_BASE.general.filter(c => !/^Spesialisasi\s*[1-4]\b/i.test(String(c.name||'')));

function normalizeName(name){return String(name||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/prakt\.?/g,'praktikum').replace(/[–—]/g,'-').replace(/&/g,'dan').replace(/\([^)]*\)/g,'').replace(/\s+/g,' ').trim()}
const ALIASES={
'praktikum pemrograman dasar':'Prakt. Pemrograman Dasar (Fundamentals of Programming Lab Work)',
'sensor':'Sensor, Aktuator, dan Antarmuka (Sensors, Actuators, and Interfaces)','aktuator':'Sensor, Aktuator, dan Antarmuka (Sensors, Actuators, and Interfaces)','dan antarmuka':'Sensor, Aktuator, dan Antarmuka (Sensors, Actuators, and Interfaces)','sensor aktuator antarmuka':'Sensor, Aktuator, dan Antarmuka (Sensors, Actuators, and Interfaces)',
'pengukuran dan instrumentasi biomedis':'Pengukuran dan Instrumentasi Biomedis (Biomedical Measurement and Instrumentation)','elektronika biomedis':'Elektronika Biomedis (Biomedical Electronics)','teknik digital dan mikroprosesor':'Teknik Digital dan Mikroprosesor (Digital Systems and Microprocessor)','isyarat dan sistem':'Isyarat dan Sistem (Signals and Systems)','algoritma struktur data':'Algoritma Struktur Data (Data Structure Algorithms)','metode numeris':'Metode Numeris (Numerical Methods)','kalkulus variabel jamak':'Kalkulus Variabel Jamak (Multi-Variable Calculus)','fenomena biotransport':'Fenomena Biotransport (Biotransport Phenomenon)','teknik biomekanika':'Teknik Biomekanika (Biomechanical Engineering)','teknik biomagnetika':'Teknik Biomagnetika (Biomagnetics Engineering)','kecerdasan artifisial':'Kecerdasan Artifisial (Artificial Intelligence)'};
function resolvePrereq(p,all){const n=normalizeName(p);if(ALIASES[n])return ALIASES[n];const m=all.find(c=>normalizeName(c.name)===n);if(m)return m.name;const frag=all.find(c=>normalizeName(c.name).includes(n)||n.includes(normalizeName(c.name)));return frag?frag.name:p}
function prereqCheck(c,passed,all){
  const req=(c.prerequisites||[]).map(p=>resolvePrereq(p,all)).filter(Boolean);
  const missing=req.filter(p=>!passed.has(normalizeName(p)));
  return{eligible:missing.length===0,missing};
}
function specGroupLabel(group){
  const m=String(group||'').match(/^([1-4])\s*\((.*)\)$/);
  return m?`Spesialisasi ${m[1]} — ${m[2]}`:group;
}
function specGroupTotalSks(group){
  return KNOWLEDGE_BASE.specialization.filter(c=>c.specialization===group).reduce((a,c)=>a+c.sks,0);
}
function isSpecCourse(c){return c.type==='Spesialisasi' || !!c.specialization;}
function specTakenCount(taken,all){
  const set=new Set(taken.map(normalizeName));
  return all.filter(c=>isSpecCourse(c)&&set.has(normalizeName(c.name))).length;
}
function specTakenSks(taken,all){
  const set=new Set(taken.map(normalizeName));
  return all.filter(c=>isSpecCourse(c)&&set.has(normalizeName(c.name))).reduce((a,c)=>a+c.sks,0);
}
function currentSelectionWithProjectConstraint(cands,limit,sem,takenSpecCount){
  function walk(i,current,best){
    const sum=current.reduce((a,c)=>a+c.sks,0);
    if(sum>limit)return best;
    const projectChosen=current.some(c=>normalizeName(c.name)===normalizeName('Proyek Individu (Individual Projects)'));
    const specCount=takenSpecCount+current.filter(isSpecCourse).length;
    const validProject=!projectChosen || specCount>=4;
    const score=current.reduce((a,c)=>a+currentPriority(c,sem),0);
    const bestScore=best.reduce((a,c)=>a+currentPriority(c,sem),0);
    const bestSks=best.reduce((a,c)=>a+c.sks,0);
    if(validProject && (sum>bestSks || (sum===bestSks && (score>bestScore || (score===bestScore&&current.length>best.length)))))best=[...current];
    if(i>=cands.length)return best;
    for(let j=i;j<cands.length;j++)best=walk(j+1,[...current,cands[j]],best);
    return best;
  }
  return walk(0,[],[]);
}
function maxSks(ips){const r=KNOWLEDGE_BASE.ipsRules.find(x=>ips>=x.min&&ips<=x.max);return r?r.maxSks:12}

/* Dari kolom spreadsheet:
   "Prerequisite (Jumlah sks minimal; semester ganjil(1)/genap(0); matkul prasyarat)"
   semesterRule = 1 hanya ganjil, 0 hanya genap, 0,1 = dibuka setiap semester. */
function isOpenThisSemester(course,sem){
  const raw=String(course.semesterRule??'').replace(/\s/g,'');
  if(!raw)return true;
  if(raw.includes('0,1')||raw.includes('1,0'))return true;
  if(sem%2===1)return raw==='1';
  return raw==='0';
}
function isEverySemester(course){
  const raw=String(course.semesterRule??'').replace(/\s/g,'');
  return raw.includes('0,1')||raw.includes('1,0');
}
function dfs(cands,i,limit,current,best,scoreFn){
  const sum=current.reduce((a,c)=>a+c.sks,0),bs=best.reduce((a,c)=>a+c.sks,0);
  const score=(scoreFn?current.reduce((a,c)=>a+scoreFn(c),0):0);
  const bscore=(scoreFn?best.reduce((a,c)=>a+scoreFn(c),0):0);
  if(sum>limit)return best;
  if(sum>bs||(sum===bs&&(score>bscore||(score===bscore&&current.length>best.length))))best=[...current];
  if(i>=cands.length)return best;
  for(let j=i;j<cands.length;j++)if(sum+cands[j].sks<=limit)best=dfs(cands,j+1,limit,[...current,cands[j]],best,scoreFn);
  return best;
}
function reason(c,sem,isSpec,extra=false){
  let a=[];
  if(isSpec)a.push('Termasuk mata kuliah spesialisasi yang sedang dipertimbangkan.');
  else if(extra&&isEverySemester(c))a.push('Dibuka setiap semester (ganjil maupun genap), sehingga fleksibel untuk mengisi kapasitas SKS.');
  else if(extra&&c.semester<sem)a.push(`Mata kuliah semester ${c.semester} yang belum diambil dan masih perlu diselesaikan.`);
  else if(extra&&c.semester>sem)a.push(`Berasal dari semester ${c.semester}, tetapi dibuka pada semester ini dan prerequisite telah terpenuhi.`);
  else a.push(c.type==='Wajib'?`Mata kuliah wajib semester ${sem}.`:'Mata kuliah yang tersedia pada semester ini.');
  if((c.prerequisites||[]).length)a.push('Prerequisite telah terpenuhi.');else a.push('Tidak memiliki prerequisite.');
  if(normalizeName(c.name)===normalizeName('Proyek Individu (Individual Projects)'))a.push('Syarat Proyek Individu adalah minimal 4 mata kuliah spesialisasi; mata kuliah spesialisasi dapat diambil pada semester yang sama.');
  if(c.minSks>0)a.push(`Syarat minimal ${c.minSks} SKS kumulatif terpenuhi.`);
  return a.join(' ');
}
function courseCheckList(courses,passed,all,totalTakenSks){
  return courses.filter(c=>!passed.has(normalizeName(c.name))).map(c=>{
    const p=prereqCheck(c,passed,all);
    const minSksOK=totalTakenSks >= Number(c.minSks||0);
    return {...c,pr:p,minSksOK,eligible:p.eligible&&minSksOK};
  });
}
function currentPriority(c,sem){
  const type=c.type==='Wajib'?3:2;
  return (c.semester===sem?100:0)+type;
}
function additionalPriority(c,sem){
  const older=c.semester<sem?1200:0;
  const every=isEverySemester(c)?1000:0;
  const upper=c.semester>sem?100:0;
  const required=c.type==='Wajib'?20:10;
  return every+older+upper+required+(isSpecCourse(c)?5:0);
}
function recommend(ips,sem,taken,specPlans=[]){
  const all=[...KNOWLEDGE_BASE.general,...KNOWLEDGE_BASE.specialization];
  const passed=new Set(taken.map(normalizeName));
  const takenCourses=all.filter(c=>passed.has(normalizeName(c.name)));
  const total=takenCourses.reduce((a,c)=>a+c.sks,0);
  const limit=maxSks(ips);
  const takenSpecCount=specTakenCount(taken,all);
  const takenSpecSks=specTakenSks(taken,all);

  let current=KNOWLEDGE_BASE.general.filter(c=>c.semester===sem&&isOpenThisSemester(c,sem));
  const plannedGroups=Array.isArray(specPlans)?specPlans:[];
  const plannedSpecCourses=KNOWLEDGE_BASE.specialization.filter(c=>plannedGroups.includes(c.specialization)&&isOpenThisSemester(c,sem));
  current=current.concat(plannedSpecCourses);

  let checked=courseCheckList(current,passed,all,total);
  checked=checked.map(c=>{
    if(normalizeName(c.name)===normalizeName('Proyek Individu (Individual Projects)')){
      const eligibleProject=sem>=6 && takenSpecCount>=4;
      const missing=[];
      const possibleCount=takenSpecCount+plannedSpecCourses.filter(x=>!passed.has(normalizeName(x.name))&&prereqCheck(x,passed,all).eligible).length;
      const projectCanBeCompletedTogether=sem>=6 && possibleCount>=4;
      const seniorOK=passed.has(normalizeName('Proyek Senior Teknik Biomedis (Biomedical Engineering Senior Projects)'));
      const finalEligible=seniorOK && (eligibleProject || projectCanBeCompletedTogether);
      if(!seniorOK)missing.push('Proyek Senior Teknik Biomedis');
      if(takenSpecCount<4 && possibleCount<4)missing.push(`minimal 4 mata kuliah spesialisasi (saat ini ${takenSpecCount})`);
      return {...c,pr:{eligible:finalEligible,missing},minSksOK:true,specializationTakenCount:takenSpecCount,specializationPossibleCount:possibleCount};
    }
    return c;
  });
  const eligible=checked.filter(c=>c.eligible);
  const blocked=checked.filter(c=>!c.eligible);
  const ordered=[...eligible].sort((a,b)=>currentPriority(b,sem)-currentPriority(a,sem)||b.sks-a.sks||a.id-b.id);
  const selected=currentSelectionWithProjectConstraint(ordered,limit,sem,takenSpecCount);
  const chosen=new Set(selected.map(c=>normalizeName(c.name)));
  const currentSks=selected.reduce((a,c)=>a+c.sks,0);
  const room=Math.max(0,limit-currentSks);

  // Semua kandidat tambahan masuk ke pool yang sama. Tidak ada lagi pembagian
  // UI menjadi semester bawah / setiap semester / semester atas / alternatif.
  let additionalChecked=courseCheckList(
    all.filter(c=>!chosen.has(normalizeName(c.name))),passed,all,total
  ).filter(c=>c.eligible&&isOpenThisSemester(c,sem));
  additionalChecked=additionalChecked.filter(c=>{
    if(!isSpecCourse(c))return true;
    return plannedGroups.includes(c.specialization);
  });
  const additionalPool=[...additionalChecked].sort((a,b)=>
    additionalPriority(b,sem)-additionalPriority(a,sem)||a.semester-b.semester||b.sks-a.sks||a.id-b.id
  );
  const additionalSelected=room>0?dfs(additionalPool,0,room,[],[],c=>additionalPriority(c,sem)):[];
  const additionalChosen=new Set(additionalSelected.map(c=>normalizeName(c.name)));
  const primaryRecommendations=selected.map(c=>({...c,recommendationType:'utama'}));
  const additionalRecommendations=additionalSelected.map(c=>({...c,recommendationType:'tambahan'}));
  const recommendations=[...primaryRecommendations,...additionalRecommendations];
  const recommendationSks=recommendations.reduce((a,c)=>a+c.sks,0);

  return{
    ips,sem,specPlans,total,limit,selected,blocked,eligible,remaining:Math.max(0,KNOWLEDGE_BASE.targetSks-total),
    currentSks,room,additionalSelected,additionalSks:additionalSelected.reduce((a,c)=>a+c.sks,0),
    primaryRecommendations,primarySks:selected.reduce((a,c)=>a+c.sks,0),additionalRecommendations,
    recommendations,recommendationSks,takenSpecCount,takenSpecSks,plannedGroups,
    specializationTargetMet:takenSpecSks>=15,
    specializationTargetRemaining:Math.max(0,15-takenSpecSks),
    otherEligible:additionalPool.filter(c=>!additionalChosen.has(normalizeName(c.name)))
  };
}

const chat=document.getElementById('chat');let state={step:'start',ips:null,sem:null,taken:[],specTaken:[],specPlans:[]};
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function addBot(html){const d=document.createElement('div');d.className='msg';d.innerHTML=`<div class="avatar">AI</div><div class="bubble">${html}</div>`;chat.appendChild(d);d.scrollIntoView({behavior:'smooth',block:'end'});return d}
function addUser(text){const d=document.createElement('div');d.className='msg user';d.innerHTML=`<div class="bubble">${esc(text)}</div><div class="avatar">YOU</div>`;chat.appendChild(d);d.scrollIntoView({behavior:'smooth',block:'end'})}
function askStart(){addBot(`<p>Halo! Aku bisa bantu menyusun rekomendasi mata kuliah berdasarkan data kurikulum.</p><div class="panel"><div class="grid"><div class="field"><label>IPS terakhir</label><input id="ipsInput" type="number" min="0" max="4" step="0.01" placeholder="Contoh: 3.50"></div><div class="field"><label>Semester saat ini</label><select id="semInput">${Array.from({length:8},(_,i)=>`<option value="${i+1}">Semester ${i+1}</option>`).join('')}</select></div></div><div class="actions"><button class="btn primary" onclick="submitStart()">Lanjutkan →</button></div></div>`)}
function submitStart(){const ips=Number(document.getElementById('ipsInput').value),sem=Number(document.getElementById('semInput').value);if(!Number.isFinite(ips)||ips<0||ips>4)return;state.ips=ips;state.sem=sem;addUser(`IPS ${ips.toFixed(2)} · Semester ${sem}`);if(sem===1)askSpecHistory();else askTaken()}
function askTaken(){const courses=KNOWLEDGE_BASE.general.filter(c=>c.semester<state.sem);let cur=0,body='';for(const c of courses){if(c.semester!==cur){cur=c.semester;body+=`<div class="sem-head"><span>Semester ${cur}</span><button type="button" class="sem-action" onclick="toggleSemester(${cur})">Pilih semua</button></div>`}body+=`<label class="course"><input type="checkbox" data-sem="${c.semester}" value="${esc(c.name)}" onchange="updateTakenCount()"><span class="course-name">${esc(c.name)}</span><span class="sks">${c.sks} SKS</span></label>`}addBot(`<p>Oke. Sekarang pilih mata kuliah dari semester sebelumnya yang <b>sudah kamu ambil/lulus</b>. Aku akan menghitung total SKS otomatis.</p><div class="panel"><div class="course-wrap">${body||'<div class="empty-card">Belum ada semester sebelumnya.</div>'}</div><div class="summary"><span id="takenCount">0 mata kuliah</span><b id="takenSks">0 SKS</b></div><div class="actions"><button class="btn primary" onclick="submitTaken()">Sudah, lanjut →</button></div></div>`)}
function toggleSemester(sem){const boxes=[...document.querySelectorAll(`.course input[data-sem="${sem}"]`)];if(!boxes.length)return;const shouldCheck=boxes.some(x=>!x.checked);boxes.forEach(x=>x.checked=shouldCheck);updateTakenCount()}
function updateTakenCount(){const boxes=[...document.querySelectorAll('.course input:checked')];const names=boxes.map(x=>x.value);const all=[...KNOWLEDGE_BASE.general,...KNOWLEDGE_BASE.specialization];const sks=all.filter(c=>names.includes(c.name)).reduce((a,c)=>a+c.sks,0);document.getElementById('takenCount').textContent=`${boxes.length} mata kuliah`;document.getElementById('takenSks').textContent=`${sks} SKS`}
function submitTaken(){state.taken=[...document.querySelectorAll('.course input:checked')].map(x=>x.value);const all=[...KNOWLEDGE_BASE.general,...KNOWLEDGE_BASE.specialization];const sks=all.filter(c=>state.taken.includes(c.name)).reduce((a,c)=>a+c.sks,0);addUser(`${state.taken.length} mata kuliah sudah diambil · total ${sks} SKS`);askSpecHistory()}
function askSpecHistory(){
  const groups=[...new Set(KNOWLEDGE_BASE.specialization.map(c=>c.specialization))];
  addBot(`<p>Selanjutnya, pilih <b>spesialisasi yang pernah kamu ambil</b>. Kamu boleh memilih lebih dari satu bidang karena mata kuliah spesialisasi dapat digabung. <b>Target kelulusan spesialisasi adalah minimal 15 SKS total</b> dari Spesialisasi 1–4.</p><div class="panel"><div class="choice-grid">${groups.map((g,i)=>`<div class="choice"><input type="checkbox" class="spec-history-group" id="hist${i}" value="${esc(g)}"><label for="hist${i}"><div class="choice-title">${esc(specGroupLabel(g))}</div><div class="choice-sub">${specGroupTotalSks(g)} SKS tersedia di bidang ini.</div></label></div>`).join('')}</div><div class="actions"><button class="btn primary" onclick="submitSpecHistoryGroups()">Lanjut →</button></div></div>`)
}
function submitSpecHistoryGroups(){
  const groups=[...document.querySelectorAll('.spec-history-group:checked')].map(x=>x.value);
  state._specHistoryGroups=groups;
  if(!groups.length){state.specTaken=[];addUser('Belum ada mata kuliah spesialisasi yang diambil');finishSpecHistory();return;}
  let body='';
  for(const g of groups){body+=`<div class="sem-head"><span>${esc(specGroupLabel(g))}</span><small>${specGroupTotalSks(g)} SKS tersedia</small></div>`;for(const c of KNOWLEDGE_BASE.specialization.filter(x=>x.specialization===g)){body+=`<label class="course"><input type="checkbox" class="spec-history-course" value="${esc(c.name)}" onchange="updateSpecHistoryCount()"><span class="course-name">${esc(c.name)}</span><span class="sks">${c.sks} SKS</span></label>`}}
  addBot(`<p>Oke. Sekarang centang <b>mata kuliah spesialisasi yang sudah kamu ambil/lulus</b>. Sistem akan menghitung jumlah mata kuliah dan total SKS spesialisasi secara terpisah.</p><div class="panel"><div class="course-wrap">${body}</div><div class="summary"><span id="specTakenCount">0 mata kuliah spesialisasi</span><b id="specTakenSks">0 SKS spesialisasi</b></div><div class="actions"><button class="btn primary" onclick="submitSpecHistoryCourses()">Simpan riwayat →</button></div></div>`)
}
function updateSpecHistoryCount(){const boxes=[...document.querySelectorAll('.spec-history-course:checked')];const all=[...KNOWLEDGE_BASE.general,...KNOWLEDGE_BASE.specialization];const sks=all.filter(c=>boxes.some(x=>normalizeName(x.value)===normalizeName(c.name))).reduce((a,c)=>a+c.sks,0);document.getElementById('specTakenCount').textContent=`${boxes.length} mata kuliah spesialisasi`;document.getElementById('specTakenSks').textContent=`${sks} SKS spesialisasi`}
function submitSpecHistoryCourses(){state.specTaken=[...document.querySelectorAll('.spec-history-course:checked')].map(x=>x.value);state.taken=[...state.taken,...state.specTaken];const all=[...KNOWLEDGE_BASE.general,...KNOWLEDGE_BASE.specialization];const set=new Set(state.taken.map(normalizeName));const total=all.filter(c=>set.has(normalizeName(c.name))).reduce((a,c)=>a+c.sks,0);const specCount=specTakenCount(state.taken,all);const specSks=specTakenSks(state.taken,all);const nonSpecCount=state.taken.length-specCount;const nonSpecSks=total-specSks;const targetLeft=Math.max(0,15-specSks);addUser(`${specCount} mata kuliah spesialisasi · ${specSks} SKS spesialisasi`);addBot(`<div class="panel"><div class="summary"><span>Spesialisasi</span><b>${specCount} mata kuliah · ${specSks} SKS</b></div><div class="summary"><span>Di luar spesialisasi</span><b>${nonSpecCount} mata kuliah · ${nonSpecSks} SKS</b></div><div class="summary"><span>Total riwayat</span><b>${state.taken.length} mata kuliah · ${total} SKS</b></div><div class="summary"><span>Sisa target spesialisasi untuk kelulusan</span><b>${targetLeft} SKS</b></div><div class="note">Syarat Proyek Individu dihitung terpisah: minimal 4 mata kuliah spesialisasi.</div></div>`);finishSpecHistory()}
function finishSpecHistory(){if(state.sem>=6)askSpecPlan();else addBot(`<p>Data riwayat sudah dicatat. Sekarang aku akan mengecek mata kuliah semester ${state.sem}, prerequisite, dan batas SKS berdasarkan IPS.</p><div class="actions"><button class="btn primary" onclick="showResult()">Analisis sekarang →</button></div>`)}
function askSpecPlan(){const groups=[...new Set(KNOWLEDGE_BASE.specialization.map(c=>c.specialization))];addBot(`<p><b>Apakah kamu berencana mengambil mata kuliah spesialisasi semester ini?</b></p><div class="panel"><div class="choice-grid"><div class="choice"><input type="radio" name="specPlan" id="specYes" value="yes"><label for="specYes"><div class="choice-title">Ya</div><div class="choice-sub">Aku akan mempertimbangkan mata kuliah spesialisasi dari bidang yang kamu pilih.</div></label></div><div class="choice"><input type="radio" name="specPlan" id="specNo" value="no"><label for="specNo"><div class="choice-title">Tidak</div><div class="choice-sub">Aku belum berencana mengambil mata kuliah spesialisasi.</div></label></div></div><div class="actions"><button class="btn primary" onclick="submitSpecPlan()">Lanjut →</button></div></div>`)}
function submitSpecPlan(){const x=document.querySelector('input[name="specPlan"]:checked');if(!x)return;if(x.value==='no'){state.specPlans=[];addUser('Tidak');addBot(`<p>Oke. Aku tidak akan memasukkan mata kuliah spesialisasi ke rekomendasi semester ini.</p><div class="actions"><button class="btn primary" onclick="showResult()">Analisis sekarang →</button></div>`);return;}addUser('Ya');askSpecPlanFields()}
function askSpecPlanFields(){const groups=[...new Set(KNOWLEDGE_BASE.specialization.map(c=>c.specialization))];addBot(`<p><b>Spesialisasi mana saja yang ingin kamu ambil/pertimbangkan semester ini?</b> Kamu boleh memilih lebih dari satu bidang. Pilihan ini menentukan kelompok mata kuliah spesialisasi yang akan dicari AI.</p><div class="panel"><div class="choice-grid">${groups.map((g,i)=>`<div class="choice"><input type="checkbox" class="spec-plan-group" id="plan${i}" value="${esc(g)}"><label for="plan${i}"><div class="choice-title">${esc(specGroupLabel(g))}</div><div class="choice-sub">${specGroupTotalSks(g)} SKS tersedia di bidang ini.</div></label></div>`).join('')}</div><div class="actions"><button class="btn primary" onclick="submitSpecPlans()">Tampilkan rekomendasi →</button></div></div>`)}
function submitSpecPlans(){state.specPlans=[...document.querySelectorAll('.spec-plan-group:checked')].map(x=>x.value);if(!state.specPlans.length)return;addUser(`${state.specPlans.length} bidang spesialisasi dipertimbangkan`);showResult()}
function showResult(){
  const r=recommend(state.ips,state.sem,state.taken,state.specPlans);
  const primarySks=r.selected.reduce((a,c)=>a+c.sks,0);
  let html=`<div class="result-head"><div><div class="result-title">Rekomendasi Semester ${r.sem}</div><div class="result-sub">Rekomendasi disusun berdasarkan prioritas, prerequisite, jadwal, dan kapasitas SKS.</div></div><span class="pill">${r.limit} SKS maksimal</span></div><div class="stats"><div class="stat"><small>IPS</small><strong>${r.ips.toFixed(2)}</strong></div><div class="stat"><small>SKS telah diambil</small><strong>${r.total} SKS</strong></div><div class="stat"><small>Spesialisasi</small><strong>${r.takenSpecCount} matkul · ${r.takenSpecSks} SKS</strong></div><div class="stat"><small>Total rekomendasi</small><strong>${r.recommendationSks} SKS</strong></div></div>`;
  if(r.specPlans&&r.specPlans.length)html+=`<div class="selected-spec"><span>Bidang spesialisasi yang dipertimbangkan</span><strong>${r.specPlans.map(specGroupLabel).map(esc).join(' · ')}</strong></div>`;
  html+=`<div class="selected-spec"><span>Target spesialisasi untuk kelulusan</span><strong>${r.takenSpecSks>=15?'✓ Minimal 15 SKS terpenuhi':`${r.takenSpecSks}/15 SKS · masih kurang ${Math.max(0,15-r.takenSpecSks)} SKS`}</strong><small>Syarat Proyek Individu: minimal 4 mata kuliah spesialisasi.</small></div>`;
  html+=`<div class="section-title"><div><span class="section-kicker">REKOMENDASI</span><h3>Mata kuliah yang direkomendasikan <span class="subheading">(Wajib semester &amp; spesialisasi)</span></h3></div><span class="section-total">${r.primarySks} SKS</span></div>`;
  html+=`<div class="recommendation-note">Mata kuliah wajib semester berjalan dan mata kuliah spesialisasi yang kamu pilih untuk dipertimbangkan semester ini.</div>`;
  html+=`<div class="rec-grid">`;
  if(r.primaryRecommendations.length){
    for(const c of r.primaryRecommendations){
      const sp=isSpecCourse(c);
      const tag=sp?'SPESIALISASI':c.type;
      html+=`<div class="rec"><div class="rec-top"><div class="rec-name">${esc(c.name)}</div><span class="tag ${sp?'spec':''}">${tag}</span></div><div class="rec-sks">${c.sks} SKS</div><p><b>Alasan:</b> ${esc(reason(c,r.sem,sp,false))}</p></div>`;
    }
  }else html+=`<div class="empty-card">Tidak ada mata kuliah semester berjalan atau spesialisasi yang memenuhi seluruh constraint untuk semester ini.</div>`;
  html+=`</div>`;
  if(r.room>0)html+=`<div class="add-total"><b>Sisa kapasitas:</b> ${r.room} SKS.</div>`;
  else html+=`<div class="add-total"><b>Kapasitas SKS semester ini sudah terisi.</b> Total rekomendasi ${r.recommendationSks} SKS dari maksimal ${r.limit} SKS.</div>`;

  html+=`<div class="section-title compact"><div><span class="section-kicker">TAMBAHAN</span><h3>Mata kuliah tambahan yang direkomendasikan</h3></div><span class="section-total">${r.additionalSks} SKS</span></div>`;
  html+=`<div class="rec-grid">`;
  if(r.additionalRecommendations.length){
    for(const c of r.additionalRecommendations){
      const sp=isSpecCourse(c);
      const tag=sp?'SPESIALISASI TAMBAHAN':'TAMBAHAN';
      html+=`<div class="rec"><div class="rec-top"><div class="rec-name">${esc(c.name)}</div><span class="tag ${sp?'spec':''}">${tag}</span></div><div class="rec-sks">${c.sks} SKS</div><p><b>Alasan:</b> ${esc(reason(c,r.sem,sp,true))}</p></div>`;
    }
  }else html+=`<div class="empty-card">Tidak ada mata kuliah tambahan yang memenuhi constraint untuk mengisi sisa kapasitas.</div>`;
  html+=`</div>`;

  if(r.blocked.length){
    html+=`<div class="section-title compact"><div><span class="section-kicker warning">TERTAHAN</span><h3>Belum dapat diambil</h3></div></div><div class="blocked">`;
    for(const c of r.blocked){
      const reasons=[];
      if(c.pr.missing.length)reasons.push(`Prerequisite belum terpenuhi: ${c.pr.missing.join(', ')}`);
      if(c.minSksOK===false)reasons.push(`Membutuhkan minimal ${c.minSks} SKS kumulatif.`);
      if(normalizeName(c.name)===normalizeName('Proyek Individu (Individual Projects)') && c.specializationPossibleCount!==undefined && c.specializationPossibleCount<4)reasons.push(`Proyek Individu membutuhkan minimal 4 mata kuliah spesialisasi. Saat ini ${c.specializationTakenCount||0} mata kuliah spesialisasi tercatat.`);
      html+=`<div class="blocked-item"><strong>${esc(c.name)} · ${c.sks} SKS</strong><p>${esc(reasons.join(' ')||'Constraint pengambilan belum terpenuhi.')}</p></div>`;
    }
    html+=`</div>`;
  }
  addBot(`<div class="panel result-panel">${html}</div><div class="actions"><button class="btn secondary" onclick="restart()">Mulai lagi</button></div>`)
}
function restart(){chat.innerHTML='';state={step:'start',ips:null,sem:null,taken:[],specTaken:[],specPlans:[]};askStart()}
askStart();

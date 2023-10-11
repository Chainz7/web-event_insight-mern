import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  CodeWave,
  Banner,
  Unm,
  Poster1,
  Poster2,
  Poster3,
  Poster4,
  Poster5,
  Poster6,
  Poster7,
  Poster8,
  Poster9,
} from "../assets";

export const jobTypes = ["Product", "Workshop", "Festival"];

export const experience = [
  { title: "Weekday", value: "0-4" },
  { title: "Weekend", value: "5-6" },
];

export const popularSearch = [
  "Food",
  "Product",
  "Festival",
  "Workshop",
  "Tournament",
  "Music Stage",
  "School Touring",
  "Performing Arts",
];

export const jobs = [
  {
    id: "1",
    company: {
      name: "Kelompok Praksis",
      location: "Universitas Negeri Malang",
      email: "praksis@support.id",
      contact: "0812831028312",
      about: "Kami adalah kelompok praksis",
      profileUrl: Unm,
      bannerUrl: Banner,
    },
    jobTitle: "FITK FESTIVAL 2023", // Event Judul
    location: "UIN Malang", // Event Lokasi
    jobType: "Festival", // Event Tipe
    salary: "50.000", // Event HTM
    date: ["02/10/2023", "02/10/2023"], // Event Tanggal Mulai - Berakhir
    time: ["10:00", "12:00"], // Event Waktu Mulai - Berakhir
    day: "Senin", // Event Hari
    cp: "08982918294", // Event Contact Person
    posterUrl: Poster1, // Event Poster
    detail: [
      {
        // Event Deskripsi
        desc: "✨ FITK FESTIVAL 2023 HADIR KEMBALI ✨.  Assalamu'alaikum Warahmatullahi Wabarakatuh. Hallo sobat FIFA 👋🏻DEMA FITK UIN Malang punya kabar baik nih untuk kalian semua!!. Yuukkk meriahkan acara FITK FESTIVAL 2023 bersama kami dengan mendaftarkan dirimu sekarang!!. more info : @demafitkuinmalang",
        // Event Link
        requirement: "https://linktr.ee/fitkfest2023",
      },
    ],
    // applicants: ["1", "2", "3", "4"],
    // vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      name: "Kelompok Praksis",
      location: "Universitas Negeri Malang",
      email: "praksis@support.id",
      contact: "0812831028312",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Unm,
      bannerUrl: Banner,
    },
    jobTitle: "Matcha Beauty Town!",
    location: "Kota Kasablanka",
    jobType: "Showcase",
    salary: "Free",
    date: ["02/10/2023", "02/10/2023"],
    time: ["10:00", "12:00"],
    day: "Senin",
    cp: "-",
    posterUrl: Poster2,
    detail: [
      {
        desc: "Hanasui menghadirkan event Matcha terbesar di Indonesia dalam rangka peluncuran Lip Cream Matcha Latte Edition!💚. Pantengin terus social media Hanasui yaa untuk tahu keseruannya di event Matcha nanti, bakal ada guest star yang super kece lhoo!😍. Yuk catat tanggalnya, jangan sampai kelewatan! 🗓 16 - 22 Oktober 2023 📍 Kota Kasablanka. See you theree 👋🏻",
        requirement: "",
      },
    ],
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      name: "Kelompok Praksis",
      location: "Universitas Negeri Malang",
      email: "praksis@support.id",
      contact: "0812831028312",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Unm,
      bannerUrl: Banner,
    },
    jobTitle: "Presale Ticket 1",
    location: "MAN 4 Jakarta",
    jobType: "Showcase",
    salary: "100.000",
    date: ["02/10/2023", "02/10/2023"],
    time: ["10:00", "12:00"],
    day: "Senin",
    cp: "-",
    posterUrl: Poster3,
    detail: [
      {
        desc: "GO PREPARE YOURSEL BOFAT 😲‼️ Presale Ticket #1 is now available ⸜(｡˃ ᵕ ˂ )⸝. Let’s go, Bofmates! We never know when it will last!. Go get yours on our ticketing page listed below ⬇️",
        requirement: "yesplis.com/event/bofman4-part-14",
      },
    ],
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      name: "Kelompok Praksis",
      location: "Universitas Negeri Malang",
      email: "praksis@support.id",
      contact: "0812831028312",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Unm,
      bannerUrl: Banner,
    },
    jobTitle: "MIFEST COMPETITION",
    location: "Online",
    jobType: "Competition",
    salary: "45.000",
    date: ["02/10/2023", "02/10/2023"],
    time: ["10:00", "12:00"],
    day: "Senin",
    cp: "082818312",
    posterUrl: Poster4,
    detail: [
      {
        desc: "Halo sobat MIfest!! 👋🏻. Setelah semua rangkaian acara MIfest yang telah kita ikuti, kini MIfest Competition hadir untuk meramaikan event dan melatih skill dalam membuat website, selain itu juga berguna untuk menambah website portofolio. MIfest Competition hadir dengan membawa tema: “Crafting a Better Tomorrow: Innovating Tech for Education and Health”",
        requirement: "https://linktr.ee/mifest_2023",
      },
    ],
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "Kelompok Praksis",
      location: "Universitas Negeri Malang",
      email: "praksis@support.id",
      contact: "0812831028312",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Unm,
      bannerUrl: Banner,
    },
    jobTitle: "Car Free Day Pagi-Pagi",
    location: "Sudirman Jakarta",
    jobType: "Festival",
    salary: "Free",
    date: ["02/10/2023", "02/10/2023"],
    time: ["10:00", "12:00"],
    day: "Selasa",
    cp: "0873918293",
    posterUrl: Poster5,
    detail: [
      {
        desc: "Yuk hadir di Event abc on PAGI-PAGI Sepanjang hari. Kamu bisa ikuti berbagai macam activity seru GRATIS dengan total hadiah jutaan rupiah lho!! ketuk DM @abcnetwork.id untuk info lebih lanjut ya!. 𝗮𝗯𝗰 𝗣𝗥𝗜𝗠𝗘𝗕𝗢𝗢𝗦𝗧 𝗢𝗡 𝗣𝗔𝗚𝗜 – 𝗣𝗔𝗚𝗜, 𝗢𝗡 𝗦𝗘𝗣𝗔𝗡𝗝𝗔𝗡𝗚 𝗛𝗔𝗥𝗜!!See You!!",
        requirement: "",
      },
    ],
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "Kelompok Praksis",
      location: "Universitas Negeri Malang",
      email: "praksis@support.id",
      contact: "0812831028312",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Unm,
      bannerUrl: Banner,
    },
    jobTitle: "PB CHAMPIONSHIP 2023",
    location: "Gool Futsal, Surabaya",
    jobType: "Competition",
    salary: "350.000",
    date: ["02/10/2023", "02/10/2023"],
    time: ["10:00", "12:00"],
    day: "Minggu",
    cp: "0238183994",
    posterUrl: Poster6,
    detail: [
      {
        desc: "Halloo para pejuang futsal ⚽⚽. PB WEEK CHAMPIONSHIP 2023 telah hadir, tentunya dengan serangkaian acara yang seru abis dan jadilah pemenang untuk mendapatkan total hadiah jutaan rupiah🤩🤩. Tunggu apalagi segera daftarkan tim kalian!! Tunjukkan kehebatan kalian pada ajang yang seruu inii, catat tanggalnya dan bergabunglah 🙌🏻.",
        requirement: "https://linktr.ee/pbweek2023",
      },
    ],
    createdAt: new Date(),
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "02",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Microsoft Corporation",
    location: "Califonia",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "India",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
  {
    _id: 9,
    name: "CodeWave Solutions",
    location: "Ghana",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: CodeWave,
    jobPosts: ["1", "2"],
  },
];

export const users = [
  {
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "User",
    lastName: "Solutions",
    email: "praksis@support.id",
    contact: "0812831028312",
    about: "Kami adalah kelompok praksis",
    profileUrl: Unm,
    bannerUrl: Banner,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];

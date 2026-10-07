# Theodhore — Personal Website

Project personal sederhana yang dibuat untuk website portfolio pribadi. Tujuannya hanya sebagai personal website biasa untuk menampilkan profil, ketertarikan seputar web development & Web3, serta beberapa project yang pernah dikerjakan.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Runtime / Package Manager**: [Bun](https://bun.sh/) / [Node.js](https://nodejs.org/)

---

## Cara Menjalankan Project

1. **Clone repository**:
   ```bash
   git clone https://github.com/theodhorex/personal_website.git
   cd personal_website
   ```

2. **Install dependencies**:
   ```bash
   bun install
   # atau menggunakan npm:
   # npm install
   ```

3. **Jalankan development server**:
   ```bash
   bun dev
   # atau menggunakan npm:
   # npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## CMS (Sanity.io - Opsional)

Website ini sudah mendukung **Sanity.io**:
- **Default (Tanpa CMS)**: Tetap berjalan normal menggunakan data lokal bawaan tanpa perlu setup apapun.
- **Jika ingin menggunakan CMS**:
  1. Buat project di [sanity.io](https://sanity.io)
  2. Buat file `.env.local` dan isi `NEXT_PUBLIC_SANITY_PROJECT_ID=project_id_kamu`
  3. Buka dashboard Sanity Studio langsung di browser di [http://localhost:3000/studio](http://localhost:3000/studio)

---

## Author

- **Theodhore**
- GitHub: [@theodhorex](https://github.com/theodhorex)
- Email: [theodhore76@gmail.com](mailto:theodhore76@gmail.com)

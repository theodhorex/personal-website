import { createClient } from "@sanity/client";
import { defaultProjects } from "../lib/projects";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01";
const token = process.env.SANITY_API_TOKEN || process.env.SANITY_AUTH_TOKEN;

async function seed() {
  console.log("🚀 Starting Sanity database seeding...\n");

  if (!projectId) {
    console.error("❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not defined in .env.local");
    process.exit(1);
  }

  if (!token) {
    console.error("❌ Error: SANITY_API_TOKEN is not defined in .env.local\n");
    console.log("Cara mendapatkan API Token (hanya 30 detik):");
    console.log("1. Buka https://sanity.io/manage");
    console.log(`2. Pilih project kamu (${projectId})`);
    console.log("3. Buka tab 'API' -> klik '+ Add API token'");
    console.log("4. Beri nama (misal: 'Seed Token') dan pilih Permissions: 'Editor'");
    console.log("5. Salin token tersebut dan tambahkan ke file .env.local:");
    console.log("   SANITY_API_TOKEN=sk...\n");
    console.log("Lalu jalankan lagi: bun run seed\n");
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  console.log(`Target Project: ${projectId}`);
  console.log(`Target Dataset: ${dataset}`);
  console.log(`Found ${defaultProjects.length} projects to seed.\n`);

  for (let i = 0; i < defaultProjects.length; i++) {
    const proj = defaultProjects[i];
    const docId = `project-${proj.id}`;

    const doc = {
      _id: docId,
      _type: "project",
      title: proj.title,
      slug: {
        _type: "slug",
        current: proj.id,
      },
      index: proj.index,
      order: i + 1,
      meta: proj.meta,
      year: proj.year,
      category: proj.category,
      client: proj.client,
      role: proj.role,
      summary: proj.summary,
      constraint: proj.constraint,
      decisions: proj.decisions.map((d, dIdx) => ({
        _key: `decision-${dIdx}`,
        title: d.title,
        body: d.body,
      })),
      outcomes: proj.outcomes.map((o, oIdx) => ({
        _key: `outcome-${oIdx}`,
        value: o.value,
        label: o.label,
      })),
      tech: proj.tech,
      githubUrl: proj.githubUrl,
      liveUrl: proj.liveUrl || undefined,
    };

    try {
      console.log(`⏳ [${i + 1}/${defaultProjects.length}] Seeding: "${proj.title}"...`);
      await client.createOrReplace(doc);
      console.log(`✅ [${i + 1}/${defaultProjects.length}] Selesai: "${proj.title}"`);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error(`❌ Gagal seeding "${proj.title}":`, errorMsg);
    }
  }

  console.log("\n✨ Selesai! Semua proyek berhasil dimasukkan ke Sanity!");
  console.log("Silakan refresh tab Sanity Studio (http://localhost:3000/studio) untuk melihat dokumennya.\n");
}

seed().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});

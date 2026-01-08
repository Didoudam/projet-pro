import { initializeMeilisearch } from "../src/lib/meilisearch";
import {
  syncUsersToMeilisearch,
  syncCompaniesToMeilisearch,
} from "../src/lib/meilisearch-sync";

async function main() {
  console.log("Initializing Meilisearch indexes...");
  await initializeMeilisearch();

  console.log("\nSyncing users to Meilisearch...");
  const userCount = await syncUsersToMeilisearch();
  console.log(`✓ ${userCount} users synced`);

  console.log("\nSyncing companies to Meilisearch...");
  const companyCount = await syncCompaniesToMeilisearch();
  console.log(`✓ ${companyCount} companies synced`);

  console.log("\n✓ Meilisearch sync completed successfully!");
}

main()
  .catch((error) => {
    console.error("Error syncing Meilisearch:", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });

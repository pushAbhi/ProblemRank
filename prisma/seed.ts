import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });


async function main() {
    const assignments: Record<string, string[]> = {
        cmqjl6wpc0000iciw2iacavxy: ['B2B', 'Customer Success', 'SMB'],
        cmqjl6xxr0001iciwgzymop6x: ['Creator Economy', 'D2C'],
        cmqjl6z090002iciw638yppgr: ['Productivity', 'SaaS'],
        cmqjl70950003iciwc1lr1mdu: ['B2B', 'Enterprise', 'Operations'],
        cmqjl71ip0004iciwpk2j1fe8: ['Health'],
        cmqjl72v50005iciwa17outjd: ['E-commerce', 'D2C', 'Growth'],
        cmqjl74dn0006iciw4hh4gxyz: ['B2B', 'Enterprise', 'SaaS'],
        cmqjl75s60007iciwcvjysl3k: ['Growth', 'B2B'],
        cmqjl777e0008iciw15qooe6x: ['No-code', 'Operations', 'SMB'],
    }

  for (const [id, tagNames] of Object.entries(assignments)) {
    await prisma.problem.update({
      where: { id },
      data: {
        tags: {
          connect: tagNames.map(name => ({ name }))
        }
      }
    })
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
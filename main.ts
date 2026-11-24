import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// An agent's confession built on how its file reader actually works: the first 2,000 lines.
const confession =
  "I confess: when you say \"read the whole file,\" I read the first 2,000 lines and assume the rest is going well.";

const limit = 200;
if ([...confession].length > limit) throw new Error(`confession is ${[...confession].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), confession);

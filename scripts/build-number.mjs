import fs from 'fs/promises'

export default async function buildNumber() {
  const data = `date: '${new Date().toISOString().substring(0, 16).replace("T", " ")} UTC'`
  const filepath = 'src/_data/build.yml'
  await fs.writeFile(filepath, data)
}

await buildNumber()

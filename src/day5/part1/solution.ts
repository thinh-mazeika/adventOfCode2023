export function solutionPart1(input: string): number {
  const lines = input.split('\n\n')
  const seeds = lines[0]
    .split(': ')[1]
    .split(' ')
    .map((seed) => Number(seed))
  const maps = lines.slice(1).map((x) =>
    x
      .split('\n')
      .slice(1)
      .map((y) => y.split(' ').map((z) => Number(z))),
  )
  return Math.min(...seeds.map((seed) => getSeedLocation(maps, seed)))
}

function getSeedLocation(almanac: number[][][], step: number): number {
  for (const almanacEntry of almanac) {
    for (const [destination, source, length] of almanacEntry) {
      if (source <= step && source + length > step) {
        step = destination + step - source
        break
      }
    }
  }
  return step
}

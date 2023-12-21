/*solution link: https://github.com/malciin/aoc2023/blob/master/day05.ts*/

export function solutionPart2(input: string): number {
  let result = 0
  const lines = input.split('\n\n')
  const seeds = lines[0]
    .split(': ')[1]
    .split(' ')
    .map((seed) => Number(seed))
  console.log(seeds)
  const seedRanges = groupNumbers(seeds, 2)
  const doWeHaveThatSeed = (seed: number): boolean =>
    seedRanges.some(([seedStart, length]) => seedStart <= seed && seedStart + length >= seed)
  const maps = lines.slice(1).map((x) =>
    x
      .split('\n')
      .slice(1)
      .map((y) => y.split(' ').map((z) => Number(z))),
  )
  for (let i = 0; i < 1_000_000_000; i++) {
    const seed = getSeedGivenLocation(maps, i)

    if (doWeHaveThatSeed(seed)) {
      result = i
      break
    }
  }
  return result
}

function getSeedGivenLocation(almanac: number[][][], step: number): number {
  for (const almanacEntry of almanac.slice().reverse()) {
    for (const [destination, source, length] of almanacEntry) {
      if (destination <= step && destination + length > step) {
        step = source + step - destination
        break
      }
    }
  }
  return step
}

const groupNumbers = (numbers: number[], grouping: number): number[][] =>
  Array.from({ length: numbers.length / grouping }, (_, i) => numbers.slice(i * grouping, i * grouping + grouping))

const destinationToSourceMapNames = [
  'seed-to-soil map',
  'soil-to-fertilizer map',
  'fertilizer-to-water map',
  'water-to-light map',
  'light-to-temperature map',
  'temperature-to-humidity map',
  'humidity-to-location map',
]

export function solutionPart1(input: string): number {
  const lines = input.split('\n')
  destinationToSourceMapNames.forEach((mapName) => {
    const map = getMap(lines, mapName)
    console.log({ map })
  })
  return 35
}

function getMap(lines: string[], type: string): DestinationToSourceMap {
  const foundIndex = lines.findIndex((line) => line.startsWith(`${type}:`))
  const emptyLineIndex = lines.findIndex((line, index) => index > foundIndex && line === '')
  if (type === 'humidity-to-location map') {
    return {
      [type]: lines.slice(foundIndex + 1),
    }
  }
  return {
    [type]: lines.slice(foundIndex + 1, emptyLineIndex),
  }
}

type DestinationToSourceMap = {
  [key: string]: string[]
}

const fs = require("fs")

const data = fs.readFileSync("input.txt", "utf-8").split(/\r?\n/).filter(Boolean)

const isLower = char => char === char.toLowerCase()

const sumPropriety = data.reduce((acc, el) => {
  const mid = Math.floor(el.length / 2)
  const [part1, part2] = [el.substring(0, mid), el.substring(mid)]
  const sharedItem = part1.split("").find(char => part2.includes(char))

  return (
    acc +
    sharedItem.charCodeAt(0) -
    (isLower(sharedItem) ? "a" : "A").charCodeAt(0) +
    1 +
    (isLower(sharedItem) ? 0 : 26)
  )
}, 0)

console.log(sumPropriety)

const chunks = []
const chunkSize = 3
for (let i = 0; i < data.length; i += chunkSize) {
  const chunk = data.slice(i, i + chunkSize)
  chunks.push(chunk)
}

const res = chunks.reduce((acc, [part1, part2, part3]) => {
  const sharedItem = part1
    .split("")
    .find(char => part2.includes(char) && part3.includes(char))

  return (
    acc +
    sharedItem.charCodeAt(0) -
    (isLower(sharedItem) ? "a" : "A").charCodeAt(0) +
    1 +
    (isLower(sharedItem) ? 0 : 26)
  )
}, 0)

console.log(res)
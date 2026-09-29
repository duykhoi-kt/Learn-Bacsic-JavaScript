console.log("video 41")

const ages = [32, 33, 16, 40];

const agesX2 = ages.map((item, index) => {
    console.log("item:", item, "index:", index)
    return item * 2
})

const agesGreatThan18= ages.filter((item, index) => {
    console.log("item:", item, "index:", index)
    return item > 18
})
console.log("original ages:", ages)
console.log("agesX2:", agesX2)
console.log("ages > 18:", agesGreatThan18)
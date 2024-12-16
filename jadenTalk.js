function jadenTalk(text) {

  text = text.replace(/[.,!?]/g,"")

  let words = text.split(" ")

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    }
  }

  return words.join(" ")
}

module.exports = jadenTalk
const db = require('../db')
const { Bar } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

const main = async () => {
  // Bar.collection.drop()
  const bar = [
    {
      name: 'Westport Ale House',
      description:
        'American grub, draft beers & cocktails served in an industrial game-day hub with TVs & a roof deck.',
      image: 'Image Here',
      rating: '★★★★☆'
    },

    {
      name: "Harpo's",
      description:
        'Unfussy standby featuring burgers, pub fare & craft draft beer, plus a big tree-shaded courtyard.',
      image: 'Image Here',
      rating: '★★★★☆'
    },

    {
      name: 'Char Bar',
      description:
        'BBQ & Southern eats with a modern twist in a big space with a retro vibe & beer garden with games',
      image: 'Image Here',
      rating: '★★★★★'
    },

    {
      name: "Kelly's Wesport Inn",
      description:
        "Longtime Irish pub with weekend live music, housed in what's said to be the oldest building in KC",
      image: 'Image Here',
      rating: '★★★★★'
    }
  ]

  await Bar.insertMany(bar)
  console.log('Created Bars!')
}

const run = async () => {
  await main()
  db.close()
}

run()

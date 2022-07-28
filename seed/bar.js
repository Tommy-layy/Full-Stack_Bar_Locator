const db = require('../db')
const { Bar } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

const main = async () => {
  Bar.collection.drop()
  const bar = [
    {
      id: '1',
      name: 'Westport Ale House',
      description:
        'American grub, draft beers & cocktails served in an industrial game-day hub with TVs & a roof deck.',
      image:
        'https://www.kansascity.com/news/business/biz-columns-blogs/cityscape/g5xkp/picture3409329/alternates/FREE_1140/WatchParty_Royals_WestPort_10-21-2014_BLD-07.jpg',
      rating: '★★★★☆'
    },

    {
      id: '2',
      name: "Harpo's",
      description:
        'Unfussy standby featuring burgers, pub fare & craft draft beer, plus a big tree-shaded courtyard.',
      image:
        'https://images.squarespace-cdn.com/content/v1/576c0bf6e6f2e1cb54b72fa9/1468510626904-HFJWBP4X4HIZ5Z9DY0V6/DSC_5132.jpg',
      rating: '★★★★☆'
    },

    {
      id: '3',
      name: 'Monarch',
      description:
        "Nationally-recognized Monarch walks the fine line between being fancy and still accessible. It's the kind of place where a semi-formal dress code is enforced, men are required to remove their hats, and people often arrive in their Sunday best to have a drink or two. But that's all part of the fun. Don't order your usual; Insted ask the bartender to surprise you with a concoction using their selection of locally produced liquors. You might just find your new favorite to remember the city by.",
      image:
        'https://www.cocktailsaway.com/wp-content/uploads/2021/01/2020-11-10-18.39.06-1024x768.jpg',
      rating: '★★★★★'
    },

    {
      id: '4',
      name: "Kelly's Wesport Inn",
      description:
        "Longtime Irish pub with weekend live music, housed in what's said to be the oldest building in KC",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/3/3b/Kellys_Westport_Inn_Kansas_City_MO.jpg',
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

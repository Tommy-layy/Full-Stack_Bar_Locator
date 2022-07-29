const db = require('../db')
const { Review } = require('../models/')

db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))

const main = async () => {
  Review.collection.drop()
  const review = [
    {
      name: 'Dean Smith',
      bar: 'Westport Ale House',
      text: 'Sweet place, good food, good drinks.',
      date: '11/01/2021',
      rating: '5/5'
    },
    {
      name: 'Sam Wesson',
      bar: 'Monarch',
      text: 'Cool atmosphere!',
      date: '09/10/2021',
      rating: '4.5/5'
    },
    {
      name: 'Cass T',
      bar: "Harpo's",
      text: 'Excellent service and prices were good.',
      date: '02/21/2022',
      rating: '4/5'
    },
    {
      name: 'Rowena M',
      bar: 'MonarchKC',
      text: 'Very classy with a great selection of cocktails!',
      date: '12/23/2021',
      rating: '4.7/5'
    },
    {
      name: 'Fergus Macleod',
      bar: "Kelly's Westport Inn",
      text: 'Pretty unique place with great staff.',
      date: '04/15/2022',
      rating: '4.3/5'
    }
  ]

  await Review.insertMany(review)
  console.log('Created Reviews!')
}

const run = async () => {
  await main()
  db.close()
}

run()

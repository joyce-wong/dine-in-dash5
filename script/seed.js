'use strict'

const {db, models: {User, Reservation, Review, Restaurant} } = require('../server/db')
// const {randUserName} = require("@ngneat/falso");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', email: 'cody123@gmail.com', imageUrl: 'https://pbs.twimg.com/profile_images/1261985595729027072/5puKMKnG_400x400.jpg' }),
    User.create({ username: 'murphy', password: '123', email: 'murphy@yahoo.com', imageUrl: 'https://m.media-amazon.com/images/I/81b9eL0qYeL._CR204,0,1224,1224_UX256.jpg' }),
    User.create({
      username: 'Chihiro',
      password: 'Ogino',
      email: 'Sen.Ogino@gmail.com',
      imageUrl: 'https://c-fa.cdn.smule.com/rs-z-sf-1/account/picture/1f/3b/b96c76f0-f063-4fb5-812f-035b9e88caa5.jpg'
    }),
  User.create({
    username: 'Sophie',
    password: 'Hatter',
    email: 'SHatter@hatshop.net',
    imageUrl: 'https://images.8tracks.com/cover/i/000/509/897/tumblr_mposdlKt8X1su5goto8_1280-4738.jpg?rect=173,0,404,404&q=98&fm=jpg&fit=max&w=960&h=960'
  }), 
  User.create({
    username: 'Shizuku',
    password: 'Tsukishima',
    email: 'tsukishima_shizuku@daiichu.edu',
    imageUrl: 'https://thicc.mywaifulist.moe/waifus/1555/5b272eac71f9776592327f546780cc88287ba66e884a893da60667b234c83ee1_thumb.jpeg'
  }), 
  User.create({
    username: 'Arrietty',
    password: 'Clock',
    email: 'borrower@tiktok.com',
    imageUrl: 'https://thicc.mywaifulist.moe/waifus/16723/3348cf8cf3d67d48888031547731f835c453c91b96a4575d259863f572fc9bd9_thumb.png'
  })
  ])

  
  
  const restaurants = await Promise.all([
    Restaurant.create({
      name: 'Howl\'s Moving Castle',
      address: 'Duis at elit nisi. Donec fermentum malesuada eros, ut hendrerit lacus rutrum id. Integer vehicula, enim sed imperdiet iaculis, erat eros mollis enim, id dapibus ante mi sit amet ante. Donec nibh arcu, tempor quis volutpat at, finibus ultrices est. In est odio, eleifend a leo id, dictum pretium enim. Nam vitae augue congue, sagittis nisl ut, feugiat ipsum. Proin neque nunc, venenatis ut luctus quis, pharetra non diam.',
      imageUrl: 'https://ubisoft-avatars.akamaized.net/30fd15ef-9e54-458b-9f42-9f4bc2e9a5ff/default_256_256.png',
      description: 'Howl the wizard flies around in a mechanical castle powered by Calcifer.'
    }),
    Restaurant.create({
      name: 'Yubaba\'s Bathhouse',
      address: 'Sed a augue nisi. Sed a efficitur lacus. Maecenas facilisis at quam sit amet sagittis. Proin iaculis nec lacus non vestibulum. Mauris sollicitudin lorem a lectus porttitor, id accumsan dolor feugiat. Sed sed dapibus urna. Nunc eget dapibus orci. Curabitur finibus ipsum a enim luctus, a sollicitudin orci vestibulum. Vestibulum suscipit nunc lorem, elementum egestas tellus placerat sit amet. Ut efficitur dignissim posuere. Sed tellus purus, feugiat vitae blandit faucibus, blandit aliquam risus. Aenean molestie ullamcorper molestie. Nulla ipsum lectus, vulputate non pulvinar non, aliquam sit amet odio.',
      imageUrl: 'https://studioghiblimovies.com/wp-content/uploads/2017/12/japan-hayao-miyazaki-trees-spirited-away-bathroom-houses-spirit-ben-anime-house-cloud-ghibli-bath-ch-wallpaper-455520.jpg',
      description: 'Relax at this bathhouse with river spirits.'
    }),
    Restaurant.create({
      name: 'Dai I Chu Junior High School',
      address: 'Fusce sit amet libero leo. Vivamus eget semper lectus. Integer lorem est, porttitor lacinia porttitor ac, facilisis eu eros. Quisque at eros ante. Quisque ullamcorper pretium quam, at maximus nibh sollicitudin in. Maecenas condimentum tincidunt lectus, non bibendum ligula interdum eu. Suspendisse ac elit leo. Aliquam id fringilla sem.',
      imageUrl: 'https://umaiyomu.files.wordpress.com/2019/01/school2.jpg?w=640',
      description: 'Make friends, borrow books from the library, and play the violin.'
    })
  ])
  
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${restaurants.length} restaurants`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}




/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

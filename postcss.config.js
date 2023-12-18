
// module.exports => {
//   plugins: [
//     require('postcss-import')({}),
//     require('autoprefixer')({
//        browsers: ['last 2 version', 'not ie < 11', 'iOS >= 9', 'Android >= 4.4'],
//       cascade: true
//     })
//   ]
// }

module.exports = () => ({
  plugins: {
    'autoprefixer': {
      "browsers": "last 2 versions"
    }
  }
})

// module.exports = {
//   plugins: [
//     require('precss'),
//     require('autoprefixer')
//   ]
// }

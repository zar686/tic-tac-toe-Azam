'use strict'

const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed!')
}

const signInSuccess = function (response) {
  $('#message').text('Successfully signed in!')
  // console.log(store)
  store.user = response.user

  // console.log('store: ', store)
  // console.log('token: ', store.user.token)

  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.board').hide()
  $$('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Sign in failed!')
}

const changePasswordSuccess = function () {
  $('#message').text('You successfully changed your password!')
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Password was unable to be changed.')
}

const signOutSuccess = function () {
  $('#message').text('Signed you out!')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('#player-message').hide()
  $('.games-played').hide()
}

const signOutFailure = function () {
  $('#message').text('Sign out failed.')
}

const createGameSuccess = function (response) {
  $('#player-message').text('The game has started!')
  // console.log(response)
  store.game = response.game
  // console.log(store.game)
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)
  $('.board').show()
  $('#player-message').show()
  $('.games-played').hide()
}

const createGameFailure = function () {
  $('#player-message').text('New game was not started. Try again!')
}

let turn = true
// Player starts at X
store.player = 'X'
// store.game.over = false

const updateGameSuccess = function (response) {
  store.game = response.game
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)
  $(store.clickedBox).text(store.player)
  const player = turn ? 'O' : 'X'
  // console.log(player)
  turn = !turn
  store.player = player
  $('#player-message').text('Player ' + store.player)
  $('.games-played').hide()

  let winner = wins()
  // Can't use triple equal signs on more than two things, can combine statements
}
const wins = function () {
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2]) {
    ($('#player-message').text('Player ' + store.game.cells[0] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5]) {
    ($('#player-message').text('Player ' + store.game.cells[3] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8]) {
    ($('#player-message').text('Player ' + store.game.cells[6] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6]) {
    ($('#player-message').text('Player ' + store.game.cells[0] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7]) {
    ($('#player-message').text('Player ' + store.game.cells[1] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8]) {
    ($('#player-message').text('Player ' + store.game.cells[2] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8]) {
    ($('#player-message').text('Player ' + store.game.cells[0] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6]) {
    ($('#player-message').text('Player ' + store.game.cells[2] + ' wins!'))
    turn = true
    store.player = 'X'
    store.game.over = true
  } else { if (store.game.cells.indexOf('') === -1) {
    $('#player-message').text('It\'s a tie!')
    turn = true
    store.player = 'X'
    store.game.over = true
  }
  }
}

// const updateGameFailure = function (response) {
//   store.game = response.game
//   if (response.game.cells === 'X') {
//     $('#player-message').text('Please choose an empty space!')
//   } else if (response.game.cells === 'O') {
//     $('#player-message').text('Please choose an empty space!')
//   }
// }

const getGameSuccess = function (response) {
  // console.log('This is success button', response)
  // console.log(response.games.length)
  $('.games-played').text(response.games.length)
  $('.games-played').show()
}

const getGameFailure = function () {
  $('.games-played').text('Failed to load games')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  getGameSuccess,
  getGameFailure
  // updateGameFailure
}

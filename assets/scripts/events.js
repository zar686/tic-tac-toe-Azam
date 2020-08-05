'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signOut(formData)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
  clearBoard()
}

const clearBoard = function () {
  // console.log('clearBoard')
  $('.box').text('')
  $(store.index).remove()
}

const onUpdateGame = function (clickedCellEvent) {
  // console.log(clickedCellEvent)
  const clickedCell = clickedCellEvent.target
  const index = $(clickedCell).data('cell-index')
  store.index = index
  // creating a key on store object and storing event value as an object
  store.clickedBox = clickedCellEvent.target
  // console.log(index)
  if (store.game.over === true) {
    $('#player-message').text('Game over, start a new game!')
  } else if (clickedCellEvent.target.innerText === '') {
    api.updateGame(index, store.player)
      .then(ui.updateGameSuccess)
      .catch(ui.updateGameFailure)
  } else {
    $('#player-message').text('Uh oh! Please choose an empty space!')
  }
}

const onGetGame = function () {
event.preventDefault()

api.getGame()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame,
  onGetGame
}

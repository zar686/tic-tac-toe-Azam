'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events') // object that we are exporting from this file

$(() => {
  // Authentication Portion:
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('submit', authEvents.onSignOut)

  // Game Portion:
  $('#create-game').on('submit', authEvents.onCreateGame)
  $('.box').on('click', authEvents.onUpdateGame)
  $('#get-game').on('submit', authEvents.onGetGame)
})

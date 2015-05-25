angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Enrique Santiago',
    lastText: 'API - Data Base - Programmer',
    face: ''
      
  }, {
    id: 1,
    name: 'Baltazar Bautista',
    lastText: 'API - Data Base - Programmer',
    face: ''
  }, {
    id: 2,
    name: 'Javier Rochin',
    lastText: 'Documentation',
    face: ''
  }, {
    id: 3,
    name: 'Ivan Martinez',
    lastText: 'Programmer - Design',
    face: ''
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

angular
  .module('SocketConnection', [])

  .factory('Socket', function() {
    return io();
  })
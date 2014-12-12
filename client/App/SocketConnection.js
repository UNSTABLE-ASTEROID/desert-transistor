angular
  .module('SocketConnection', [])

  .factory('Socket', function() {
    var socket = {};

    socket.connection = undefined;
    socket.connect = function() {
      if (!socket.connection) {
        socket.connection = io();
      }
    };

    return socket;
  });
'use strict';

var cardsArray = [
    {
      'name': 'pickle rick',
      'img': 'img/pickle.rick.png',
    },
    {
      'name': 'morty',
      'img': 'img/morty.PNG',
    },
    {
      'name': 'jerry',
      'img': 'img/jerry.smith.PNG',
    },
    {
      'name': 'rick',
      'img': 'img/rick.sanchez.png',
    },
    {
      'name': 'scary terry',
      'img': 'img/scary.terry.PNG',
    },
    {
      'name': 'giant head',
      'img': 'img/giant.head.PNG',
    },
    {
      'name': 'crazy rick',
      'img': 'img/crazy.rick.PNG',
    },
    {
      'name': 'Mr.m',
      'img': 'img/mr.meeseeks.png',
    },
    {
      'name': 'Mr.pb',
      'img': 'img/Mr.pottybutthole.PNG',
    },
    {
      'name': 'bird person',
      'img': 'img/bird.person2.PNG',
    },
    {
      'name': 'summer',
      'img': 'img/summer.PNG',
    },
    {
      'name': 'beth',
      'img': 'img/beth1.png',
    },
  ];
 
  
  var gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return 0.5 - Math.random();
  });
  
  var firstGuess = '';
  var secondGuess = '';
  let count = 0;
  var previousTarget = null;
  var delay = 1200;
  let moves = 0;
  let counter = document.querySelector(".moves");
  var matchs = 0;
  var intfailed=0;
  var points1=100;
  var points2=60;
  var points3=20;
  var ptotal=0;
  var matchsTotales=12;
  var score = document.querySelector(".score");
  var game = document.getElementById('game');
  var grid = document.createElement('section');
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);
  
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = 'videoplayer-current-time';

var iframe = document.querySelector('iframe');
var player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 1000));

const savedTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
player.setCurrentTime(savedTime.seconds);
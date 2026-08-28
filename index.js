// Placeholder Engine stub so the page can load without the real game assets.
// This provides a minimal `Engine` constructor with startGame({onProgress}) that
// simulates loading progress and resolves. Replace this file with the real
// index.js from a Web build to run the actual game.
(function(){
  'use strict';
  window.Engine = function(options){
    this.options = options || {};
    this.startGame = function({onProgress} = {}){
      return new Promise((resolve) => {
        // Simulate progressive loading so the status bar updates
        let progress = 0;
        const total = 100;
        const iv = setInterval(() => {
          progress += 20;
          try { if (onProgress) onProgress(progress, total); } catch(e){}
          if (progress >= total) {
            clearInterval(iv);
            // Simulate a short delay before resolving
            setTimeout(() => resolve(), 200);
          }
        }, 180);
      });
    };
  };

  // Expose a small debug API (optional)
  window.__EngineStub = {
    info: 'Placeholder Engine stub — replace with real index.js for the game',
  };
})();

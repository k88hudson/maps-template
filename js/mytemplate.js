document.addEventListener( "DOMContentLoaded", function( e ){

  Butter({
    config: "complete.conf",
    ready: function( butter ){
      var media = butter.media[ 0 ]; //This is the media element

      function start(){
        //Add a track
        var track = media.addTrack( "Track1" );
        //Add more tracks...
        media.addTrack( "Track" + Math.random() );
        media.addTrack( "Track" + Math.random() );

        //Add a track event
        track.addTrackEvent({
          type: "text",
          popcornOptions: {
            start: 0,
            end: 3,
            text: "This is some text here.... Isn't it nice?",
            target: "TheMap"
          }
        });



        //Try uncommenting and see what happens....
        /*
        //Add a track event to the third track
        butter.tracks[ 2 ].addTrackEvent({ 
          type: "footnote",
          popcornOptions: {
            start: 1,
            end: 2,
            text: "More text!!!!"
            target: "Bottom"
          }
        });
        */

      } //start
      
      media.onReady( start );
      
      window.butter = butter;
    } 
  }); //Butter
}, false );
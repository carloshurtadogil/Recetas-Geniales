import React from 'react';

export const volunesia = {
  title: 'Volunesia',
  titleSource: 'https://d2xovjauh2wbka.cloudfront.net/volunesia/v-sign.png',
  titleWidth: 5,
  description: (
    <article style={{fontSize: '10'}}>
      A group project for my senior software engineering course inspired by our 
      collective appreciation of the charitable work done by a group member.
      <span>
        <i> Volunesia </i>
      </span>
      is a mobile platform designed to connect prospective volunteers
      with nonprofit organizations for events. My group used the Agile methodology
      during the development of
      <span>
        <i> Volunesia</i>
      </span>
      , using Waffle.io to host our Kanban board and our professor as the client during
      our sprint meetings. 
    </article>
  ),
  stack: 'Xamarin Native | Firebase | C#',
  github: 'https://github.com/carloshurtadogil/Volunesia',
  columnWidth: 3,
  rows: 1,
  componentStyle: { width: '100%', margin: 'auto', paddingTop:'1em', paddingBottom: '2em' },
  imageStyle: { width: '100%' },
  imageClassname: 'zoom',
  images: [
    { 
      key: 'mainPage',
      title: 'Volunesia Main Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/volunesia/v-main.png'
    },
    { 
      key: 'homePage',
      title: 'Volunesia Home Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/volunesia/v-home.png'
    },
    {
      key: 'profilePage',
      title: 'Volunesia Profile Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/volunesia/v-profile.png'
    },
    {
      key: 'eventPage',
      title: 'Volunesia Event Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/volunesia/v-event.png'
    }
  ]
};

export const traqueur = {
  title: 'Traqueur',
  titleSource: 'https://d2xovjauh2wbka.cloudfront.net/traqueur/t-sign.png',
  titleWidth: 5,
  description: (
    <article style={{fontSize: '10'}}>
      In my quest to learn as many technologies as possible, I stepped out of my comfort zone to 
      develop a new mobile application with React Native.
      <span>
        <i> Traqueur </i>
      </span>
      is simple mobile application that tracks and 
      records a user's movements, then displays their path on a map. The information is then stored in MongoDB 
      through a Node.js Server with Express.js. This MERN-stack mobile app serves a testament to
      my abilities as a developer and a reminder that nothing is impossible, so long as you put in the effort.
    </article>
  ),
  stack: 'MongoDB | Express.js | React Native | Node.js',
  github: 'https://github.com/carloshurtadogil/Tracks',
  columnWidth: 3,
  rows: 1,
  componentClass: 'project-div',
  componentStyle: { width: '100%', margin: 'auto', paddingTop:'1em', paddingBottom: '2em' },
  imageStyle: { width: '100%', borderRadius: '40px' },
  imageClassname: 'zoom',
  images: [
    { 
      key: 'mainPage',
      title: 'Traqueur Main Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/traqueur/t-main.png'
    },
    { 
      key: 'homePage',
      title: 'Traqueur Home Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/traqueur/t-home.png'
    },
    {
      key: 'detailsPage',
      title: 'Traqueur Details Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/traqueur/t-map.png'
    },
    {
      key: 'accountPage',
      title: 'Traqueur Account Page',
      image: 'https://d2xovjauh2wbka.cloudfront.net/traqueur/t-gen.png'
    }
  ]
};

export const ssaad = {
  title: 'SSAAD Party',
  titleSource: 'https://d2xovjauh2wbka.cloudfront.net/ssaad/SSAAD.png',
  titleWidth: 2,
  description: (
    <article style={{fontSize: '10'}}>
      A group project for my software architecture and design class, based off the classic 
      <span>
        <i> Mario Party </i>
      </span>
      series by Nintendo. 
      <span>
        <i> Super Software Design and Architecture (SSAAD) Party </i>
      </span>
      is a party game developed using the Unity game engine. Orginally intended to be a single-
      player game, my group took the project a bit further and delved into Unity's networking service
      to turn SSAAD to a multiplayer experience. The project was a bit challenging due to a lack of
      documentation from the networking service, but we were able to create a basic game that was a 
      hit with our class. Furthermore, I even created a short showcase 'commercial', using Final Cut Pro,
      that we played during our presentation.
    </article>
  ),
  stack: 'Unity | Multiplayer and Networking | C#',
  github: 'https://github.com/carloshurtadogil/BoardGame',
  youtube: 'https://youtu.be/inzOi6t6Gsc',
  columnWidth: 6,
  rows: 1,
  componentStyle: { width: '100%', margin: 'auto', paddingTop:'1em', paddingBottom: '2em' },
  imageStyle: { width: '100%', borderRadius: '40px' },
  imageClassname: 'zoom-s',
  images: [
    { 
      key: 'ssaadForest',
      title: 'SSAAD Forest',
      image: 'https://d2xovjauh2wbka.cloudfront.net/ssaad/s-forest.png'
    },
    { 
      key: 'ssaadPlayer',
      title: 'SSAAD Player',
      image: 'https://d2xovjauh2wbka.cloudfront.net/ssaad/s-player.png'
    },
    {
      key: 'ssaadMV',
      title: 'SSAAD Multiplayer View',
      image: 'https://d2xovjauh2wbka.cloudfront.net/ssaad/s-multi.png'
    },
    {
      key: 'ssaadMinigame',
      title: 'SSAAD Minigame View',
      image: 'https://d2xovjauh2wbka.cloudfront.net/ssaad/s-game.png'
    }
  ]
};
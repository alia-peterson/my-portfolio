const projects = [
  {
    title: 'CourseChart',
    type: 'Group',
    timeframe: '2 Weeks',
    description: 'A course planning tool to help instructors and subject matter experts plan activities for a given course. A user can add a new course with multiple modules, activities, and notes to help them stay organized.',
    technologies: ['React', 'Next', 'HTML', 'SCSS', 'Javascript'],
    deployed: 'https://course-chart-ap.vercel.app/',
    repository: 'https://github.com/alia-peterson/course-chart-ap',
    image: {
      src: '/images/gems.png',
      height: 100,
      width: 180
    }
  },
  {
    title: 'Trivia Night',
    type: 'Solo',
    timeframe: '6 Days',
    description: 'An application that provides one location to find cocktail recipes and trivia questions to play with friends. Users can specify cocktail bases and trivia categories as well as save recipes for later use.',
    technologies: ['React', 'HTML', 'CSS', 'Javascript'],
    deployed: 'https://triviology.herokuapp.com/',
    repository: 'https://github.com/alia-peterson/trivia-night',
    image: {
      src: '/images/candles.png',
      height: 160,
      width: 125
    }
  },
  {
    title: 'ActivAir',
    type: 'Group',
    timeframe: '9 Days',
    description: 'An application that reports weather and air quality for a user\'s current location and for any specified locations supported by the AirVisual API. All locations are stored locally to allow for future reference and ease of use.',
    technologies: ['Vue', 'HTML', 'CSS', 'Javascript'],
    deployed: 'https://activ-air-alia-peterson.vercel.app/',
    repository: 'https://github.com/alia-peterson/ActivAir',
    image: {
      src: '/images/cards.png',
      height: 100,
      width: 180
    }
  }
]

export default projects

const data = [
    {
        name: 'Coming Soon',
        route: '/works',
        image: '/moon.png',
        banner: '/comingsoon.png',
        earning: 'Still Working',
        des: 'Simplify Your Tweets!  Generate custom Twitter links with prewritten text. '
      }
          

  ];
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }
  
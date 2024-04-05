const data = [
    {
        name: 'Xintent - Twitter intent generatort',
        route: '/xintent',
        image: '/twitter.png',
        banner: '/xintent.png',
        earning: '$0k/mo',
        des: 'Simplify Your Tweets!  Generate custom Twitter links with prewritten text. '
      },
  
      {
        name: 'CARDD - Go beyond CARDD',
        route: '/',
        image: '/cardd.png',
        earning: '$1807/mo',
        banner: '/comingsoon.png',
        des: 'Watch All Streaming Platform from One Open Source Player. Coming Soon.'
      },
  
      {
        name: 'Wapp - Whatsapp made simple',
        route: '/',
        image: '/wapp.png',
        earning: '$null/mo',
        banner: '/comingsoon.png',
        des: 'Wapp'
      },
      
          

  ];
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }
  
// DUMMY DATA:
  // BACKEND TO DO: need to populate this dictionary with the posts for each fund.
    // Fund 1:
    const fund1posts = [
        {
          username: 'cameronrmillen',
          timesincepost: '1',
          strategy1: 'sell@TSLA',
          strategy2: 'buy@MSFT',
          strategy3: 'hold@NVDA',
          imagesource: require('../assets/dummyprofilepictures/1.png'),
          postcontent:
            'I really think that we should sell@TSLA this week due to the recent rumors about the quarterly report and Elon Musk being a hairy alien. We should also buy@MSFT as there has been speculation that Gates was good friends with Epstein which could see the share price rocket as his popularity grows. I think we should also hold@NVDA as their new tech that allows Incels to fly may take off, so we should see what happens next week.',
          upvotes: '123',
          comments: '10',
        },
        {
            username: 'johndoe',
            timesincepost: '2',
            strategy1: 'sell@AAPL',
            strategy2: 'buy@GOOG',
            strategy3: 'hold@AMZN',
            imagesource: require('../assets/dummyprofilepictures/2.png'),
            postcontent:
              'I think it\'s a good time to sell@AAPL as the stock has reached its peak. If you\'re looking for a good stock to buy, I recommend buying@GOOG as it has strong growth potential. As for AMZN, it\'s a solid stock to hold for the long-term.',
            upvotes: '50',
            comments: '5',
          },
          {
            username: 'janedoe',
            timesincepost: '3',
            strategy1: 'sell@AMC',
            strategy2: 'buy@BTC',
            strategy3: 'hold@TSLA',
            imagesource: require('../assets/dummyprofilepictures/3.png'),
            postcontent:
              'I believe it\'s time to sell@AMC as the stock has been overhyped. For those looking for high-risk, high-reward investments, I recommend buying@BTC. TSLA is also a good stock to hold for the long-term.',
            upvotes: '80',
            comments: '8',
          },
          {
            username: 'bobsmith',
            timesincepost: '5',
            strategy1: 'sell@DIS',
            strategy2: 'buy@NIO',
            strategy3: 'hold@AAPL',
            imagesource: require('../assets/dummyprofilepictures/4.png'),
            postcontent:
              'If you\'re holding DIS stock, I recommend selling@DIS as it has hit its ceiling. For a good stock to buy, I recommend buying@NIO as the company has a promising future in the electric vehicle space. AAPL is also a solid stock to hold for the long-term.',
            upvotes: '20',
            comments: '2',
          },  
      ];
          // Fund 2:
      const fund2posts = [
        {
          username: 'janedoe',
          timesincepost: '1',
          strategy1: 'buy@AMC',
          strategy2: 'sell@GOOG',
          strategy3: 'hold@AAPL',
          imagesource: require('../assets/dummyprofilepictures/5.png'),
          postcontent:
            'I think it\'s a good time to buy@AMC as it has strong growth potential. For those looking to sell, I recommend selling@GOOG. AAPL is also a solid stock to hold for the long-term.',
          upvotes: '25',
          comments: '3',
        },
        {
          username: 'johndoe',
          timesincepost: '2',
          strategy1: 'buy@TSLA',
          strategy2: 'sell@NIO',
          strategy3: 'hold@MSFT',
          imagesource: require('../assets/dummyprofilepictures/6.png'),
          postcontent:
            'I believe it\'s time to buy@TSLA as the company has a promising future. If you\'re holding NIO stock, I recommend selling@NIO. MSFT is also a solid stock to hold for the long-term.',
          upvotes: '40',
          comments: '4',
        },
        {
          username: 'bobsmith',
          timesincepost: '3',
          strategy1: 'sell@AAPL',
          strategy2: 'buy@AMZN',
          strategy3: 'hold@TSLA',
          imagesource: require('../assets/dummyprofilepictures/7.png'),
          postcontent:
            'I think it\'s time to sell@AAPL as the company is facing challenges with its latest products. I recommend buying@AMZN as the company has strong growth potential. TSLA is also a good stock to hold for the long-term.',
          upvotes: '35',
          comments: '2',
        },
        {
          username: 'cameronrmillen',
          timesincepost: '4',
          strategy1: 'hold@GOOG',
          strategy2: 'sell@BTC',
          strategy3: 'buy@NIO',
          imagesource: require('../assets/dummyprofilepictures/8.png'),
          postcontent:
            'I think it\'s a good idea to hold@GOOG for now, as the stock has been performing well. For those looking to sell, I recommend selling@BTC. Buying@NIO is also a good option as the company has a promising future in the electric vehicle space.',
          upvotes: '15',
          comments: '1',
        },
      ];

      export { fund1posts, fund2posts };
      
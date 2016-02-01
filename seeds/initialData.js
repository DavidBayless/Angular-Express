
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(), 

    // Inserts seed entries
    knex('books').insert(
        {
            bookName: 'Catch-22', 
            author:'Joseph Heller', 
            bookDescription:'At the heart of Catch-22 resides the incomparable, malingering bombardier, Yossarian, a hero endlessly inventive in his schemes to save his skin from the horrible chances of war.',
            imageUrl:'https://d.gr-assets.com/books/1359882576l/168668.jpg'
        }
    ),
    knex('books').insert(
        {
            bookName: 'Slaughterhouse-Five', 
            author:'Kurt Vonnegut', 
            bookDescription:'Kurt Vonnegut\'s absurdist classic Slaughterhouse-Five introduces us to Billy Pilgrim, a man who becomes unstuck in time after he is abducted by aliens from the planet Tralfamadore. In a plot-scrambling display of virtuosity, we follow Pilgrim simultaneously through all phases of his life, concentrating on his (and Vonnegut\'s) shattering experience as an American prisoner of war who witnesses the firebombing of Dresden.', 
            imageUrl:'https://d.gr-assets.com/books/1440319389l/4981.jpg'
        }
    ),
    knex('books').insert(
        {
            bookName: 'Fahrenheit 451', 
            author:'Ray Bradbury', 
            bookDescription:'The terrifyingly prophetic novel of a post-literate future.', 
            imageUrl:'http://d.gr-assets.com/books/1366411587l/17470674.jpg'
        }
    ),
    knex('books').insert(
        {
            bookName: 'Brave New World', 
            author:'Aldous Huxley', 
            bookDescription:'Far in the future, the World Controllers have created the ideal society. Through clever use of genetic engineering, brainwashing and drugs, all its members are happy consumers. Bernard Marx seems alone harbouring an ill-defined longing to break free. A visit to one of the few remaining Savage Reservations, where the old, imperfect life still continues, may be the cure for his distress...', 
            imageUrl:'http://d.gr-assets.com/books/1433092908l/5129.jpg'
        }
    )
  );
};

import React from 'react';
import './Quotes';

const quotes = [
    'I’m coming back in… and it’s the saddest moment of my life. - Ed White 1965',
    'I feel fine. How about you? - Yuri Gagarin 1961',
    'I didn’t feel like a giant. I felt very, very small. - Neil Armstrong 1969.',
    'When I first looked back at the Earth, standing on the Moon, I cried. - Alan Shepard 1971',
    'There is perhaps no better a demonstration of the folly of human conceits than this distant image of our tiny world. - Carl Sagan 1995',
    'The scenery was very beautiful. But I did not see The Great Wall [of China]. - Yang Liwei 2003',
    'It’s a fixer-upper of a planet but we could make it work. - Elon Musk 2013',
    'That may have been ‘one small step’ for Neil, but it’s a heck of a big leap for me! - Bruce McCandless 1984'
];
const rand = Math.floor((Math.random() * (quotes.length - 1)));

function Quotes() {

    return (
        <React.Fragment>
            <small id="searchHelp" className="form-text text-muted mb-3 animated fadeInUp delay-3s">
                <i className="fas fa-rocket"></i> {quotes[rand]}
            </small>
        </React.Fragment>
    );
}

export default Quotes;

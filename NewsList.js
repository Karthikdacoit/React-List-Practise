import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Filter from './Filter';
import post from '../Data/post';

function NewsList() {
    const [news, setNews] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [authorFilter, setAuthorFilter] = useState('all');
    const [tagFilter, setTagFilter] = useState('all');

    useEffect(() => {
        console.log(authorFilter, tagFilter, 'Filters');
        if (authorFilter === 'all' && tagFilter === 'all') {
            setFilteredRes(post);
        } else {
            let filteredResults = post;
            if (authorFilter !== "all") {
            filteredResults = filteredResults.filter((news) => {
                return news.author === authorFilter;
            });

        }
        if (tagFilter !== 'all') {
            filteredResults = filteredResults.filter((news) => {
                return news.tags.includes(tagFilter);
            });
        }
            setFilteredRes(filteredResults);

        
        }
    }, [authorFilter, tagFilter]);

    return (
        <>
            <Filter 
                news={post} 
                setAuthorFilter={setAuthorFilter} 
                setTagFilter={setTagFilter} 
            />
            <ul>
                {filteredRes.map((newsItem) => {
                    return (<NewsItem newsItem={newsItem} key={newsItem.id} />)
                })}
            </ul>
        </>
    )
}

export default NewsList;
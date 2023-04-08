function Filter(props) {
    console.log(props, 'filter');
    const { news, setAuthorFilter, setTagFilter } = props;
    const authorsList = [];
    const tagsList = [];

    news.forEach(newsItem => {
        if(!authorsList.includes(newsItem.author)) {
            authorsList.push(newsItem.author);
        }
        newsItem.tags.forEach(tagName => {
            if (!tagsList.includes(tagName)) {
                tagsList.push(tagName);
            }
        });
    });
    console.log(authorsList);
    console.log(tagsList);

    const handleAuthorChange = (event) => {
        console.log(event.target.value);
        setAuthorFilter(event.target.value);
    };

    const handleTagChange = (event) => {
        console.log(event.target.value);
        setTagFilter(event.target.value);
    }
    
    return (
        <>
            <section>
                Select an author:
                <select onChange={handleAuthorChange}>
                    <option value="all">All</option>
                    {authorsList.map(author => {
                        return (<option value={author} key={author}>{author}</option>)
                    })}
                </select>
                </section>
            <br />
            <section>
                Select a tag:
                <select onChange={handleTagChange}>
                    <option value="all">All</option>
                    {tagsList.map(tag => {
                        return (<option value={tag} key={tag}>{tag}</option>)
                    })}
                </select>
            </section>
        </>
    )
}

export default Filter;
function NewsItem(props){
    console.log(props);
    const {id, title, imgUrl, readTime, tags, author}=props.newsItem

    return (
        <li>
            <h2>{title}</h2>
            <img src={imgUrl} alt={title} width ={"400"} height = {"300"}/>
            <section>
                <p>Author{author}</p>
                <p>Read Time {readTime}</p>
            </section>
            <p>Tags: {tags.join(",")}</p>
        </li>
    )
}

export default NewsItem;
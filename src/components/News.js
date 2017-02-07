import React, {PropTypes} from 'react';
import Article from './Article';

const News = (props) => {

    console.warn(props);
    const data = props.data;
    let newsTemplate;

    if (data.length > 0) {
        newsTemplate = data.map((item, index) => <div key={index}>
            <Article data={item}/>
        </div>)
    } else {
        newsTemplate = <p>Unfortunately there is no news</p>
    }

    return (
        <div className="news">
            {newsTemplate}
            <strong className={data.length > 0
                ? ''
                : 'none'}>Total News: {data.length}</strong>
        </div>
    );
}

News.propTypes = {
    data: PropTypes.array.isRequired
}

export default News;

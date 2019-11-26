import React, {useState} from 'react';

//css
import './useHookMap.css'

const UseHookMap = () => {

    const data = [
        {
            id: 1,
            title: 'Novel Title 001',
            content: 'Content 001',
            author: 'Author 001'
        },
        {
            id: 2,
            title: 'Novel Title 002',
            content: 'Content 002',
            author: 'Author 002'
        }
    ];
    const [list, setList] = useState([...data]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleContent = (id) => {
        console.log('id',id)
        const filter = list.filter( (item) => item.id === id);
        console.log('filter',filter);
        const title = filter[0].title;
        const content = filter[0].content;
        const author = filter[0].author;
        setTitle(title); // this.setState({ title: title})
        setContent(content); // 
        setAuthor(author);

    }


    return (
        <div className="sec-box">
        <div className="box-wrapper">
            <h3 className="header-three">Array Map Using Hook</h3>
            <ol className="box-list">
                {
                    list.map( (item, index) => 
                        <li key={index} onClick={ () => handleContent(item.id)}>
                            { item.title }&nbsp;&nbsp;<span className="box-author">{item.author}</span>
                        </li>
                    )
                }
            </ol>
        </div>
        *****************************************************************
        <div className="display-wrapper">Click to Display</div>
            <div className="display-title">Title : <span className="color">{!title ? 'Empty Value' : title}</span></div>
            <div className="display-content">Content: <span className="color">{!content ? 'Empty Value' : content}</span></div>
            <div className="display-author">Author: <span className="color">{!author ? 'Empty Value' : author}</span></div>
        </div>
    )
}

export default UseHookMap;
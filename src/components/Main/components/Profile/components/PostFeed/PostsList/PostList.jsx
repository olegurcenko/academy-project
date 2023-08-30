
export const PostList = ({ ChangeBtnFunc }) => {
    const like = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.294 96.294" xmlSpace="preserve">
        <g>
            <path d="M64.755,14.763c11.324,0,20.537,9.214,20.537,20.538c0,11.024-18.056,30.068-37.148,44.51   C29.066,65.389,11,46.337,11,35.301c0-11.324,9.213-20.538,20.537-20.538c3.836,0,7.572,1.062,10.806,3.07l5.803,3.605l5.804-3.604   C57.184,15.825,60.919,14.763,64.755,14.763 M64.755,3.763c-5.909,0-11.625,1.63-16.609,4.726   c-4.984-3.096-10.699-4.726-16.609-4.726C14.147,3.763,0,17.91,0,35.301c0,22.539,38.227,51.024,45.892,56.507   c0.663,0.473,1.442,0.723,2.255,0.723c0.816,0,1.599-0.252,2.257-0.727c7.664-5.483,45.89-33.981,45.89-56.503   C96.292,17.911,82.145,3.763,64.755,3.763L64.755,3.763z" />
        </g>
    </svg>
    const comment = <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ic_fluent_comment_24_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ic_fluent_comment_24_regular" fill="#212121" fillRule="nonzero"> <path d="M5.25,18 C3.45507456,18 2,16.5449254 2,14.75 L2,6.25 C2,4.45507456 3.45507456,3 5.25,3 L18.75,3 C20.5449254,3 22,4.45507456 22,6.25 L22,14.75 C22,16.5449254 20.5449254,18 18.75,18 L13.0124851,18 L7.99868152,21.7506795 C7.44585139,22.1641649 6.66249789,22.0512036 6.2490125,21.4983735 C6.08735764,21.2822409 6,21.0195912 6,20.7499063 L5.99921427,18 L5.25,18 Z M12.5135149,16.5 L18.75,16.5 C19.7164983,16.5 20.5,15.7164983 20.5,14.75 L20.5,6.25 C20.5,5.28350169 19.7164983,4.5 18.75,4.5 L5.25,4.5 C4.28350169,4.5 3.5,5.28350169 3.5,6.25 L3.5,14.75 C3.5,15.7164983 4.28350169,16.5 5.25,16.5 L7.49878573,16.5 L7.49899997,17.2497857 L7.49985739,20.2505702 L12.5135149,16.5 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
    let posts = [
        {
            key: 1,
            image: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum dolore quam repellat excepturi dolor, fuga autem unde tempore mollitia doloremque laborum, explicabo quas distinctio rem quis! Quisquam, autem provident possimus corporis dolor explicabo architecto officia, harum non ipsum quam!',
            likes: 0,
            komments: [
                { author: 'Johh Krasinsky', text: 'Cool!' }
            ],
        },
        {
            key: 2,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum dolore quam repellat excepturi dolor, fuga autem unde tempore mollitia doloremque laborum, explicabo quas distinctio rem quis! Quisquam, autem provident possimus corporis dolor explicabo architecto officia, harum non ipsum quam!',
            likes: 0,
            komments: [
                { author: 'Johh Krasinsky', text: 'Nice lorem lorem!' }
            ],
        },
        {
            key: 3,
            image: 'https://ih1.redbubble.net/image.4931763839.7959/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolorum dolore quam repellat excepturi dolor, fuga autem unde tempore mollitia doloremque laborum, explicabo quas distinctio rem quis! Quisquam, autem provident possimus corporis dolor explicabo architecto officia, harum non ipsum quam!',
            likes: 0,
            komments: [
                { author: 'Johh Krasinsky', text: 'lorem lorem lorem lorem!' },
                { author: 'Johh Krasinsky', text: 'lorem lorem lorem lorem!' },
                { author: 'Johh Krasinsky', text: 'lorem lorem lorem lorem!' },
            ],
        },
    ]
    let posts_output = []
    for (let post in posts) {
        if (posts[post].image) {
            posts_output.unshift(<li className='post_with_photo'>
                <p>{posts[post].text}</p>
                {/* <img src={posts[post].image} alt="" /> */}
                <div style={{ backgroundImage: 'url(' + posts[post].image + ')' }}></div>
                <ul className='post_actions'>
                    <li style={{ width: 30 + 'px', height: 30 + 'px' }}>{like}</li>
                    <li style={{ width: 30 + 'px', height: 30 + 'px' }}>{comment}</li>
                </ul>
            </li>
            )
        } else {
            posts_output.unshift(<li className='post'>
                <p>{posts[post].text}</p>
                <ul className='post_actions'>
                    <li style={{ width: 30 + 'px', height: 30 + 'px' }}>{like}</li>
                    <li style={{ width: 30 + 'px', height: 30 + 'px' }}>{comment}</li>
                </ul>
            </li>
            )
        }
    }
    return <section className='PostList'>
        <ul className="TitleAndButton_Wrapper">
            <li>
                <p className='PostList_title'>Posts</p>
            </li>
            <li>
                <button className="MoreInfo_Button" onClick={ChangeBtnFunc}>User Info</button>
            </li>
        </ul>
        <ul className='list'>
            {posts_output}
        </ul>
    </section>
}
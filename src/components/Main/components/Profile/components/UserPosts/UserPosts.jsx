import Posts from "./data.json";
import { PostText } from "../PostBlanks/PostText";
import { PostPhoto } from "../PostBlanks/PostPhoto";

export const UserPosts = ({ Assets, Languages, Localization, useLanguage }) => {
    return (
        <section className="Posts">
            <ul className="Posts-list">
                {Posts.map(
                    ({
                        id,
                        image,
                        postTitle,
                        text,
                        likes,
                        username,
                        authorImageUrl,
                    }) => {
                        if (image === null) {
                            return <PostText 
                                key={`${id}${postTitle}`}
                                // id={id}
                                postTitle={postTitle}
                                text={text}
                                likes={likes}
                                username={username}
                                authorImageUrl={authorImageUrl}
                            />
                        } else if (image !== null) {
                            return <PostPhoto 
                                key={`${id}${postTitle}`}
                                // id={id}
                                postTitle={postTitle}
                                image={image}
                                text={text}
                                likes={likes}
                                username={username}
                                authorImageUrl={authorImageUrl}
                            />
                        }
                        // return (
                        //     <li
                        //         className="Posts-list__item-block"
                        //         key={`${id}${postTitle}`}>
                        //         {image ? (
                        //             <img width={500} src={image} alt="" />
                        //         ) : (
                        //             ""
                        //         )}
                        //         <p>
                        //             <b>{postTitle}</b>
                        //         </p>
                        //         <p>{text}</p>
                        //     </li>
                        // );
                    }
                )}
            </ul>
        </section>
    );
};

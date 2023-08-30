import { useState } from "react";
import { ProfileComponents } from "./components/Components";

export const Profile = ({ Assets, Languages, Localization, useLanguage }) => {
    const { Cover, UserInfo, PostFeed, PostList, UserAbout, UserFriends } = ProfileComponents;

    let ChangeBtnFunc = () => {
        return
    }

    var postlistState = 1

    if (window.innerWidth <= 1600) {

        var postlistState = 0

        let displayed = 'postfeed';



        ChangeBtnFunc = () => {


            if (displayed === 'postfeed') {
                // document.getElementById('MoreInfo_Button').innerText = 'Posts';
                document.getElementById('PostFeed').style.display = 'none';
                document.getElementById('PostList').style.marginTop = '-295px';
                displayed = 'postlist';
            }
            else {
                // document.getElementById('MoreInfo_Button').innerText = 'User Info';
                document.getElementById('PostList').style.marginTop = '100vh';
                document.getElementById('PostFeed').style.display = 'flex';
                displayed = 'postfeed';
            }
        }

        // ChangeBtnFunc()

    }

    return (
        // <ul className="MainList">
        //     <li>
        //         <Cover
        //             Assets={Assets}
        //             Languages={Languages}
        //             Localization={Localization}
        //             useLanguage={useLanguage}
        //         />
        //     </li>
        //     <li>
        //         <UserInfo
        //             Assets={Assets}
        //             Languages={Languages}
        //             Localization={Localization}
        //             useLanguage={useLanguage}
        //         />
        //     </li>
        //     <li>
        //         <ul>
        //             <li>
        //                 <PostFeed
        //                     Assets={Assets}
        //                     Languages={Languages}
        //                     Localization={Localization}
        //                     useLanguage={useLanguage}
        //                     UserAbout={UserAbout}
        //                     UserFriends={UserFriends}
        //                 />
        //             </li>
        //             <li>
        //                 <PostList/>
        //             </li>
        //         </ul>
        //     </li>
        // </ul>
        <ul className="MainList">
            <li>
                <Cover
                    Assets={Assets}
                    Languages={Languages}
                    Localization={Localization}
                    useLanguage={useLanguage}
                />
            </li>
            <li>
                <ul>
                    <li>
                        <ul>
                            <li>
                                <UserInfo
                                    Assets={Assets}
                                    Languages={Languages}
                                    Localization={Localization}
                                    useLanguage={useLanguage}
                                    ChangeBtnFunc={ChangeBtnFunc}
                                />
                            </li>
                            <li id='PostFeed'>
                                <PostFeed
                                    Assets={Assets}
                                    Languages={Languages}
                                    Localization={Localization}
                                    useLanguage={useLanguage}
                                    UserAbout={UserAbout}
                                    UserFriends={UserFriends}
                                />
                            </li>
                        </ul>
                    </li>
                    <li id='PostList'>
                        <PostList  style={{opacity: {postlistState}}}
                            ChangeBtnFunc={ChangeBtnFunc}
                        />
                    </li>
                </ul>
            </li>
        </ul>
    );
};

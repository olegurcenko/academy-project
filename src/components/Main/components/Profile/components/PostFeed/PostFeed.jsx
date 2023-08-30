import React from "react";
import { useState } from "react";


export const PostFeed = ({ Assets, Languages, Localization, useLanguage, UserAbout, UserFriends }) => {
    let [block, setBlock] = useState(<UserAbout />);
    let [btnTitle, setBtnTitle] = useState('Friends');
    // todo rename in info_about
    return <section className='PostFeed'>
        <button onClick={() => {
            if (btnTitle == 'Friends') {
                setBlock(<UserFriends/>)
                setBtnTitle('Work')
            }
            else if (btnTitle == 'Work'){
                setBlock(<UserAbout/>)
                setBtnTitle('Friends')
            }
            return
        }
        } className='btnChange'>{btnTitle}</button>
        {/* <UserAbout
            Assets={Assets}
            Languages={Languages}
            Localization={Localization}
            useLanguage={useLanguage}
        /> */}
        {block}
    </section>;
};

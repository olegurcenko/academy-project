export const UserFriends = ({ Assets, Languages, Localization, useLanguage }) => {
    let friends = {
        'Bred Pitt': null,
        'Jennifer Lawrence': null,
        'Leonardo Kavano': 'https://img.freepik.com/premium-photo/beard-man-with-blonde-hair-eyeglasses-smiling-camera-blue-studio-wall_129180-1943.jpg?w=360',
        'Ann Archer': null,
        'Cristine Kavano': null,
        'Robinson Murphy': 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    }
    let friends_output = []
    if (friends) {
        for (let friend_name in friends) {
            if (!friends[friend_name]) {
                friends_output.push(
                    <li key={friend_name} className='friends_list_elem'>
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' alt={friends[friend_name]} />
                        <p>{friend_name}</p>
                    </li>
                )
            } else {
                friends_output.push(
                    <li key={friend_name} className='friends_list_elem'>
                        <img src={friends[friend_name]} alt={friend_name} />
                        <p>{friend_name}</p>
                    </li>
                )
            }

        }
    }
    return <section className='UserAbout'>
        <li className='friends_list_title'><p>Friends</p></li>
        <ul className='friends_list'>
            {friends_output}
        </ul>
    </section>
}
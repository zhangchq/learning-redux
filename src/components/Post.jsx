import React from 'react';

import Timestamp from "./Timestamp";
import User from "./User";

const Post = ({ user, title, text, category, created, updated }) => (
    <span>
        <b>{title}</b>: {text}
        <i>{' ~ ' }<User {...user} /></i><br />
        (Created at: <Timestamp data={created} />, Updated at: <Timestamp data={updated} />)
    </span>
);

export default Post;

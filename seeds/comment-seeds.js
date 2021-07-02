const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Lorem ipsum dolor sit amet. Vestibulum nec suscipit nunc.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus arcu ut porta mattis. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Lorem. Sed cursus.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Lorem ipsum dolor sit amet.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Lorem ipsum dolor sit amet. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra. Morbi malesuada et dui sit amet viverra. Aenean lobortis. Morbi finibus in eros eget faucibus. Maecenas dolor arcu, vehicula fringilla.",
        user_id: 5,
        post_id: 1
    },
    {
        comment_text: "Lorem ipsum dolor sit amet, consectetur.",
        user_id: 4,
        post_id: 1
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
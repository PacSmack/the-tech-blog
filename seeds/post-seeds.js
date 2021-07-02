const { Post } = require('../models');

const postData = [
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus arcu ut porta mattis. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra. Morbi malesuada et dui sit amet viverra. Aenean lobortis lorem non purus laoreet, a dictum magna cursus. Nullam malesuada gravida placerat. Morbi finibus in eros eget faucibus. Maecenas dolor arcu, vehicula fringilla metus eu, tristique laoreet mauris. Ut consequat magna ligula, non tempor enim finibus vitae. Donec ex dolor, mollis volutpat diam in, pellentesque venenatis nunc. Nam at justo tempor, fermentum elit in, molestie augue. Phasellus dui lorem, dapibus vel nibh eu, egestas mollis lacus. Vestibulum nec suscipit nunc.",
        user_id: 1
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus arcu ut porta mattis. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra. Morbi malesuada et dui sit amet viverra. Aenean lobortis lorem non purus laoreet, a dictum magna cursus. Nullam malesuada gravida placerat. Morbi finibus in eros eget faucibus. Maecenas dolor arcu, vehicula fringilla metus eu, tristique laoreet mauris. Ut consequat magna ligula, non tempor enim finibus vitae. Donec ex dolor, mollis volutpat diam in, pellentesque venenatis nunc. Nam at justo tempor, fermentum elit in, molestie augue. Phasellus dui lorem, dapibus vel nibh eu, egestas mollis lacus. Vestibulum nec suscipit nunc.",
        user_id: 1
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem. Sed cursus arcu ut porta mattis. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra. Morbi malesuada et dui sit amet viverra. Aenean lobortis lorem non purus laoreet, a dictum magna cursus. Nullam malesuada gravida placerat. Morbi finibus in eros eget faucibus. Maecenas dolor arcu, vehicula fringilla metus eu, tristique laoreet mauris. Ut consequat magna ligula, non tempor enim finibus vitae. Donec ex dolor, mollis volutpat diam in, pellentesque venenatis nunc. Nam at justo tempor, fermentum elit in, molestie augue. Phasellus dui lorem, dapibus vel nibh eu, egestas mollis lacus. Vestibulum nec suscipit nunc.",
        user_id: 1
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur porta mattis. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra. Morbi malesuada et dui sit amet viverra. Aenean lobortis lorem non purus laoreet, a dictum magna cursus. Nullam malesuada gravida placerat. Morbi finibus in eros eget faucibus. Maecenas dolor arcu, vehicula fringilla metus eu, tristique laoreet mauris. Ut consequat magna ligula, non tempor enim finibus vitae. Donec ex dolor, mollis volutpat diam in, pellentesque venenatis nunc. Nam at justo tempor, fermentum elit in, molestie augue. Phasellus dui lorem, dapibus vel nibh eu, egestas mollis lacus. Vestibulum nec suscipit nunc.",
        user_id: 2
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra. Morbi malesuada et dui sit amet viverra. Aenean lobortis lorem non purus laoreet, a dictum magna cursus. Nullam malesuada gravida placerat. Morbi finibus in eros eget faucibus. Maecenas dolor arcu, vehicula fringilla metus eu, tristique laoreet mauris. Ut consequat magna ligula, non tempor enim finibus vitae. Donec ex dolor, mollis volutpat diam in, pellentesque venenatis nunc. Nam at justo tempor, fermentum elit in, molestie augue. Phasellus dui lorem, dapibus vel nibh eu, egestas mollis lacus. Vestibulum nec suscipit nunc.",
        user_id: 5
    },
    {
        title: "Lorem Ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus arcu ut porta mattis. Curabitur porta maximus est, vel laoreet lectus pulvinar pharetra. Morbi malesuada et dui sit amet viverra. Aenean lobortis lorem non purus laoreet, a dictum magna cursus. Nullam malesuada gravida placerat. Morbi finibus in eros eget faucibus. Maecenas dolor arcu, vehicula fringilla metus eu, tristique laoreet mauris. Ut consequat magna ligula, non tempor enim finibus vitae. Donec ex dolor, mollis volutpat diam in, pellentesque venenatis nunc. Nam at justo tempor, fermentum elit in, molestie augue. Phasellus dui lorem, dapibus vel nibh eu, egestas mollis lacus. Vestibulum nec suscipit nunc.",
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
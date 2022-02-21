import {v4 as id} from "uuid";

let renderEntireTree = () => {
  console.log(`state has changed`)
}

const state = {
  profilePage: {
    posts: [],
    newPostText: '',
    likes: '',
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: "Мишка",},
      {id: 2, name: "Игорь",},
      {id: 3, name: "Артём",},
      {id: 4, name: "Саша",},
      {id: 5, name: "Андрей",},
    ],
    messages: [
      {id: 1, message: 'Привет!'},
      {id: 2, message: 'Здаров ! как ты?'},
      {id: 3, message: 'Чё делаешь?'},
      {id: 4, message: 'Вот и я всенм пирвет!'},
      {id: 5, message: 'И тебе не хворать =)'},
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: id().split('-').join(''),
    likes: 0,
    message: state.profilePage.newPostText,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

export let updateNewPostText = newTextValue => {
  state.profilePage.newPostText = newTextValue;
  renderEntireTree(state);
};

export default state;

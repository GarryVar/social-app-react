const state = {
  profilePage: {
    posts: [
      { id: 1, likes: 10, message: 'Привет всем фронтендерам!' },
      { id: 2, likes: 2, message: 'react cool' },
      { id: 3, likes: 8, message: 'Переносим данные' }
    ],
  },

  messagesPage: {
    dialogs: [
      { id: 1, name: "Мишка", },
      { id: 2, name: "Игорь", },
      { id: 3, name: "Артём", },
      { id: 4, name: "Саша", },
      { id: 5, name: "Андрей", },
    ],
    messages: [
      { id: 1, message: 'Привет!' },
      { id: 2, message: 'Здаров ! как ты?' },
      { id: 3, message: 'Чё делаешь?' },
      { id: 4, message: 'Вот и я всенм пирвет!' },
      { id: 5, message: 'И тебе не хворать =)' },
    ],
  }
};
export default state;


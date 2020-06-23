import React from "react";

import { Message } from "components";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <Message
      avatar="https://pristor.ru/wp-content/uploads/2018/05/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8-%D0%BB%D1%83%D1%87%D1%88%D0%B0%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-2018-8.jpg"
      text="Салам asfbkjasbfsdjhdasbkfhdskvkhgsdvbfsbhfsjkbfhskasdasdasdasdasdasdadsadsadassdasd"
      date="Sun Apr 21 2020 21:30:07"
      attachments={[{
        filename: 'image.jpg',
        url: 'https://source.unsplash.com/collection/190727/100x100'
      },
      {
        filename: 'image.jpg',
        url: 'https://source.unsplash.com/collection/190727/100x100'
      },{
        filename: 'image.jpg',
        url: 'https://source.unsplash.com/collection/190727/100x100'
      }
      ]}
    />
    <Message
      avatar="https://sm.ign.com/t/ign_de/blogroll/b/boruto-nar/boruto-naruto-the-movie-coming-to-us-theaters_kp62.h720.jpg"
      text="asdasfacz"
      date="Sun Apr 21 2019 21:30:07"
      isMe={true}
      isReaded={true}
    />
  </section>
);

export default Home;

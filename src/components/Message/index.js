import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import ruLocale from "date-fns/locale/ru";
import readedSvg from "assets/img/readed.svg";
import noReadedSvg from "assets/img/noreaded.svg";

import "./Message.scss";

const Message = ({ avatar, user, text, date, isMe, isReaded }) => (
  <div className={classNames("message", { "message--isme": isMe })}>
    <div className="message__content">
      {isMe && isReaded ? (
        <img
          className="message__icon-readed"
          src={readedSvg}
          alt="Readed icon"
        />
      ) : (
        <img
          className="message__icon-readed message__icon-readed--no"
          src={noReadedSvg}
          alt="No readed icon"
        />
      )}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">
          {distanceInWordsToNow(date, { addSuffix: true, locale: ruLocale })}
        </span>
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
};

export default Message;
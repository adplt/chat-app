import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import PropTypes from 'prop-types';
import {noop, result} from 'lodash';

export default class App extends React.Component {

  static propTypes = {
    chat: PropTypes.object,
    session: PropTypes.object,
    loadMessages: PropTypes.func,
    sendMessage: PropTypes.func,
  };

  state = {
    messages: [],
  }

  componentWillMount () {
    const {loadMessages = noop} = this.props;
    loadMessages();
    setTimeout(() => {
      const {chat} = this.props;
      this.setState({
        messages: chat.messages,
      });
    }, 3000);
  }

  onSend = (messages = []) => {
    const {sendMessage} = this.props;
    sendMessage(messages[messages.length - 1].text);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  longPress = () => {
    // console.log('masuk long press');
  }

  render () {
    const {session} = this.props;
    const {messages = []} = this.state;
    const user = result(session, 'user', {});
    return (
      <GiftedChat
        messages={messages}
        onSend={this.onSend}
        user={{_id: result(user, 'uid', '')}}
        onLongPress={this.longPress}
        isAnimated={true}
        forceGetKeyboardHeight={true}
      />
    );
  }
}

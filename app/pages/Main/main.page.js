import React from 'react';
import {StyleSheet} from 'react-native';
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
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'http://jefflau.net/content/images/2016/07/react-logo-1000-transparent.png',
          },
        },
      ],
    });
  }

  onSend = (messages = []) => {
    const {sendMessage} = this.props;
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    sendMessage(messages[messages.length - 1]);
  }

  render () {
    const {session} = this.props;
    const user = result(session, 'user', {});
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{_id: result(user, 'uid', ''), ...user}}
      />
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

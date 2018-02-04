import React from 'react';
import {StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

export default class App extends React.Component {

  state = {
    messages: [],
  }

  componentWillMount () {
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
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  message = (messages) => this.onSend(messages)

  render () {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.message}
        user={{
          _id: 1,
        }}
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

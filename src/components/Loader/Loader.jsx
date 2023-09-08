import { Component } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return <InfinitySpin width="200" color="#4fa94d" />;
  }
}

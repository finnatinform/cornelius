import React from 'react';
import './header.css';

export interface IHeaderProps {}
export interface IHeaderState {}

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  render() {
    return <header>Cornelius</header>;
  }
}

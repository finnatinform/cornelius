import React from 'react';
import './header.css';
import { IoIosMenu } from 'react-icons/io';

export interface IHeaderProps {}
export interface IHeaderState {}

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  render() {
    return (
      <header>
        <div className={'menu header-item'}>
          <IoIosMenu />
        </div>
        <div className={'title header-item'}>Cornelius</div>
      </header>
    );
  }
}

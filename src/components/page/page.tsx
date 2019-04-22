import React from 'react';
import './page.css';
import Header from '../header/header';

export interface IPageProps {
  pageTitle: string;
}
export interface IPageState {}

export default class Page extends React.Component<IPageProps, IPageState> {
  render() {
    return (
      <div className={'page'}>
        {/* Update Header */}
        <head>
          <title>Cornelius | {this.props.pageTitle}</title>
        </head>
        <Header />
        <main className='content'>{this.props.children}</main>
      </div>
    );
  }
}

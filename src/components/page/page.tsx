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
        {/* TODO: https://github.com/zeit/next.js/wiki/Global-styles-and-layouts */}
        <head>
          <meta charSet='utf-8' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Cornelius | {this.props.pageTitle}</title>
          <link
            href='https://fonts.googleapis.com/css?family=Roboto'
            rel='stylesheet'
          />
        </head>
        <Header />
        <main className='content'>{this.props.children}</main>
      </div>
    );
  }
}

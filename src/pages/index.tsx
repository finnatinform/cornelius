import React from 'react';
import './../styles/index.css';
import Page from '../components/page/page';

export interface IIndexPageProps {}
export interface IIndexPageState {}

export default class IndexPage extends React.Component<
  IIndexPageProps,
  IIndexPageState
> {
  render() {
    return <Page pageTitle={'Home'}>Index</Page>;
  }
}

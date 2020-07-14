import React from 'react';
import { NextPage } from 'next';
import { Provider, useSelector } from 'react-redux';
import { wrapper, AppState } from 'store/store';

// export const getStaticProps = wrapper.getStaticProps(
//   ({ store, preview }) => {
//     console.log('2. Page.getStaticProps uses the store to dispatch things');
//     store.dispatch({ type: 'INCREMENT'});
//   }
// );

// you can also use `connect()` instead of hooks
const Page: NextPage = () => {
  // const { counter } = useSelector<AppState, AppState>(state => state);
  return (
    <div>dfghjkl</div>
  );
};

export default Page;

// import Link from 'next/link'
// import Layout from '../components/Layout'

// const IndexPage = () => (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <h1>Hello Next.js 👋</h1>
//     <p>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//     </p>
//   </Layout>
// )

// export default IndexPage

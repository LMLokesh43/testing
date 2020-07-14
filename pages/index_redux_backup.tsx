import React from 'react'

import { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { RootState } from 'store/reducers'
import { makeStyles} from "@material-ui/core/styles"

import Header from "components/Header/Header";
import Counter from "components/Counter"

import indexPageStyles from "assets/jss/pages/indexPageStyles"

const useStyles = makeStyles(indexPageStyles)


const Index: NextPage = () => {
  const classes = useStyles();
  const token = useSelector<RootState, string>(s => s.auth.token)

  return <div >{token ? "authorized" : "un-authorized"} <Counter /></div>
}

export default Index
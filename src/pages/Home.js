import React, { Component } from 'react'
import '../index.css'
import Feature from '../components/Feature'
import Bestsaler from '../components/Bestsaler'
import Section from '../components/Section'

export default class Home extends Component {
  render() {
    return (
      <>
        <section>
          <Section />
          <Bestsaler />
          <Feature />
        </section>
      </>
    )
  }
}

import React, { Component } from 'react';
import Logo from './Logo';

import Divider from './Divider';
import AddYourLogo from './AddYourLogo';

import {ORG_TYPES} from '../constants/organization-types.js';
import {ORGANIZATIONS} from '../constants/organizations.js';

const FILTER_BREAKPOINT = 450;
const DEFAULT_TAB = 'all';

class Community extends Component {
  state = {
    filterTab: DEFAULT_TAB,
    organizations: ORGANIZATIONS,
    useInlineFilters: true,
  }

  componentWillMount() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  createFilterClickHandler = type => () => {
    this.setState({
      filterTab: type,
      organizations: ORGANIZATIONS.filter(org => type === DEFAULT_TAB || type === org.type)
    });
  }

  // Converts inline filter buttons to standalone buttons at small viewport widths
  onWindowResize = () => {
    const inlineFilters = window.innerWidth > FILTER_BREAKPOINT;
    if (inlineFilters !== this.state.useInlineFilters) {
      this.setState({
        useInlineFilters: inlineFilters
      });
    }
  }

  render() {
    const {
      filterTab,
      organizations,
      useInlineFilters,
    } = this.state;

    return (

      <section className="section" id="community">

        <div className="container">
          <Divider />
          <h3 className="title has-text-centered">Community</h3>

          <div className={`buttons filter-buttons is-centered ${useInlineFilters ? 'has-addons' : ''}`}>
            <span
              className={`button ${filterTab === DEFAULT_TAB ? 'is-primary is-selected' : ''}`}
              onClick={this.createFilterClickHandler(DEFAULT_TAB)}
            >
              All
            </span>

            {Object.entries(ORG_TYPES).map(([key, name]) => (
              <span
                key={key}
                className={`button ${filterTab === name ? 'is-primary is-selected' : ''}`}
                onClick={this.createFilterClickHandler(name)}
              >
                {name}
              </span>
            ))}
          </div>

          <div className="logos">

            {organizations.map(({name, logo, location, website, type}) => {
              const props = {
                key: name,
                src: logo,
                href: website,
                location,
                name,
                type,
              }

              return <Logo {...props} />;
            })}

          </div>
          <AddYourLogo />
        </div>
      </section>
    );
  }
}

export default Community;

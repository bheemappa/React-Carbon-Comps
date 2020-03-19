import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react'

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
}

const LandingPage = () => {
  return (
    <div className='bx--grid bx--grid--full-width landing-page'>
      <div className='bx--row landing-page__banner'></div>
      <div className='bx--row landing-page__r2'>
        <div className='bx--col bx--no-gutter'>
          <Tabs {...props.tabs}>
            <Tab {...props.tab} label='About'>
              <div className='bx--grid bx--grid--no-gutter bx--grid--full-width'>
                <div className='bx--row landing-page__tab-content'>
                  <div className='bx--col-md-4 bx--col-lg-7'>
                    <h2 className='landing-page__p'>
                      About Us: Go's here
                    </h2>
                    {/* <Button>Learn more</Button> */}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label='Contact'>
              <div className='bx--grid bx--grid--no-gutter bx--grid--full-width'>
                <div className='bx--row landing-page__tab-content'>
                  <h2 className='bx--col-lg-16'>
                    Contact Us: Go's here
                  </h2>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
export default LandingPage

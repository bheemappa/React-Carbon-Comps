import React from 'react'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/es/components/UIShell'
//UIShell used for navigation between pages
import Notification20 from '@carbon/icons-react/lib/notification/20'
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20'
// import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20'
import { Link } from 'react-router-dom'
import { ModalWrapper, TextInput } from 'carbon-components-react'

const HeaderTab = () => (
  <Header className='bx--header__menu-trigger'>
    <SkipToContent />
    <HeaderName element={Link} to='/' prefix=''>
      Users Portal
    </HeaderName>
    <HeaderNavigation>
      <HeaderMenuItem element={Link} to='/DashboardPage'>
        DashBoard
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <ModalWrapper
        buttonTriggerText='Login'
        className='some-class'
        disabled={false}
        handleSubmit={function noRefCheck () {}}
        hasScrollingContent
        id='input-modal'
        modalHeading='Login'
        // modalLabel='Label'
        onBlur={function noRefCheck () {}}
        onClick={function noRefCheck () {}}
        onFocus={function noRefCheck () {}}
        onKeyDown={function noRefCheck () {}}
        onMouseDown={function noRefCheck () {}}
        onMouseEnter={function noRefCheck () {}}
        onMouseLeave={function noRefCheck () {}}
        onMouseUp={function noRefCheck () {}}
        primaryButtonText='Login'
        renderTriggerButtonIcon={undefined}
        secondaryButtonText='Cancel'
        selectorPrimaryFocus='[data-modal-primary-focus]'
        shouldCloseAfterSubmit
        triggerButtonIconDescription='Provide icon description if icon is used'
        triggerButtonKind='secondary'>
        <TextInput
          disabled={false}
          helperText=''
          id='uname'
          invalid={false}
          invalidText=''
          labelText='User Name:'
          light={false}
          onChange={function noRefCheck () {}}
          onClick={function noRefCheck () {}}
          placeholder='Enter User Name'
          type='text'
        />
        <TextInput
          disabled={false}
          helperText=''
          id='password'
          invalid={false}
          invalidText=''
          labelText='Password:'
          light={false}
          onChange={function noRefCheck () {}}
          onClick={function noRefCheck () {}}
          placeholder='Enter Password'
          type='password'
        />
      </ModalWrapper>
      <HeaderGlobalAction aria-label='Notifications'>
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label='User Avatar'>
        <UserAvatar20 />
      </HeaderGlobalAction>
      {/* <HeaderGlobalAction aria-label='App Switcher'>
        <AppSwitcher20 />
      </HeaderGlobalAction> */}
    </HeaderGlobalBar>
  </Header>
)
export default HeaderTab

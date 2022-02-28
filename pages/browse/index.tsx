import { selectedUserState } from '../../atoms/selectState'
import AppFooter from '../../components/app/AppFooter'
import AppNavigationBar from '../../components/app/AppNavigationBar'
import AppSelectUser from '../../components/app/AppSelectUser'
import AppSeriesBanner from '../../components/app/AppSeriesBanner'
import AppSlidersContainer from '../../components/app/AppSlidersContainer'
import { Fragment, useState } from 'react'
import { useRecoilValue } from 'recoil'
import type { NextPage } from 'next'

const BrowsePage: NextPage = () => {
  const user = useRecoilValue(selectedUserState)

  return (
    <Fragment>
      {!user && <AppSelectUser />}
      {user && (
        <div className='bg-[rgb(20,20,20)] text-white'>
          <AppNavigationBar />
          <AppSeriesBanner />
          <AppSlidersContainer />
          <AppFooter />
        </div>
      )}
    </Fragment>
  )
}

export default BrowsePage

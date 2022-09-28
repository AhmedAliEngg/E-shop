import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NavBarTop from '../components/NavBarTop/NavBarTop'
import NavBarBottom from '../components/NavBarBottom/NavBarBottom'
import SummerDeal from '../components/SummerDeal/SummerDeal'
import SizzlingKitchenHeading from '../components/SizzlingKitchenHeading/SizzlingKitchenHeading'
import SizzKitchenImages from '../components/SizzKitchenImages/SizzKitchenImages'
import CoffeeDiscount from '../components/CoffeeDiscount/CoffeeDiscount'
import NewMailerHeading from '../components/NewMailerHeading/NewMailerHeading'
import NewMailerImages from '../components/NewMailerImages/NewMailerImages'
import SummerSavingHeading from '../components/SummerSavingHeading/SummerSavingHeading'
import SummerSaving from '../components/SummerSaving/SummerSaving'
import SpecialDay from '../components/SpecialDay/SpecialDay'
import GiftDiscount from '../components/GiftDiscount/GiftDiscount'
import GiftCard from '../components/GiftCard/GiftCard'
import ExploreCollection from '../components/ExploreCollection/ExploreCollection'
import HomeItemsHeading from '../components/HomeItemsHeading/HomeItemsHeading'
import HomeItems from '../components/HomeItems/HomeItems'
import ClearanceDiscount from '../components/ClearanceDiscount/ClearanceDiscount'
import SavingPrice from '../components/SavingPrice/SavingPrice'
import HomeGlossary from '../components/HomeGlossary/HomeGlossary'
import CheckLists from '../components/CheckLists/CheckLists'
import WeddingRegistry from '../components/WeddingRegistry/WeddingRegistry'
import DeliveryDurationHeading from '../components/DeliveryDurationHeading/DeliveryDurationHeading'
import DeliveryDuration from '../components/DeliveryDuration/DeliveryDuration'
import TopCategoriesHeading from '../components/TopCategoriesHeading/TopCategoriesHeading'
import TopCategories from '../components/TopCategories/TopCategories'
import CarouselHeading from '../components/CarouselHeading/CarouselHeading'
import CarouselCard from '../components/CarouselCard/CarouselCard'
import ParagraphBedBath from '../components/ParagraphBedBath/ParagraphBedBath'
import Footer from '../components/Footer/Footer'
import WelcomeHome from '../components/WelcomeHome/WelcomeHome'
import CarouselHeadingOne from '../components/CarouselHeadingOne/CarouselHeadingOne'
import ShopFallDeal from '../components/ShopFallDeal/ShopFallDeal'
import HomeItemsTwo from '../components/HomeItemsTwo/HomeItemsTwo'
import HalloweenMagic from '../components/HalloweenMagic/HalloweenMagic'
import StorageHeading from '../components/StorageHeading/StorageHeading'
import HomeUpgradeHeading from '../components/HomeUpgradeHeading/HomeUpgradeHeading'
import LimitTimeOnly from '../components/LimitTimeOnly/LimitTimeOnly'
import EarnPoints from '../components/EarnPoints/EarnPoints'
import WelcomeRewards from '../components/WelcomeRewards/WelcomeRewards'
import CreditCard from '../components/CreditCard/CreditCard'
import ExculsiveInfo from '../components/ExculsiveInfo/ExculsiveInfo'
const Home = () => {
  return (
   <>
    <NavBarTop/>
      <NavBar/>
      <NavBarBottom/>
      <WelcomeHome/>
      <SummerDeal/>
      <HomeItems/>
      <CarouselHeadingOne/>
      <CarouselCard/>
      <WeddingRegistry/>
      <ShopFallDeal/>
      <HomeItemsTwo/>
      <HalloweenMagic/>
      <StorageHeading/>
      <HomeItems/>
      {/*<SizzlingKitchenHeading/>
      <SummerSavingHeading/>
      <SummerSaving/>
      <SpecialDay/>
      <GiftDiscount/> */}
      {/* <GiftCard/>
      <ExploreCollection/>
      <HomeItemsHeading/> */}
      <ClearanceDiscount/>
      <HomeUpgradeHeading/>
      <CoffeeDiscount/>
      <SizzKitchenImages/>
      <NewMailerHeading/>
      <NewMailerImages/>
      <LimitTimeOnly/>
      <EarnPoints/>
      <WelcomeRewards/>
      <ExculsiveInfo/>
      <CreditCard/>
      {/* <SavingPrice/>
      <HomeGlossary/>
      <CheckLists/> */}
      <DeliveryDurationHeading/>
      <DeliveryDuration/>
      <TopCategoriesHeading/>
      <TopCategories/>
      <CarouselHeading/>
      <CarouselCard/>
      <ParagraphBedBath/>
      <Footer/>
   </>
  )
}

export default Home
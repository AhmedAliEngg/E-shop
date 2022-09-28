import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import NavBarTop from '../components/NavBarTop/NavBarTop'
import NavBarBottom from '../components/NavBarBottom/NavBarBottom'
import VerticalCarousel from '../components/ProductionInfo/VerticalCarousel/VerticalCarousel'
import NavBarDetail from '../components/ProductionInfo/NavBarDetail/NavBarDetail'
import AboutProduct from '../components/ProductionInfo/AboutProduct/AboutProduct'
import ItemFrequentlyHeading from '../components/ProductionInfo/ItemFrequentlyHeading/ItemFrequentlyHeading'
import ItemFrequently from '../components/ProductionInfo/ItemFrequently/ItemFrequently'
import Rated4Stars from '../components/ProductionInfo/Rated4Stars/Rated4Stars'
import LoveProduct from '../components/ProductionInfo/LoveProduct/LoveProduct'
import LikeProducts from '../components/ProductionInfo/LikeProducts/LikeProducts'
import RecentlyView from '../components/ProductionInfo/RecentlyView/RecentlyView'
import ShippingReturns from '../components/ProductionInfo/ShippingReturns/ShippingReturns'
import PriceMatch from '../components/ProductionInfo/PriceMatch/PriceMatch'
import QuestionAnswer from '../components/ProductionInfo/QuestionAnswer/QuestionAnswer'
import RatingReview from '../components/ProductionInfo/RatingReview/RatingReview'
import GalleryImage from '../components/ProductionInfo/GalleryImage/GalleryImage'
import PositiveCriticalReviewHeading from '../components/ProductionInfo/PositiveCriticalReviewHeading/PositiveCriticalReviewHeading'
import CustomerReview from '../components/ProductionInfo/CustomerReview/CustomerReview'
import ConsistentTaste from '../components/ProductionInfo/ConsistentTaste/ConsistentTaste'
import Footer from '../components/Footer/Footer'
const ProductInfo = () => {
    return (
        <>
            <NavBarTop />
            <NavBar />
            <NavBarBottom />
            <VerticalCarousel/>
            <NavBarDetail/>
            <AboutProduct/>
            <ItemFrequentlyHeading/>
            <ItemFrequently/>
            <Rated4Stars/>
            <LoveProduct/>
            <LikeProducts/>
            <RecentlyView/>
            <ShippingReturns/>
            <PriceMatch/>
            <QuestionAnswer/>
            <RatingReview/>
            <GalleryImage/>
            <PositiveCriticalReviewHeading/>
            <CustomerReview/>
            <ConsistentTaste/>
            <ConsistentTaste/>
            <ConsistentTaste/>
            <ConsistentTaste/>
            <ConsistentTaste/>
            <ConsistentTaste/>
            <ConsistentTaste/>
            <ConsistentTaste/>
            <Footer/>
        </>
    )
}

export default ProductInfo
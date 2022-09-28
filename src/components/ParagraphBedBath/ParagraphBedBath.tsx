import { Box, Container, Link, styled, Typography } from '@mui/material'
import React from 'react'
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
    display: " flex",
  //flexDirection: "column",
  justifyContent:'center',
  alignItems: "center",
  padding: "1px 0",
  '&.MuiContainer-root': {
      paddingLeft: 0,
      paddingRight: 0,
  },

})
const StyledBoxTwo = styled(Box)({
    textAlign:"justify",
})
const ParagraphBedBath: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledBoxTwo>
                    <Typography variant='body2'>
                        True to its name, Bed Bath &amp; Beyond® is committed to being the destination for home goods, offering a wide array of top-quality items in bedding, bath, home décor, furniture, beauty &amp; fitness, luggage, and more. Whether your aesthetic is traditional, modern, boho, rustic, farmhouse, Hollywood glam, or transitional, you'll find an impressive assortment to choose from in a wide range of unique textures, colors, and materials.
                    </Typography>
                    <Typography variant='body2'>
                        Whether you’re looking to finally pick up the household item you’ve been eyeing all year or want to make your house a little homier by making over a space, Bed Bath &amp; Beyond serves as the perfect one-stop-shop for the best bedding, kitchen, and home décor deals. For instance, make your bed even cozier with an array of
                        <Link>
                            snuggly bed sheets
                        </Link>
                        ,
                        <Link>
                            plush comforter sets.
                        </Link>
                        , luxurious duvet covers, etc. Bed Bath & Beyond ensures you’ll have every essential you’ll need to transform your bedroom into a relaxing retreat. Whether you consider yourself a chef or a beginner cook, Bed Bath & Beyond helps customize your kitchen to meet your culinary needs. From
                        <Link>
                            small appliances
                        </Link>
                        like
                        <Link>
                            air fryers
                        </Link>
                        and
                        <Link>
                            blenders
                        </Link>
                        to kitchen gadgets like can openers and zesters, you can make your daily tasks in the kitchen simpler. Speaking of making things simpler, don’t forget to add little décor touches to your home like wall art, unique lighting, or ornate
                        to make your space suit your style. (Pro tip: don’t forget to pick up a stick, robotic, or upright
                    </Typography>
                    <Typography variant='body2'>
                        Whether you're an incoming freshman or upperclassman, be prepared for a new school year with the Bed Bath & Beyond's Back to College essentials. From college necessities like
                        <Link>
                            twin XL sheets
                        </Link>
                        ,
                        <Link>
                            storage solutions
                        </Link>
                        ,and
                        <Link>
                            dorm décor
                        </Link>
                        , Bed Bath & Beyond is your one-stop shop when it comes to preparing for college life. With helpful online tools like Pack & Hold®, College Savings Pass, 3D College Room Designers, and interactive college checklists, you can easily make your dorm room or apartment the perfect home away from home. Also, don't forget to create a
                        <Link>
                            college registry
                        </Link>
                        and add all of your college must-haves.
                    </Typography>
                    <Typography variant='body2'>
                        Bed Bath & Beyond serves as a one-stop shop to create a custom
                        <Link>
                            wedding registry
                        </Link>
                        with convenience and ease. With a huge selection of must-have household items like bedding, cookware, electronics, and more from top brands, Bed Bath & Beyond is here to make registering for your wedding the least of your worries by guiding you through the process step by step. For instance, features like interactive registry checklists, helpful online tools, and unique perks make creating a wedding registry super simple. Plus, with registry favorites and household essentials across all categories, look to Bed Bath & Beyond as the top destination for shopping.
                    </Typography>
                    <Typography variant='body2'>
                        Shopping is easy in-store with Bed Bath & Beyond's coast-to-coast presence and our user-friendly website. You can order online and use our curbside or
                        <Link>
                            Store Pickup
                        </Link>
                        option or our
                        <Link>
                            Same Day Delivery
                        </Link>
                        . Gifting is a snap with options for gift wrapping. And if you want additional perks and benefits, our Beyond+ program is just for you!
                    </Typography>
                </StyledBoxTwo>
            </StyledContainer>
        </StyledBox>
    )
}

export default ParagraphBedBath
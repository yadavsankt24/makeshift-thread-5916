import React from "react";
import styled from "styled-components";
import ReactSlick from "../Product/ReactSlick";

const Product = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <ImgContainer>
            <ReactSlick />
          </ImgContainer>

          <InfoContainer>
            <Title>Seamless Performance T-Shirt</Title>
            <Price>INR 877.90 – INR 2,570.43 (Up to 74% off)</Price>
            <Desc>
              Get active in this sporty, raglan-sleeve T-shirt that takes you
              seamlessly from gym to street.
            </Desc>

            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="gray" />
                <FilterColor color="#787878" />
                <FilterColor color="black" />
              </Filter>

              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>Small</FilterSizeOption>
                  <FilterSizeOption>Medium</FilterSizeOption>
                  <FilterSizeOption>Large</FilterSizeOption>
                  <FilterSizeOption>x-large</FilterSizeOption>
                  <FilterSizeOption>xx-large</FilterSizeOption>
                </FilterSize>
              </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                    <FilterTitle>Qty</FilterTitle>
                        <RemoveButton>-</RemoveButton>
                        <Amount>1</Amount>
                        <AddButton>+</AddButton>
                    </AmountContainer>
                   
                </AddContainer>
                <Button>Add To Bag</Button>






          </InfoContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

// feedback: fp02_094 -  keep the styles out of component
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

// const Image = styled.img``;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: bold;
  text-align: left;
  font-size: 25px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: left;
`;

const Price = styled.h1`
  font-weight: 50;
  text-align: left;
  font-size: 15px;
  color: red;
`;

const FilterContainer = styled.div`
    width : 60%;
    margin : 30px 0px;
    display : flex;
    justify-content : space-between
`;

const Filter = styled.div`
display : flex;
align-item : center;
`;


const FilterTitle = styled.span`
    font-size : 20px
    font-weight: 200;
`;


const FilterColor = styled.div`

    width : 20px;
    height : 20px;
    border-radius : 50%;
    background-color : ${props => props.color};
    margin : 0px 5px;
    cursor : pointer



`;


const FilterSize = styled.select`
    margin-left : 10px;
    padding : 5px;

`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width:50%;
    display : flex;
    align-items:center;
    justify-content: space-between;

`;

const AmountContainer = styled.div`
    display : flex;
    align-items:center;
    font-weight: 700;

`;

const Amount = styled.span`
    width: 30px;
    height:30px;
    border-radius : 10px;
    border : 2px solid teal;
    display : flex;
    align-items:center;
    justify-content: center;
    margin : 0px 5px;
`

const Button = styled.button`

    padding : 15px;
    border : 1px solid black;
    background-color : black;
    color: white;
    width: 80%;
    cursor : pointer;
    margin-top : 35px;
    height : 50px;

    &:hover{
        background-color : #787878;
    }

`;


const AddButton = styled.button``;

const RemoveButton = styled.button``;



export default Product;

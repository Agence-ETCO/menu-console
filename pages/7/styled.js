import styled from "styled-components";

export const Container = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 200px;
  margin-top: 60px;
  max-width: 1480px;
  margin-left: auto;
  margin-right: auto;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 50px;
  margin-bottom: 100px;
  justify-content: left;

  label {
    margin-left: 30px;
  }
`;

export const Subcontainer1 = styled.div`
  display: flex;
  flex-direction: column;
  //margin-top: 50px;
  margin-bottom: 50px;
  //width: 650px;
  // margin-left: auto;
  // margin-right: auto;
`;

export const TitleContainer = styled.div`
  padding-bottom: 25px;
  border-bottom: 1px solid #000000;
  //margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  margin-left: 30px;
`;

export const CustomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  margin-left: 30px;
`;

export const Title1 = styled.div`
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  color: #f5ba18;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 30px;
`;
export const Title2 = styled.div`
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 34px;
  line-height: 43px;
  color: #f5ba18;
  margin-left: 30px;
  margin-bottom: 30px;
  text-align: center;
  span {
    font-family: "GTWalsheimBold";
    font-weight: 700;
  }
`;
export const Subtitle1 = styled.div`
  font-family: "GTWalsheimRegular";
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #231f20;
  margin-bottom: 30px;
  margin-left: 30px;
`;
export const Title = styled.div`
  display: inline-block;
  font-family: "GTWalsheimBold";
  font-weight: 700;
  font-size: 27px;
  line-height: 25px;
  margin-bottom: 10px;
  //margin-left: 30px;
`;

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  font-family: "GTWalsheimRegular";
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #231f20;
  margin-left: 30px;
  margin-top: -10px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 160px;
  height: 44px;
  background-color: #EBEBEB;
  border: 1px solid #000000;
  border-radius: 9px;
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.05em;
  color: #000000;

  margin-left: 40px;

  span {
    margin-left: 15px;
  }
`;

export const Chip = styled.button`
  width: 32px;
  height: 32px;
  border: 1.2381px solid #BDBDBD;
  font-family: "GTWalsheimRegular";
  font-style: normal;
  font-weight: 700;
  font-size: 13.2063px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #3C3C3C;
  border-radius: 50%;
  background-color: #BDBDBD ;
  margin-left: 15px;
`;


export const KegTitleContainer = styled.div`
  border-bottom: 1px solid #000000;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: baseline;
  margin-left: 30px;
  width: 413px;
  margin-bottom: 75px;
`;

export const KegTitle = styled.div`
font-family: 'GTWalsheimRegular';
font-style: normal;
font-weight: 400;
font-size: 27px;
line-height: 23px;
color: #231F20;
padding-bottom: 40px;
margin-top: 40px;
`;


const Empty = () => {};
export default Empty;

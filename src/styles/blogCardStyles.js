import styled from "styled-components";
import {palette} from "../utils";

export const BlogCardWrapper = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  min-height: 400px;
  border-radius: 10px;
  width: 100%;
  transition: 300ms ease-out;
  img {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  }
  &:hover{
  transform: scale(1.05);
  border: 1px solid ${palette.radical};
  }
`;

export const BlogCardTextArea = styled.div`
  padding: 0 20px 30px;
`;

export const Tag = styled.small`
  padding: 5px 10px;
  font-weight: 800;
  border-radius: 500px;
  display: inline-block;
  color: ${props => props.theme.primaryTextColor};
  text-transform: capitalize;
  margin: 0 10px 20px 0;
  border: 1px solid ${palette.radical};
  background-color: ${props => props.active ? palette.radical : "transparent"};
`;

export const BlogTitle = styled.p`
  font-weight: 900;
  font-family: Chivo, sans-serif;
  font-size: 1.3rem;
  line-height: 150%;
`;

export const Rule = styled.div`
  background-color: ${props => props.theme.secondaryTextColor};
  height: 1px;
  width: 100%;
  margin: 30px 0;
`;

export const Date = styled.small`
    color: ${props => props.theme.secondaryTextColor};
`;


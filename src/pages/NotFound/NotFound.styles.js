import styled, {keyframes} from 'styled-components';
import {Link} from "react-router-dom";

const fade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


export const RedirectButton = styled(Link)`
   font-family: ${({theme}) => theme.fontSecondary.family};
   font-size: ${({theme}) => theme.fontPrimary.size.md};
   background-color: white;
   border: 1px solid ${({theme}) => theme.colors.primary};
   padding: 5px;
   letter-spacing: 1px;
   border-left: 3px solid ${({theme}) => theme.colors.primary};
   cursor: pointer;
   background-image: linear-gradient(#DC143C25, #DC143C25);
   background-repeat: no-repeat;
   background-size: 0% 100%;
   transition: all 1s ease-in-out; 
   border-radius: 2px;
   color: black;
   opacity: 0;
   animation: ${fade} 3s ease-in-out forwards;
    
   &:hover {
       background-size: 100% 100%;
       background-color: #DC143C;
       color: white;
   }
`;

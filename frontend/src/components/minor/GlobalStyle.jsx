import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
    }

    .login-container{
        background: ${({theme}) => theme.foreground2};
    }

    .register-popup-box{
        background: ${({theme}) => theme.foreground2};
        color: ${({theme}) => theme.text};
    }

    .navbar{
        background-color: ${({theme}) => theme.body};
    }

    .navbar-mobile-container, .navbar-mobile{
        background: ${({theme}) => theme.foreground2};
    }

    .dropdown-tutorial{
        background: ${({theme}) => theme.foreground2};
    }

    .cta div{
        background: ${({theme}) => theme.foreground2};
    }

    .course-box{
        background: ${({theme}) => theme.foreground};
    }

    .course-box p{
        color: ${({theme}) => theme.text};
    }

    .logout{
        background: ${({theme}) => theme.foreground};
    }

    .cta p{
        background: ${({theme}) => theme.foreground2};
    }

    .plan-box{
        background: ${({theme}) => theme.foreground2};
    }

    .payment-container{
        background: ${({theme}) => theme.foreground2};
    }

    .payment-confirm-box{
        background: ${({theme}) => theme.foreground2};
    }

    .subscribe{
        color: ${({theme}) => theme.text2};
    }

    .roadmap-box p{
        background: ${({theme}) => theme.foreground2};
    }

    .roadmap-header, .internet-header{
        background: ${({theme}) => theme.foreground3};
    }

    #sidebarmobile{
        background-color: ${({theme}) => theme.foreground};
    }

    .tutorial-box, .tutorial-paid-box, .challenge-box, .certificate-box div{
        background: ${({theme}) => theme.foreground2};
    }

    .accordion_internet{
        background-color: ${({theme}) => theme.foreground6};
    } 

    .accordion__button:hover{
        background-color: ${({theme}) => theme.hoverforeground};
    }
    .accordion__content{
        background-color: ${({theme}) => theme.foreground7};
    }

    /* 
    
    ADMIN
    
    */

    .sidebar, .table-request-class{
        background-color: ${({theme}) => theme.foreground9};
    }
`;

export const lightTheme={
    body: '#eaeefc',
    text: '#3a3a3a',
    text2: '#3a3a3a',
    foreground: '#f2f4fb',
    foreground2: '#f2f4fb',
    foreground3: '#3b72ff',
    foreground4: '#3b72ff',
    foreground5: '#abc2fc',
    foreground6: '#eaeefc',
    foreground7: 'rgb(219, 234, 254)',
    hoverforeground: 'rgb(219, 234, 254)',
    foreground9: '#fff'
}

export const darkTheme={
    body: '#0c131b',
    text: '#e4fbff',
    text2: '#3a3a3a',
    foreground: '#0c131b',
    foreground2: '#222948',
    foreground3: '#222948',
    foreground4: '#ffffff',
    foreground5: '#222948',
    foreground6: '#222948',
    foreground7: '#3b72ff',
    hoverforeground: '#3b72ff',
    foreground9: '#222948'
}
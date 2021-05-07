import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body,
    .navbar{
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.primarytext};
    }

    .login-container,
    .login-container input,
    .logout,
    .register-popup-box,
    .navbar-mobile-container, .navbar-mobile,
    .course-box,
    #sidebarmobile,
    .reg-bootcamp-box input,
    .reg-bootcamp-box select,
    .reg-bootcamp-box textarea
    {
        background: ${({theme}) => theme.foreground};
    }

    .dropdown-tutorial,
    .cta div,
    .plan-box,
    .payment-container,
    .payment-confirm-box,
    .roadmap-header, 
    .tutorial-box, 
    .tutorial-paid-box, 
    .challenge-box, 
    .certificate-box div,
    .comment-box textarea,
    .news-box{
        background: ${({theme}) => theme.foreground2};
    }

    .register-popup-box,
    .course-box p,
    .comment-box textarea{
        color: ${({theme}) => theme.primarytext};
    }

    /* 
    
    BOOTCAMP 
    
    */

    .bootcamp-navbar{
        background-color: ${({theme}) => theme.foreground2};
    }

    .req-box{
        background-color: ${({theme}) => theme.foreground6};
    }

    .bootcamp-package{
        background-color: ${({theme}) => theme.foreground6};
    }
`;

export const lightTheme={
    background: '#eff3fc',
    primarytext: '#3a3a3a',
    foreground: '#eff3fc',
    foreground2: '#fff'
}

export const darkTheme={
    background: '#16141f',
    primarytext: '#fff',
    foreground: '#1f1d28',
    foreground2: '#1f1d28'
}
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body:not(.certification),
    .navbar{
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.primarytext};
    }
    .login-box,
    .login-container input,
    .logout,
    .register-box,
    .register-box input,
    .register-box select,
    .register-popup-box,
    .navbar-mobile-container, .navbar-mobile,
    .course-box,
    #sidebarmobile
    {
        background: ${({theme}) => theme.foreground};
        color: ${({theme}) => theme.primarytext};
    }

    .navbar-mobile,
    .navbar-mobile-dropdown,
    .sidebar-mobile,
    .sidebar-mobile-dropdown,
    .dropdown-tutorial,
    .cta div,
    .plan-box,
    .payment-container,
    .payment-confirm-box,
    .roadmap-box div, 
    .tutorial-paid-box, 
    .tutorial-box,
    .challenge-box, 
    .certificate-box div,
    .comment-box textarea,
    .news-box,
    .comment-container textarea,
    .comment-box,
    .sidebar,
    .table-request-class,
    .table-request-class select,
    .jobform,
    .courseForm{
        background: ${({theme}) => theme.foreground2};
    }
    
    .sidebar,
    .table-request-class,
    .jobform,
    .courseForm{
        border: ${({theme}) => theme.border};
    }

    .register-popup-box,
    .course-box p,
    .comment-container textarea{
        color: ${({theme}) => theme.primarytext};
    }

    .change-text-anim{
        color: ${({theme}) => theme.tertiarytext};
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
    secondarytext: '#3a3a3a',
    tertiarytext: '#3a3a3a',
    foreground: '#eff3fc',
    foreground2: '#fff',
    foreground3: '#eff3fc',
    border: '1px solid rgb(209, 213, 219)'
}

export const darkTheme={
    background: '#0b0b18',
    primarytext: '#e2e2e2',
    secondarytext: '#c9c8c8',
    tertiarytext: '#fed049',
    foreground: '#121227',
    foreground2: '#121227',
    foreground3: '#eff3fc',
    border: 'none'
}
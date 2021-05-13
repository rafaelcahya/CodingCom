import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body:not(.certification),
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
    .submit-box input,
    .submit-box select,
    .submit-box textarea,
    .reg-bootcamp-box input,
    .reg-bootcamp-box select,
    .reg-bootcamp-box textarea
    {
        background: ${({theme}) => theme.foreground};
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
    .jobform{
        background: ${({theme}) => theme.foreground2};
    }
    
    .sidebar,
    .table-request-class,
    .jobform{
        border: ${({theme}) => theme.border};
    }

    .register-popup-box,
    .course-box p,
    .comment-container textarea{
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
    foreground2: '#fff',
    foreground3: '#eff3fc',
    border: '1px solid rgb(209, 213, 219)'
}

export const darkTheme={
    background: '#16141f',
    primarytext: '#fff',
    foreground: '#1f1d28',
    foreground2: '#1f1d28',
    foreground3: '#eff3fc',
    border: 'none'
}
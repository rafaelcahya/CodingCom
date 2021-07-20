import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body:not(.certification),
    .navbar{
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.primarytext};
    }

    .login-box,
    .logout,
    .register-box,
    .register-box input,
    .register-box select,
    .register-popup-box,
    .popup-box,
    .change-password-box,
    .reset-password-box,
    .navbar-mobile-container, .navbar-mobile,
    .course-box,
    #sidebarmobile,
    #tutorial-box,
    .class-consultation-card,
    .rating-card,
    .rating-box
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
    .certificate-box div,
    .comment-box textarea,
    .class-card,
    .news-box,
    .comment-container textarea,
    .comment-box,
    .profile-form input,
    .profile-form select,
    .profile-form textarea,
    .separator-purchase-card,
    .separator-project-card,
    .purchase-card,
    .history-project-card,
    .challenge-card,
    .detail-class-card,
    .career-card,
    .filter-job {
        background: ${({theme}) => theme.foreground2};
    }

    .forgot-password input,
    .login-form input,
    .reset-password-box input,
    .register-box input,
    .feedback-box input,
    .feedback-box select,
    .feedback-box textarea,
    .reg-bootcamp-box input,
    .reg-bootcamp-box select,
    .reg-bootcamp-box textarea,
    .submit-box input,
    .submit-box select,
    .submit-box textarea,
    .change-password-box input,
    .textarea{
        background: ${({theme}) => theme.foreground4};
        border: ${({theme}) => theme.border2};
    }

    .login-form input:focus,
    .reset-password-box input:focus,
    .register-box input:focus,
    .reset-password-box input:focus,
    .profile-form input:focus,
    .profile-form select:focus,
    .profile-form textarea:focus,
    .feedback-box input:focus,
    .feedback-box select:focus,
    .feedback-box textarea:focus,
    .reg-bootcamp-box input:focus,
    .reg-bootcamp-box select:focus,
    .reg-bootcamp-box textarea:focus,
    .submit-box input:focus,
    .submit-box select:focus,
    .submit-box textarea:focus,
    .change-password-box input:focus,
    .challenge-box div{
        background: ${({theme}) => theme.foreground3};
    }
    
    .purchase-filter-btn,
    .project-filter-btn,
    .jobCategorybtn{
        background: ${({theme}) => theme.foreground5};
    }
    
    .courseForm,
    .filter-job,
    .career-card,
    .news-box,
    .separator-purchase-card,
    .separator-project-card{
        border: ${({theme}) => theme.border};
    }

    .purchase-card,
    .history-project-card,
    .accordion-title{
        border-bottom: ${({theme}) => theme.border};
    }

    .profile-form input,
    .profile-form select,
    .profile-form textarea,
    .reset-password-box input{
        border: ${({theme}) => theme.border2};
    }

    .about-company{
        border: ${({theme}) => theme.border2};
        background-color: ${({theme}) => theme.foreground2};
    }
    
    .navbar .navbar-content{
        border-bottom: ${({theme}) => theme.border};
    }

    .history-project-card:hover{
        border-radius: 8px;
    }
    
    .purchase-card:hover,
    .table-consultation-class tbody{
        background: ${({theme}) => theme.foreground4};
    }

    .register-popup-box,
    .popup-box,
    .course-box p,
    .comment-container textarea,
    .textarea{
        color: ${({theme}) => theme.primarytext} !important;
    }

    .change-text-anim{
        color: ${({theme}) => theme.tertiarytext};
    }

    .dropdown-tutorial:hover,
    .dropdown-user-quota:hover,
    .dropdown-user-setting p:hover{
        background-color: ${({theme}) => theme.foreground5};
    }

    .bootcamp-navbar,
    .dropdown-tutorial,
    .dropdown-user,
    .dropdown{
        background-color: ${({theme}) => theme.foreground2};
    }

    .border-darkmode{
        background-color: ${({theme}) => theme.foreground5};
    }
    
    .topic-separator,
    .table-consultation-class thead{
        background-color: ${({theme}) => theme.foreground6};
    }
    
    .table-consultation-class thead
    {
        border-bottom: ${({theme}) => theme.border};
    }

    .content-course pre{
        background-color: ${({theme}) => theme.foreground7} !important;

    }
`;

export const lightTheme={
    background: '#fff',
    primarytext: '#3a3a3a',
    secondarytext: '#3a3a3a',
    tertiarytext: '#3a3a3a',
    foreground: '#fff',
    foreground2: '#fff',
    foreground3: '#ecf3fc',
    foreground4: '#fff',
    foreground5: '#ecf3fc',
    foreground6: '#ecf3fc',
    foreground7: 'rgb(239, 241, 245)',
    border: '1px solid #e1e3e7',
    border2: '1.5px solid #e1e8eb'
}

export const darkTheme={
    background: '#0e0d12',
    primarytext: '#e2e2e2',
    secondarytext: '#c9c8c8',
    tertiarytext: '#fed049',
    foreground: '#16171d',
    foreground2: '#16171d',
    foreground3: '#31343d',
    foreground4: '#272931',
    foreground5: '#272931',
    foreground6: '#16171d',
    foreground7: '#16171d',
    border: 'none',
    border2: 'none'
}
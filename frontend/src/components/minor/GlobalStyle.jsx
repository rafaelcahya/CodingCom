import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body:not(.certification),
    .navbar,
    .view-course-admin .approvebar{
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
    .challenge-card,
    .certificate-box div,
    .comment-box textarea,
    .class-card,
    .news-box,
    .comment-container textarea,
    .comment-box,
    .sidebar,
    .table-request-class,
    .table-request-class select,
    .jobform,
    .jobform input,
    .jobform textarea,
    .jobform select,
    .courseForm,
    .courseForm input,
    .courseForm select,
    .projectsub-form,
    .batchForm,
    .batchForm input,
    .bootcamp-schedule-form,
    .bootcamp-schedule-form input,
    .bootcamp-schedule-form select,
    .view-course-admin,
    .edit-projectdetail-form,
    .edit-projectdetail-form input,
    .edit-projectdetail-form textarea,
    .request-class-form,
    .request-class-form input,
    .request-class-form textarea,
    .profile-form input,
    .profile-form select,
    .profile-form textarea,
    .submit-box input,
    .submit-box select,
    .submit-box textarea{
        background: ${({theme}) => theme.foreground2};
    }
    
    .sidebar,
    .table-request-class,
    .jobform,
    .courseForm,
    .projectsub-form,
    .batchForm,
    .bootcamp-schedule-form,
    .view-course-admin,
    .view-course-admin .approvebar,
    .edit-projectdetail-form,
    .request-class-form {
        border: ${({theme}) => theme.border};
    }

    .register-popup-box,
    .course-box p,
    .sidebar .side-navigation-panel .side-navigation-panel-select .side-navigation-panel-select-wrap .side-navigation-panel-select-option,
    .sidebar .side-navigation-panel .side-navigation-panel-select .side-navigation-panel-select-inner .side-navigation-panel-select-inner-wrap .side-navigation-panel-select-inner-option,
    .comment-container textarea{
        color: ${({theme}) => theme.primarytext} !important;
    }

    .change-text-anim{
        color: ${({theme}) => theme.tertiarytext};
    }

    /* 
    
    BOOTCAMP 
    
    */

    .bootcamp-navbar,
    .dropdown-tutorial,
    .dropdown-user,
    .dropdown{
        background-color: ${({theme}) => theme.foreground2};
    }

    .dropdown-tutorial div:hover, .dropdown-user p:hover{
        background-color: ${({theme}) => theme.foreground4};
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
    foreground4: '#f4f7ff',
    border: '1px solid rgb(209, 213, 219)'
}

export const darkTheme={
    background: '#0e0d12',
    primarytext: '#e2e2e2',
    secondarytext: '#c9c8c8',
    tertiarytext: '#fed049',
    foreground: '#16171d',
    foreground2: '#16171d',
    foreground3: '#eff3fc',
    foreground4: '#1a1b20',
    border: 'none'
}
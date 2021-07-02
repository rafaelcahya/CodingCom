import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body:not(.certification),
    .navbar,
    .view-course-admin .approvebar{
        background-color: ${({theme}) => theme.background};
        color: ${({theme}) => theme.primarytext};
    }

    .login-box,
    .logout,
    .register-box,
    .register-box input,
    .register-box select,
    .register-popup-box,
    .change-password-box,
    .reset-password-box,
    .navbar-mobile-container, .navbar-mobile,
    .course-box,
    #sidebarmobile,
    .purchase-filter-btn
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
    .separator-purchase-card,
    .purchase-card {
        background: ${({theme}) => theme.foreground2};
    }

    .login-form input,
    .reset-password-box input,
    .register-box input,
    .feedback-box input,
    .feedback-box select,
    .feedback-box textarea,
    .submit-box input,
    .submit-box select,
    .submit-box textarea,
    .change-password-box input{
        background: ${({theme}) => theme.foreground4};
        border: ${({theme}) => theme.border2};
    }

    .login-form input:focus,
    .reset-password-box input:focus,
    .register-box input:focus,
    .profile-form input:focus,
    .profile-form select:focus,
    .profile-form textarea:focus,
    .feedback-box input:focus,
    .feedback-box select:focus,
    .feedback-box textarea:focus,
    .submit-box input:focus,
    .submit-box select:focus,
    .submit-box textarea:focus,
    .change-password-box input:focus,
    .challenge-box div{
        background: ${({theme}) => theme.foreground3};
    }
    
    .filter-job,
    .career-card{
        background: ${({theme}) => theme.foreground5};
    }
    
    .filter-job button{
        background: ${({theme}) => theme.foreground4};
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
    .request-class-form,
    .filter-job,
    .career-card,
    .separator-purchase-card,
    .purchase-card{
        border: ${({theme}) => theme.border};
    }

    .profile-form input,
    .profile-form select,
    .profile-form textarea{
        border: ${({theme}) => theme.border2};
    }
    
    .navbar .navbar-content{
        border-bottom: ${({theme}) => theme.border};
    }

    .dropdown-user .dropdown-user-setting p:hover,
    .dropdown-user-quota div:hover,
    .dropdown-tutorial div:hover,
    .purchase-filter-btn:hover,
    .purchase-card:hover{
        background: ${({theme}) => theme.foreground4};
        border-radius: 5px;
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

    .dropdown-tutorial div:hover{
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
    background: '#fff',
    primarytext: '#3a3a3a',
    secondarytext: '#3a3a3a',
    tertiarytext: '#3a3a3a',
    foreground: '#fff',
    foreground2: '#fff',
    foreground3: '#ecf3fc',
    foreground4: '#fff',
    border: '1px solid #eef1f7',
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
    border: 'none',
    border2: 'none'
}
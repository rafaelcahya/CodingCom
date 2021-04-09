import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        transition: all .5s linear;
    }

    .login-container{
        background: ${({theme}) => theme.foreground2};
        transition: all .5s linear;
    }

    .tutorials-overview{
        background: ${({theme}) => theme.foreground5};
        color: ${({theme}) => theme.text};
    }

    .navbar{
        background: ${({theme}) => theme.foreground2};
        color: ${({theme}) => theme.text};
    }

    .navbar-mobile-container, .navbar-mobile{
        background: ${({theme}) => theme.foreground2};
    }

    .dropdown-tutorial{
        background: ${({theme}) => theme.foreground2};
    }

    .course-box{
        background: ${({theme}) => theme.foreground};
        transition: all .5s linear;
    }

    .course-box p{
        color: ${({theme}) => theme.text};
    }

    .logout{
        background: ${({theme}) => theme.foreground};
        transition: all .5s linear;
    }

    .cta{
        background: ${({theme}) => theme.foreground2};
        transition: all .5s linear;
    }

    .plan-box{
        background: ${({theme}) => theme.foreground2};
        transition: all .5s linear;
    }

    .payment-container{
        background: ${({theme}) => theme.foreground2};
        transition: all .5s linear;
    }

    .payment-confirm-box{
        background: ${({theme}) => theme.foreground2};
    }

    .subscribe{
        color: ${({theme}) => theme.text2};
    }

    .roadmap-box p{
        background: ${({theme}) => theme.foreground2};
        transition: all .5s linear;
    }

    .roadmap-header{
        background: ${({theme}) => theme.foreground3};
        transition: all .5s linear;
    }

    .tutorial-box, .tutorial-paid-box{
        background: ${({theme}) => theme.foreground2};
        transition: all .2s linear
    }

    .footer-box{
        background: ${({theme}) => theme.foreground3};
        transition: all .5s linear;
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
    foreground5: '#3b72ff'
}

export const darkTheme={
    body: '#0c131b',
    text: '#e4fbff',
    text2: '#3a3a3a',
    foreground: '#0c131b',
    foreground2: '#222948',
    foreground3: '#222948',
    foreground4: '#ffffff',
    foreground5: '#222948'
}
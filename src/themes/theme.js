export const theme = {
    fontPrimary: {
        size: {
            sm: '12px',
            md: '14px',
            lg: '16px',
            xl: '18px',
        },
        family: 'Roboto',
        weight: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    fontSecondary: {
        size: {
            sm: '12px',
            md: '14px',
            lg: '16px',
            xl: '18px',
            titleSmall: '20px',
            title: '24px'
        },
        family: 'Zen',
        weight: {
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    colors: {
        primary: '#DC143C',
        mainGradient: 'linear-gradient(to bottom right, #FFFFFF, #F0F0F0)',
        mainColorGradient: 'linear-gradient(#DC143C, #DC143C)',
        drawerGradient: 'linear-gradient(45deg, #000000 25%, #292929 25%, #292929 50%, #000000 50%, #000000 75%, #292929 75%, #292929 100%)',
    },
    mediaBreakpoints: {
        mobile: '@media all and (max-width: 360px)',
        sm: '@media all and (max-width: 576px)',
        md: '@media all and (max-width: 768px)',
        lg: '@media all and (max-width: 992px)',
        xl: '@media all and (max-width: 1200px)',
    },
}

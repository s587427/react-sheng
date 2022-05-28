module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        // 自定義斷點
        // screens: {
        //     'tablet': '640px',
        //     // => @media (min-width: 640px) { ... }
      
        //     'laptop': '1024px',
        //     // => @media (min-width: 1024px) { ... }
      
        //     'desktop': '1280px',
        //     // => @media (min-width: 1280px) { ... }
        //   },
        extend: {
            //客製化flex-basis
            flexBasis: {
                '1/7' : '14.2857143%'
            }
        },
    },
    plugins: [],
}

//自訂一主題
// module.exports = {
//     theme: {
//       screens: {
//         sm: '480px',
//         md: '768px',
//         lg: '976px',
//         xl: '1440px',
//       },
//       colors: {
//         'blue': '#1fb6ff',
//         'pink': '#ff49db',
//         'orange': '#ff7849',
//         'green': '#13ce66',
//         'gray-dark': '#273444',
//         'gray': '#8492a6',
//         'gray-light': '#d3dce6',
//       },
//       fontFamily: {
//         sans: ['Graphik', 'sans-serif'],
//         serif: ['Merriweather', 'serif'],
//       },
//       extend: {
//         spacing: {
//           '128': '32rem',
//           '144': '36rem',
//         },
//         borderRadius: {
//           '4xl': '2rem',
//         }
//       }
//     }
//   }
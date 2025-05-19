class BeforeAfter {
     constructor(enteryObject) {
 
         const beforeAfterContainer = document.querySelector(enteryObject.id);
         const before = beforeAfterContainer.querySelector('.bal-before');
         const beforeText = beforeAfterContainer.querySelector('.bal-beforePosition');
         const afterText = beforeAfterContainer.querySelector('.bal-afterPosition');
         const handle = beforeAfterContainer.querySelector('.bal-handle');
         var widthChange = 0;
 
         beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
         window.onresize = function () {
             beforeAfterContainer.querySelector('.bal-before-inset').setAttribute("style", "width: " + beforeAfterContainer.offsetWidth + "px;")
         }
         before.setAttribute('style', "width: 50%;");
         handle.setAttribute('style', "left: 50%;");
 
         //touch screen event listener
         beforeAfterContainer.addEventListener("touchstart", (e) => {
 
             beforeAfterContainer.addEventListener("touchmove", (e2) => {
                 let containerWidth = beforeAfterContainer.offsetWidth;
                 let currentPoint = e2.changedTouches[0].clientX;
 
                 let startOfDiv = beforeAfterContainer.offsetLeft;
 
                 let modifiedCurrentPoint = currentPoint - startOfDiv;
 
                 if (modifiedCurrentPoint > 10 && modifiedCurrentPoint < beforeAfterContainer.offsetWidth - 10) {
                     let newWidth = modifiedCurrentPoint * 100 / containerWidth;
 
                     before.setAttribute('style', "width:" + newWidth + "%;");
                     afterText.setAttribute('style', "z-index: 1;");
                     handle.setAttribute('style', "left:" + newWidth + "%;");
                 }
             });
         });
 
         //mouse move event listener
         beforeAfterContainer.addEventListener('mousemove', (e) => {
             let containerWidth = beforeAfterContainer.offsetWidth;
             widthChange = e.offsetX;
             let newWidth = widthChange * 100 / containerWidth;
 
             if (e.offsetX > 10 && e.offsetX < beforeAfterContainer.offsetWidth - 10) {
                 before.setAttribute('style', "width:" + newWidth + "%;");
                 afterText.setAttribute('style', "z-index:" + "1;");
                 handle.setAttribute('style', "left:" + newWidth + "%;");
             }
         })
 
     }
 }

// Initialize carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Theme switcher
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleBtn.querySelector('i');
    const anuLogo = document.querySelector('img[alt="ANU Logo"]');
    const methodFigure = document.querySelector('img[alt="Method Teaser"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            anuLogo.src = './static/images/ANU_dark.png';
            methodFigure.src = './static/images/method_dark.svg';
        }
    }

    function switchTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            anuLogo.src = './static/images/ANU_dark.png';
            methodFigure.src = './static/images/method_dark.svg';
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            anuLogo.src = './static/images/ANU_light.png';
            methodFigure.src = './static/images/method_light.svg';
        }
    }

    themeToggleBtn.addEventListener('click', switchTheme);

    // Initialize the carousel
    var carousel = bulmaCarousel.attach('#results-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        navigation: true,
        navigationKeys: true,
        navigationSwipe: true,
        pagination: true,
        loop: true
    });

    // Initialize the before/after comparisons
    new BeforeAfter({
        id: '#example1'
    });
    new BeforeAfter({
        id: '#example2'
    });
    new BeforeAfter({
        id: '#example4'
    });
    new BeforeAfter({
        id: '#example5'
    });
    // Initialize new examples
    new BeforeAfter({
        id: '#example6'
    });
    new BeforeAfter({
        id: '#example7'
    });
    new BeforeAfter({
        id: '#example8'
    });
    new BeforeAfter({
        id: '#example9'
    });

    // Common chart configuration
    const methods = ['NeuS', 'Splatfacto', 'Zip-NeRF', 'TNSR', 'MS-NeRF', 'Ray Deformation', 'R3F (Ours)', 'Oracle (Ours)'];
    const colors = [
        'rgba(255, 206, 86, 0.8)',   // NeuS
        'rgba(54, 162, 235, 0.8)',   // Splatfacto
        'rgba(255, 99, 132, 0.8)',   // Zip-NeRF
        'rgba(255, 159, 64, 0.8)',   // TNSR
        'rgba(75, 192, 192, 0.8)',   // MS-NeRF
        'rgba(153, 102, 255, 0.8)',  // Ray Deformation
        'rgba(86, 220, 19, 0.8)',    // R3F (Ours)
        'rgba(83, 102, 255, 0.8)'    // Oracle (Ours)
    ];

    const borderColors = colors.map(color => color.replace('0.8', '1'));

    // Common font configuration
    const fontConfig = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 14,
        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#e0e0e0' : '#666'
    };

    // Add trophy to best method
    const addTrophyToBest = (labels, data, higherIsBetter = true) => {
        const bestIndex = higherIsBetter ? 
            data.indexOf(Math.max(...data)) : 
            data.indexOf(Math.min(...data));
        const newLabels = [...labels];
        newLabels[bestIndex] = '🏆 ' + labels[bestIndex];
        return newLabels;
    };

    // Function to get font weight for labels
    const getFontWeight = (label) => {
        return label.includes('(Ours)') ? 'bold' : 'normal';
    };

    // Function to update chart colors based on theme
    function updateChartColors(chart) {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#e0e0e0' : '#666';
        
        chart.options.scales.x.ticks.color = textColor;
        chart.options.scales.y.ticks.color = textColor;
        chart.options.scales.x.title.color = textColor;
        chart.options.plugins.title.color = textColor;
        
        chart.update();
    }

    // PSNR Chart
    const psnrChart = new Chart(document.getElementById('psnrChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: addTrophyToBest(methods, [19.62, 19.53, 26.11, 18.64, 23.64, 23.13, 24.73, 29.34], true),
            datasets: [{
                label: 'PSNR',
                data: [19.62, 19.53, 26.11, 18.64, 23.64, 23.13, 24.73, 29.34],
                backgroundColor: colors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: false,
                    min: 15,
                    max: 30,
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    title: {
                        display: true,
                        text: 'PSNR',
                        font: fontConfig,
                        color: fontConfig.color
                    },
                    ticks: {
                        font: fontConfig,
                        color: fontConfig.color
                    }
                },
                y: {
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    ticks: {
                        font: {
                            ...fontConfig,
                            weight: (context) => getFontWeight(methods[context.index])
                        },
                        color: fontConfig.color
                    }
                }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'PSNR ↑',
                    font: {
                        ...fontConfig,
                        size: 16,
                        weight: 'bold'
                    },
                    color: fontConfig.color
                }
            }
        }
    });

    // Masked PSNR Chart
    const maskedPsnrChart = new Chart(document.getElementById('maskedPsnrChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: addTrophyToBest(methods, [14.64, 14.87, 18.41, 11.14, 16.84, 17.38, 17.20, 21.75], true),
            datasets: [{
                label: 'Masked PSNR',
                data: [14.64, 14.87, 18.41, 11.14, 16.84, 17.38, 17.20, 21.75],
                backgroundColor: colors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: false,
                    min: 10,
                    max: 25,
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    title: {
                        display: true,
                        text: 'Masked PSNR',
                        font: fontConfig,
                        color: fontConfig.color
                    },
                    ticks: {
                        font: fontConfig,
                        color: fontConfig.color
                    }
                },
                y: {
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    ticks: {
                        font: {
                            ...fontConfig,
                            weight: (context) => getFontWeight(methods[context.index])
                        },
                        color: fontConfig.color
                    }
                }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Masked PSNR ↑',
                    font: {
                        ...fontConfig,
                        size: 16,
                        weight: 'bold'
                    },
                    color: fontConfig.color
                }
            }
        }
    });

    // LPIPS Chart (lower is better)
    const lpipsChart = new Chart(document.getElementById('lpipsChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: addTrophyToBest(methods, [0.19, 0.32, 0.11, 0.16, 0.24, 0.27, 0.15, 0.08], false),
            datasets: [{
                label: 'LPIPS',
                data: [0.19, 0.32, 0.11, 0.16, 0.24, 0.27, 0.15, 0.08],
                backgroundColor: colors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 0.3,
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    title: {
                        display: true,
                        text: 'LPIPS',
                        font: fontConfig,
                        color: fontConfig.color
                    },
                    ticks: {
                        font: fontConfig,
                        color: fontConfig.color
                    }
                },
                y: {
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    ticks: {
                        font: {
                            ...fontConfig,
                            weight: (context) => getFontWeight(methods[context.index])
                        },
                        color: fontConfig.color
                    }
                }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'LPIPS ↓',
                    font: {
                        ...fontConfig,
                        size: 16,
                        weight: 'bold'
                    },
                    color: fontConfig.color
                }
            }
        }
    });

    // Distance Map MAE Chart
    const maeChart = new Chart(document.getElementById('maeChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: addTrophyToBest(methods, [1.62, 12.55, 0.20, 1.49, 1.02, 0.61, 0.13, 0.07], false),
            datasets: [{
                label: 'DMAE',
                data: [1.62, 12.55, 0.20, 1.49, 1.02, 0.61, 0.13, 0.07],
                backgroundColor: colors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 5,
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    title: {
                        display: true,
                        text: 'DMAE',
                        font: fontConfig,
                        color: fontConfig.color
                    },
                    ticks: {
                        font: fontConfig,
                        color: fontConfig.color
                    }
                },
                y: {
                    grid: { 
                        display: false,
                        color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#444' : '#ddd'
                    },
                    ticks: {
                        font: {
                            ...fontConfig,
                            weight: (context) => getFontWeight(methods[context.index])
                        },
                        color: fontConfig.color
                    }
                }
            },
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Distance Map MAE ↓',
                    font: {
                        ...fontConfig,
                        size: 16,
                        weight: 'bold'
                    },
                    color: fontConfig.color
                }
            }
        }
    });

    // Update chart colors when theme changes
    themeToggleBtn.addEventListener('click', () => {
        updateChartColors(psnrChart);
        updateChartColors(maskedPsnrChart);
        updateChartColors(lpipsChart);
        updateChartColors(maeChart);
    });
});
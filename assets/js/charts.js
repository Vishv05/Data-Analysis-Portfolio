/* ===========================
   CHARTS.JS - Interactive Data Visualizations
   =========================== */

// ===========================
// CHART INITIALIZATION
// ===========================

let analyticsChart;
let skillChart;

document.addEventListener('DOMContentLoaded', function () {
    // Initialize charts after page load
    setTimeout(() => {
        initializeAnalyticsChart();
        initializeSkillChart();
    }, 500);
});

// ===========================
// ANALYTICS CHART (Sales Trend)
// ===========================

function initializeAnalyticsChart() {
    const ctx = document.getElementById('analyticsChart');
    
    // Don't initialize if element doesn't exist
    if (!ctx) return;
    
    // Destroy existing chart if it exists
    if (analyticsChart) {
        analyticsChart.destroy();
    }
    
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
    
    analyticsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Data Processed (TB)',
                    data: [12, 19, 23, 31, 28, 35, 42, 38, 45, 52, 48, 58],
                    borderColor: '#3b82f6',
                    backgroundColor: gradient,
                    borderWidth: 3,
                    fill: true,
                    pointBackgroundColor: '#3b82f6',
                    pointBorderColor: '#ffffff',
                    pointHoverBackgroundColor: '#22d3ee',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    tension: 0.4,
                    borderCapStyle: 'round'
                },
                {
                    label: 'Queries Optimized',
                    data: [8, 12, 15, 18, 22, 25, 28, 32, 35, 38, 40, 45],
                    borderColor: '#22d3ee',
                    backgroundColor: 'rgba(34, 211, 238, 0.05)',
                    borderWidth: 2,
                    fill: false,
                    pointBackgroundColor: '#22d3ee',
                    pointBorderColor: '#ffffff',
                    pointHoverBackgroundColor: '#3b82f6',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.4,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 13,
                            weight: '500'
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#cbd5e1',
                    borderColor: '#3b82f6',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.2)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    display: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(51, 65, 85, 0.2)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12
                        },
                        callback: function(value) {
                            return value;
                        }
                    }
                }
            }
        }
    });
    
    console.log('📊 Analytics chart initialized!');
}

// ===========================
// SKILLS DISTRIBUTION CHART
// ===========================

function initializeSkillChart() {
    const ctx = document.getElementById('skillChart');
    
    // Don't initialize if element doesn't exist
    if (!ctx) return;
    
    // Destroy existing chart if it exists
    if (skillChart) {
        skillChart.destroy();
    }
    
    skillChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Programming', 'Data Tools', 'Cloud & AI', 'Analytics', 'Visualization'],
            datasets: [
                {
                    data: [90, 85, 88, 87, 83],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(34, 211, 238, 0.8)',
                        'rgba(124, 58, 247, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ],
                    borderColor: [
                        '#3b82f6',
                        '#22d3ee',
                        '#7c3aed',
                        '#10b981',
                        '#f59e0b'
                    ],
                    borderWidth: 2,
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#ffffff'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 13,
                            weight: '500'
                        },
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#cbd5e1',
                    borderColor: '#3b82f6',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
    
    console.log('🎯 Skills chart initialized!');
}

// ===========================
// CHART INTERACTION FUNCTIONS
// ===========================

// Update analytics chart with filtered data
function updateAnalyticsData(timeframe) {
    if (!analyticsChart) return;
    
    let newData;
    let newLabels;
    
    switch(timeframe) {
        case 'quarterly':
            newLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
            newData = [54, 94, 125, 148];
            break;
        case 'halfyearly':
            newLabels = ['H1', 'H2'];
            newData = [148, 296];
            break;
        default:
            newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            newData = [12, 19, 23, 31, 28, 35, 42, 38, 45, 52, 48, 58];
    }
    
    analyticsChart.data.labels = newLabels;
    analyticsChart.data.datasets[0].data = newData;
    analyticsChart.update('active');
}

// ===========================
// RESPONSIVE CHART ADJUSTMENT
// ===========================

window.addEventListener('resize', () => {
    if (analyticsChart) {
        analyticsChart.resize();
    }
    if (skillChart) {
        skillChart.resize();
    }
});

// ===========================
// CHART ANIMATION ON SCROLL
// ===========================

const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            
            if (entry.target.id === 'analyticsChart') {
                initializeAnalyticsChart();
            } else if (entry.target.id === 'skillChart') {
                initializeSkillChart();
            }
        }
    });
}, { threshold: 0.2 });

const charts = document.querySelectorAll('canvas');
charts.forEach(chart => {
    chartObserver.observe(chart);
});

// ===========================
// CHART DATA EXPORT (Example)
// ===========================

function exportChartData(chartType) {
    let data;
    
    if (chartType === 'analytics') {
        data = {
            labels: analyticsChart.data.labels,
            datasets: analyticsChart.data.datasets.map(d => ({
                label: d.label,
                data: d.data
            }))
        };
    } else if (chartType === 'skills') {
        data = {
            labels: skillChart.data.labels,
            data: skillChart.data.datasets[0].data
        };
    }
    
    console.log('📊 Chart Data:', data);
    return data;
}

console.log('📈 Charts module ready!');

<template lang="">
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js/auto';

    export default {

        props: {
            forLabel: String,
            forData: Array
        },

        mounted(){
            const ctx = document.getElementById('myChart');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
                    datasets: [
                    {
                        label: this.forLabel,
                        data: this.forData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(255, 159, 64, 0.5)',
                            'rgba(255, 205, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(201, 203, 207, 0.5)'
                        ],
                        
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    }
                    ]
                },
                options: {
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                    }
                }
            });
        }
    }
</script>

<style lang="">
    
</style>
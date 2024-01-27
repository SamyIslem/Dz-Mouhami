import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Earnings: 4000, year: 2021 },
    { name: 'Feb', Earnings: 3000, year: 2021 },
    { name: 'Mar', Earnings: 2000, year: 2021 },
    { name: 'Apr', Earnings: 2780, year: 2021 },
    { name: 'May', Earnings: 1890, year: 2021 },
    { name: 'Jun', Earnings: 2390, year: 2021 },
    { name: 'Jul', Earnings: 3490, year: 2021 },
    { name: 'Aug', Earnings: 3490, year: 2021 },
    { name: 'Sep', Earnings: 3490, year: 2021 },
    { name: 'Oct', Earnings: 3490, year: 2021 },
    { name: 'Nov', Earnings: 3490, year: 2021 },
    { name: 'Dec', Earnings: 3490, year: 2021 },
    { name: 'Jan', Earnings: 4500, year: 2023 },
    { name: 'Feb', Earnings: 3500, year: 2023 },
    { name: 'Mar', Earnings: 2500, year: 2023 },
    { name: 'Apr', Earnings: 3280, year: 2023 },
    { name: 'May', Earnings: 2390, year: 2023 },
    { name: 'Jun', Earnings: 2890, year: 2023 },
    { name: 'Jul', Earnings: 3990, year: 2023 },
    { name: 'Aug', Earnings: 3990, year: 2023 },
    { name: 'Sep', Earnings: 3990, year: 2023 },
    { name: 'Oct', Earnings: 3990, year: 2023 },
    { name: 'Nov', Earnings: 3990, year: 2023 },
    { name: 'Dec', Earnings: 3990, year: 2023 },
];


    export default class EarningChart extends PureComponent {
        state = {
            selectedYear: 2021, // Default year
        };
        
    
        getYearlyData = () => {
            const { selectedYear } = this.state;
            return data.filter(item => item.year === selectedYear);
        };
        handleYearChange = (year) => {
            this.setState({ selectedYear: year });
        };
    
        render() {
            const yearlyData = this.getYearlyData();
            const { selectedYear } = this.state;
            const years = [2021, 2023]; 
            return (
              <div style={{ width: "100%", height: 300 }}>
                <div className='flex flex-row items-center justify-center gap-8'>
                <div className='flex flex-row items-center justify-center gap-4'>
                {years.map(year => (
                    <button 
                        key={year}
                        className={`border text-lg rounded-sm border-[#8884d8] font-bold py-1 px-3 ${selectedYear === year ? 'text-white bg-[#8884d8]' : 'text-[#8884d8] bg-white'}`} 
                        onClick={() => this.handleYearChange(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>
                </div>
                <ResponsiveContainer>
                  <AreaChart
                    data={yearlyData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Earnings"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            );
        }
    }
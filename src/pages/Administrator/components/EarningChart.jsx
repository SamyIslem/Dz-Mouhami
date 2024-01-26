import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        Earnings: 4000,
    },
    {
        name: 'Feb',
        Earnings: 3000,
    },
    {
        name: 'Mar',
        Earnings: 2000,
    },
    {
        name: 'Apr',
        Earnings: 2780,
    },
    {
        name: 'May',
        Earnings: 1890,
    },
    {
        name: 'Jun',
        Earnings: 2390,
    },
    {
        name: 'Jul',
        Earnings: 3490,
    },
    {
        name: 'Aug',
        Earnings: 3490,
    },
    {
        name: 'Sep',
        Earnings: 3490,
    },
    {
        name: 'Oct',
        Earnings: 3490,
    },
    {
        name: 'Nov',
        Earnings: 3490,
    },
    {
        name: 'Dec',
        Earnings: 3490,
    },
    ];


export default class EarningChart extends PureComponent {


    render() {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
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
                        <Area type="monotone" dataKey="Earnings" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}